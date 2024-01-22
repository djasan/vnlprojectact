const sliderContainer = document.getElementById("slider-container");
const sliderContent = document.getElementById("slider-content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const catalogue = ["./assets/img/slider/blondie.jpg", "./assets/img/slider/blondie1.jpg", "./assets/img/slider/blondie2.jpg"];

let currentIndex = 0;

function initSlider() {
  catalogue.forEach((imagePath) => {
    const sliderItem = document.createElement("div");
    sliderItem.className = "slider-item";
    sliderItem.innerHTML = `<img src="${imagePath}" alt="Image">`;
    sliderContent.appendChild(sliderItem);
  });

  prevBtn.addEventListener("click", () => changeSlide(-1));
  nextBtn.addEventListener("click", () => changeSlide(1));
}

function changeSlide(direction) {
  const sliderItems = document.querySelectorAll(".slider-item");
  const itemWidth = sliderItems[0].offsetWidth;

  currentIndex =
    (currentIndex + direction + sliderItems.length) % sliderItems.length;

  const translateValue = -currentIndex * itemWidth;
  sliderContent.style.transform = `translateX(${translateValue}px)`;
}

initSlider();