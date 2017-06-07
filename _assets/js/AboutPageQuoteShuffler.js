// This is included, compressed and inline on the About page

(function() {
    var quotes = [
        ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', 'Francisco Meyer', 'Lorem Ipsum Dolor'],
        ['Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', 'Frances Weaver', 'Aliquam Tincidunt Mauris'],
        ['Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', 'Carlton Love', 'Vestibulum Auctor Dapibus'],
        ['Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.', 'Hattie Clayton', 'Nunc Dignissim Risus'],
        ['Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.', 'Iris King', 'Cras Ornare Tristique'],
        ['Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.', 'Cory Payne', 'Vivamus Vestibulum Nulla'],
        ['Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.', 'Tracey Pittman', 'Praesent Placerat Risus'],
        ['Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu.', 'Ramiro Bennett', 'Fusce Pellentesque Suscipit'],
        ['Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.', 'Casey Marshall', 'Integer Vitae Libero'],
        ['Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet.', 'Tonya May', 'Vestibulum Commodo Felis'],
        ['Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Fernando Mendez', 'Ut Aliquam Sollicitudin'],
        ['Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.', 'Colin Holland', 'Cras Iaculis Ultricies'],
    ];

    function shuffle(array) {
        var length = array.length;
        var index = -1;
        var lastIndex = length - 1;
        var result = array.slice();
        while (++index < length) {
            var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
            var value = result[rand];
            result[rand] = result[index];
            result[index] = value;
        }
        return result;
    }

    if (document.querySelectorAll) {
        var shuffledQuotes = shuffle(quotes);

        var quoteElements = document.querySelectorAll('.replaceQuote');
        var qECount = quoteElements.length;

        if (qECount > shuffledQuotes) {
            return;
        }

        var qE;
        for (qE = 0; qE < qECount; qE += 1) {
            var quote = shuffledQuotes[qE];
            quoteElements[qE].querySelector('.quoteBoxText').innerHTML = quote[0];
            quoteElements[qE].querySelector('.quoteBoxAuthor').innerHTML = quote[1];
            quoteElements[qE].querySelector('.quoteBoxCredentials').innerHTML = quote[2];
        }
    }
}());