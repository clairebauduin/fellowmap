const kpiDescription = document.getElementById("kpi_description")
let timeout = null;


if (typeof(kpiDescription) !== 'undefined') {
  document.querySelectorAll(".goal").forEach(theme => {
    Array.prototype.forEach.call(theme.children, goal => {
      if (goal.children[2] !== undefined) {
        goal.children[2].children[1].children[0].addEventListener('keyup', function (e){
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            goal.submit()
          }, 2000);
          event.preventDefault;
        })
      }
    })
  })
}
