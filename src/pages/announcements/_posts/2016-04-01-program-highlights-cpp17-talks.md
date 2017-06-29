---
layout: post
title: "2016 Program Highlights: C++17 Talks"
date: 2016-04-01
permalink: /announcements/2016/04/program-highlights-cpp17-talks/
section: announcements
---

One of the major topics of this year's program will be the C++17 standard which
is nearing completion. Here's a preview of a few of the sessions about C++17:

* **David Sankel** - [Variants: Past, Present and Future](http://sched.co/6Sfb)
* **Nathan Myers** - [Progress on Contract Support for C++17](http://sched.co/6SgD)
* **Alisdair Meredith** - [Implementing tuple in C++17](http://sched.co/6SgA)

There's still time if you're thinking about joining us at C++Now. [A few registration slots](https://cppnow2016.eventbrite.com) are still up for grabs, and our [group rate at the conference hotel](https://aws.passkey.com/g/54941837) is still available. Hope to see you in Aspen this May!

Here's some more details on those talks:

<!--break-->

### David Sankel

[Variants: Past, Present and Future](http://sched.co/6Sfb)<br>
What are variants, why are they important, and how I use them? Once available to a developer, variants become one of the most commonly used tools in everyday programming. This talk will explore the venerable Boost.Variant library, discuss the improvements made by the current 'std::variant' proposal (expected in C++17), and close with a discussion of the exciting new language-based variant and pattern matching papers (proposed for C++20). This talk aims to be of practical utility in variant library usage and informative as to where
things are heading. 

**About the Speaker:** David Sankel is a professional software developer/architect based in the USA. His prolific software developments have included CAD/CAM, computer graphics, visual programming languages, web applications, computer vision, and cryptography. He is a frequent speaker at the C++Now! conferences and is especially well known for his advanced functional programming in C++ talks. David's current research interests include dependently typed languages, semantic domains, EDSLs, and functional reactive programming. He currently works for the software firm, Stellar Science.


### Nathan Myers

[Progress on Contract Support for C++17](http://sched.co/6SgD)<br>
Contract Support in a language helps library authors and library users work together to make better programs, catching usage mistakes early and preventing spurious bug reports. Every library has incidental behaviors and interpretations of arguments that are not in the specification, and could easily be different in the next release. It is very easy to come to accidentally depend on these incidental details. When details can be spelled out directly in C++, and automatically verified during testing, there is much less room for misunderstandings. The process of getting contract support into C++ has been long and contentious, because the name actually refers to several nearly disjoint goals, with different champions, and conflicting priorities. Some are most interested in static, compile-time verification, others in runtime checking and controlled response to violations, or defense against security abuses, or even improved optimization opportunities. The annotations programmers would add could certainly be used for all of these things, but where to add them and what to say vary by the intended use. The factions have come together to present a common proposal meant to address all the disparate needs, with the minimum burden on programmers. This presentation explores the unified proposal and how it meets the needs of each group, and of programmers in general. Many surprises surfaced while merging the designs and simplifying. 

**About the Speaker:** After using C++ in production since 1988, Nathan Myers joined the ISO Standard effort in 1993. He's responsible for keyword "explicit" and he invented traits, empty-base optimization, and indexing type-erased containers by type.  Nathan holds record for longest sentence using only C++ keywords, once each. He still thinks of the STL containers as only
examples.


### Alisdair Meredith

[Implementing tuple in C++17](http://sched.co/6SgA)<br>
C++17 adds new language features that might affect the design and implementation of 'std::tuple', such as fold expressions for templates. Several other features still pending as this proposal is written, such as concepts and implicit comparison operators. In addition, the standard library itself pushes the interface of the 'tuple' template itself, while providing additional metaprogramming utilities that might help both the implementation, and users. This session will review the tuple interface, as specified for C++17, highlighting any changes since C++11 and C++14. It will then look into the design of several implementations of tuple, explored through several testing and benchmarking scenarios, before looking to draw conclusions. Note that the code shown in this session will require a recent version of a C++ compiler that implements an experimental C++17 mode. The latest Clang and gcc compilers should be capable, although the latest development compilers may be needed for new language features added in 2016. 

**About the Speaker:** Alisdair Meredith is a software developer at BloombergLP in New York, and formerly the C++ Standard Committee Library Working Group chair. He has been an active member of the C++ committee for just over a decade, and by a lucky co-incidence his first meeting was the kick-off meeting for the project that would become C++11, and also fixed the contents of the original library TR. He is currently working on the BDE project, BloombergLP's open source libraries that offer a foundation for C++ development, including a standard library implementation supporting the polymorphic allocator model proposed for standardization.
