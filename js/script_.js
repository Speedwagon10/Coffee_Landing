const imgs = [
    'Images/coffeeShop.png',
    'Images/coffeeHeart.png'
];
const delay = 5000;
let currentIndex = 0;

setInterval(function() {
    document.getElementById('intro_imgs').src = imgs[currentIndex];
    currentIndex++;
    if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }
}, delay);

const animItems = document.querySelectorAll('.anim_item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

}

setTimeout(() => {
    animOnScroll();
}, 300);


let checkBox = document.getElementById('checkbox_menu');
let menu = document.getElementById('menu');

checkBox.addEventListener('change', function() {
    if (this.checked) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';  
    }
});


let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("feedback_slider_item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) [
        slideIndex = slides.length
    ]

    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

