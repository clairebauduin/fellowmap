$(document).on('ready turbolinks:load', function() {
  if (document.getElementById("home-roadmap-admin") !== null) {
    const Typed = require('./typed.js');

    let options = {
      strings: ['Gantt charts^1400', 'Powerpoints', 'listes de features^1400', 'faux plans^1400'],
      typeSpeed: 70,
      backSpeed: 25,
      loop: true
    };

    let typed = new Typed('#typed', options);
  }
})
