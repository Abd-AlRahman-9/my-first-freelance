

// ><><><><><><><> Background ><><><><><><><>

  // Array of background images
  var images = [
    'assets/Imgs/background1.jfif',
    'assets/Imgs/background2.jfif',
    'assets/Imgs/background3.jfif',
    'assets/Imgs/background4.jfif',
    // Add as many images as you like
  ];

  var currentImageIndex = 0;

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % (images.length);
    document.querySelector('.background-image').style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
  }

  // Change background image every 3 seconds
  setInterval(changeBackgroundImage, 3000);

  // Initial background image setup
  window.onload = function() {
    document.querySelector('.background-image').style.backgroundImage = 'url(' + images[0] + ')';
  };
// ><><><><><><><> Background ><><><><><><><>

// ><><><><><><><> Cards Pics ><><><><><><><>
var clients = [
  // '../assets/Imgs/background1.jpeg',
  'assets/Imgs/client1.jpg',
  'assets/Imgs/client2.jpg',
  'assets/Imgs/client3.jpg',
  'assets/Imgs/client4.jpg',
  'assets/Imgs/client5.jpg',
  // Add as many images as you like
];
// ><><><><><><><> Cards Pics ><><><><><><><>
// ><><><><><><><> writing effect ><><><><><><><>
var str = "UNICERT";
var i = 0;

var word = document.querySelector('.caption h2');

function addCharacter() {
  if (i < str.length) {
    word.textContent += str.charAt(i);
    i++;
  } else {
    word.textContent = "";
    i=0;
  }
}

var interval = setInterval(addCharacter, 500); // 500ms interval

// ><><><><><><><> Animate Number ><><><><><><><>
function animateNumber(element, myNumber, duration) {
  let current = 0;
  const stepTime = Math.abs(Math.floor(duration / (myNumber)));
  const timer = setInterval(() => {
    current += 1;
    element.textContent = current;
    if (current == myNumber) {
      clearInterval(timer);
    }
  }, stepTime);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const target = entry.target;

      const myNumber = target.dataset.number;

      animateNumber(target, parseInt(myNumber, 10), 1000); // 1 seconds duration

      observer.unobserve(target);
    }
  });
 }, { threshold: 1.0 });


const elementsToAnimate = [
  { selector: '.num1', number: 914 },
  { selector: '.num2', number: 520 },
  { selector: '.num3', number: 874 },
];


elementsToAnimate.forEach(item => {
  const element = document.querySelector(item.selector);
  if (element) {
    element.dataset.number = item.number; 
    observer.observe(element);
  }
});

// ><><><><><><><> Animate Number ><><><><><><><>
// ><><><><><><><> Hovering For Icons ><><><><><><><>

if (window.matchMedia('(max-width: 992px)').matches) {
  var span = document.querySelector('.navbar-links > span:last-child');
  
  var dropdowns = document.querySelectorAll('.navbar-links .dropdown');

  var dropdownVisible = false;

  function toggleDropdowns() {
    dropdownVisible = !dropdownVisible; 
    dropdowns.forEach(function(dropdown) {
      dropdown.style.display = dropdownVisible ? 'block' : 'none';
    });
    span.style.opacity = dropdownVisible ? '0' : '1';
  }
  
  span.addEventListener('click', toggleDropdowns);
}

// ><><><><><><><> Hovering For Icons ><><><><><><><>
console.log(window.screen.width)