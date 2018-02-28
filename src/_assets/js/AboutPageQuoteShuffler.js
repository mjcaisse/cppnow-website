(function() {
    var quotes = [
        ['With a welcoming, collaborative, and ruthlessly technical atmosphere, C++Now caters to library designers, compiler nerds, mailing list junkies, and anyone interested in pushing the envelope of what is possible in modern C++. This is the coolest tech conference in the world.', 'Barrett Adair', 'May 20th, 2017'],
        ['I have attended C++Now three years in a row so far, and I cannot recommend it enough.\n\nOther than making many new friends and networking with amazing people, I\'ve always found the content of C++Now  top-notch: most of the talks at the conference are engaging, controversial, and innovative in one way or another. It\'s not your usual "lecture"-style talk - audience participation is encouraged... and the audience is full of experts.\n\nWhether it\'s sunny or heavily snowing, the view in Aspen is consistently beautiful and there are many fun activities to keep you busy after conference hours, including a picnic with all the attendees!\n\nDefinitely the best conference experience I\'ve had so far.', 'Vittorio Romeo', 'Software Engineer; Bloomberg LP'],
        ['C++Now is always inspiring me in new ways. But also, due its unique location giving me lots of new insights and conversations I could have no where else.', 'Jens Weller', 'Meeting C++'],
        ['I have attended C++ Now every year since the inaugural 2012 conference. It certainly has been the high point of my professional calendar every year. No where else can you mingle with best and the brightest of C++ world. Every year I have brought something back that was immediately usable in my daily work. The venue and conference organization is superb. I am already looking forward to next year.', 'Gwendolyn Hunt', 'Principal Software Engineer; Cedexis, Inc.'],
        ['C++Now was an incredible experience. The talks are all world class and Aspen is a lovely town, but the best part for me was the people. I\'ve watched a lot of recordings of talks, so when I got there I already felt like I knew many of the other attendees. Everyone I talked to had great insight and was working on interesting projects or libraries. Since roughly 1/3rd of the attendees were speakers some of them always happened to be around too. It felt almost as though I were at some exclusive event for famous c++ people, but everyone was so friendly and welcoming that I felt like I belonged there too. It was also a great opportunity for personal development. Some people pushed me to do a lightning talk, and from there I\'ve gone onto have a full length talk accepted to CppCon, which I probably wouldn\'t have even submitted if it weren\'t for my experience at C++Now. In that sense I grew as a person as a direct result of my experiences at C++Now.', 'Allan Deutsch', 'Student / Volunteer 2017'],
        ['C++Now is my favourite conference, it is my can\'t miss event of the year (C++ or otherwise!). There is something about the people who attend, and something about the place itself. No other event has C++Now\'s combination of enticing ideas mixed with peaceful serenity.<br /><br />words and thoughts swirling<br />blossoms on the Aspen trees<br />new ideas sprout<br />&nbsp;', 'Tony Van Eerd', 'Senior Software Developer; Christie Digital Systems'],
        ['I\'ve spoken at C++Now a few times and it was always a great experience. Everyone was very welcoming and helpful. C++Now is a one of a kind conference. There are some great opportunities to make valuable connections with the leaders of the C++ community since all big IT companies and field experts are represented here. As well as there is a great ratio of speakers to attendees. It\'s the best conference to discuss advanced topics where the C++ language can be pushed to the limits. There is no idea, too extreme here! For me, it\'s a C++ highlight of the year! BTW Aspen is an amazing place, it\'s a must see!', 'Kris Jusiak', 'Senior Software Developer; Quantlab Financial'],
        ['C++Now is by C++ experts, for C++ experts - but don’t let that put you off - it’s not elitist! Instead it is an intimate and friendly gathering of those that take C++ seriously and want to move it forward. While the talks are some of the best, and most in-depth, you’ll find - it’s the times between and after the talks that the magic really happens - perhaps more than any other conference. With such a fantastic location this is as much a week-long retreat as a conference.', 'Phil Nash', 'Creator of Catch'],
        ['I served as a C++Now volunteer and attendee in 2017 while finishing graduate school, and I can say that C++Now is a very welcoming community of experts! The content from the talks is of very high quality, and I enjoyed talking with the presenters. I can say I left the conference with a wealth of knowledge, and feeling more excited about the continuously evolving C++ language!', 'Dr. Mike Shah', 'Lecturer at Northeastern University'],
        ['Eight years of C++Now attendance have helped me acquire next-level C++ skills, as well as a network of talented and influential fellow developers. The talks and environment are of the very highest quality. It\'s a transformative experience every time.', 'Jeff Trull', 'C++ Consultant'],
        ['I attended C++Now for the first time last year (2017), and it was a great experience!  The talks were all excellent, but the best part was the interaction with other attendees. This is the conference to attend for an in-depth and technical C++ experience like no other.', 'Bob Steagall', 'KEWB Computing, CppCon Poster Chair'],
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
