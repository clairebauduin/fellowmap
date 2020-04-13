const improvementDescription = document.getElementById("improvement_description");
let timeout = null;

if (typeof(improvementDescription) !== 'undefined') {
  // Edit kpi description
  $(".kpi-description").each(function() {
    $(this).keydown(function(e) {
      let currentLength = $(e.target).val().length;
      if (currentLength === 0 && e.key === 'Backspace') {
        $(e.target).parents().eq(2).nextAll(".button_to").children(".delete-kpi").click()
      }
      clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().nextAll(".patch-kpi").click();
      }, 200);
    })
  })

  // Edit improvement name
  $(".improvement-name").each(function() {
    $(this).keydown(function(e) {
      const currentLength = $(e.target).val().length;
      if (currentLength === 0 && e.key === 'Backspace') {
        $(e.target).parent().nextAll(".delete-improvement").click();
      }
      clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().nextAll(".patch-improvement").click();
      }, 200);
    })
  })


  // Edit improvement name
  $(".improvement-name").each(function() {
    $(this).keydown(function(e) {
      let currentLength = $(e.target).val().length;
      if (currentLength === 0 && e.key === 'Backspace') {
        $(e.target).parents().eq(2).nextAll(".button_to").children(".delete-improvement").click();
      }
      clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().nextAll(".patch-improvement").click();
      }, 200);
    })
  })

  // Edit improvement desc
  $(".improvement-description").each(function() {
    $(this).keydown(function(e) {
      let currentLength = $(e.target).val().length;
      if (currentLength === 0 && e.key === 'Backspace') {
        $(e.target).parents().eq(2).nextAll(".button_to").children(".delete-improvement").click();
      }
      clearTimeout(timeout);
        timeout = setTimeout(function () {
          $(e.target).parent().nextAll(".patch-improvement").click();
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
      console.log($(e.target).parent().next(".improvement_emoji").children().val())
      console.log($(e.target).parent().parent().nextAll(".patch-improvement"))
      $(e.target).parent().next(".improvement_emoji").children().val(e.target.innerHTML);
      $(e.target).parents().eq(1).nextAll(".patch-improvement").click();
    })
  })

}
