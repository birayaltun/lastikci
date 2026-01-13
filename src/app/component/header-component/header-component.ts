import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements AfterViewInit {
  products = [
    { name: 'Burger', price: '₺245', img: '/slide1.jpg' },
    { name: 'Pizza', price: '₺125', img: '/slide2.jpg' },
    { name: 'Tost', price: '₺100', img: '/slide3.jpg' }
  ];

  ngAfterViewInit(): void {
    // Slider başlat
    new Swiper('.swiper', {
      modules: [FreeMode],
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true // mouse ve touch drag
    });
  }

  faSearch = faMagnifyingGlass;

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }




}
