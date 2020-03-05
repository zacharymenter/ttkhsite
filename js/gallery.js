var modal = document.getElementById("my-modal");
var img = document.getElementById("test");
var modalImg = document.getElementById("modal-test");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
                
var span = document.getElementsByClassName("close-cursor")[0];
        
span.onclick = function() {
    modal.style.display = "none";
} 