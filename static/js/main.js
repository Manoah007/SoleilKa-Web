emailjs.init("wGjdf46DQmql1DUKB");


/*===============
    Permet l'envoie de mail automatique quand le formulaire de contact
    est validé
================*/
const formulaire_contact = document.getElementById('form-soleilka');

if (formulaire_contact) {
    formulaire_contact.addEventListener('submit', function(event) {
        event.preventDefault();


        emailjs.sendForm('mail-auto_test1', 'template_huqsuz9', this)
            .then(function() {
                alert('Bienvenue chez Soleil Ka ! Ta demande est envoyée.');
                formulaire_contact.reset();
            }, function(erreur) {
                alert('Oups, petit couac technique : ' + JSON.stringify(erreur));
            });
    });
}

/*===================================================
    Gère l'effet du menu lorsque l'on scroll la page
=====================================================*/
const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', () => {

      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
}

/*===========================================================================
    Crée un menu latérale pour les résolutation plus petites (ex: mobile)
===========================================================================*/
const burgerBtn = document.getElementById('burger-btn');
const nav = document.querySelector('.header-nav-mobile');

burgerBtn.addEventListener('click', () => {
    // Un seul bloc qui gère les 3 actions simultanément
    nav.classList.toggle('nav-active');
    burgerBtn.classList.toggle('toggle');
    document.body.classList.toggle('no-scroll');
});