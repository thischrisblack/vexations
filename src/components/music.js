let music;
// Places .part div in .music div with correct margin and width.
export default music = {
    element: document.querySelector('.part'),
    margin: screen.width / 2,
    place: function(reps) {
        this.element.style.left = this.margin + 'px';
        this.element.style.width = 6800 * reps + 'px';
    }
}