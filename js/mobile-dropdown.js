const dropdownMbl = document.getElementById("dropdownMbl");
const menuDropdownMbl = document.getElementById('menuDropdownMbl');
const linkColor = document.getElementById("linkColor");
const iconColor = document.getElementById("iconColor");

dropdownMbl.addEventListener('click', function() {

    menuDropdownMbl.classList.toggle('open');
    linkColor.classList.toggle('changeColor');
    iconColor.classList.toggle('changeColor');

})