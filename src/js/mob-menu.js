(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-Menu-open]'),
    closeMenuBtn: document.querySelector('[data-Menu-close]'),
    menu: document.querySelector('[data-Menu]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
