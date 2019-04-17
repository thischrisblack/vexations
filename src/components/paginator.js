import image from '../assets/vexations3.png';

export default function paginator(performance) {
    let partDiv = document.querySelector('.part');
    for (let i = 1; i <= performance.repetitions; i++) {
        // var count = document.createElement('div');
        // count.className = 'rep-number';
        // count.innerHTML = i + '.';
        // partDiv.appendChild(count);
        let theMusic = document.createElement('img');
        theMusic.src = image;
        partDiv.appendChild(theMusic);
    }
}