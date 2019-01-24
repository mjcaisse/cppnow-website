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

Thank you for applying to be a Vounteer at C++Now {{site.current_year}}! We need a bit of information about you to determine if you've got what it takes! You can fill out the form below or open <a href="https://form.jotform.com/{{site.volunteer_jotform_ID}}">the application on the Jotform website</a> before the {{site.deadline_for_volunteers}} deadline.

<script src="https://form.jotform.com/jsform/{{site.volunteer_jotform_ID}}"></script>

  {% when 'was' %}

We are no longer accepting application for C++Now {{site.current_year}} Student / Volunteers. Watch for announcements for next year's conference.

{% endcase %}
