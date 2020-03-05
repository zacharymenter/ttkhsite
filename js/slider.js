const urls = [
    'images/TTKH-5.jpg',
    'images/thebarn.jpg',
    'images/bjmf1.jpg',
    'images/mixer.jpg',
];

let i = 0;
      
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