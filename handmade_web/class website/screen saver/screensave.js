// animations.js

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function startAnimation(0) {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    if (scrollPosition >= window.innerHeight / 2) {
        image1.style.animation = 'scrollDown 200s linear infinite';
        image2.style.animation = 'scrollRight 200s linear infinite';
        image3.style.animation = 'scrollLeft 200s linear infinite';
    }
}

window.addEventListener('scroll', startAnimation);

// Define the keyframes separately if necessary
