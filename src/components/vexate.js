var start;
var play;
export default function vexate(performance, music, ui) {
    play = window.requestAnimationFrame(scroll);
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
}