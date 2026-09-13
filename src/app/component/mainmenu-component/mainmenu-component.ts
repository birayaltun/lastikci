import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SITE } from '../../shared/site.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaComponent } from '../cta-component/cta-component';
import { FaqComponent } from '../faq-component/faq-component';
import { SeoService } from '../../shared/seo.service';
import { buildLocalBusinessSchema } from '../../shared/local-business.schema';
import { buildFaqSchema } from '../../shared/faq.schema';

const LOCAL_BUSINESS_ID = 'schema-local-business';
const FAQ_ID = 'schema-faq';

@Component({
  selector: 'app-mainmenu-component',
  standalone: true,
  imports: [RevealDirective, CtaComponent, FaqComponent],
  templateUrl: './mainmenu-component.html',
  styleUrls: ['./mainmenu-component.css'],
})
export class MainmenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('bgVideo') bgVideo?: ElementRef<HTMLVideoElement>;

  readonly site = SITE;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set({
      title: 'Çanakkale Lastikçi | Can Oto Lastik',
      description:
        'Çanakkale merkezde lastik değişimi, lastik tamiri, yağ değişimi ve yol yardım. Barbaros Sanayi Sitesi\'nde hizmet veren Can Oto Lastik\'i hemen arayın.',
      path: '/anasayfa',
    });
    this.seo.setJsonLd(LOCAL_BUSINESS_ID, buildLocalBusinessSchema());
    this.seo.setJsonLd(FAQ_ID, buildFaqSchema(SITE.faq));
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd(LOCAL_BUSINESS_ID);
    this.seo.removeJsonLd(FAQ_ID);
  }

  /** Görseli yüklenemeyen hizmetler — ikonlu marka paneline düşer */
  failedImages = new Set<string>();

  onServiceImageError(slug: string): void {
    this.failedImages = new Set(this.failedImages).add(slug);
  }

  /** Hero fotoğrafı yüklenemezse koyu degrade zemin tek başına kalır */
  heroPhotoFailed = false;

  onHeroPhotoError(): void {
    this.heroPhotoFailed = true;
  }

  /** 1 → "01" */
  pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  readonly reasons = [
    {
      icon: 'fa-solid fa-bolt',
      title: 'Hızlı Hizmet',
      text: 'Kısa bekleme, pratik işlem. Zamanınıza değer veriyoruz.',
    },
    {
      icon: 'fa-solid fa-user-gear',
      title: 'Profesyonel Çalışma',
      text: 'İşin başında alanında deneyimli usta, doğru ve güvenli müdahale.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Güvenilir Servis',
      text: 'Şeffaf bilgilendirme, sürpriz ücret yok. Kararı birlikte veririz.',
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: "Çanakkale'de Yerinde",
      text: 'Barbaros Sanayi Sitesi’ndeki servisimizde ve yolda yanınızdayız.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Yol Yardım',
      text: 'Lastiğiniz yolda patladıysa tek telefon yeterli.',
    },
  ];

  ngAfterViewInit(): void {
    const vid = this.bgVideo?.nativeElement;
    if (!vid) return;

    vid.muted = true;

    const tryPlay = () => vid.play().catch(() => {});

    if (vid.readyState >= 2) {
      tryPlay();
    } else {
      vid.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
