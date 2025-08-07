// Mobile Menu Toggle (For all pages)
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
  }
});

// Modal Close Button (For category pages)
document.addEventListener('DOMContentLoaded', function() {
  const modalClose = document.querySelector('.modal-close');
  const modal = document.getElementById('productModal');
  
  if (modalClose && modal) {
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
});