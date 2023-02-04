console.log('JS conneceted');

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavLi = document.querySelectorAll('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavLi.forEach(btnNavEl => {
  btnNavEl.addEventListener(
    'click',
    (OpenNavMenu = () => {
      headerEl.classList.toggle('nav-open');
    })
  );
});

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
