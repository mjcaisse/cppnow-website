---
layout: post
title: "Closing Keynote Announced: John Regehr on Undefined Behavior and Compiler Optimizations"
date: 2018-04-05
permalink: /announcements/2018/04/regehr-keynote/
section: announcements
---

![Keynote Speaker John Regehr](/assets/img/posts/2018/JohnRegehr.jpeg "Keynote Speaker John Regehr"){:style="float: right;margin-right: 7px;margin-top: 7px; width: 400px"}

John Regehr will be the closing keynote for C++Now 2018 with [_Undefined Behavior and Compiler Optimizations_](https://cppnow2018.sched.com/event/a2ef244bbbdb55018b0445a3f1233938).

John is a professor of computer science at the University of Utah, where his research group creates tools for making software more efficient and correct. One of his projects is [Csmith](https://embed.cs.utah.edu/csmith/), a tool that generates random C programs. Why? To test compilers, of course. Csmith has been used to find more than 500 previously unknown bugs in production-quality compilers.

John will share some of the insights he's gained from his research into compilers.

<!--break-->
He will discuss what _undefined behavior_ means to the compiler and how compiler writers use it in surprising ways generate better code.

John will also talk about the C++ sequential memory models. C++ occupies a tricky design point: on one hand, it wants to be able to assume that a pointer originating in one block of memory cannot be used to refer to another block, but on the other hand any pointer can be turned into an integer, manipulated arbitrarily, and then turned back into a pointer. He will guide us through the implications of these conflicting demands, some of which are still being figured out.

John is optimistic that future compilers will be less buggy and more effective at optimizing. He will share his predictions about a future in which many optimizations will be formally verified and some will also be generated automatically

**Come join us in Aspen for C++Now 2018!** [Registration is still open](/registration/).

-- Bryce Adelstein Lelbach, C++Now Program Chair
