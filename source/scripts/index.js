/* в этот файл добавляет скрипты*/
const button = document.querySelector('.main-nav__toggle');

const header = document.querySelector('header');

header.classList.remove('nojs');

header.classList.remove('main-header--opened');

header.classList.add('main-header--closed');


button.addEventListener('click', () => {
  if(header.classList.contains('main-header--opened')){
    header.classList.add('main-header--closed');
    header.classList.remove('main-header--opened');
    button.classList.add('main-nav__toggle--burger');
    button.classList.remove('main-nav__toggle--open');
  } else{
    header.classList.remove('main-header--closed');
    header.classList.add('main-header--opened');
    button.classList.remove('main-nav__toggle--burger');
    button.classList.add('main-nav__toggle--open');
  }
});

const div = document.querySelector('.example__container slider');
document.querySelector('.example__container slider-range').addEventListener('input', (e) => {
  div.style.setProperty('--position', `${e.target.value}%`);
});
