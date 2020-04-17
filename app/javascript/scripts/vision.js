$(document).on('ready turbolinks:load', function() {
  // initial margin-top for columns
  $(".admin, .new-theme").css('margin-top',$(".vision-container").height() + 35);
  $(".preview-guest").css('margin-top',$(".vision").height() + 120);
  // dynamic show/hide vision on scroll
  $(window).scroll(function (event) {
    if ($(window).scrollTop() > 20) {
      $(".vision-container").fadeOut(50);
    }
    else {
      $(".vision-container").fadeIn(50);
    }
  });
  //change margin-top if vision gets more height
  $(".roadmap-vision").keyup(function(ev1) {
    $(".admin.new-theme").css('margin-top',$(".vision-container").height() + 35);
    $(".preview-guest").css('margin-top',$(".vision").height() + 120);
  })
})
