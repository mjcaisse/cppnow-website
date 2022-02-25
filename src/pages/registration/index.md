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

    {% if site.current_year_online %}
Online registration enables attendees to:
* attend sessions live and participate in Q&A
* participate in the Library-in-a-Week workshop
* view recordings of sessions without delay
* give a talk during the Lightning Talks sessions
* join the conference Discord to engage with other attendees including presenters, Boost Library authors, and sponsors
* enter our virtual venue (Gather Town) to engage with other attendees, attend extended Q&A sessions with presenters, solve puzzles, and play games

General registration is $250 and Student registration is $50, but the fees may be reduced once the conference has started.

Please register through <a href="{{site.krueger_reg_URL}}">the registration system</a>.

    {% else %}
Please register through <a href="{{site.krueger_reg_URL}}">the registration system</a>.

In the event that a registered attendee is not able to attend:
* Please constact the [C++Now Registrar](mailto:registrar@cppnow.org) as soon as possible.
* We can make an attendee substitution at any time, up to the start of the conference,
* We can credit a registration for next year (avoiding any increase in registration rates).
* {% if site.refunds_are_free %}For {{site.current_year}}, the organizers are waiving the refund fee. We can refund the registration entirely.{% else %}Refund requests are granted, with {{site.refund_fee}} fee deduction, until {{site.refund_deadline}}.{% endif %}
    {% endif %}
 
  {% when 'was' %}
C++Now is over for {{site.current_year}}. Please visit again or keep an eye on the [announcements page](/announcements/) information about next year.
{% endcase %}
