$(function() {
    window.cppNowQuery = new URI(window.location.href).query(true);
    var currentDay = (new Date(Date.now())).toISOString().slice(0, 10);
    if (window.cppNowQuery.faketime) {
        currentDay = window.cppNowQuery.faketime;
    }

    // remove outdated sponsors
    $('[data-until]').each(function () {
        var el = $(this);
        var until = el.attr('data-until');
        if (until < currentDay) {
            el.remove();
        }
    });

    // remove empty sponsor level headings
    $('h3[data-level]').each(function () {
        var el = $(this);
        var level = el.attr('data-level');

        var cnt = $('[data-level="' + level + '"][data-until]').length;
        if (cnt == 0) {
            el.remove();
        }
    });
});

