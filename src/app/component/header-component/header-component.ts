import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SITE } from '../../shared/site.data';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  private readonly router = inject(Router);

  readonly site = SITE;

  isMenuOpen = false;
  isScrolled = false;

  constructor() {
    // Rota değişince mobil menüyü kapat
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 8;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.lockBody(this.isMenuOpen);
  }

  closeMenu(): void {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;
    this.lockBody(false);
  }

  private lockedScrollY = 0;

  /**
   * body { overflow: hidden } bazı mobil tarayıcılarda (özellikle iOS Safari)
   * arka planın kaymasını engellemez ve panel sayfanın başına "yapışmış" gibi
   * görünebilir. Bunun yerine body'i mevcut kaydırma konumunda fixed'leyip
   * kapanışta aynı konuma geri dönüyoruz — menü, sayfanın neresinde açılırsa
   * açılsın her zaman gerçek ekranın üstünde görünür.
   */
  private lockBody(locked: boolean): void {
    if (typeof document === 'undefined') return;
    const body = document.body.style;

    if (locked) {
      this.lockedScrollY = window.scrollY;
      body.position = 'fixed';
      body.top = `-${this.lockedScrollY}px`;
      body.left = '0';
      body.right = '0';
      body.width = '100%';
    } else {
      body.position = '';
      body.top = '';
      body.left = '';
      body.right = '';
      body.width = '';
      window.scrollTo(0, this.lockedScrollY);
    }
  }
}
