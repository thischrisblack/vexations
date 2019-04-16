let performance;

export default performance = {
    playing: false,
    repetitions: 840,
    tempo: 46,
    duration: function() {
        return 52 * this.repetitions / this.tempo * 60 * 1000
    },
    timeString: function(time) {
        var seconds = parseInt((time/1000)%60)
            , minutes = parseInt((time/(1000*60))%60)
            , hours = parseInt((time/(1000*60*60)));
        return hours + ' hour' + (hours !== 1 ? 's' : '') + ', ' + minutes + ' minute' + (minutes !== 1 ? 's' : '') + ', ' + seconds + ' seconds.';
    }
}