const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
