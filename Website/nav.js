const navSlide = () => {
    const grey = document.getElementById('greyout');
    const hamburger = document.querySelector('.hamburger');
    const link = document.querySelectorAll('.nav-item');
    const nav = document.querySelector('.nav-list');
    var isGrey = true;

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if(isGrey === true) {
            grey.style.display = "block";
            isGrey = false;
        } else {
            grey.style.display = "none";
            isGrey = true;
        }

        hamburger.classList.toggle('x');
    });

    link.forEach(link => {
        link.addEventListener('click', () => {
            isGrey = false;
            nav.classList.toggle('nav-active');
            if(isGrey === true) {
                grey.style.display = "block";
                isGrey = false;
            } else {
                grey.style.display = "none";
                isGrey = true;
            }
            
            hamburger.classList.toggle('x');
        });
    });
}

navSlide();
