const loaderContainer = document.querySelectorAll('.loader-container')[0]
const loaderSignup = document.querySelectorAll('.loader-signup')[0]
const loaderRocket = document.querySelectorAll('.loader-rocket')[0]

// si on a la div Rocket + le user n'a pas refresh
if(typeof(loaderRocket) != "undefined" && performance.navigation.type != 1) {
  loaderContainer.classList.toggle("loader-show");
  setTimeout(function(){
    loaderContainer.classList.remove("loader-show");
  }, 3000);
}

// si on a la div signup + le user n'a pas refresh
if(typeof(loaderSignup) != "undefined" && performance.navigation.type != 1) {
  loaderContainer.classList.toggle("loader-show");
  setTimeout(function(){
    loaderContainer.classList.remove("loader-show");
  }, 3000);
}

