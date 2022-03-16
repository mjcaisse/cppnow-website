---
layout: page
title: Apply as Volunteer
permalink: /about/volunteer_program/apply/
section: about
redirect_from:
    - /student_volunteer_application/
---



{% case site.volunteer_applications %}
  {% when 'will' %}

We are not yet accepting applications for C++Now {{site.current_year}} Student / Volunteers.

  {% when 'is' %}

Thank you for applying to be a Vounteer at C++Now {{site.current_year}}! We need a bit of information about you to determine if you've got what it takes! Please fill out and submit [this form]({{site.volunteer_form_URL}}).

  {% when 'was' %}

We are no longer accepting application for C++Now {{site.current_year}} Student / Volunteers. Watch for announcements for next year's conference.

{% endcase %}
