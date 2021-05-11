---
layout: page
title: C++Now 2021
permalink: /history/2021/
section: history
---

{% assign history_year = '2021' %}


* **[View the Schedule](/history/2021/schedule/)**
* **[View the Talks](/history/2021/talks/)**
* [Speakers](https://cppnow2021.sched.com/directory/speakers)
* [Attendees](https://cppnow2021.sched.com/directory/attendees)
* [Staff and Volunteers](https://cppnow2021.sched.com/directory/artists)

## Conference Staff

{% assign staffname = 'staff' | append: history_year %}
{% assign staffmembers = site.data.staff[staffname] %}
{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: history_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}
{% include programCommittee.md %}


{% assign DATA = site.data.sponsors.Sponsors2021 %}

{% include corporateSponsorHistoryListing.md %}

{% include individualSponsorListing.md %}
