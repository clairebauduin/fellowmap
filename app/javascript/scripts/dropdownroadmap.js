/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

$(document).on('ready turbolinks:load', function() {
  if(typeof($(".roadmap-name")) != "undefined") {
    $(".roadmap-name").click(function(event){
      $(".dropdown-roadmap").toggle();
      event.stopPropagation();
    });
    $("body").click(function(e) {
      $(".dropdown-roadmap").hide();
    });
  }
})
