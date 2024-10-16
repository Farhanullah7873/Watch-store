
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar-bg');
        if (window.scrollY >4 ) {  // Change the scroll position value as needed
            navbar.classList.add('bg-black');
        } else {
            navbar.classList.remove('bg-black');
        }
    });
