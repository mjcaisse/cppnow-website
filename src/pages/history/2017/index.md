---
layout: page
title: C++Now 2017
permalink: /history/2017/
section: history
redirect_from:
    - /speakers-2017/
---

{% assign history_year = '2017' %}

The theme of the 2017 keynotes was: What can we learn from other langauges, particularly D, Haskell, and Rust?


* **[View the Schedule](/history/2017/schedule/)**
* **[View the Talks](/history/2017/talks/)**
* [Speakers](https://cppnow2017.sched.com/directory/speakers)
* [Attendees](https://cppnow2017.sched.com/directory/attendees)
* [Volunteers](https://cppnow2017.sched.com/directory/volunteers)
* [Staff](https://cppnow2017.sched.com/directory/artists)

{% assign staffname = 'staff' | append: history_year %}
{% assign staffmembers = site.data.staff[staffname] %}
{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: history_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}
{% include programCommittee.md %}



{% assign DATA = site.data.sponsors.Sponsors2017 %}

{% include corporateSponsorHistoryListing.md %}

{% include individualSponsorListing.md %}
