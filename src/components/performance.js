let performance;
// Performance settings, including tempo (set by user) and default repetition number (840).
export default performance = {
    playing: false,
    repetitions: 840,
    tempo: 46,
    duration: function() {
        return 52 * this.repetitions / this.tempo * 60 * 1000
    },
    // Return human-readable time string.
    timeString: function(time) {
        var seconds = parseInt((time/1000)%60)
            , minutes = parseInt((time/(1000*60))%60)
            , hours = parseInt((time/(1000*60*60))%24)
            , days = parseInt((time/(1000*60*60))/24);
        var dateString = hours + ' hour' + (hours !== 1 ? 's' : '') + ', ' + 
                         minutes + ' minute' + (minutes !== 1 ? 's' : '') + ', ' + 
                         seconds + ' seconds.';
        if (days) dateString = days + ' day' + (days !== 1 ? 's' : '') + ', ' + dateString;
        return dateString;               
    }
}