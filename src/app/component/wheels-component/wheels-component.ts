import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wheels-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './wheels-component.html',
  styleUrl: './wheels-component.css',
})
export class WheelsComponent {
  currentCategory: string = '';
  products: any[] = [];

  //titles
  categoryTitles: { [key: string]: string } = {
    lassa: 'Lassa',
    continental: 'Continental',
    laufenn: 'Laufenn',
    matador: 'Matador',
    goodyear: 'Good Year'
  };
  pageTitle: string = '';


  // TÜM ÜRÜNLER
  categories: { [key: string]: any[] } = {
    lassa: [
      { title: "Snoways 4", price: 0, img: "/lassasnoways4.png", desc: "..." },
      { title: "Revola", price: 0, img: "/revola.png", desc: "..." },
      { title: "Greenways", price: 0, img: "/greenways.png", desc: "..." },
      { title: "Iceways 2", price: 0, img: "/iceways2.png", desc: "..." },
      { title: "Multiways 2", price: 0, img: "/multiways.png", desc: "..." }

    ],
    continental: [
      { title: "WinterContact ", price: 0, img: "/wintercontact.png", desc: "..." },
      { title: "UltraContact ", price: 0, img: "/ultracontact.png", desc: "..." },
      { title: "EcoContact 6 ", price: 0, img: "/ecocontact6.png", desc: "..." },
      { title: "SportContact 7 ", price: 0, img: "/sportcontact7.png", desc: "..." }
    ],
    laufenn: [
      { title: "4 Mevsim", price: 1300, img: "/4.jpg", desc: "..." }
    ],
    matador: [
      { title: "Yaz Lastiği", price: 1100, img: "/yaz.jpg", desc: "..." }
    ],
    goodyear: [
      { title: "Kış Lastiği", price: 1600, img: "/kış.jpg", desc: "..." }
    ]
  };

  constructor(private route: ActivatedRoute) { }

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
