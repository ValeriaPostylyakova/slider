const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlide = 0;
const container = document.querySelector('.container');

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
})

downBtn.addEventListener('click', () => {
  changeSlide('down');
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlide++;
    if(activeSlide === slidesCount) {
      activeSlide = 0;
    }
  } else if (direction === 'down') {
    activeSlide--;
    if(activeSlide < 0) {
      activeSlide = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
  sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}