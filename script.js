const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton=document.querySelector('.carousel_button--right');
const prevButton= document.querySelector('.carousel_button--left');
const dotsNav= document.querySelector('.carousel_nav');
const dots= Array.from(dotsNav.children);

const slideWidth= slides[0].getBoundingClientRect().width;

// slides[0].style.left= slideWidth * 0 + 'px';
// slides[1].style.left= slideWidth * 1 + 'px';
// slides[2].style.left= slideWidth * 2 + 'px';
const setSlidesPosition=(slide, index) => {
    slide.style.left= slideWidth * index + 'px';
};
slides.forEach(seSlidePosition);

nextButton.addEventListener('click', e => {
    const currentSlide =track.document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform= 'translateX(' + amountToMove + ')';

})
