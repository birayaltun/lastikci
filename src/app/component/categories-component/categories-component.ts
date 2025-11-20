import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import path from 'path';

@Component({
  selector: 'app-categories-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './categories-component.html',
  styleUrl: './categories-component.css',
})
export class CategoriesComponent {
  categories = [
    { id: 1, name: 'Tatlılar',pathUrl:"sweets" },
    { id: 2, name: 'Fast Food',pathUrl:"fastfoods" },
    { id: 3, name: 'İçecekler',pathUrl:"drinks" },
    { id: 4, name: 'Salatalar', pathUrl:"salads"},
    { id: 5, name: 'Çorbalar',pathUrl:"soups" },
    { id: 6, name: 'Pizza' ,pathUrl:"pizzas" }
  ];
}
