// Open Menu
var toggleMobile = document.getElementById("toggleMobile");
var menuToggle = document.getElementById("menuToggle");
var closeButton = document.getElementById("toggleClose");

toggleMobile.addEventListener('click', function() {

    menuToggle.classList.toggle("show");

});

closeButton.addEventListener('click', function() {

    menuToggle.classList.remove("show");

});