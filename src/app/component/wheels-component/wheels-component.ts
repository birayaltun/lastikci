import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaComponent } from '../cta-component/cta-component';
import { SeoService } from '../../shared/seo.service';

interface Tyre {
  title: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-wheels-component',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaComponent],
  templateUrl: './wheels-component.html',
  styleUrl: './wheels-component.css',
})
export class WheelsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  private readonly defaultCategory = 'lassa';
  currentCategory = this.defaultCategory;
  products: Tyre[] = [];

  /** Görseli yüklenemeyen ürünler — ikonlu panele düşer */
  failedImages = new Set<string>();

  onImageError(title: string): void {
    this.failedImages = new Set(this.failedImages).add(title);
  }

  readonly brands = [
    { slug: 'lassa', label: 'Lassa' },
    { slug: 'continental', label: 'Continental' },
    { slug: 'laufenn', label: 'Laufenn' },
    { slug: 'matador', label: 'Matador' },
    { slug: 'goodyear', label: 'GoodYear' },
  ];

  readonly categoryTitles: Record<string, string> = {
    lassa: 'Lassa',
    continental: 'Continental',
    laufenn: 'Laufenn',
    matador: 'Matador',
    goodyear: 'GoodYear',
  };
  pageTitle = '';

  private readonly categories: Record<string, Tyre[]> = {
    lassa: [
      { title: 'Snoways 4', img: '/lassasnoways4.png', desc: 'Kış lastiği' },
      { title: 'Revola', img: '/revola.png', desc: 'Yaz lastiği' },
      { title: 'Greenways', img: '/greenways.png', desc: 'Yaz lastiği' },
      { title: 'Iceways 2', img: '/iceways2.png', desc: 'Kış lastiği' },
      { title: 'Multiways 2', img: '/multiways.png', desc: 'Dört mevsim' },
    ],
    continental: [
      { title: 'WinterContact', img: '/wintercontact.png', desc: 'Kış lastiği' },
      { title: 'UltraContact', img: '/ultracontact.png', desc: 'Yaz lastiği' },
      { title: 'EcoContact 6', img: '/ecocontact6.png', desc: 'Yaz lastiği' },
      { title: 'SportContact 7', img: '/sportcontact7.png', desc: 'Performans' },
    ],
    laufenn: [
      { title: 'S Fit EQ', img: '/laufenn-s-fit-eq.jpg', desc: 'Yaz lastiği' },
      { title: 'G Fit EQ', img: '/laufenn-g-fit-eq.jpg', desc: 'Yaz lastiği' },
      { title: 'I Fit+', img: '/laufenn-i-fit-plus.png', desc: 'Kış lastiği' },
      { title: 'G Fit 4S', img: '/laufenn-g-fit-4s.jpg', desc: 'Dört mevsim' },
    ],
    matador: [
      { title: 'MP47 Hectorra 3', img: '/matador-mp47-hectorra-3.webp', desc: 'Yaz lastiği' },
      { title: 'MP92 Sibir Snow', img: '/matador-mp92-sibir-snow.webp', desc: 'Kış lastiği' },
      { title: 'MP62 All Weather Evo', img: '/matador-mp62-all-weather-evo.webp', desc: 'Dört mevsim' },
    ],
    goodyear: [
      { title: 'EfficientGrip Performance', img: '/goodyear-efficientgrip-performance.png', desc: 'Yaz lastiği' },
      { title: 'UltraGrip Performance+', img: '/goodyear-ultragrip-performance-plus.png', desc: 'Kış lastiği' },
      { title: 'Vector 4Seasons', img: '/goodyear-vector-4seasons.png', desc: 'Dört mevsim' },
    ],
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const raw = params.get('categoryName');
      const hasExplicitBrand = !!raw && !!this.categories[raw];
      this.currentCategory = hasExplicitBrand ? raw! : this.defaultCategory;
      this.pageTitle = this.categoryTitles[this.currentCategory] ?? '';
      this.products = this.categories[this.currentCategory] ?? [];

      if (hasExplicitBrand) {
        this.seo.set({
          title: `${this.pageTitle} Lastik Fiyatları | Çanakkale Can Oto Lastik`,
          description: `Çanakkale'de ${this.pageTitle} lastik modelleri ve satışı. Ebat ve fiyat için Can Oto Lastik'i arayın.`,
          path: `/lastikler/${this.currentCategory}`,
        });
      } else {
        this.seo.set({
          title: 'Çanakkale Sıfır Lastik Satışı | Can Oto Lastik',
          description:
            'Çanakkale\'de Lassa, Continental, Laufenn, Matador ve GoodYear sıfır lastik seçenekleri. Aracınıza uygun ebat ve fiyat için bizi arayın.',
          path: '/lastikler',
        });
      }
    });
  }
}
