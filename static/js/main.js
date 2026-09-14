emailjs.init("wGjdf46DQmql1DUKB");

const formulaire = document.getElementById('form-soleilka');

if (formulaire) {
    formulaire.addEventListener('submit', function(event) {
        event.preventDefault();


        emailjs.sendForm('mail-auto_test1', 'template_huqsuz9', this)
            .then(function() {
                alert('Bienvenue chez Soleil Ka ! Ta demande est envoyée.');
                formulaire.reset();
            }, function(erreur) {
                alert('Oups, petit couac technique : ' + JSON.stringify(erreur));
            });
    });
}

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