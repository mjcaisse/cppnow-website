(function() {
    var quotes = [
        ['With a welcoming, collaborative, and ruthlessly technical atmosphere, C++Now caters to library designers, compiler nerds, mailing list junkies, and anyone interested in pushing the envelope of what is possible in modern C++. This is the coolest tech conference in the world.', 'Barrett Adair', 'May 20th, 2017'],
        ['C++Now is always inspiring me in new ways. But also, due its unique location giving me lots of new insights and conversations I could have no where else.', 'Jens Weller', ''],
        ['I have attended C++ Now every year since the inaugural 2012 conference. It certainly has been the high point of my professional calendar every year. No where else can you mingle with best and the brightest of C++ world. Every year I have brought something back that was immediately usable in my daily work. The venue and conference organization is superb. I am already looking forward to next year.', 'Gwendolyn Hunt', 'Principal Software Engineer; Cedexis, Inc.'],
        ['C++Now was an incredible experience. The talks are all world class and Aspen is a lovely town, but the best part for me was the people. I\'ve watched a lot of recordings of talks, so when I got there I already felt like I knew many of the other attendees. Everyone I talked to had great insight and was working on interesting projects or libraries. Since roughly 1/3rd of the attendees were speakers some of them always happened to be around too. It felt almost as though I were at some exclusive event for famous c++ people, but everyone was so friendly and welcoming that I felt like I belonged there too. It was also a great opportunity for personal development. Some people pushed me to do a lightning talk, and from there I\'ve gone onto have a full length talk accepted to CppCon, which I probably wouldn\'t have even submitted if it weren\'t for my experience at C++Now. In that sense I grew as a person as a direct result of my experiences at C++Now.', 'Allan Deutsch', 'Student / Volunteer 2017'],

        // TODO: Get real quotes
        // ['Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', 'Carlton Love', 'Vestibulum Auctor Dapibus'],
        // ['Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.', 'Hattie Clayton', 'Nunc Dignissim Risus'],
        // ['Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.', 'Iris King', 'Cras Ornare Tristique'],
        // ['Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.', 'Cory Payne', 'Vivamus Vestibulum Nulla'],
        // ['Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.', 'Tracey Pittman', 'Praesent Placerat Risus'],
        // ['Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu.', 'Ramiro Bennett', 'Fusce Pellentesque Suscipit'],
        // ['Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.', 'Casey Marshall', 'Integer Vitae Libero'],
        // ['Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet.', 'Tonya May', 'Vestibulum Commodo Felis'],
        // ['Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Fernando Mendez', 'Ut Aliquam Sollicitudin'],
        // ['Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.', 'Colin Holland', 'Cras Iaculis Ultricies'],
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
