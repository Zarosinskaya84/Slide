import  Carousel  from './swipe-carousel.js';

const carousel = new Carousel({
    containerID: '#myCarousel', 
    // slideID: '.item', 
    interval: 3000, 
    isPlaying: false
 });

carousel.init();