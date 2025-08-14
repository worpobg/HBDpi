let currentSlide = 0;
const slides = document.querySelectorAll('.mySlides');

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');
    if (index === currentSlide) {
      slide.classList.add('active');
    } else if (index === currentSlide - 1) {
      slide.classList.add('prev');
    } else if (index === currentSlide + 1) {
      slide.classList.add('next');
    }
  });
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlides();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
}

let touchStartX = 0;
document.querySelector('.slideshow-container').addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
});
document.querySelector('.slideshow-container').addEventListener('touchend', function (e) {
  let touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  } else if (touchEndX - touchStartX > 50) {
    prevSlide();
  }
});

updateSlides();
