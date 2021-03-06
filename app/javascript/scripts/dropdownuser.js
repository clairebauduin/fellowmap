$(document).on('ready turbolinks:load', function() {

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdownNavbar = document.querySelectorAll(".dropdown-navbar")[0]
const userIcon = document.querySelectorAll(".user-icon")[0]

if(typeof(userIcon) != "undefined") {
  userIcon.addEventListener("click", function(event){
    dropdownNavbar.classList.toggle("dropdown-show");
    event.preventDefault();
  })
    window.addEventListener("click", function(event){
    if (!event.target.matches(".user-icon")) {
      dropdownNavbar.classList.remove("dropdown-show");
    }
  })
}

})
