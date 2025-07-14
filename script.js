let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const dots = document.querySelector('.dots');

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => goToSlide(i));
      dots.appendChild(dot);
    }
    updateDots();

    function updateDots() {
      document.querySelectorAll('.dots span').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    function goToSlide(index) {
      currentSlide = index;
      if (currentSlide < 0) currentSlide = totalSlides - 1;
      if (currentSlide >= totalSlides) currentSlide = 0;
      slides.style.transform = `translateX(-${currentSlide * 310}px)`;
      updateDots();
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 3000);