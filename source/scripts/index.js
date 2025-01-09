/* в этот файл добавляет скрипты*/
const button = document.querySelector('.main-nav__toggle');

const header = document.querySelector('.main-header');

document.body.classList.remove('nojs');


button.addEventListener('click', () => {
  if(header.classList.contains('main-header--opened')){
    header.classList.add('main-header--closed');
    header.classList.remove('main-header--opened');
    button.classList.add('main-nav__toggle--burger');
    button.classList.remove('main-nav__toggle--open');
  } else{
    header.classList.remove('main-header--closed');
    header.classList.add('main-header--opened');
    button.classList.add('main-nav__toggle--open');
  }
});

