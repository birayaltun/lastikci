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

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => card.classList.add('show')); // Tüm kartlara aynı anda uygula
  }
}
