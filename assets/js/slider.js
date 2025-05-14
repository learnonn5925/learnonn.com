document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const cards = document.querySelectorAll('#customSlider .slider-card');

  function moveSlider(direction) {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    cards[currentIndex].classList.add('active');

    cards[currentIndex].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }

  window.moveSlider = moveSlider;
});
