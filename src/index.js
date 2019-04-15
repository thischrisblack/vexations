import style from "./main.css";

const part = document.querySelector('.part');

let playing = false;

let partMargin = screen.width / 5 * 4;

part.style.left = partMargin + 'px';

function startPlaying() {
    playing = true;
    var scroller = setInterval(function () {
        partMargin -= 1;
        part.style.left = partMargin + 'px';
        if (playing === false) clearInterval(scroller);
    }, 10);
}


window.addEventListener('keyup', e => {
    if (e.code == 'Space') {
        if (!playing) {
            playing = !playing;
            startPlaying();
        } else {
            playing = !playing;
            // clearInterval(scroller);
        }
        
        console.log(playing);
    }
});