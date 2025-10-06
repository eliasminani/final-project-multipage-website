// ===== Hero Section Animation =====
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    setTimeout(() => {
      hero.style.transition = 'all 1s ease';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

// ===== Gallery Lightbox =====
const galleryImages = document.querySelectorAll('.gallery img');
if (galleryImages.length > 0) {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.classList.add('active');
      const img = document.createElement('img');
      img.src = image.src;
      while (lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Optional on-page message (instead of alert)
    const message = document.createElement('p');
    message.textContent = '✅ Thank you for reaching out! Your message has been received.';
    message.style.color = 'green';
    message.style.marginTop = '10px';
    this.appendChild(message);

    setTimeout(() => message.remove(), 4000);
    this.reset();
  });
}
