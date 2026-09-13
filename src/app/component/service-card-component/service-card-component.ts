import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Tekrar kullanılabilir hizmet / avantaj kartı.
 * Anasayfa hizmetleri ve Yol Yardım avantajları bu kartı kullanır.
 */
@Component({
  selector: 'app-service-card-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card-component.html',
  styleUrl: './service-card-component.css',
})
export class ServiceCardComponent {
  /** Font Awesome ikon sınıfı, ör. "fa-solid fa-gears" */
  @Input({ required: true }) icon = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) text = '';

  /** Opsiyonel yönlendirme */
  @Input() link?: string | any[];
  @Input() linkLabel = 'Detay';
}
