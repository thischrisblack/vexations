export default function numberer(performance) {
    let partDiv = document.querySelector('.part');
    for (let i = 1; i <= performance.repetitions; i++) {
        var count = document.createElement('div');
        count.className = 'rep-number';
        count.innerHTML = i + '.';
        partDiv.appendChild(count);
    }
}