window.addEventListener('scroll', function() {
    
    const navWrapper = document.getElementById("navigasiWrapper");
    const logo = document.getElementById("logoNone");
    const windowScroll = window.scrollY;

    if ( windowScroll > 80 ) {
        navWrapper.classList.add('positionSticky');
        logo.classList.add('logoNone');
    }else {
        navWrapper.classList.remove('positionSticky');
        logo.classList.remove('logoNone');
    }

});