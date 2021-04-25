// Animation control for the sheet music.
export default function vexate(performance, music, ui) {
    let startTime;
    const play = window.requestAnimationFrame(scroll);

    function scroll(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        // Scroll the music.
        const progress = timestamp - startTime;
        music.element.style.transform = 'translateX(-' + progress / (1 / performance.scrollSpeed) + 'px)';

        // Update "plays completed" in the UI.
        const repsCompleted = Math.floor(progress / (performance.duration / performance.repetitions));
        ui.update(performance, repsCompleted, progress);

        if (performance.playing && repsCompleted < performance.repetitions) {
            window.requestAnimationFrame(scroll);
        } else {
            // If stop button clicked, or performance repetitions exceed goal, stop.
            startTime = null;
            window.cancelAnimationFrame(play);
        }
        return;
    }
}
