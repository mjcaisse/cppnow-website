---
layout: page
title: C++Now 2020
permalink: /history/2020/
section: history
---

{% assign history_year = '2020' %}

The conference was cancelled in 2020, due to the pandemic.

* **[View the Schedule](/history/2020/schedule/)**
* **[View the Talks](/history/2020/talks/)**
* [Speakers](https://cppnow2020.sched.com/directory/speakers)
* [Attendees](https://cppnow2020.sched.com/directory/attendees)
* [Staff and Volunteers](https://cppnow2020.sched.com/directory/artists)

## Conference Staff

{% assign staffname = 'staff' | append: history_year %}
{% assign staffmembers = site.data.staff[staffname] %}
{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: history_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}
{% include programCommittee.md %}


{% assign DATA = site.data.sponsors.Sponsors2020 %}

{% include corporateSponsorHistoryListing.md %}

{% include individualSponsorListing.md %}
