(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп модалки
    modal: document.querySelector('[data-menu]'),
    // Закриття модалки при натисканні на будь яке якірне посилання
    menuLinks: document.querySelectorAll('.menu-link'),
    shopButton: document.querySelector('.menu-btn-shop'),
  };

  // refs.openMenuBtn.addEventListener('click', toggleModal);
  // refs.closeMenuBtn.addEventListener('click', toggleModal);

  // function toggleModal() {
  //   // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
  //   refs.modal.classList.toggle('is-open');
  // }

  refs.openMenuBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-open');
  });

  refs.closeMenuBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-open');
  });

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });
  });
  
  refs.shopButton.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });


})();