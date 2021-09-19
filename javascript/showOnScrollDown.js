$(document).scroll( function(){
    const header = document.querySelector('.header');

    const showOnScrollDown = function() {
        
        let y = window.scrollY;

        (y >= 250)
        ? header.classList.add('show-header')
        : header.classList.remove('show-header');
    }

    window.addEventListener("scroll", showOnScrollDown);
});