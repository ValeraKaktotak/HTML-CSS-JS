var sliderImages = document.querySelectorAll('.my_slider .slider_image');
var sliderPrevBtn = document.getElementById('prev_btn');
var sliderNextBtn = document.getElementById('next_btn');
var currentIndex = 0;

function actionPrev() {
    var currentItem = sliderImages[currentIndex];
    currentItem.classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = sliderImages.length - 1;
    } else {
        currentIndex--;
    }
    currentItem = sliderImages[currentIndex];
    currentItem.classList.add('active');

}

function actionNext() {
    var currentItem = sliderImages[currentIndex];
    currentItem.classList.remove('active');
    if (currentIndex === sliderImages.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    currentItem = sliderImages[currentIndex];
    currentItem.classList.add('active');
}

sliderPrevBtn.addEventListener('click', actionPrev);
sliderNextBtn.addEventListener('click', actionNext);
