---
layout: page
title: Tag List
permalink: /taglist/
section: schedule
---

{% if site.schedule_online %}

{% assign tagname = 'Tags' | append: site.current_year %}
{% assign tags = site.data.talks[tagname] %}

{% for tag in tags %}
<div>
    <a href="{{ tag.search-link }}" target="search-result">{{ tag.tag }}</a>
</div>
{% endfor %}


{% else %}

The schedule for C++Now {{site.current_year}} is not yet confirmed. Please visit again or keep an eye on the [announcements page](/announcements/) for updated information. If you wish to be a speaker, please visit our [Presenters Page](/presenters/) for information and the submission form.

Previous Year's Schedule: {{site.previous_years_schedule}}


{% endif %}
