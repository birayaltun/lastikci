import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-mainmenu-component',
  templateUrl: './mainmenu-component.html',
  styleUrls: ['./mainmenu-component.css'],
})
export class MainmenuComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    const slides = document.querySelector(".slides") as HTMLElement;
    const slideItems = document.querySelectorAll(".slide") as NodeListOf<HTMLElement>;
    const dotsContainer = document.querySelector(".dots") as HTMLElement;

    if (!slides || !dotsContainer || slideItems.length === 0) return;

    let index = 0;
    let startX = 0;
    let moveX = 0;

    // --- Dots oluştur ---
    slideItems.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.dataset["index"] = i.toString();
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot") as NodeListOf<HTMLElement>;

    function updateDots() {
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function updateSlider() {
      slides.style.transition = "0.3s";
      slides.style.transform = `translateX(${-index * 100}%)`;
      updateDots();
    }

    // Dot click
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        index = Number(dot.dataset["index"]);
        updateSlider();
      });
    });

    // Mouse drag
    slides.addEventListener("mousedown", (e: MouseEvent) => {
      startX = e.clientX;
      slides.style.transition = "none";
    });

    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (startX === 0) return;
      moveX = e.clientX - startX;
      slides.style.transform =
        `translateX(${-index * 100 + (moveX / window.innerWidth) * 100}%)`;
    });

    document.addEventListener("mouseup", () => {
      if (startX === 0) return;

      if (moveX < -50) index++;
      if (moveX > 50) index--;

      if (index < 0) index = slideItems.length - 1;
      if (index >= slideItems.length) index = 0;

      updateSlider();
      startX = 0;
      moveX = 0;
    });

    // Touch (mobil)
    slides.addEventListener("touchstart", (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      slides.style.transition = "none";
    });

    slides.addEventListener("touchmove", (e: TouchEvent) => {
      moveX = e.touches[0].clientX - startX;
      slides.style.transform =
        `translateX(${-index * 100 + (moveX / window.innerWidth) * 100}%)`;
    });

    slides.addEventListener("touchend", () => {
      if (moveX < -50) index++;
      if (moveX > 50) index--;

      if (index < 0) index = slideItems.length - 1;
      if (index >= slideItems.length) index = 0;

      updateSlider();
      startX = 0;
      moveX = 0;
    });
  }
}
