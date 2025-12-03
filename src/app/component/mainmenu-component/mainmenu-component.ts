import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
declare var initSlider: any; // script.js içindeki fonksiyon

@Component({
  selector: 'app-mainmenu-component',
  templateUrl: './mainmenu-component.html',
  styleUrls: ['./mainmenu-component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainmenuComponent implements AfterViewInit {

  ngAfterViewInit() {

    if (initSlider) {
      initSlider();  // script.js içindeki fonksiyonu çağırıyoruz
    }
  }
}

