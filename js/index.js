// geting Elements from DOM
const body = document.querySelector("body");
const openbtn = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".mobile-menu");
const closebtn = document.querySelector(".menu-cls");
const links = document.querySelectorAll(".mobile-menu a");

// Function to open sidebar
function opensidebar() {
  sidebar.classList.add("active");
  body.classList.add("menu-open");
  openbtn.classList.add("none");
}
// Function to close sidebar
function closesidebar() {
  sidebar.classList.remove("active");
  body.classList.remove("menu-open");
  openbtn.classList.remove("none");
}

// add eventListener to the buttons
openbtn.addEventListener("click", opensidebar);
closebtn.addEventListener("click", closesidebar);

links.forEach((link) => {
  link.addEventListener("click", closesidebar);
});

// AOS Initialize
AOS.init();
// splide initialize
var splide = new Splide(".splide", {
  perPage: 3,
  type: "loop",
  perMove: 1,
  gap: "1.5rem",
  breakpoints: {
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    },
  },
});

splide.mount();
