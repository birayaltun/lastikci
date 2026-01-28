// ======= Slider =======
function initSlider() {

const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const slider = document.querySelector(".slider");

let index = 0;
let startX = 0;
let moveX = 0;

// --- Noktaları Oluştur ---
slideItems.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slides.style.transition = "0.3s";
slides.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// --- Dot’a tıklayınca slayta git ---
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    index = Number(dot.dataset.index);
    updateSlider();
  });
});

// --- Mouse Drag ---
slides.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  slides.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
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

// --- Touch Mobil ---
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  slides.style.transition = "none";
});

slider.addEventListener("touchmove", (e) => {
  e.preventDefault(); // 🔥 iOS için şart
  moveX = e.touches[0].clientX - startX;
  slides.style.transform =
    `translate3d(${-index * 100 + (moveX / window.innerWidth) * 100}%, 0, 0)`;
}, { passive: false });

slider.addEventListener("touchend", () => {
  if (moveX < -50) index++;
  if (moveX > 50) index--;

  if (index < 0) index = slideItems.length - 1;
  if (index >= slideItems.length) index = 0;

  updateSlider();

  startX = 0;
  moveX = 0;
});

console.log("ali")



}