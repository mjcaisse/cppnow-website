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

{% for staffmember in staffmembers %}
#### {{staffmember.title}}

<p><div>
    {% if staffmember.cochairs %}
        {% for comember in staffmember.comembers %}
            {% if staffmember.email %}
                <a href="mailto:{{ comember.email}}">{{ comember.name }}</a>{% if comember.company %}, {{ comember.company }}{% endif %}
            {% else %}
                {{ comember.name }}{% if comember.company %}, {{ comember.company }}{% endif %}
            {% endif %}
        {% endfor %}
    {% else %}
        {% if staffmember.email %}
        <a href="mailto:{{ staffmember.email}}">{{ staffmember.name }}</a>{% if staffmember.company %}, {{ staffmember.company }}{% endif %}
        {% else %}
        {{ staffmember.name }}{% if staffmember.company %}, {{ staffmember.company }}{% endif %}
        {% endif %}
    {% endif %}
</div></p>

{% endfor %}



## Program Committee Members

<div style="margin-bottom: 16px;">
<div>Bob Steagall (Program Committee Chair)</div>
<div>Bryce Adelstein Lelbach (Program Committee Co-Chair)</div>

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
