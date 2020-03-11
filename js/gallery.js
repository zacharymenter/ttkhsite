const modal = document.getElementById('my-modal');

const imgArr = document.getElementsByClassName('gallery-img');
const modalImg = document.getElementById('modal-img');

var j;
for (j = 0; j < imgArr.length; j++) {
    const img = imgArr[j];
    img.addEventListener('click', e => {
        modal.classList.toggle('on');
        modalImg.src = img.src;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    });
}
                
const span = document.getElementsByClassName('close-cursor')[0];
        
span.addEventListener('click', () => {
    modal.classList.remove('on');
});

document.addEventListener('click', () => {
    modal.classList.remove('on')
});