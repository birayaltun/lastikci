import { Component, Input } from '@angular/core';
import { SITE, SiteFaq } from '../../shared/site.data';

/**
 * Sık sorulan sorular — accordion.
 * Varsayılan içerik shared/site.data.ts içindeki genel oto servis sorularıdır.
 */
@Component({
  selector: 'app-faq-component',
  standalone: true,
  templateUrl: './faq-component.html',
  styleUrl: './faq-component.css',
})
export class FaqComponent {
  @Input() items: readonly SiteFaq[] = SITE.faq;

  openIndex = -1;

  toggle(i: number): void {
    this.openIndex = this.openIndex === i ? -1 : i;
  }
}
