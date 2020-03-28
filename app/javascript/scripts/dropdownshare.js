/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdownShare = document.querySelectorAll(".dropdown-share")[0]
const shareIcon = document.querySelectorAll(".share-icon")[0]
const roadmapName = document.querySelectorAll(".roadmap-name")[0]
const dropdownRoadmap = document.querySelectorAll(".dropdown-roadmap")[0]
const btnCopy = document.getElementById("btn-copy")
const linkInput = document.querySelectorAll(".share-input")[0]
const alertCopy = document.querySelectorAll(".alert-copy")[0]

if(typeof(shareIcon) != "undefined") {
  shareIcon.addEventListener("click", function(event){
    dropdownRoadmap.classList.remove("show");
    dropdownShare.classList.toggle("dropdown-share-show");
    event.preventDefault();
  })
  roadmapName.addEventListener("click", function(event){
    dropdownShare.classList.remove("dropdown-share-show");
    dropdownRoadmap.classList.toggle("show");
    event.preventDefault();
  })
  btnCopy.addEventListener("click", function(event){
    linkInput.select();
    document.execCommand("copy");
    alertCopy.classList.toggle("alert-copy-show");
    event.preventDefault();
  })
}

window.addEventListener("click", function(event){
  if (!event.target.matches(".share-icon")
   && !event.target.matches(".dropdown-share")
   && !event.target.matches(".share-input")
   && !event.target.matches("#btn-copy")
   && !event.target.matches("#share-title")
   && !event.target.matches(".dropdown-roadmap")) {
    dropdownShare.classList.remove("dropdown-share-show");
    dropdownRoadmap.classList.remove("show");
  }
})

