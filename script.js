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

const applicationForm = document.querySelector('#application-form');

applicationForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(applicationForm);
  const message = [
    'Hola, quiero aplicar a LUX QUEEN GROUP.',
    '',
    `Nombre: ${data.get('nombre')}`,
    `Edad: ${data.get('edad')}`,
    `Ciudad: ${data.get('ciudad')}`,
    `WhatsApp: ${data.get('telefono')}`,
    `Objetivos: ${data.get('mensaje') || 'No especificados'}`,
  ].join('\n');
  window.open(`https://wa.me/573227035974?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
