
const drumButtons = document.querySelectorAll('.drum');


drumButtons.forEach(button => {
    button.addEventListener('click', () => playSound(button.dataset.key));
});

window.addEventListener('keydown', (event) => {
    const key = event.keyCode;
    playSound(key);
});


function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    const button = document.querySelector(`button[data-key="${key}"]`);
    button.classList.add('playing');
    setTimeout(() => button.classList.remove('playing'), 100);
}
