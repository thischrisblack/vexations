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

    numberer(performance);

    ui.slider.oninput = function() {
        performance.tempo = ui.slider.value;
        ui.update(performance);
    }

    window.addEventListener('keydown', e => {
        if (e.key == ' ') {
            performance.playing = !performance.playing;
            if (performance.playing) {     
                vexate(performance, music, ui);
            }
        }
    });

})();