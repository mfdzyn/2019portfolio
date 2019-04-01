const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector ('.menu-nav');
    const menuNav = document.querySelectorAll('.menu-nav li');
    
    burger.addEventListener('click',() => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
         /* menuNav.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
               link.style.animation = 'menuNavFade 0.5s ease forwards ${index / 7 + 1.5}s' ;
            }
        }); */

        //Burger Animation
        burger.classList.toggle('toggle');
    });

} 

navSlide();  