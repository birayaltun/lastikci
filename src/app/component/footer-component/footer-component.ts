import { Component } from '@angular/core';
import { SITE } from '../../shared/site.data';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  readonly site = SITE;
}
