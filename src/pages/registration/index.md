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
You can register below or open <a href="{{site.eventbrite_reg_URL}}">the registration page on the Eventbrite website</a>.

Refund requests are granted, with {{site.refund_fee}} fee deduction, until {{site.refund_deadline}}. We can make an attendee substitution at any time. If you need to make an attendee substitution, please notify us as soon as possible.
 
{{site.eventbrite_reg_iframe_HTML}}

<div style="font-family: Helvetica, Arial; font-size: 12px; padding: 10px 0 5px; margin: 2px; width: 100%; text-align: left;"><a class="powered-by-eb" style="color: #adb0b6; text-decoration: none;" href="http://www.eventbrite.com/" target="_blank" rel="noopener">Powered by Eventbrite</a></div>

  {% when 'was' %}
C++Now is over for {{site.current_year}}. Please visit again or keep an eye on the [announcements page](/announcements/) information about next year.
{% endcase %}

