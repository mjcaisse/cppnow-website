---
layout: page
title: Staff
permalink: /about/staff/
section: about
redirect_from:
    - /PC/
---

## Conference Staff

{% for staff_member in site.data.staff %}
#### {{staff_member.title}}

{{staff_member.name}}
{% endfor %}



## Program Committee Members

<div style="margin-bottom: 16px;">
<div>Bryce Adelstein Lelbach (Program Chair)</div>

{% assign filename = 'ProgramCommitteeMembers' | append: site.current_year %}
{% assign programCommitteeMembers = site.data.programCommitteeMembers[filename] %}

{% for item in programCommitteeMembers %}
{% if item.disabled != true %}
<div>
    {{ item.name }}{% if item.company %}, {{ item.company }}{% endif %}
</div>
{% endif %}
{% endfor %}
</div>