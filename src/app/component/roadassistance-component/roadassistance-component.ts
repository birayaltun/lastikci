import { Component, OnInit } from '@angular/core';
import { SITE } from '../../shared/site.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { ServiceCardComponent } from '../service-card-component/service-card-component';
import { CtaComponent } from '../cta-component/cta-component';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-roadassistance-component',
  standalone: true,
  imports: [RevealDirective, ServiceCardComponent, CtaComponent],
  templateUrl: './roadassistance-component.html',
  styleUrl: './roadassistance-component.css',
})
export class RoadassistanceComponent implements OnInit {
  readonly site = SITE;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set({
      title: 'Çanakkale Yol Yardım | Can Oto Lastik',
      description:
        'Çanakkale içinde lastik arızasında yol yardım. Konumunuzu bildirin, size ulaşalım. Hemen arayın: ' +
        SITE.phoneDisplay,
      path: '/yol-yardim',
    });
  }

  readonly advantages = [
    {
      icon: 'fa-solid fa-tag',
      title: 'Uygun Fiyatlı Hizmet',
      text: 'Yol yardım ve lastik hizmetlerini bütçenizi zorlamadan sunuyoruz. Şeffaf fiyatlandırma, sürpriz ücret yok.',
    },
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Hızlı Şekilde Yanınızdayız',
      text: 'Lastik problemi yaşadığınızda tek telefonla yola çıkıyoruz. En kısa sürede bulunduğunuz konuma ulaşıyoruz.',
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Zamanında Müdahale',
      text: 'Yolda kalmanın ne kadar stresli olduğunu biliyoruz. Planlı ve hızlı müdahale ile sizi yolda bırakmıyoruz.',
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: 'Profesyonel ve Güvenilir',
      text: 'Alanında deneyimli usta güvencesiyle güvenli ve doğru müdahale sağlıyoruz. Aracınız bize emanet.',
    },
  ];

  readonly steps = [
    { no: '1', title: 'Bizi arayın', text: 'Yol yardım hattımızı arayın.' },
    { no: '2', title: 'Konumunuzu paylaşın', text: 'Bulunduğunuz yeri ve aracınızın durumunu iletin.' },
    { no: '3', title: 'Yardıma gelelim', text: 'En kısa sürede konumunuza gelip gerekli müdahaleyi yaparız.' },
  ];
}
