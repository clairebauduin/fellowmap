const fields = document.querySelectorAll(".form-control")

if (typeof(fields) !== 'undefined') {
  fields.forEach(field =>  {
    field.addEventListener("click", function(){
      field.style.background = "white";
    })
    field.addEventListener("keydown", function(key) {
      if ((key.which == 9) && (field.value !== "")) {
        field.style.background = "white";
      }
    })
    window.addEventListener("click", function(){
      if (field.value == "") {
        field.style.background = null;
      }
    })
  })
}
