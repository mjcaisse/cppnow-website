---
layout: schedule-page
title: Schedule
permalink: /schedule/
section: schedule
---

{% if site.schedule_online %}

<div><a id="sched-embed" href="{{site.sched_com_URL}}">View the C++Now {{site.current_year}} schedule (large view)</a></div>

<div style="width:100%; height:100%">
    <iframe src="https://cppnow.digital-medium.co.uk/" style="width:900px; height:1200px" >
    </iframe>
</div>

<!-- <script src="{{site.sched_com_embed_URL}}"></script> -->

{% else %}

The schedule for C++Now {{site.current_year}} is not yet confirmed. Please visit again or keep an eye on the [announcements page](/announcements/) for updated information. If you wish to be a speaker, please visit our [Presenters Page](/presenters/) for information and the submission form.

{% endif %}
