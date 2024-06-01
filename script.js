document.getElementById('playSoundButton').addEventListener('click', function() {
    var audio = new Audio('sound.mp3');
    audio.play();
});