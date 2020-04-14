$(document).on('ready turbolinks:load', function() {
  $(".close").click(function() {
    $(".alert").hide();
  })
  if ($(".alert").is(':visible')) {
    $(".alert").delay(3000).slideUp(300);
  }
})
