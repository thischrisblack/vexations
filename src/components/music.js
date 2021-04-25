let music;
// Sets placement and width of part div.
export default music = {
    element: document.querySelector('.part'),
    margin: screen.width / 2,
    init: function (reps) {
        this.element.style.left = this.margin + 'px';
        this.element.style.width = 6800 * reps + 'px';
    },
};
