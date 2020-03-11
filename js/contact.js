const submit = document.getElementById('submit-button');
const reset = document.getElementById('reset-button');
const paragraph = document.getElementById('thank');

submit.addEventListener('click', () => {
    paragraph.style.display = 'block';
});

reset.addEventListener('click', () => {
    paragraph.style.display = 'none';
});