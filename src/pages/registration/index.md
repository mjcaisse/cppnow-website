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
* view recordings of session immediately (rather than waiting for them to be publicly released on [our YouTube channel](https://www.youtube.com/user/Boostcon))
* join the conference Discord to engage with other attendees including presenters, Boost Library authors, and sponsors
* enter our virtual venue (Gather Town) to engage with other attendees, attended extended Q&A sessions with presenters, solve puzzles, and play games

General registration is $250 and Student registration is $50, but the fees may be reduced once the conference has started.

Please register through <a href="{{site.krueger_reg_URL}}">the registration system</a>.

    {% else %}
Please register through <a href="{{site.krueger_reg_URL}}">the registration system</a>.

Refund requests are granted in full until {{site.refund_deadline}}. We can make an attendee substitution at any time. If you need to make an attendee substitution or have any other questions, please notify [our registrar](mailto:registrar@cppnow.org) as soon as possible.
    {% endif %}
 
  {% when 'was' %}
C++Now is over for {{site.current_year}}. Please visit again or keep an eye on the [announcements page](/announcements/) information about next year.
{% endcase %}
