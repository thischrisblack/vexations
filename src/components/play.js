import ui from "./ui";

export default function play(clicked) {
    let status = ['begin', 'stop', 'reset'];
    ui.playButton.innerHTML = status[clicked];
}