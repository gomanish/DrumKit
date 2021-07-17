window.addEventListener('keydown',function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from runnging all together
    audio.currentTime = 0 //rewind to start
    audio.play();
    key.classList.add('playing');
});
 
const keys = document.querySelectorAll('.key');

function removeTranstion(e){
    if(e.propertyName !== 'transform') return; //skip if it not a transition
    this.classList.remove('playing');
}

keys.forEach(element => element.addEventListener('transitionend',removeTranstion));
