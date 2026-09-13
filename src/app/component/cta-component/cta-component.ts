import { Component, Input } from '@angular/core';
import { SITE } from '../../shared/site.data';

/**
 * Ziyaretçiyi telefonla iletişime yönlendiren CTA bandı.
 * Anasayfa, Yol Yardım ve İletişim sayfalarında kullanılır.
 */
@Component({
  selector: 'app-cta-component',
  standalone: true,
  templateUrl: './cta-component.html',
  styleUrl: './cta-component.css',
})
export class CtaComponent {
  @Input() kicker = 'Hemen ulaşın';
  @Input() title = 'Aracınız için doğru adres bir telefon uzağınızda';
  @Input() text =
    'Lastik, bakım veya yol yardım — ne olursa olsun bizi arayın, en kısa sürede çözüme kavuşun.';

  readonly site = SITE;
}
