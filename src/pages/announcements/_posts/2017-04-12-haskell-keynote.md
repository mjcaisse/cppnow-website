---
layout: post
title: "2017 Keynote - Ryan Newton - Haskell Taketh Away: Limiting Side Effects for Parallel Programming"
date: 2017-04-12
permalink: /announcements/2017/04/haskell-keynote/
section: announcements
---

We are announcing the final of this year's three keynotes, all speaking on the theme:

> What can C++ learn from other languages?

**Ryan Newton**, member of the Glasgow Haskell Compiler steering committee, will explain how Haskell limits user capabilities and why that is empowering.

In designing parallel programming abstractions, taking away user capabilities is as important as granting them. In his talk, he will explain the role of this idea in several different parallel programming libraries for Haskell, C++, and other languages--spanning from shared memory to big data.

![Keynote Speaker Ryan Newton](/assets/img/posts/2017/KeynoteSpeakerRyanNewton.jpg "Keynote Speaker Ryan Newton")

<!--break-->

The Haskell language is an experiment in making purely functional programming practical, and, as such, much of its design stems from limiting where and how the user can employ side effects. Haskell is almost 30 years old, but is used more widely and changing more rapidly than ever before. It's an exciting time for programming languages that use advanced type systems to accomplish formal software verification, and Haskell sits in midst of this revolution: at a juncture where it draws from the latest ideas in theorem proving languages, while at the same time remaining a practical programming language.

By clearing the canvas of unconstrained effects, Haskell and similar languages allow experimenting with specific combinations of effects that work well together: e.g., for transactional memory, deterministic parallelism, or accessing remote data sources. Haskell enforces these restrictions at compile time, via the type system. While C++ cannot limit a method's side effects directly through types, it is well suited to host embedded domain specific languages (EDSLs) that can incorporate the same ideas.

*Ryan leads a group of programming languages researchers interested in increasing the safety and parallel performance of high-level, declarative programs. Recent work emphasizes extending the scope, practicality, and rigor of deterministic parallel programming.*

---

Our previously announced keynote speakers include [Ali Çehreli, presenting *Competitive Advantage with D*](/announcements/2017/04/d-keynote/), and [Nicholas Matsakis, presenting *Rust: Hack Without Fear*](/announcements/2017/03/rust-keynote/).

**Come join us in Aspen for C++Now 2017!** [Registration is still open](https://cppnow2017.eventbrite.com).

-- Bryce Adelstein Lelbach, C++Now Program Chair
