import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header-component/header-component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // 👈 bunu ekle
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WheelsComponent } from './component/wheels-component/wheels-component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,WheelsComponent,RouterOutlet,RouterModule,FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QRMenu');
}
