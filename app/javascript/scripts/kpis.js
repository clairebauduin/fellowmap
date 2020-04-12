const kpiDescription = document.getElementById("kpi_description");
const improvementDescription = document.getElementById("improvement_description");
const kpis = document.querySelectorAll(".goal");
const improvements = document.querySelectorAll(".improvements");
const improvementDestroy = document.querySelectorAll(".improvement-destroy");
let fired = false;

let timeout = null;

if (typeof(kpiDescription) !== 'undefined') {
  kpis.forEach(theme => {
    Array.prototype.forEach.call(theme.children, kpi => {
      if (kpi.children[2] !== undefined) {
        kpi.children[2].children[1].children[0].addEventListener('keydown', function keyDownK(e){
          const target = event.currentTarget;
          const currentLength = target.value.length;
          console.log(currentLength);
          if (currentLength === 0 && e.key === 'Backspace' && fired === false) {
            kpi.children[2].children[5][1].click();
            kpi.children[2].children[1].children[0].removeEventListener("keydown", keyDownK);
          }
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            kpi.submit()
          }, 2000);
          event.preventDefault;
        })
      }
    })
  })
}

if (typeof(improvementDescription) !== 'undefined') {
  improvements.forEach(theme => {
    Array.prototype.forEach.call(theme.children, improvement => {
      if (improvement.children[2] !== undefined && improvement.children !== undefined && improvement.children[2].children[1] !== undefined) {
        improvement.children[2].children[1].children[0].addEventListener('keydown', function keyDownI(e){
          const target = event.currentTarget;
          const currentLength = target.value.length;
          console.log(currentLength)
          if (currentLength === 0 && e.key === 'Backspace') {
              improvement.children[2].children[5][1].click()
               kpi.children[2].children[1].children[0].removeEventListener("keydown", keyDownI);
          }
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            improvement.submit()
          }, 2000);
          event.preventDefault;
        })
      }
    })
  })
}

