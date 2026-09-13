import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * [appReveal] — element görünüme girince `.is-visible` ekler (fade + yukarı kayma).
 * SSR / IntersectionObserver desteklemeyen ortamlarda ya da 1.2 sn içinde tetiklenmezse
 * içerik güvenli şekilde görünür kalır (içeriğin gizli kalması engellenir).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** styles.css içindeki data-reveal-delay kademesi (1–4) */
  @Input() revealDelay?: number;

  /**
   * Varsayılan `.reveal` (fade + kayma) yerine özel bir efekt sınıfı kullan.
   * Örn. `revealAs="svc"` → sadece `.is-visible` toggle'lanır, görünüm CSS'te
   * `.svc` / `.svc.is-visible` üzerinden tanımlanır.
   */
  @Input() revealAs?: string;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;
  private fallback?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    if (this.revealAs) {
      this.renderer.addClass(node, this.revealAs);
    } else {
      this.renderer.addClass(node, 'reveal');
    }

    if (this.revealDelay) {
      const step = Math.min(4, Math.max(1, Math.round(this.revealDelay)));
      this.renderer.setAttribute(node, 'data-reveal-delay', String(step));
    }

    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      this.show();
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.show();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
      );
      this.observer.observe(node);

      // Güvenlik ağı: gözlemci bir şekilde tetiklenmezse içerik gizli kalmasın
      this.fallback = setTimeout(() => this.show(), 1200);
    });
  }

  private show(): void {
    this.renderer.addClass(this.el.nativeElement, 'is-visible');
    this.observer?.disconnect();
    if (this.fallback) clearTimeout(this.fallback);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.fallback) clearTimeout(this.fallback);
  }
}
