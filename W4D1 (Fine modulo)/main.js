const navbarSearchIcon = document.getElementById("search-icon");
const navbarSearchInput = document.querySelector(".navbar-search-wrapper");
navbarSearchIcon.addEventListener("click", () => {
  navbarSearchIcon.classList.add("d-none");
  navbarSearchInput.classList.add("d-flex");
  navbarSearchInput.classList.add("align-items-center");
  navbarSearchInput.classList.add("justify-content-center");
});
const swiper = new Swiper(".swiper", {
  // Optional parameters

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
