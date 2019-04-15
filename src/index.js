import style from "./main.css";

const part = document.querySelector('.part');

let playing = false;

let partMargin = screen.width / 2;

let bpm = 46;

let repetitions = 36;

/**
 * Find performance duration in seconds
 * 52 = total beats in one repetition
 * 840 = number of repetitions
 */
let performanceDuration = 52 * repetitions / bpm * 60;

// Part div width in px
let partWidth = 6800 * repetitions;

// Part will scroll at this px/sec
let scrollSpeed = partWidth / performanceDuration;

var start = null;
part.style.left = partMargin + 'px';
part.style.width = partWidth + 'px';

function scroll(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    var timeRemaining = msToTime((performanceDuration * 1000) - progress + 1000);
    var repsCompleted = Math.floor(progress / (performanceDuration / repetitions * 1000));
    part.style.transform = 'translateX(-' + (progress / (1000 / scrollSpeed)) + 'px)';
    document.getElementById('timer').innerHTML = timeRemaining;
    document.getElementById('counter').innerHTML = repsCompleted;
    if (playing && repsCompleted < repetitions) {
        window.requestAnimationFrame(scroll);
    } else {
        start = undefined;
    }
}

function msToTime(duration) {
    var seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60)));

    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ' hour' + (hours !== 1 ? 's' : '') + ', ' + minutes + ' minute' + (minutes !== 1 ? 's' : '') + ', ' + seconds + ' seconds.';
}

window.addEventListener('keyup', e => {
    if (e.key == ' ') {
        if (!playing) {
            window.requestAnimationFrame(scroll);
        }
        playing = !playing;
        
        console.log(playing);
    }
});