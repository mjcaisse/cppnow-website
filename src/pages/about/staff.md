---
layout: page
title: Conference Staff
permalink: /about/staff/
section: about
redirect_from:
    - /PC/
    - /conference_staff/
---

{% assign staffname = 'staff' | append: site.current_year %}
{% assign staffmembers = site.data.staff[staffname] %}

{% include staffList.md %}

{% assign filename = 'ProgramCommitteeMembers' | append: site.current_year %}
{% assign programCommittee = site.data.programCommitteeMembers[filename] %}

{% include programCommittee.md %}
