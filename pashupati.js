function toggleDropdown(id) {
  const dropdown = document.getElementById(id).parentElement;
  dropdown.classList.toggle("active");

  // Close others if open
  document.querySelectorAll('.dropdown').forEach(item => {
    if (item !== dropdown) item.classList.remove('active');
  });
}

// Optional: Close menu when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('button')) {
    document.querySelectorAll('.dropdown').forEach(item => {
      item.classList.remove('active');
    });
  }
}

const images = [
    '_DSC0672.JPG',
    '_DSC0649.JPG',
    'teamphoto.jpg',
    'r&d.JPG',
    '_DSC0650.JPG'
];

let currentIndex = 0;
const sliderImg = document.getElementById('sliderImage');
const dotsContainer = document.getElementById('dotsContainer');

// Create dots
images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });
    dotsContainer.appendChild(dot);
});

function updateImage() {
    sliderImg.classList.remove('active');
    setTimeout(() => {
        sliderImg.src = images[currentIndex];
        sliderImg.classList.add('active');
        updateDots();
    }, 500);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Auto-slide
window.onload = () => {
    sliderImg.classList.add('active');
    setInterval(nextImage, 5000);
};
