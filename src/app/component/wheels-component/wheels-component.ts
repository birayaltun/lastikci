import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wheels-component',
  imports: [RouterLink,CommonModule],
  templateUrl: './wheels-component.html',
  styleUrl: './wheels-component.css',
})
export class WheelsComponent  {
currentCategory: string = '';
  products: any[] = [];

 //titles
 categoryTitles: { [key: string]: string } = {
  land: 'Arazi',
  race: 'Yarış',
  fourseason: '4 Mevsim',
  summer: 'Yaz',
  winter: 'Kış'
};
pageTitle: string = '';


    // TÜM ÜRÜNLER
 categories: { [key: string]: any[] } = {
  land: [
    { title: "Arazi Lastiği 1", price: 1200, img: "/arazi1.jpg", desc: "..." },
        { title: "Arazi Lastiği 2", price: 1200, img: "/arazi1.jpg", desc: "..." },
        { title: "Arazi Lastiği 3", price: 1200, img: "/arazi1.jpg", desc: "..." },
                { title: "Arazi Lastiği 4", price: 1200, img: "/arazi1.jpg", desc: "..." }


  ],
  race: [
    { title: "Yarış Lastiği 1", price: 1800, img: "/race1.jpg", desc: "..." }
  ],
  fourseason: [
    { title: "4 Mevsim", price: 1300, img: "/4.jpg", desc: "..." }
  ],
  summer: [
    { title: "Yaz Lastiği", price: 1100, img: "/yaz.jpg", desc: "..." }
  ],
  winter: [
    { title: "Kış Lastiği", price: 1600, img: "/kış.jpg", desc: "..." }
  ]
};

 constructor(private route: ActivatedRoute) {}

   ngOnInit() {
    // URL değişince tetiklenir
    this.route.paramMap.subscribe(params => {
      this.currentCategory = params.get('categoryName')!;
 console.log(this.currentCategory)
      //başlık için
      this.pageTitle = this.categoryTitles[this.currentCategory] || '';
      this.currentCategory = params.get('categoryName')!;
      // O kategoriye ait ürünleri çek

      this.products = this.categories[this.currentCategory] || [];
    });
  }
}
