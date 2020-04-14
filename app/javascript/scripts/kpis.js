$(document).on('ready turbolinks:load', function() {

const improvementDescription = document.querySelectorAll(".improvement-description");
let timeout = null;

  if (typeof(improvementDescription) !== 'undefined') {
    // Edit kpi description
    $(".kpi-description").each(function() {
      $(this).on("keydown", function(e) {
        let currentLength = $(e.target).val().length;
        if (currentLength === 0 && e.key === 'Backspace') {
          $(e.target).parents().eq(2).next(".button_to").children(".delete-kpi").click()
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().next(".patch-kpi").click();
        }, 200);
      })
    })

    // Edit improvement name
    $(".improvement-name").each(function() {
      $(this).keydown(function(e) {
        let currentLength = $(e.target).val().length;
        if (currentLength === 0 && e.key === 'Backspace') {
          $(e.target).parents().eq(2).next(".button_to").children(".delete-improvement").click();
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().next(".patch-improvement").click();
        }, 200);
      })
    })

    // Edit improvement desc
    $(".improvement-description").each(function() {
      $(this).keydown(function(e) {
        let currentLength = $(e.target).val().length;
        if (currentLength === 0 && e.key === 'Backspace') {
          $(e.target).parents().eq(2).next(".button_to").children(".delete-improvement").click();
        }
      clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().next(".patch-improvement").click();
        }, 200);
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
        $(e.target).parent().next(".improvement_emoji").children().val(e.target.innerHTML);
        $(e.target).parents().eq(1).next(".patch-improvement").click();
      })
    })
  }
})
