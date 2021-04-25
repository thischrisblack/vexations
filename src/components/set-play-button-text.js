import ui from './ui';
// Iterate through text for play button depending upon how many times it's been clicked.
export default function setPlayButtonText(timesClicked) {
    const status = ['begin', 'stop', 'reset'];
    ui.playButton.innerHTML = status[timesClicked];
}
