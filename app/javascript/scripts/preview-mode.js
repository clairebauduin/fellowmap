$(document).on('ready turbolinks:load', function() {
  $(".switch").click(function() {
    if ($(".switch > input").is(":checked")) {
      $(".vision-admin").hide();
      $(".vision-preview").show();
      $(".admin").hide();
      $(".guest").show();
      $(".new-theme").hide();
    }
    else {
      $(".vision-preview").hide();
      $(".vision-admin").show();
      $(".guest").hide();
      $(".admin").show();
      $(".new-theme").show();
    }
  })
})
