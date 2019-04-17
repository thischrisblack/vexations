import ui from "./ui";
// Iterate through text for play button depending upon how many times it's been clicked.
export default function play(clicked) {
    let status = ['begin', 'stop', 'reset'];
    ui.playButton.innerHTML = status[clicked];
}