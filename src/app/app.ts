import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header-component/header-component';
import { CategoriesComponent } from './component/categories-component/categories-component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // 👈 bunu ekle
import { Sandwichescomponent } from './component/KategoriTurleri/sandwiches-component/sandwiches-component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,CategoriesComponent,RouterOutlet,RouterModule,Sandwichescomponent,FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QRMenu');
}
