---
layout: page
title: C++Now 2023
permalink: /history/2023/
section: history
---

{% assign history_year = '2023' %}


* **[View the Schedule](/history/2023/schedule/)**

## Conference Staff

{% assign staffname = 'staff' | append: history_year %}
{% assign staffmembers = site.data.staff[staffname] %}
{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: history_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}
{% include programCommittee.md %}


{% assign DATA = site.data.sponsors.Sponsors2023 %}

{% include corporateSponsorHistoryListing.md %}

{% include individualSponsorListing.md %}
