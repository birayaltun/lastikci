import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-sweet-component',
  imports: [RouterModule,CommonModule],
  templateUrl: './sandwiches-component.html',
  styleUrl: './sandwiches-component.css',
})
export class Sandwichescomponent implements AfterViewInit{

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => card.classList.add('show')); // Tüm kartlara aynı anda uygula
  }

}
