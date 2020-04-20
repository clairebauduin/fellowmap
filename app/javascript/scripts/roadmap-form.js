let timeout = null;
// patch
function patchImprovement() {
  $(document.body).on('keyup', '.improvement-description', function(e) {
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
    }, 1000);
  })
}

$(document).ready( function() {
  const improvementDescription = document.querySelectorAll(".improvement-description");
  let timeout = null;
  let roadmap_id = $(".columns").attr('id')

  if (typeof(improvementDescription) !== 'undefined') {

  $("textarea").elastic();

  // IMPROVEMENT DESCRIPTION AJAX
    // // delete
    // $(".improvement-description").on('keydown', function(e) {
    //   let theme_id = $(this).closest(".column-roadmap").attr('id')
    //   let improvement_id = $(this).closest(".improvement").attr('id')
    //   let currentLength = $(e.target).val().length;
    //   console.log(currentLength)
    //   console.log($(e.target).parents().eq(2))
    //   if (currentLength === 0 && e.key === 'Backspace' && !$(e.target).parents().eq(2).hasClass("theme")
    //   && !$(e.target).parents().eq(2).hasClass("roadmap-vision")) {
    //     e.preventDefault();
    //     $.ajax({
    //       type: 'DELETE',
    //       url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
    //     });
    //   }
    // })

    patchImprovement()

  // IMPROVEMENT NAME AJAX

    // delete
    // $(document.body).on('keydown', ".improvement-name", function(e) {
    //   let theme_id = $(this).closest(".column-roadmap").attr('id')
    //   let improvement_id = $(this).closest(".improvement").attr('id')
    //   let name = $(this).val()
    //   let currentLength = $(e.target).val().length;
    //   $(e.target).parents().eq(2).next(".button_to").children(".delete").on('click', function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //       type: 'DELETE',
    //       url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/improvements/" + improvement_id,
    //     });
    //   })
    //   if (currentLength === 0 && e.key === 'Backspace' && !$(e.target).parents().eq(2).hasClass("theme")
    //       && !$(e.target).parents().eq(2).hasClass("roadmap-vision")){
    //     $(e.target).parents().eq(2).next(".button_to").children(".delete").click();
    //   }
    // })

    // patch
    $(document.body).on('keyup', '.improvement-name', function(e) {
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
      }, 1000);
    })

  // IMPROVEMENT EMOJI AJAX
    // patch
    $(document.body).on('click', ".emoji-select", function(e) {
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
    $(document.body).on('click', '.new-improvement', function(e) {
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

    // $(".kpi-description").keydown(function(e) {
    //   let theme_id = $(this).closest(".column-roadmap").attr('id')
    //   let kpi_id = $(this).closest(".kpi").attr('id')
    //   let description = $(this).parents().eq(1).children(".kpi_description").children(".kpi-description").val()
    //   let currentLength = $(e.target).val().length;
    //   $(e.target).parents().eq(2).next(".button_to").children(".delete").on('click', function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //       type: 'DELETE',
    //       url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id + "/kpis/" + kpi_id,
    //     });
    //   })
    //   if (currentLength === 0 && e.key === 'Backspace' && !$(e.target).parents().eq(2).hasClass("theme")
    //       && !$(e.target).parents().eq(2).hasClass("roadmap-vision")){
    //     $(e.target).parents().eq(2).next(".button_to").children(".delete").click();
    //   }
    // })

    // patch
    $(document.body).on('keyup', ".kpi-description", function(e) {
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
      }, 1000);
    })

  // KPI ADD AJAX
    // post
    $(document.body).on('click', ".new-kpi", function(e) {
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
    $(document.body).on('keyup', ".theme-name", function(e) {
      let theme_id = $(this).closest(".column-roadmap").attr('id')
      let name = $(this).val()
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $(this).parent().nextAll(".patch").first().on('click', function(e) {
          e.preventDefault();
          $.ajax({
            type: 'PATCH',
            url: "/roadmaps/" + roadmap_id + "/themes/" + theme_id,
            data: { theme: {
              name: name }
            },
          });
        })
        $(e.target).parent().nextAll(".patch").first()[0].click();
      }, 1000);
    })


  // THEME DESCRIPTION AJAX
    // patch
    $(document.body).on('keyup', ".theme-description", function(e) {
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
      }, 1000);
    })

  // THEME TEMPORALITY AJAX
    // patch
    $(document.body).on('keyup', ".theme-temporality", function(e) {
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
              temporality: temporality }
            },
          });
        })
        $(e.target).parent().nextAll(".column-content").children().nextAll(".patch").first().click();
      }, 1000);
    })

 // THEME ADD AJAX
  // post
  $(document.body).on('click', ".create-theme", function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "/roadmaps/" + roadmap_id + "/themes/"
    });
    $(this).blur();
  });

  // ROADMAP VISION AJAX
    // patch
    $(document.body).on('keyup', ".roadmap-vision", function(e) {
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
      }, 1000);
    })


    // Patch roadmap logo
    $(document.body).on('change', ".upload-logo", function(e) {
      $(e.target).nextAll(".patch").first().click();
    })

    // Patch logo theme
    $(".upload-cover").change(function(e) {
      $(e.target).parent().nextAll(".patch").first().click();
    })

    // Show Emoji selector for improvements
    $(document.body).on('click', ".emoji-button", function(e) {
        $(e.target).next(".emojis-selector").css('display', 'flex')
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

export {patchImprovement}
