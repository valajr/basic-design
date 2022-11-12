let slide_number = 0;
let slides = document.getElementsByClassName('slide');

function passSlide(side) {
    slide_number += side;
    if(slide_number > slides.length - 1)
        slide_number = 0;
    else if(slide_number < 0)
        slide_number = slides.length -1;

    for(let i=0; i<slides.length; i++) {
        if(i == slide_number)
            slides[i].style.display = 'block';
        else {
            slides[i].style.display = 'none';
            if(i < slide_number)
                slides[i].setAttribute('class', 'slide slide-before');
            else 
                slides[i].setAttribute('class', 'slide slide-after');
        }
    }
}

function initializeSlides() {
    slides[slide_number].style.display = 'block';
    slides[slide_number + 1].setAttribute('class', 'slide slide-after');
    slides[slides.length -1].setAttribute('class', 'slide slide-after');
}

initializeSlides();