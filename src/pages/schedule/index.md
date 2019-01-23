---
layout: schedule-page
title: Schedule
permalink: /schedule/
section: schedule
---

{% if site.schedule_online %}

<div><a id="sched-embed" href="{{site.sched_com_URL}}">View the C++Now {{site.current_year}} schedule</a></div>

<script src="{{site.sched_com_embed_URL}}"></script>

{% else %}

The schedule for C++Now {{site.current_year}} is not yet confirmed. Please visit again or keep an eye on the [announcements page](/announcements/) for updated information. If you wish to be a speaker, please visit our [Presenters Page](/presenters/) for information and the submission form.

Previous Year's Schedule: {{site.previous_years_schedule}}

{% endif %}
