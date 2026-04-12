const navLinks = document.querySelectorAll('[data-nav]');
const currentPage = document.body.dataset.page;
navLinks.forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add('active');
  }
});
