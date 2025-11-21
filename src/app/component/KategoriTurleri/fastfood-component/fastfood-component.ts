import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fastfood-component',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './fastfood-component.html',
  styleUrls: ['./fastfood-component.css'],
})
export class FastfoodComponent implements AfterViewInit {

    selectedProduct: any = null;

  products = [
    {
      title: 'Gurme Burger',
      description: 'Bol çikolatalı, yumuşak ve nemli kek...',
      price: '₺245,00',
      tooltip: '🍔 Gurme Burger özel soslu, 220 gr etli, el yapımı hamburgerdir.',
      image:"/slide1.jpg"
    },
    {
      title: 'Margarita Pizza',
      description: 'Mini kek, renkli kremayla süslenmiş...',
      price: '₺125,00',
      tooltip: '🍕 Margarita Pizza, ince hamurlu ve taze malzemelidir.',
      image:"/slide2.jpg"

    },
    // diğer ürünler...
  ];

openModal(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }


  ngAfterViewInit() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => card.classList.add('show')); // Tüm kartlara aynı anda uygula

    





  }
}
