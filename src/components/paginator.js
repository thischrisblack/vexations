import image from '../assets/vexations3.png';
// Places sheet music image in .part div default 840 times
export default function paginator(performance) {
    let partDiv = document.querySelector('.part');
    for (let i = 1; i <= performance.repetitions; i++) {
        let theMusic = document.createElement('img');
        theMusic.src = image;
        partDiv.appendChild(theMusic);
    }
}