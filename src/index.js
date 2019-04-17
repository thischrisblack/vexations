import style from "./main.css";
import performance from './components/performance';
import ui from './components/ui';
import music from './components/music';
import vexate from './components/vexate';
import numberer from './components/numberer';
import play from './components/play';

// Animation properties

(function init() {

    music.place(performance.repetitions);

    ui.update(performance);

    // numberer(performance);

    ui.slider.oninput = function() {
        performance.tempo = ui.slider.value;
        ui.update(performance);
    }

    var clicked = 0;

    play(clicked);

    ui.playButton.addEventListener('click', e => {
        if (clicked >= 2) {                
            location.reload(false);
        } else {
            clicked++;
            ui.counterDiv.style.opacity = 1;
            play(clicked);
            ui.slider.disabled = true;
            performance.playing = !performance.playing;
            if (performance.playing) {     
                vexate(performance, music, ui);
            }
        }

        // // If click is not on tempo slider
        // if (!e.target.closest('#tempo-slider')) {
        //     if (clicked >= 2) {                
        //         location.reload(false);
        //     } else {
        //         clicked++;
                // ui.counterDiv.style.opacity = 1;
        //         play(clicked);
        //         ui.slider.disabled = true;
        //         performance.playing = !performance.playing;
        //         if (performance.playing) {     
        //             vexate(performance, music, ui);
        //         }
        //     }

            
        // }
    });

})();