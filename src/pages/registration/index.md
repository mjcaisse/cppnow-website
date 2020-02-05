---
layout: page
title: Registration
permalink: /registration/
section: registration
redirect_from:
    - /tickets/
---

{% case site.registration %}
  {% when 'will' %}
Registration for C++Now {{site.current_year}} is not yet open. Please visit again or keep an eye on the [announcements page](/announcements/) for updated information.
  {% when 'is' %}
Please register through <a href="{{site.krueger_reg_URL}}">the registration system</a>.

Refund requests are granted, with {{site.refund_fee}} fee deduction, until {{site.refund_deadline}}. We can make an attendee substitution at any time. If you need to make an attendee substitution or have any other questions, please notify [our registrar](mailto:registrar@cppnow.org) as soon as possible.
 
  {% when 'was' %}
C++Now is over for {{site.current_year}}. Please visit again or keep an eye on the [announcements page](/announcements/) information about next year.
{% endcase %}
