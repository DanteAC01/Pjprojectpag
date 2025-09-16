const carousel = document.getElementById("offer-carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
   carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prev.addEventListener("click", () => {
   carousel.scrollBy({ left: -300, behavior: "smooth" });
});

const swiper = new Swiper(".mySwiper", {
   loop: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});