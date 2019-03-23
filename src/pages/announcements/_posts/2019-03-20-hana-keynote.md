---
layout: post
title: "Keynote Announced: Hana Dusíková on Compile Time Regular Expressions"
date: 2019-03-20
permalink: /announcements/2019/03/dusikova-keynote/
section: announcements
---

![Keynote Speaker Hana Dusíková](/assets/img/posts/2019/HanaDusikova.jpeg "Keynote Speaker Hana Dusíková"){:style="float: right;margin-right: 7px;margin-top: 7px; width: 300px"}

The theme of this year's keynotes is _Compile-time Magic_ and the first keynote that we are announcing is Hana Dusíková's presentation of a library that performs at compile-time, work that is often done at runtime.

Hana's keynote is entitled [_Compile Time Regular Expressions with Deterministic Finite Automaton_](https://cppnow2019.sched.com/event/Mj4O).

She is working as a senior researcher in Avast Software. Her responsibility is exploring new ideas and optimizing existing ones. She also propagates modern C++ techniques and libraries in internal techtalks and gives talks at local C++ meetups. 

<!--break-->
Hana is the author of the [Compile Time Regular Expression (CTRE) Library](https://github.com/hanickadot/compile-time-regular-expressions) which she described in her very well received [talk at CppCon](https://youtu.be/QM3W36COnE4) last September.

In this keynote address, she will update us on work done on CTRE since her CppCon presenation. The library has been re-designed using some novel techniques based on C++20 features.

The primary topic of this talk will be an explanation of the new Deterministic Finite Automaton (DFA) engine in the library and how it's built and optimised during compilation. She will explain the differences and limitations of the new engine in comparison to the previous Back Tracking engine. She will address these differences with a benchmark and will discuss the generated assembly. 

Even if you are not interested in regular expressions, you will learn new techniques in compile-time meta-programming and see new C++20 features in action.

Hana studied computer science at Mendel university and subsequently taught several courses there, including: Data Structures, Computability and Complexity, and Formal Languages and Automata.

**Come join us in Aspen for C++Now 2019!** [Registration is still open](/registration/).

-- Bryce Adelstein Lelbach, C++Now Program Chair
