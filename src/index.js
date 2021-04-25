import style from './main.css';
import performance from './components/performance';
import ui from './components/ui';
import music from './components/music';
import vexate from './components/vexate';
import paginator from './components/paginator';
import setPlayButtonText from './components/set-play-button-text';

(function init() {
    // Sets the placement and width of the part div.
    music.init(performance.repetitions);

    // Update UI with initial performance settings
    ui.update(performance);

    // Append correct number of sheet music images (default 840)
    paginator(performance);

    // Listen for tempo change event.
    ui.slider.oninput = () => {
        performance.tempo = ui.slider.value;
        ui.update(performance);
    };

    // Counter for play button clicks
    let timesClicked = 0;

    // Update playbutton text
    setPlayButtonText(timesClicked);

    // Listen for play button events
    ui.playButton.addEventListener('click', () => {
        // Third click is a reset.
        if (timesClicked >= 2) {
            location.reload();
        } else {
            timesClicked++;

            // Update UI elements
            ui.counterContainer.style.opacity = 1;
            setPlayButtonText(timesClicked);
            ui.slider.disabled = true;

            // Start animation
            performance.playing = !performance.playing;
            if (performance.playing) {
                performance.duration = performance.getDuration();
                performance.scrollSpeed = (6800 * performance.repetitions) / performance.duration;
                vexate(performance, music, ui);
            }
        }
    });
})();
