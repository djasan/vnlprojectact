const sliderContainer = document.getElementById("slider-container");
const sliderContent = document.getElementById("slider-content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const catalogue = ["./assets/img/slider/blondie.jpg", "./assets/img/slider/blondie1.jpg", "./assets/img/slider/blondie2.jpg",
"./assets/img/slider/clash.jpg", "./assets/img/slider/clash1.jpg", "./assets/img/slider/clash2.jpg", "./assets/img/slider/clash3.jpg", 
"./assets/img/slider/clash4.jpg", "./assets/img/slider/clash5.jpg", "./assets/img/slider/clash6.jpg", "./assets/img/slider/clash7.jpg",
"./assets/img/slider/DB.jpg","./assets/img/slider/DB1.jpg","./assets/img/slider/DB2.jpg","./assets/img/slider/DB3.jpg","./assets/img/slider/HFT.jpg",
"./assets/img/slider/HFT1.jpg","./assets/img/slider/HFT2.jpg","./assets/img/slider/HFT3.jpg","./assets/img/slider/HFT4.jpg","./assets/img/slider/JD.jpg",
"./assets/img/slider/JD2.jpg","./assets/img/slider/jefferson airplane.jpg","./assets/img/slider/jefferson airplane1.jpg",
"./assets/img/slider/jefferson airplane2.jpg","./assets/img/slider/jefferson airplane3.jpg","./assets/img/slider/JH.jpg",
"./assets/img/slider/JH1.jpg","./assets/img/slider/JH2.jpg","./assets/img/slider/KB.jpg","./assets/img/slider/KB1.jpg",
"./assets/img/slider/RS.jpg","./assets/img/slider/RS1.jpg","./assets/img/slider/RS2.jpg","./assets/img/slider/RUTS.jpg",
"./assets/img/slider/RUTS1.jpg","./assets/img/slider/SP.jpg","./assets/img/slider/SP1.jpg","./assets/img/slider/SP2.jpg",
"./assets/img/slider/SP3.jpg","./assets/img/slider/SP4.jpg","./assets/img/slider/SP5.jpg","./assets/img/slider/SP6.jpg",
"./assets/img/slider/velvet underground.jpg","./assets/img/slider/velvet underground1.jpg","./assets/img/slider/velvet underground2.jpg",
"./assets/img/slider/velvet underground3.jpg","./assets/img/slider/velvet underground4.jpg",];

let currentIndex = 0;

function initSlider() {
  catalogue.forEach((imagePath) => {
    const sliderItem = document.createElement("div");
    sliderItem.className = "slider-item";
    sliderItem.innerHTML = `<img src="${imagePath}" alt="Image">`;
    sliderContent.appendChild(sliderItem);
  });
// Ajoutez des écouteurs d'événements aux boutons précédent et suivant
prevBtn.addEventListener("click", () => changeSlide(-100 / 48 * 5)); // Défilement vers la gauche
nextBtn.addEventListener("click", () => changeSlide(100 / 48 * 5)); // Défilement vers la droite
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