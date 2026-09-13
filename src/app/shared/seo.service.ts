import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  /** Sondaki / hariç, örn: "/anasayfa" */
  path: string;
}

const SITE_URL = 'https://canotolastikci.com';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  /** Sayfa title + meta description + canonical + Open Graph URL/title/description günceller */
  set(data: SeoData): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });

    const url = `${SITE_URL}${data.path}`;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Sayfaya bir JSON-LD <script> ekler; aynı id ile çağrılırsa öncekini değiştirir */
  setJsonLd(id: string, data: unknown): void {
    const existing = this.document.getElementById(id);
    if (existing) {
      existing.remove();
    }
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  removeJsonLd(id: string): void {
    this.document.getElementById(id)?.remove();
  }
}
