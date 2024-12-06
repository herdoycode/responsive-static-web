let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
