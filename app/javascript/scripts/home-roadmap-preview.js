$(document).on('ready turbolinks:load', function() {
  $("#home-preview").click(function() {
      $("#home-roadmap-admin").toggle();
      $("#home-roadmap-preview").toggle();
  })
})
