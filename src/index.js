import style from "./main.css";

var performance = {
    playing: false,
    repetitions: 840,
    tempo: 46,
    duration: function() {
        return 52 * this.repetitions / this.tempo * 60 * 1000
    },
    timeString: function(time) {
        var seconds = parseInt((time/1000)%60)
            , minutes = parseInt((time/(1000*60))%60)
            , hours = parseInt((time/(1000*60*60)));
        return hours + ' hour' + (hours !== 1 ? 's' : '') + ', ' + minutes + ' minute' + (minutes !== 1 ? 's' : '') + ', ' + seconds + ' seconds.';
    }
}

var ui = {
    tempo: document.getElementById('tempo'),
    slider: document.getElementById('tempo-slider'),
    timer: document.getElementById('timer'),
    counter: document.getElementById('counter'),
    update: function(performance, completed = 0, progress = 0) {
        this.tempo.innerHTML = performance.tempo;
        this.slider.value = performance.tempo;
        this.timer.innerHTML = performance.timeString(performance.duration() - progress);
        this.counter.innerHTML = completed;
    }
}

var music = {
    element: document.querySelector('.part'),
    margin: screen.width / 2,
    width: 6800 * performance.repetitions,
    place: function() {
        this.element.style.left = this.margin + 'px';
        this.element.style.width = this.width + 'px';
    }
}

// Animation function
function scroll(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    var scrollSpeed = 6800 * performance.repetitions / performance.duration();
    music.element.style.transform = 'translateX(-' + (progress / ( 1 / scrollSpeed )) + 'px)';
    var repsCompleted = Math.floor(progress / (performance.duration() / performance.repetitions));
    ui.update(performance, repsCompleted, progress);

    if (performance.playing && repsCompleted < performance.repetitions) {
        window.requestAnimationFrame(scroll);
    } else {
        start = null;
        window.cancelAnimationFrame(play);
    }
    return;
}


// Animation properties
var start;
var play;

(function vexate() {

    music.place();

    ui.update(performance);

    ui.slider.oninput = function() {
        performance.tempo = ui.slider.value;
        ui.update(performance);
    }

    window.addEventListener('keydown', e => {
        if (e.key == ' ') {
            performance.playing = !performance.playing;
            ui.slider.disabled = performance.playing;
            if (performance.playing) {                
                play = window.requestAnimationFrame(scroll);
            }
        }
    });

})();