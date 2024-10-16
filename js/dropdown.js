const dropdown = document.getElementById("eventDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const textColor = document.querySelector(".text-color");


dropdown.addEventListener('mouseover', function() {
    
    dropdownMenu.classList.add("show-dropdown");

});

dropdown.addEventListener('mouseout', function() {

    dropdownMenu.classList.remove("show-dropdown");

});

dropdownMenu.addEventListener('mouseover', function() {

    textColor.classList.add('changeColor');

});

dropdownMenu.addEventListener('mouseleave', function() {

    textColor.classList.remove('changeColor');

});