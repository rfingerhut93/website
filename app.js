const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//SLIDE SHOW ANIMATIONS
let SHOW_NUM_1 = 0;
let SHOW_NUM_2 = 0;

// Next slide -> sliding effect
const carouselNextNew = (carouselNumber, prev) => {
  let showNum;
  let carouselId;

  if (carouselNumber === 1) {
    showNum = SHOW_NUM_1;
    carouselId = "carousel1";
  } else if (carouselNumber === 2) {
    showNum = SHOW_NUM_2;
    carouselId = "carousel2";
  } else {
    return; // Invalid carousel number
  }

  const scroll = document.querySelector(`#${carouselId} .carousel__content--continuous`);
  const shows = document.querySelectorAll(`#${carouselId} .carousel__content--item`);

  const prevNum = showNum;

  if (prev) {
    showNum = (showNum - 1 + shows.length) % shows.length;
  } else {
    showNum = (showNum + 1) % shows.length;
  }

  const direction = prev ? "right" : "left";
  scroll.style.animation = `carouselSlide-${direction} 1s forwards`;

  setTimeout(() => {
    scroll.style.animation = "";
    scroll.style.transform = `translateX(-${showNum * 100}%)`;
  }, 100);

  shows[prevNum].classList.remove("active");
  shows[showNum].classList.add("active");

  if (carouselNumber === 1) {
    SHOW_NUM_1 = showNum;
  } else if (carouselNumber === 2) {
    SHOW_NUM_2 = showNum;
  }
};

