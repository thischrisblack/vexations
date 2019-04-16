let music;

export default music = {
    element: document.querySelector('.part'),
    margin: screen.width / 2,
    place: function(reps) {
        this.element.style.left = this.margin + 'px';
        this.element.style.width = 6800 * reps + 'px';
    }
}