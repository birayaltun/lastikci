import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header-component/header-component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // 👈 bunu ekle
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WheelsComponent } from './component/wheels-component/wheels-component';
import { RoadassistanceComponent } from './component/roadassistance-component/roadassistance-component';
import { ContactComponent } from './component/contact-component/contact-component';
import { MainmenuComponent } from './component/mainmenu-component/mainmenu-component';
import { FooterComponent } from './component/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,WheelsComponent,RouterOutlet,RouterModule,FontAwesomeModule,RoadassistanceComponent,ContactComponent,MainmenuComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QRMenu');
}
