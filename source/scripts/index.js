// source/scripts/index.js
const button = document.querySelector('.main-header__toggle');
const header = document.querySelector('.main-header');
document.body.classList.remove('nojs');

button.addEventListener('click', () => {
  if (header.classList.contains('main-header--opened')) {
    header.classList.add('main-header--closed');
    header.classList.remove('main-header--opened');
  } else {
    header.classList.remove('main-header--closed');
    header.classList.add('main-header--opened');
  }
});
//# sourceMappingURL=index.js.map
