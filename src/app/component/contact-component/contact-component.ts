import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {

  googleMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.9921777511167!2d26.407791575944692!3d40.14245797228703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9730a99a8bb%3A0x85a6af74dc433dfc!2sCAN%20OTO%20LAST%C4%B0K!5e0!3m2!1str!2str!4v1764796321165!5m2!1str!2strhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.3330893243938!2d26.407791575944692!3d40.14245797228703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9730a99a8bb%3A0x85a6af74dc433dfc!2sCAN%20OTO%20LAST%C4%B0K!5e1!3m2!1str!2str!4v1764796828686!5m2!1str!2str';
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
