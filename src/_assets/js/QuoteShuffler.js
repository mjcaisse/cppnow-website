(function() {
    var quotes = [
        ['With a welcoming, collaborative, and ruthlessly technical atmosphere, C++Now caters to library designers, compiler nerds, mailing list junkies, and anyone interested in pushing the envelope of what is possible in modern C++. This is the coolest tech conference in the world.', 'Barrett Adair', 'May 20th, 2017'],
        ['I have attended C++Now three years in a row so far, and I cannot recommend it enough.\n\nOther than making many new friends and networking with amazing people, I\'ve always found the content of C++Now top-notch: most of the talks at the conference are engaging, controversial, and innovative in one way or another. It\'s not your usual "lecture"-style talk - audience participation is encouraged... and the audience is full of experts.\n\nWhether it\'s sunny or heavily snowing, the view in Aspen is consistently beautiful and there are many fun activities to keep you busy after conference hours, including a picnic with all the attendees!\n\nDefinitely the best conference experience I\'ve had so far.', 'Vittorio Romeo', 'Software Engineer, Bloomberg LP'],
        ['C++Now is always inspiring me in new ways. But also, due its unique location giving me lots of new insights and conversations I could have no where else.', 'Jens Weller', 'Meeting C++'],
        ['I have attended C++ Now every year since the inaugural 2012 conference. It certainly has been the high point of my professional calendar every year. No where else can you mingle with best and the brightest of C++ world. Every year I have brought something back that was immediately usable in my daily work. The venue and conference organization is superb. I am already looking forward to next year.', 'Gwendolyn Hunt', 'Principal Software Engineer, Cedexis, Inc.'],
        ['C++Now was an incredible experience. The talks are all world class and Aspen is a lovely town, but the best part for me was the people. I\'ve watched a lot of recordings of talks, so when I got there I already felt like I knew many of the other attendees. Everyone I talked to had great insight and was working on interesting projects or libraries. Since roughly 1/3rd of the attendees were speakers some of them always happened to be around too. It felt almost as though I were at some exclusive event for famous c++ people, but everyone was so friendly and welcoming that I felt like I belonged there too. It was also a great opportunity for personal development. Some people pushed me to do a lightning talk, and from there I\'ve gone onto have a full length talk accepted to CppCon, which I probably wouldn\'t have even submitted if it weren\'t for my experience at C++Now. In that sense I grew as a person as a direct result of my experiences at C++Now.', 'Allan Deutsch', 'Student / Volunteer 2017'],
        ['C++Now is my favourite conference, it is my can\'t miss event of the year (C++ or otherwise!). There is something about the people who attend, and something about the place itself. No other event has C++Now\'s combination of enticing ideas mixed with peaceful serenity.<br /><br />words and thoughts swirling<br />blossoms on the Aspen trees<br />new ideas sprout<br />&nbsp;', 'Tony Van Eerd', 'Senior Software Developer, Christie Digital Systems'],
        ['I\'ve spoken at C++Now a few times and it was always a great experience. Everyone was very welcoming and helpful. C++Now is a one of a kind conference. There are some great opportunities to make valuable connections with the leaders of the C++ community since all big IT companies and field experts are represented here. As well as there is a great ratio of speakers to attendees. It\'s the best conference to discuss advanced topics where the C++ language can be pushed to the limits. There is no idea, too extreme here! For me, it\'s a C++ highlight of the year! BTW Aspen is an amazing place, it\'s a must see!', 'Kris Jusiak', 'Senior Software Developer, Quantlab Financial'],
        ['C++Now is by C++ experts, for C++ experts - but don’t let that put you off - it’s not elitist! Instead it is an intimate and friendly gathering of those that take C++ seriously and want to move it forward. While the talks are some of the best, and most in-depth, you’ll find - it’s the times between and after the talks that the magic really happens - perhaps more than any other conference. With such a fantastic location this is as much a week-long retreat as a conference.', 'Phil Nash', 'Creator of Catch'],
        ['I served as a C++Now volunteer and attendee in 2017 while finishing graduate school, and I can say that C++Now is a very welcoming community of experts! The content from the talks is of very high quality, and I enjoyed talking with the presenters. I can say I left the conference with a wealth of knowledge, and feeling more excited about the continuously evolving C++ language!', 'Dr. Mike Shah', 'Lecturer at Northeastern University'],
        ['Eight years of C++Now attendance have helped me acquire next-level C++ skills, as well as a network of talented and influential fellow developers. The talks and environment are of the very highest quality. It\'s a transformative experience every time.', 'Jeff Trull', 'C++ Consultant'],
        ['I attended C++Now for the first time last year (2017), and it was a great experience! The talks were all excellent, but the best part was the interaction with other attendees. This is the conference to attend for an in-depth and technical C++ experience like no other.', 'Bob Steagall', 'KEWB Computing, CppCon Poster Chair'],
        ['As a skiing addict I do not regret that the season is over in Aspen at the time of C++now. It is worth every minute spent there with leading C++ experts to learn from and work with.', 'Prof. Peter Sommerlad', 'HSR University of Applied Sciences Rapperswil'],
        ['C++Now started out as BoostCon, in 2007. I was there at the first one as a fairly new developer, afraid to say anything to the clearly older and more experienced programmers there. One day at lunch I was sitting with Sean Parent, Doug Gregor, Howard Hinnant, and Dave Abrahams. As I sat there afraid to open my mouth, they debated the correct semantics of moves in standard algorithms (not yet standardized then). Where else in the world can you sit with such people, or hear such a conversation? It was like catnip to a junior C++ person. Since then, the conference has developed a broader and more inclusive atmosphere, as many of us shy nerds have gotten to know each other. Because of this, I see *more* of those amazing interactions these days than I did the first year. I have learned so much from these conversations that I otherwise never would have been exposed to. I always tell people who ask me about C++Now that I would be half the programmer I am today if I had never gone to it.', 'Zach Laine', 'Senior Principal Software Engineer, Cadence Design Systems'],
        ['In addition to excellent technical instruction and amazing alpine views, C++Now is also an incubator for innovative ideas in C++ language design and library development. Similar to other events historically held at the Aspen Center For Physics, C++Now is a catalyst for collaboration amongst some of the most creative minds in C++. I can attribute a significant portion of my personal success as a software engineer and consultant to the ideas I have gleaned, and the contacts I have made from attending this conference over the years.', 'Jonathan Franklin', 'President of Streetcar Software LLC'],
        ['As a volunteer at C++Now, it was the first conference I attended and I had little idea how immersed in the C++ language I would be for nearly a week. Rather than sitting at home and watching C++Now videos after the fact, you could ask a question as it arises or discuss and contribute to the future of C++. As a non-expert, casual user of C++, a variety of presentations from novice to expert made it possible to glean practical and valuable ideas. It\'s a great experience and an engaging community.', 'Dyrick Williams', 'Electrical/Computer Engineering Student, Virginia Polytechnic Institute and State University'],
        ['Of the conferences I’ve attended, C++Now stands out from the rest.  It is the conference that expands your C++ and programming expertise to the next level.  The sessions are groundbreaking, challenging, and fresh.  But more than that, the after hours interactions with fellow community members builds relationships and friendships that continue long after the conference ends.', 'Richard Powell', 'Board Member, Tellefsen Hall Association '],
        ['What makes C++Now conference unique is a free and brave look into the future of C++. While other C++ events are mostly focused on sharing knowledge about new but existing language features, libraries, tools and techniques, C++Now is all about C++’s future evolution.', 'Anastasia Kazakova', 'JetBrains C++ Team'],
        ['If you think you’re the Top Gun of C++ developers where you work, you should prepare yourself for being surrounded by people who have forgotten more about C++ than most software engineers know.', 'Matthew Butler', 'Principle Engineer, Laurel Lye'],
        ['If you’ve never been to C++Now, you should. If you want to excel at your craft, this is the place to be. The C++ community is extraordinarily generous and you’ll find yourself having endless conversations with the most talented people in our field. You’ll find people who are willing to pour their knowledge, passion and talents into you asking only that you become an active member of the community in return.', 'Matthew Butler', 'Principle Engineer, Laurel Lye'],
        ['Will going to C++Now make you a better engineer?<br>Maybe. It depends.<br>It depends on whether you go there as a mere spectator or as someone who is looking to immerse yourself in the culture and community and then take what you learn back home with you and put it to good use.<br>Be forewarned, though. These are deep waters.', 'Matthew Butler', 'Principle Engineer, Laurel Lye'],
        ['At the altitude of 2,400 meters, C++Now offers limited oxygen but unlimited C++ insights.', '<a href="https://blog.jetbrains.com/clion/2018/06/cpp-annotated-jan-may-2018">CLion Blog</a>', 'JetBrains.com'],
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
