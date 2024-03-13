const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
})

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav--open');
  hamburgerEl.classList.remove("hamburger--open");
})


const headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach((item) => {
  item.addEventListener('click', showContent);
})


function showContent() {
  this.nextElementSibling.classList.toggle("accordeon-body");
}

const boxes = document.querySelectorAll(".box__tools");

window.addEventListener('scroll', checkBoxes);


function checkBoxes() {
 const triggerBottom = window.innerHeight / 5 * 4;

 boxes.forEach(box => {
  const boxTop = box.getBoundingClientRect().top;

  if(boxTop < triggerBottom) {
    box.classList.add('show')
  } else {
    box.classList.remove('show')
  }
 })
}

const boxFeatures = document.querySelectorAll(".box-features");

window.addEventListener('scroll', opacityShow);

function opacityShow() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxFeatures.forEach(box => {
  const boxTop = box.getBoundingClientRect().top;

  if(boxTop < triggerBottom) {
    box.classList.add('show')
  } else {
    box.classList.remove('show')
  }
  })
}


// swiper

const mySwiper = new Swiper(".swiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  //  autoHeight: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});