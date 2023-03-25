

    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    
    const buttonLeft = document.querySelector('.carousel-button-left');
    const buttonRight = document.querySelector('.carousel-button-right');
    
    let counter = 0;
    const size = carouselImages[0].clientWidth * 3 + 20;
    /*
    const container = document.querySelector('.carousel-container');
    container.style.width = size + 'px';*/
   

    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    buttonRight.addEventListener('click', () => {
      if (counter >= carouselImages.length / 3 - 1) return;
      carouselSlide.style.transition = 'transform 0.5s ease-in-out';
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      console.log('counter:', counter);
    });
    
    buttonLeft.addEventListener('click', () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = 'transform 0.5s ease-in-out';
      counter--;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      console.log('counter:', counter);
    });
    
    carouselSlide.addEventListener('transitionend', () => {
      if (carouselImages[counter * 3].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length / 3 - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }
      if (carouselImages[counter * 3].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length / 3 - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }
    });
    
    
    