function playing(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from runnging all together
    audio.currentTime = 0 //rewind to start
    audio.play();
    key.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing');
    },80);
}
window.addEventListener('keydown',playing);

const keys = document.querySelectorAll('.key');
keys.forEach(element => {
    element.addEventListener('click', function(){
        var value = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${value}"]`);
        const key = document.querySelector(`.key[data-key="${value}"]`);
        audio.currentTime = 0 //rewind to start
        audio.play();  
        key.classList.add('playing');
        setTimeout(function(){
            key.classList.remove('playing');
        },80);
    });
});
 