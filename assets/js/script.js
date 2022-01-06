const showBtn = document.querySelectorAll(".add-btn");
showBtn.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("active");
    this.parentElement.parentElement.classList.toggle("active");
  });
});

const bannerSlider = () => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
};

let counter = 1;
// setInterval(bannerSlider, 4000);

const bannerBtn = document.querySelectorAll(".banner-btn");

bannerBtn.forEach((e, i) => {
  e.addEventListener("click", function () {
    counter = i + 1;
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
