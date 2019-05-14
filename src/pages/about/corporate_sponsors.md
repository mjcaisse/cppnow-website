---
layout: page_sponsorless
title: Corporate Sponsors
permalink: /about/corporate_sponsors/
section: about
redirect_from:
    - /sponsors/
---

Email [sponsorship@cppnow.org](mailto:sponsorship@cppnow.org) for a copy of the current C++Now Corporate Sponsorship Prospectus. [Individual Sponsorships](/about/individual_sponsors/) are also available.


{% assign filename = 'Sponsors' | append: site.current_year %}
{% assign DATA = site.data.sponsors[filename] %}

{% include corporateSponsorListing.blurb.md %}


### Brought To You By

{% for item in site.data.sponsors.BroughtToYouBy %}
<a href="{{item.link | uri_escape}}" class="sLink" target="_blank" rel="noopener noreferrer">
    <img src="{{item.image | uri_escape}}" class="sImage" alt="{{item.title | xml_escape}}">
</a>
{% endfor %}
