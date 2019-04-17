import style from "./main.css";
import performance from './components/performance';
import ui from './components/ui';
import music from './components/music';
import vexate from './components/vexate';
import numberer from './components/numberer';

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

    window.addEventListener('click', e => {
        // If click is not on tempo slider
        if (!e.target.closest('#tempo-slider')) {

            if (clicked >= 2) {                
                location.reload(false);
            } else {
                clicked++;
                ui.slider.disabled = true;
                performance.playing = !performance.playing;
                if (performance.playing) {     
                    vexate(performance, music, ui);
                }
            }

            
        }
    });

})();