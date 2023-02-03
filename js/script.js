console.log('JS conneceted');

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelectorAll('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.forEach(btnNavEl => {
  btnNavEl.addEventListener(
    'click',
    (OpenNavMenu = () => {
      headerEl.classList.toggle('nav-open');
    })
  );
});
