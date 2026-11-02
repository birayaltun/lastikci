import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE } from '../../shared/site.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  readonly site = SITE;

  ngOnInit(): void {
    this.seo.set({
      title: 'İletişim | Can Oto Lastik Çanakkale',
      description:
        `Can Oto Lastik adres, telefon ve çalışma saatleri. Barbaros Sanayi Sitesi, Çanakkale. Hemen arayın: ${SITE.phoneDisplay}`,
      path: '/iletisim',
    });
  }

  readonly googleMapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.9921777511167!2d26.407791575944692' +
      '!3d40.14245797228703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2' +
      '!1s0x14b1a9730a99a8bb%3A0x85a6af74dc433dfc!2sCAN%20OTO%20LAST%C4%B0K' +
      '!5e0!3m2!1str!2str!4v1764796321165!5m2!1str!2str',
  );
}
