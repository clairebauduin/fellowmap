/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdownRoadmap = document.querySelectorAll(".dropdown-roadmap")[0]
const roadmapName = document.querySelectorAll(".roadmap-name-ellipsis")[0]

if(typeof(roadmapName) != "undefined") {
  roadmapName.addEventListener("click", function(event){
    dropdownRoadmap.classList.toggle("dropdown-show");
    event.preventDefault();
  })
    window.addEventListener("click", function(event){
    if (!event.target.matches(".roadmap-name-ellipsis")) {
      dropdownRoadmap.classList.remove("dropdown-show");
    }
  })
}
