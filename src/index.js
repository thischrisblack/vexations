import style from "./main.css";
import performance from './components/performance';
import ui from './components/ui';
import music from './components/music';
import vexate from './components/vexate';
import paginator from './components/paginator';
import playButton from './components/play';

(function init() {

    console.log(window.devicePixelRatio);

    // Sets the .part div in the .music div, with proper width.
    music.place(performance.repetitions);

    // Update UI with initial performance settings
    ui.update(performance);

    // Append correct number of sheet music images (default 840)
    paginator(performance);

    // Listen for tempo change event.
    ui.slider.oninput = function() {
        performance.tempo = ui.slider.value;
        ui.update(performance);
    }

    // Counter for play button clicks
    var clicked = 0;

    // Update playbutton text
    playButton(clicked);

    // Listen for play button events
    ui.playButton.addEventListener('click', e => {

        // Third click is a reset.
        if (clicked >= 2) {                
            location.reload(false);
        } else {
            clicked++;

            // Update UI elements
            ui.counterDiv.style.opacity = 1;
            playButton(clicked);
            ui.slider.disabled = true;

            // Handle animation
            performance.playing = !performance.playing;
            if (performance.playing) {     
                vexate(performance, music, ui);
            }
        }
    });

})();