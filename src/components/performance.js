// Performance settings.
export default performance = {
    playing: false,
    repetitions: 840,
    tempo: 46, // Beats per minute.
    duration: 0,
    scrollSpeed: 0,
    getDuration: function () {
        // Returns total duration in ms.
        // The piece has 52 beats.
        return ((52 * this.repetitions) / this.tempo) * 60 * 1000;
    },
    getTimeRemaining: function (time) {
        const seconds = parseInt((time / 1000) % 60);
        const minutes = parseInt((time / (1000 * 60)) % 60);
        const hours = parseInt((time / (1000 * 60 * 60)) % 24);
        const days = parseInt(time / (1000 * 60 * 60) / 24);
        let dateString =
            `${days ? `${days} day${days !== 1 ? 's' : ''}, ` : ''}` +
            `${hours} hour${hours !== 1 ? 's' : ''}, ` +
            `${minutes} minute${minutes !== 1 ? 's' : ''}, ` +
            `${seconds} second${seconds !== 1 ? 's' : ''}`;
        return dateString;
    },
};
