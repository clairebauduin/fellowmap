$(document).on('ready turbolinks:load', function() {
  const improvementDescription = document.querySelectorAll(".improvement-description");
  let timeout = null;
  let roadmap_id = $(".columns").attr('id')

  if (typeof(improvementDescription) !== 'undefined') {
    //textareas flexible
    $("textarea").elastic();


  // IMPROVEMENT DESCRIPTION AJAX
    // delete
    $(".improvement-description").keydown(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let improvement_id = $(this).closest(".improvement").attr('id')
      let description = $(this).val()
      let currentLength = $(e.target).val().length;
      $(e.target).parents().eq(2).next(".button_to").children(".delete").on('click', function(e) {
        e.preventDefault();
        $.ajax({
          type: 'DELETE',
          url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
        });
      })
      if (currentLength === 0 && e.key === 'Backspace' && !$(e.target).parents().eq(2).hasClass("theme")
          && !$(e.target).parents().eq(2).hasClass("roadmap-vision")){
        $(e.target).parents().eq(2).next(".button_to").children(".delete").click();
      }
    })
    // patch
    $(".improvement-description").keyup(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let improvement_id = $(this).closest(".improvement").attr('id')
      let description = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
            data: { improvement: {
                description: description }
            },
          });
        })
        $(e.target).parent().nextAll(".patch").first()[0].click();
      }, 400);
    })

  // IMPROVEMENT NAME AJAX
    // delete
    $(".improvement-name").keydown(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let improvement_id = $(this).closest(".improvement").attr('id')
      let name = $(this).val()
      let currentLength = $(e.target).val().length;
      $(e.target).parents().eq(2).next(".button_to").children(".delete").on('click', function(e) {
        e.preventDefault();
        $.ajax({
          type: 'DELETE',
          url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
        });
      })
      if (currentLength === 0 && e.key === 'Backspace' && !$(e.target).parents().eq(2).hasClass("theme")
          && !$(e.target).parents().eq(2).hasClass("roadmap-vision")){
        $(e.target).parents().eq(2).next(".button_to").children(".delete").click();
      }
    })
    // patch
    $(".improvement-name").keyup(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let improvement_id = $(this).closest(".improvement").attr('id')
      let name = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
            data: { improvement: {
                name: name }
            },
          });
        })
        $(e.target).parent().nextAll(".patch").first()[0].click();
      }, 400);
    })

  // IMPROVEMENT EMOJI AJAX
    // patch
    $(".emoji-select").click(function(e) {
      $(e.target).parent().nextAll(".improvement_emoji").first().children().val(e.target.innerHTML);
      $(this).parents().eq(1).children(".emoji-button").html($(this).html())
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let improvement_id = $(this).closest(".improvement").attr('id')
      let emoji = $(e.target).parent().nextAll(".improvement_emoji").first().children().val().trim()
      console.log(emoji)
      $(this).parent().nextAll(".patch").first().on('click', function(e) {
        e.preventDefault();
        $.ajax({
          type: 'PATCH',
          url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
          data: { improvement: {
              emoji: emoji }
          },
        });
      })
      $(e.target).parents().eq(1).nextAll(".patch").first().click();
    })

  // IMPROVEMENT ADD AJAX
    // post
    $(".new-improvement").on('click', function(e) {
      e.preventDefault();
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      $.ajax({
        type: 'POST',
        url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/"
      });
      $(this).blur();
    });

  // KPI DESCRIPTION AJAX
    // delete
    $(".kpi-description").keydown(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let kpi_id = $(this).closest(".kpi").attr('id')
      let description = $(this).parents().eq(1).children(".kpi_description").children(".kpi-description").val()
      let currentLength = $(e.target).val().length;
      $(e.target).parents().eq(2).next(".button_to").children(".delete").on('click', function(e) {
        e.preventDefault();
        $.ajax({
          type: 'DELETE',
          url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/kpis/" + kpi_id,
        });
      })
      if (currentLength === 0 && e.key === 'Backspace' && !$(e.target).parents().eq(2).hasClass("theme")
          && !$(e.target).parents().eq(2).hasClass("roadmap-vision")){
        $(e.target).parents().eq(2).next(".button_to").children(".delete").click();
      }
    })
    // patch
    $(".kpi-description").keyup(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let kpi_id = $(this).closest(".kpi").attr('id')
      let description = $(this).parents().eq(1).children(".kpi_description").children(".kpi-description").val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/kpis/" + kpi_id,
            data: { kpi: {
                description: description }
            },
          });
        })
        $(e.target).parent().nextAll(".patch").first()[0].click();
      }, 400);
    })

  // KPI ADD AJAX
    // post
    $(".new-kpi").on('click', function(e) {
      e.preventDefault();
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      $.ajax({
        type: 'POST',
        url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/kpis/"
      });
      $(this).blur();
    });

  // THEME NAME AJAX
    // patch
    $(".theme-name").keyup(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let name = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id,
          });
        })
        $(e.target).parent().nextAll(".patch").first().click();
      }, 400);
    })

  // THEME DESCRIPTION AJAX
    // patch
    $(".theme-description").keyup(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let description = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id,
            data: { theme: {
              description: description  }
            },
          });
        })
        $(e.target).parent().nextAll(".patch").first().click();
      }, 400);
    })

  // THEME TEMPORALITY AJAX
    // patch
    $(".theme-temporality").keyup(function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let temporality = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id,
            data: { theme: {
              temporality: temporality  }
            },
          });
        })
        $(e.target).parent().nextAll(".column-content").children().nextAll(".patch").first().click();
      }, 400);
    })

 // THEME ADD AJAX
  // post
  $(".new-theme").on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "/roadmaps/" + roadmap_id + "/themes/"
    });
    $(this).blur();
  });

  // ROADMAP VISION AJAX
    // patch
    $(".roadmap-vision").keyup(function(e) {
      let vision = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id,
            data: { roadmap: {
              vision: vision  }
            },
          });
        })
        $(e.target).parent().nextAll(".patch").first().click();
      }, 400);
    })


    // Patch roadmap logo
    $(".upload-logo").change(function(e) {
      console.log($(e.target).nextAll(".patch").first())
      $(e.target).nextAll(".patch").first().click();
    })

    // Patch logo theme
    $(".upload-cover").change(function(e) {
      $(e.target).parent().nextAll(".patch").first().click();
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
  }
})
