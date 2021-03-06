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

    {% if site.current_year_online %}
Thank you for applying to be a Vounteer at C++Now {{site.current_year}}! We need a bit of information about you to determine if you've got what it takes! Please fill out and submit this form:

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnRNEPEfw4JICikWHJqAdqkX41JD3E2NEZQxJHQeRgazwvjg/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    {% else %}
Thank you for applying to be a Vounteer at C++Now {{site.current_year}}! We need a bit of information about you to determine if you've got what it takes! You can fill out the form below or open <a href="https://form.jotform.com/{{site.volunteer_jotform_ID}}">the application on the Jotform website</a> before the {{site.deadline_for_volunteers}} deadline.

<script src="https://form.jotform.com/jsform/{{site.volunteer_jotform_ID}}"></script>
    {% endif %}

  {% when 'was' %}

We are no longer accepting application for C++Now {{site.current_year}} Student / Volunteers. Watch for announcements for next year's conference.

{% endcase %}
