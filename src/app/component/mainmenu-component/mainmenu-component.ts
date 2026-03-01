import {
  AfterViewInit, Component, ViewEncapsulation
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var initSlider: any; // script.js içindeki fonksiyon

@Component({
  selector: 'app-mainmenu-component',
  templateUrl: './mainmenu-component.html',
  styleUrls: ['./mainmenu-component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainmenuComponent implements AfterViewInit {


  @ViewChild('bgVideo')
  bgVideo!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit() {


    if (initSlider) {
      initSlider();  // script.js içindeki fonksiyonu çağırıyoruz
    }

    const vid = this.bgVideo.nativeElement;

    vid.muted = true;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.bgVideo.nativeElement.play().catch(() => { });
      });
    });

    const tryPlay = () => {
      vid.play().catch(() => {
        setTimeout(() => vid.play(), 300);
      });
    };

    if (vid.readyState >= 2) {
      tryPlay();
    } else {
      vid.onloadeddata = tryPlay;
    }

  }
}

