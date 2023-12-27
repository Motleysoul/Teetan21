const prevBtn = document.querySelector('.slider__prev-btn'),
    nextBtn = document.querySelector('.slider__next-btn'),
    sliderItem = document.querySelector('.slider__item'),
    sliderLine = document.querySelector('.slider__line'),
    sliderLenght = (document.querySelectorAll('.slider__item').length) - 1,
    sliderCurrent = document.querySelector('.slider__current');

let itemWidth = sliderItem.offsetWidth;
let maxWidth = (itemWidth * sliderLenght) + (sliderLenght * 20);
let offset = 0;

function transit() {
    sliderLine.style.transform = `translateX(${-offset}px)`;
};

 nextBtn.addEventListener('click', function(){
    offset = offset+itemWidth;
    if (offset > maxWidth) {
        offset = maxWidth;
        nextBtn.classList.add('slider__btn--inactive');
        prevBtn.classList.remove('slider__btn--inactive');
        sliderCurrent.style.left = '259px';
    } else if (offset > 0 && offset < maxWidth) {
        prevBtn.classList.remove('slider__btn--inactive');
        nextBtn.classList.remove('slider__btn--inactive');
        sliderCurrent.style.left = '130px';
    };
    transit();
    console.log(offset);
 });

 prevBtn.addEventListener('click', function(){
    offset = offset-itemWidth;
    if (offset < 0) {
        offset = 0;
        prevBtn.classList.add('slider__btn--inactive');
        nextBtn.classList.remove('slider__btn--inactive');
        sliderCurrent.style.left = '0';
    } else if (offset > 0 && offset < maxWidth) {
        prevBtn.classList.remove('slider__btn--inactive');
        nextBtn.classList.remove('slider__btn--inactive');
        sliderCurrent.style.left = '130px';
    };
        transit();
        console.log(offset);
 });
