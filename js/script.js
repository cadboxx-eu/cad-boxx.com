// Seleção de elementos

// Selecao do menu
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Selecao das secoes
const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

// Selecao slides
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções

// Close/Open menu mobile
function handleClick() {
  menu.classList.toggle("menu-active");
}

// Scroll 
function smoothScroll(event) {
  event.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 100);
}
// Slide banner
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Eventos

// Close/Open menu mobile
[menuBtn, closeMenuBtn].forEach((botao) => {
  botao.addEventListener("click", handleClick);
});

// Scroll
allLinks.forEach((links) => {
  links.addEventListener("click", smoothScroll);
});

// Inicialização
// showSlides();
