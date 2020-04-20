$(document).ready(function(){
  $(".vision-container").fadeIn()
  $("textarea").elastic();
  // initial margin-top for columns
  $(".admin").css('margin-top',$(".vision-container").height() + 35);
  $(".guest").css('margin-top',$(".vision").height() + 75);
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
    $(".admin").css('margin-top',$(".vision-container").height() + 35);
    $(".guest").css('margin-top',$(".vision").height() + 75);
  })

  $(".admin").fadeIn()
  $("textarea").elastic();
})
