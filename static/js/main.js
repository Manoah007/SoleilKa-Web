const header = document.querySelector('.header');

// On écoute l'événement de défilement (scroll) sur la fenêtre
window.addEventListener('scroll', () => {
  // Si on a défilé de plus de 50 pixels vers le bas
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled'); // On rend translucide
  } else {
    header.classList.remove('header-scrolled'); // On remet solide en haut de page
  }
});