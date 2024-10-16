let buttonToggle = document.getElementById("buttonToggle");
const colorDark = document.querySelectorAll('#colorDark');
const menuDrop = document.getElementById("dropdownMenu");
const boxShadow = document.getElementById("navigasiWrapper");
const toggleMbl = document.getElementById("toggleMobile");

buttonToggle.addEventListener('click', function() {

    // Variable
    const containerNav = document.getElementById('navigasiWrapper');
    const contentWrapper = document.getElementById('contentWrapper');
    const footer = document.getElementById('footer');
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    
    // Memasukkan Class yang Akan berganti warna menjadi Dark

    // Button Dark
    buttonToggle.classList.toggle('buttonColor');

    // Navigasi
    containerNav.classList.toggle('dark-mode');
    containerNav.classList.toggle('box');
    menuDrop.classList.toggle('dark-mode');
    menuDrop.style.borderTopColor = "#252525";
    sun.classList.toggle("sunNone");
    moon.classList.toggle("moonBlock");
    toggleMbl.classList.toggle("dark-tgl-mbl");

    // Content
    contentWrapper.classList.toggle('dark-mode');

    // footer
    footer.classList.toggle('dark-mode');

    // Link color
    for(let i = 0;i < colorDark.length; i++) {
        if(i == 0) {
            colorDark[i].classList.toggle("activeDark");
        }else{
            colorDark[i].classList.toggle("color-dark");
        }
    }

});