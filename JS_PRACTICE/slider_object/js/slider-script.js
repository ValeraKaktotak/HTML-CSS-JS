function Slider(){
    this.sliderImages = null;
    this.sliderPrevBtn = null;
    this.sliderNextBtn = null;
    this.currentIndex = 0;

    this.sliderInit = function (el) {
        // this.sliderPrevBtn.addEventListener('click', this.actionPrev.bind(this));
        // this.sliderNextBtn.addEventListener('click', this.actionNext.bind(this));

        // this.sliderPrevBtn.addEventListener('click', this.actionPrev);
        // this.sliderNextBtn.addEventListener('click', this.actionNext);

        this.idElem = document.querySelector(el)
        this.sliderImages = this.idElem.querySelectorAll('.slider_image');
        this.sliderPrevBtn = this.idElem.querySelector('.prev_btn');
        this.sliderNextBtn = this.idElem.querySelector('.next_btn');

        var that = this;

        this.sliderPrevBtn.addEventListener('click', function (e) {
            that.actionPrev(e);
        });

        this.sliderNextBtn.addEventListener('click', function (e) {
            that.actionNext(e);
        });
    }

    this.actionPrev = function (event) {
        var currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.remove('active');
        if (this.currentIndex === 0) {
            this.currentIndex = this.sliderImages.length - 1;
        } else {
            this.currentIndex--;
        }
        currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.add('active');

    }
    this.actionNext = function (event) {
        var currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.remove('active');
        if (this.currentIndex === this.sliderImages.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.add('active');
    }
}


//
// function Car(name){
//     debugger;
//     this.name = name;
//     this.start = function (){
//         console.log(this.name+' стартанула');
//     }
//
// }