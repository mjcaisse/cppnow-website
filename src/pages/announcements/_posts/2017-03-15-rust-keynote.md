---
layout: post
title: "2017 Keynote - Niko Matsakis - Rust: Hack Without fear!"
date: 2017-03-15
permalink: /announcements/2017/03/rust-keynote/
section: announcements
---

At C++Now, we love to challenge the status quo.
 
Many of our favorite C++Now keynotes have presented views that differ from accepted C++ philosophy and thoughtfully question common practice in the C++ community. 

We have a few keynotes this year and they share a common theme that reflects our desire for new perspectives:

> What can C++ learn from other languages?

Naturally, we started with [Rust](https://www.rust-lang.org).

**Nicholas Matsakis**, a senior researcher at Mozilla Research and a member of the Rust core team, will be giving a keynote at C++Now 2017 about ownership in Rust called, *Rust: Hack Without Fear*.

![Nicholas Matsakis, Mozilla, Rust core team](/assets/img/posts/2017/KeynoteSpeakerNikoMatsakis.jpg "Nicholas Matsakis, Mozilla, Rust core team")

<!--break-->

Through the concept of zero-cost abstractions, C++ has shown that it is possible to combine low-level control with high-level programming concepts. Rust is a language that aims to offer the same sorts of zero-cost abstractions that C++ is capable of, while also enforcing memory safety and data-race freedom. The secret sauce is Rust's core notion of "ownership", which enables:

- Memory safety without garbage collection;
- Concurrency without data races,
- Abstraction without overhead.

In his talk, Nico will explain ownership and show how Rust uses it to guarantee thread safety, amongst other things. He'll also talk about how Rust is designed to scale to large code-bases, sharing some of his experiences at Mozilla integrating Rust into Firefox.

One final theme of the talk is that the benefits of ownership go beyond having fewer bugs: once you are freed from the need to prevent memory-safety violations, it becomes possible to write - and *maintain* - programs that aggressively pursue parallelization and other kinds of optimizations that would have been too risky or too difficult before.

*Nicholas Matsakis is a senior researcher at Mozilla Research and a member of the Rust core team. He has been working on Rust for nearly six years and did much of the initial work on its type system and other core features. Prior to working on Rust, he did his undergraduate studies at MIT and completed a PhD at ETH Zurich in 2011. He also spent several years at DataPower Technology, a startup since acquired by IBM, working on the JIT compiler and networking runtime.*


---

**Come join us in Aspen for C++Now 2017!** [Registration is still open](https://cppnow2017.eventbrite.com).

-- Bryce Adelstein Lelbach, C++Now Program Chair
