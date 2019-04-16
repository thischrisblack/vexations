import style from "./main.css";

const repetitions = 840;
// Animation properties
var start = null;

var vex;

var PerformanceSettings = function(tempo = 46) {

    this.playing = false;
    this.tempo = tempo;
    this.duration = 52 * repetitions / tempo * 60 * 1000;

    this.update = function(newTempo) {
        this.tempo = newTempo;
        this.duration = 52 * repetitions / newTempo * 60 * 1000;
    }

    return {
        tempo: this.tempo,
        duration: this.duration,
        change: this.update
    }
}

var PerformanceDisplay = function() {
    return {
        tempo: document.getElementById('tempo'),
        slider: document.getElementById('tempo-slider'),
        timer: document.getElementById('timer'),
        counter: document.getElementById('counter')
    }
}

var updateUI = function(tempo, duration, completed = 0) {
    ui.tempo.innerHTML = tempo;
    ui.slider.value = tempo;
    ui.timer.innerHTML = msToTime(duration);
    ui.counter.innerHTML = completed;
}

var Part = function () {
    return {
        element: document.querySelector('.part'),
        margin: screen.width / 2,
        width: 6800 * repetitions
    }
}

var placePart = function (part) {
    part.element.style.left = part.margin + 'px';
    part.element.style.width = part.width + 'px';
}

// INIT
var performance = new PerformanceSettings();
var ui = new PerformanceDisplay();
var part = new Part();
placePart(part);
updateUI(performance.tempo, performance.duration);
ui.slider.oninput = function() {
    // Send to model / view funtions.
    performance.change(ui.slider.value);
    updateUI(performance.tempo, performance.duration);
}

window.addEventListener('keydown', e => {
    if (e.key == ' ') {
        performance.playing = !performance.playing;
        if (performance.playing) {
            vex = window.requestAnimationFrame(scroll);
        }
    }
});

// Animation function
function scroll(timestamp) {
    if (!start) start = timestamp;

    var progress = timestamp - start;

    var scrollSpeed = 6800 * repetitions / performance.duration;

    part.element.style.transform = 'translateX(-' + (progress / (1 / scrollSpeed)) + 'px)';

    var repsCompleted = Math.floor(progress / (performance.duration / repetitions));

    updateUI(performance.tempo, performance.duration - progress, repsCompleted);

    if (performance.playing && repsCompleted < repetitions) {
        window.requestAnimationFrame(scroll);
    } else {
        start = undefined;
        window.cancelAnimationFrame(vex);
    }
    return;
}

// Helper functions
function msToTime(duration) {
    var seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60)));

    return hours + ' hour' + (hours !== 1 ? 's' : '') + ', ' + minutes + ' minute' + (minutes !== 1 ? 's' : '') + ', ' + seconds + ' seconds.';
}



// // Performance properties
// let playing = false;
// let tempo = 46;
// let repetitions = 840;
// /**
//  * Find performance duration in seconds
//  * 52 = total beats in one repetition
//  * 840 = number of repetitions
//  */

// document.getElementById('timer').innerHTML = msToTime(performanceDuration + 1000);