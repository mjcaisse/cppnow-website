(function() {
    var MILLISECONDS_IN_HOUR = 3.6e6;
    var DECIMAL = 10;

    // Take no chances
    function escapeForHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }

    function tryParseFormattedDateString(str) {
        var parts = str.replace(/-0/g, '-').split('-');
        if (parts.length !== 3) {
            // Too many parts, bad format
            return false;
        }

        var date = new Date(parseInt(parts[0], DECIMAL), parseInt(parts[1], DECIMAL) - 1, parseInt(parts[2], DECIMAL));
        if ([date.getFullYear(), ('00' + (date.getMonth() + 1)).substr(-2), ('00' + date.getDate()).substr(-2)].join('-') !== str) {
            // Non-existent date, bad format
            return false;
        }

        return date;
    }

    function daysIntoYear(date){
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    }

    function dayDifference(a, b) {
        var a_time = a.getTime();
        var b_time = b.getTime();
        var t_diff = b_time - a_time;
        var d_diff = Math.floor(t_diff/8.64e7);

        return d_diff;
    }

    function setDaysRemaining(element) {
        var currentTime         = new Date();
        console.log(currentTime);
        var daysDifferenceStart = dayDifference(currentTime, conferenceStartTime);
        var daysDifferenceEnd   = dayDifference(currentTime, conferenceEndTime);
        
        if (daysDifferenceStart > 1) {
            element.innerHTML = '<h2 class="textCenter">' + escapeForHtml(daysDifferenceStart) + ' Days Remaining</h2>';
        }
        else if (daysDifferenceStart > 0) {
            element.innerHTML = '<h2 class="textCenter">Starting Tomorrow!</h2>';
        }
        else if (daysDifferenceStart <= 0  &&  daysDifferenceEnd > 0) {
            element.innerHTML = '<h2 class="textCenter">Going on Now!</h2>';
        }
        else {
            element.innerHTML = '<h2 class="textCenter">C++Now is Over!</h2>';
        }
    }

    var countdown = document.getElementById('countdown');

    var conferenceStartDate = tryParseFormattedDateString(countdown.getAttribute('data-start-date'));
    var conferenceEndDate   = tryParseFormattedDateString(countdown.getAttribute('data-end-date'));

    if (!conferenceStartDate && !conferenceEndDate) {
        return;
    }

    var conferenceStartTime = new Date(conferenceStartDate);
    var conferenceEndTime   = new Date(conferenceEndDate);

    setDaysRemaining(countdown);
    setInterval(function() {
        setDaysRemaining(countdown);
    }, MILLISECONDS_IN_HOUR);
}());
