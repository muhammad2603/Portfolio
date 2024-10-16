const buttonOpen = document.getElementById("buttonOpen");
const gridContent = document.getElementById("galeriGridContent");

buttonOpen.addEventListener('click', function openGrid() {

    gridContent.classList.toggle("open");

});