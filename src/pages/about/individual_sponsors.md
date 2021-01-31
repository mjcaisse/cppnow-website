---
layout: page
title: Individual Sponsors
permalink: /about/individual_sponsors/
section: about
redirect_from:
    - /individual_sponsors/
---

For individuals, C++Now offers the Boost Scholarship Sponsorship in support of the Boost Scholarship Fund. [Corporate Sponsorships](/about/corporate_sponsors/) are also available.


{% assign filename = 'Sponsors' | append: site.current_year %}
{% assign DATA = site.data.sponsors[filename] %}

{% include individualSponsorListing.md %}


## Boost Scholarship Fund

The Boost Scholarship Fund supports two programs that directly benefit C++ students and indirectly benefit the entire C++ community: Boost Summer of Code and the C++Now Student/Volunteer Program.


### Boost Summer of Code

The BSoC program is modeled after the [Google Summer of Code](https://developers.google.com/open-source/gsoc/) program, in which Boost is a long time participant. Like GSoC, BSoC projects provide funding for students to work on specific Boost Library projects over the summer. BSoC is designed to supplement the GSoC program by allowing Boost to accept students that would otherwise be rejected by GSoC due to limited funding or eligibility.



### C++Now Student/Volunteer Program

Each year, the conference gives financial support to a small group of young programmers covering expenses to attend the conference. In exchange, the volunteers help the C++Now staff in running the conference.

Contributions to the Boost Scholarship Fund are earmarked* to support these programs and can be made in any amount, but {% if site.current_year_online %}specific recognition is given at certain sponsorship levels. Recognized levels for 2021 are Gold $200, Silver $100, and Bronze $50.{% else %}specific benefits attach at certain sponsorship levels.{% endif %} Donations are made to the Boost Foundation, a 501(c)(3) public charity and are fully tax-deductable to the extent permitted by law. Credit card transactions are made through our partner Krueger Event Management, which manages the C++Now event. Donors will receive a disclosure statement indicating the fair market value of any tangible benefits received.

**Are you a student who will volunteer in exchange for a ticket? Not a student, just want to volunteer?<br>[Learn how to apply to the Student/Volunteer Program](/about/volunteer_program/)**

{% if site.current_year_online %}{% else %}
#### Gold Scholarship Sponsor Level

The Gold Level Sponsorship is $500 and has these benefits:

* Recognition on Boost and C++Now websites
* Boost Scholarship Sponsor tee shirt
* Recognition at C++Now Welcome and Closing sessions
* Invitation to Meet The Student/Volunteers Breakfast at C++Now

#### Silver Scholarship Sponsor Level

The Silver Level Sponsorship is $250 and has these benefits:

* Recognition on Boost and C++Now websites
* Recognition at C++Now Welcome and Closing sessions
* Boost Scholarship Sponsor tee shirt

#### Bronze Scholarship Sponsor Level

The Bronze Level Sponsorship is $125 and has these benefits:

* Recognition on Boost and C++Now websites
* Boost Scholarship Sponsor tee shirt
{% endif %}
Every donation comes with the knowledge that you are making a difference in the career of a C++ student.

#### Become a Sponsor Today

Choose a Boost Scholarship Sponsorship level and proceed to Paypal to checkout.

{::nomarkdown}
<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
 <input type="hidden" name="cmd" value="_s-xclick">
 <input type="hidden" name="hosted_button_id" value="8YPSJLHDD83UN">
 <table>
  <tr>
   <td>
    <input type="hidden" name="on0" value="Sponsor Levels">Sponsor Levels
   </td>
  </tr>
  <tr>
   <td>
    <select name="os0">
     <option value="Gold Level">Gold Level $200.00 USD</option>
     <option value="Silver Level">Silver Level $100.00 USD</option>
     <option value="Bronze Level">Bronze Level $50.00 USD</option>
    </select>
   </td>
  </tr>
 </table>
 <input type="hidden" name="currency_code" value="USD">
 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
 <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
{:/nomarkdown}

---

C++Now is brought to you by [Boost](http://www.boost.org). You can make a [donation to Boost](http://www.boost.org/donate/) in any amount.
<a href="http://www.boost.org" class="sponsorLink" target="_blank" rel="noopener noreferrer">
    <img src="/assets/img/sponsors/boost.png" class="sponsorImage" alt="Boost">
</a>

---

<p>* It is the intent of the Boost Foundation to honor the wishes of all donors; however, an earmark does not represent a legal obligation on the Foundation to apply the funds as directed and we reserve the right to reallocate any unused funds toward other Boost activities. All funds will, regardless of their use, be spent in a way that benefits the Boost community, the general public, and the advancement of free and open source software.</p>

For a copy of the C++Now Corporate Sponsorship Prospectus or if you have any questions about individual sponsorships or any of these programs contact [sponsorship@cppnow.org](mailto:sponsorship@cppnow.org).
