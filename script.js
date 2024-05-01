function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
      greeting = 'Selamat Pagi';
    } else if (hours < 18) {
      greeting = 'Selamat Siang';
    } else {
      greeting = 'Selamat Malam';
    }
    document.getElementById('greeting').textContent = greeting;
  }
  
  function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('id-ID', options);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.querySelector('#carouselExampleIndicators');
    var slides = carouselElement.querySelectorAll('.carousel-item');
    var currentIndex = 0;
    var interval = 2000;

    function goToNextSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }
  
    function goToPrevSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
    }
  
    setInterval(goToNextSlide, interval);

    var nextControl = carouselElement.querySelector('.carousel-control-next');
    var prevControl = carouselElement.querySelector('.carousel-control-prev');
  
    nextControl.addEventListener('click', function(e) {
      e.preventDefault();
      goToNextSlide();
    });
  
    prevControl.addEventListener('click', function(e) {
      e.preventDefault();
      goToPrevSlide();
    });
  });
  
  
  updateGreeting();
  updateDateTime();
  setInterval(updateDateTime, 60000);
  