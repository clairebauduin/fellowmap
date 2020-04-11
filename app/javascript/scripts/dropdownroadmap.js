/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdownRoadmap = document.querySelectorAll(".dropdown-roadmap")[0]
const roadmapName = document.querySelectorAll(".roadmap-name")[0]

if(typeof(roadmapName) != "undefined") {
  roadmapName.addEventListener("click", function(event){
    dropdownRoadmap.classList.toggle("dropdown-show");
    event.preventDefault();
  })
}
