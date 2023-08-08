

// toggle nav-links in mobile view
function toggleNavLinks() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-nav');
  }
  

  // slider autoplay 
  const slider = document.querySelector(".slider");
  let currentIndex = 1;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 6;
    updateSliderPosition();
  }

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 16.666}%`;
  }

  setInterval(nextSlide, 2000);



  // slider 2  -- desktop view

  const slider2 = document.querySelector('.slider2');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const slideWidth = 20; // Percentage width of each slide
  let currentSlide = 0;

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 3;
    slider2.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 3) % 3;
    slider2.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  });

// slider 2 -- mobile view 

const slider3 = document.querySelector('.slider2');
const paginationDots = document.querySelectorAll('.pagination-dot');
let currentSlideMobileView = 0;

function goToSlide(slideIndex) {
  currentSlideMobileView = slideIndex;
  slider3.style.transform = `translateX(-${currentSlideMobileView * 35}%)`;

  paginationDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideMobileView);
  });
}



// sliderAccesories slide 

const sliderAccessories = document.querySelector('.accessories-slide');
const paginationDotsAccessories = document.querySelectorAll('.pagination-dot-accessories');
let currentSlideAccessoriesMobileView = 0;

function goToAccessoriesSlide(slideIndex) {
  currentSlideAccessoriesMobileView = slideIndex;
  sliderAccessories.style.transform = `translateX(-${currentSlideAccessoriesMobileView * 35}%)`;

  paginationDotsAccessories.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideAccessoriesMobileView);
  });
}









