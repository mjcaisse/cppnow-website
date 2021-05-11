---
layout: page
title: C++Now 2018
permalink: /history/2018/
section: history
---

{% assign history_year = '2018' %}

* **[View the Schedule](/history/2018/schedule/)**
* **[View the Talks](/history/2018/talks/)**
* [Speakers](https://cppnow2018.sched.com/directory/speakers)
* [Attendees](https://cppnow2018.sched.com/directory/attendees)
* [Volunteers](https://cppnow2018.sched.com/directory/volunteers)
* [Staff](https://cppnow2018.sched.com/directory/artists)

## Conference Staff

{% assign staffname = 'staff' | append: history_year %}
{% assign staffmembers = site.data.staff[staffname] %}
{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: history_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}
{% include programCommittee.md %}


{% assign DATA = site.data.sponsors.Sponsors2018 %}

{% include corporateSponsorHistoryListing.md %}

{% include individualSponsorListing.md %}
