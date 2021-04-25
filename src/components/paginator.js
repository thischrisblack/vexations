import image from '../assets/vexations3.png';
// Populates .part div with sheet music images
export default function paginator(performance) {
    const partDiv = document.querySelector('.part');
    for (let i = 1; i <= performance.repetitions; i++) {
        const theMusic = document.createElement('img');
        theMusic.src = image;
        partDiv.appendChild(theMusic);
    }
}
