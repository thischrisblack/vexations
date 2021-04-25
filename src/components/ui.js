let ui;
// Get UI element nodes, with funtion for updating the display.
export default ui = {
    tempo: document.getElementById('tempo'),
    slider: document.getElementById('tempo-slider'),
    timer: document.getElementById('timer'),
    counter: document.getElementById('counter'),
    counterContainer: document.querySelector('.counter-container'),
    playButton: document.getElementById('play'),
    update: function (performance, completed = 0, progress = 0) {
        this.tempo.innerHTML = performance.tempo;
        this.slider.value = performance.tempo;
        this.timer.innerHTML = performance.getTimeRemaining(
            (performance.duration || performance.getDuration()) - progress + 1000
        );
        this.counter.innerHTML = completed;
    },
};
