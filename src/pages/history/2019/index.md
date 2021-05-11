---
layout: page
title: C++Now 2019
permalink: /history/2019/
section: history
---

{% assign history_year = '2019' %}

* **[View the Schedule](/history/2019/schedule/)**
* **[View the Talks](/history/2019/talks/)**
* [Speakers](https://cppnow2019.sched.com/directory/speakers)
* [Attendees](https://cppnow2019.sched.com/directory/attendees)
* [Staff and Volunteers](https://cppnow2019.sched.com/directory/artists)


## Conference Staff

{% assign staffname = 'staff' | append: history_year %}
{% assign staffmembers = site.data.staff[staffname] %}
{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: history_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}
{% include programCommittee.md %}

{% assign DATA = site.data.sponsors.Sponsors2019 %}

{% include corporateSponsorHistoryListing.md %}

{% include individualSponsorListing.md %}
