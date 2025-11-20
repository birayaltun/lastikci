import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-sweet-component',
  imports: [RouterModule,CommonModule],
  templateUrl: './sweet-component.html',
  styleUrl: './sweet-component.css',
})
export class SweetComponent implements AfterViewInit{

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => card.classList.add('show')); // Tüm kartlara aynı anda uygula
  }

}
