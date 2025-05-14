document.addEventListener("DOMContentLoaded", function () {
  // Part 1: Include HTML files dynamically
  const includeElements = document.querySelectorAll('[data-include]');
  const includePromises = Array.from(includeElements).map(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (response.ok) {
        const content = await response.text();
        el.insertAdjacentHTML('afterend', content);
        el.remove();
      } else {
        console.error(`Error loading ${file}: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error loading ${file}: ${error}`);
    }
  });

  // Wait for all includes to complete before running additional scripts
  Promise.all(includePromises).then(() => {
    console.log("All includes loaded.");

    // Part 2: Scroll Animation for Sections
    const sections = document.querySelectorAll(".section-animate");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Part 3: Scroll Effect for Navbar Background
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      console.log("Navbar element found.");
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    } else {
      console.error("Navbar element not found after loading includes.");
    }

    // Part 4: Slider Initialization
    if (document.querySelector('#customSlider')) {
      console.log("Slider detected. Initializing slider arrows...");

      let currentIndex = 0;
      const cards = document.querySelectorAll('#customSlider .slider-card');
      const sliderContainer = document.querySelector('#customSlider');

      // Apply initial active styling to first card
      cards.forEach((card, index) => {
        card.style.transition = 'flex 0.8s ease-in-out';
        card.style.flex = index === 0 ? '0 0 40%' : '0 0 20%';
      });

      function moveSlider(direction) {
        cards[currentIndex].classList.remove('active');
        cards[currentIndex].style.flex = '0 0 20%';

        currentIndex = (currentIndex + direction + cards.length) % cards.length;

        cards[currentIndex].classList.add('active');
        cards[currentIndex].style.flex = '0 0 40%';

        // ✅ Smooth scroll horizontally only — no vertical jump
        setTimeout(() => {
          const activeCard = cards[currentIndex];
          const offsetLeft = activeCard.offsetLeft - sliderContainer.offsetLeft;
          sliderContainer.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
          });
        }, 100);
      }

      window.moveSlider = moveSlider;

      // Auto-slide every 5 seconds
      setInterval(() => {
        moveSlider(1);
      }, 2000);
    } else {
      console.log("Slider not found. Skipping slider init.");
    }

    // ✅ Part 5: Highlight active nav link based on URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath || (linkPath === '/' && currentPath === '/index.html')) {
        link.classList.add('active');
      }
    });

  });
});
