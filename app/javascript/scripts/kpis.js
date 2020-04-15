$(document).on('ready turbolinks:load', function() {
  const improvementDescription = document.querySelectorAll(".improvement-description");
  let timeout = null;

  if (typeof(improvementDescription) !== 'undefined') {
    //textareas flexible
    $("textarea").elastic();

    // Patch or delete names & descriptions
    $(".description, .name, .roadmap-vision").each(function(e) {
      $(this).keydown(function(ev1) {
        let currentLength = $(ev1.target).val().length;
        if (currentLength === 0 && ev1.key === 'Backspace' && !$(ev1.target).parents().eq(2).hasClass("theme")
            && !$(ev1.target).parents().eq(2).hasClass("roadmap-vision")){
          $(ev1.target).parents().eq(2).next(".button_to").children(".delete").click();
        }
      })
      $(this).keyup(function(ev2) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(ev2.target).parent().nextAll(".patch").first().click();
        }, 2000);
      })
    })

    // Patch theme
    $(".theme-description, .theme-name").each(function(e) {
      $(this).on('input', function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().nextAll(".patch").first().click();
        }, 2000);
      })
    })
    $(".theme-temporality").each(function(e) {
      $(this).on('input', function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().nextAll(".column-content").children().nextAll(".patch").first().click();
        }, 2000);
      })
    })

    // Show Emoji selector for improvements
    $(".emoji-button").each(function() {
      $(this).click(function(e){
        $(e.target).next(".emojis-selector").css('display', 'flex')
      })
    })
    $(document).mouseup(function(e) {
      const selector = $(".emojis-selector");
      if (!selector.is(e.target) && selector.has(e.target).length === 0)
      {
        selector.hide();
      }
    });

    // Select emoji & patch
    $(".emoji-select").each(function() {
      $(this).click(function(e){
        $(e.target).parent().nextAll(".improvement_emoji").first().children().val(e.target.innerHTML);
        $(e.target).parents().eq(1).nextAll(".patch").first().click();
      })
    })
  }
})
