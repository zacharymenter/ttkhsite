const urls = [
    'images/angp.jpg',
    'images/bjmf.jpg',
    'images/firetruck.jpg',
    'images/tobyweird.jpg',
];

// The index (serial number) of the current image
let i = 0;
      
// Grab handles onto HTML elements.
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const photo = document.getElementById('photo');
      
function advance(delta) {
    i = (i + delta + urls.length) % urls.length;
    photo.src = urls[i];
}

previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));
      
advance(0);