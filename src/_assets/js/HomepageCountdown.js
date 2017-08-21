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

    function dayDifference(a, b) {
        var HOUR_INCREMENT = 12;

        var untilYear = b.getFullYear();
        var untilMonth = b.getMonth();
        var untilDate = b.getDate();

        var incrementDirection = b - a;
        incrementDirection = incrementDirection / Math.abs(incrementDirection);

        var difference = 0;
        var lastDate = a.getDate();

        while (!(untilYear === a.getFullYear() && untilMonth === a.getMonth() && untilDate === a.getDate())) {
            a.setHours(a.getHours() + (HOUR_INCREMENT * incrementDirection));
            if (a.getDate() !== lastDate) {
                lastDate = a.getDate();
                difference += incrementDirection;
            }
        }

        return difference;
    }

    function setDaysRemaining(element) {
        var currentTime = new Date();
        var daysDifferenceStart = dayDifference(currentTime, conferenceStartTime);

        if (daysDifferenceStart > 1) {
            element.innerHTML = '<h2 class="textCenter">' + escapeForHtml(daysDifferenceStart) + ' Days Remaining</h2>';
        }
        else if (daysDifferenceStart > 0) {
            element.innerHTML = '<h2 class="textCenter">Starting Tomorrow!</h2>';
        }
        else if (daysDifferenceStart <= 0 && dayDifference(currentTime, conferenceEndTime) >= 0) {
            element.innerHTML = '<h2 class="textCenter">Going on Now!</h2>';
        }
        else {
            element.innerHTML = '<h2 class="textCenter">C++Now ' + escapeForHtml(conferenceStartTime.getFullYear()) + ' is Over!</h2>';
        }
    }

    var countdown = document.getElementById('countdown');

    var conferenceStartDate = tryParseFormattedDateString(countdown.getAttribute('data-start-date'));
    var conferenceEndDate = tryParseFormattedDateString(countdown.getAttribute('data-end-date'));

    if (!conferenceStartDate && !conferenceEndDate) {
        return;
    }

    var conferenceStartTime = new Date(conferenceStartDate);
    var conferenceEndTime = new Date(conferenceEndDate);

    setDaysRemaining(countdown);
    setInterval(function() {
        setDaysRemaining(countdown);
    }, MILLISECONDS_IN_HOUR);
}());
