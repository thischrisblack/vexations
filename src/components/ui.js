let ui;

export default ui = {
    tempo: document.getElementById('tempo'),
    slider: document.getElementById('tempo-slider'),
    timer: document.getElementById('timer'),
    counter: document.getElementById('counter'),
    update: function(performance, completed = 0, progress = 0) {
        this.tempo.innerHTML = performance.tempo;
        this.slider.value = performance.tempo;
        this.timer.innerHTML = performance.timeString(performance.duration() - progress + 1000);
        this.counter.innerHTML = completed;
        // this.counter.innerHTML = completed + 1 > performance.repetitions ? performance.repetitions : completed + 1;
    }
}