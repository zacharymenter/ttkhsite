const modal = document.getElementById("my-modal");

const imgArr = document.getElementsByClassName("gallery-img");
const modalImg = document.getElementById("modal-img");

function displayImg(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
}

var j;
for (j = 0; j < imgArr.length; j++) {
    const img = imgArr[j];
    img.onclick = () => displayImg(img);
}
                
const span = document.getElementsByClassName("close-cursor")[0];
        
span.onclick = function() {
    modal.style.display = "none";
} 