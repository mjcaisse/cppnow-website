---
layout: home
section: home
---

The C++Now community has grown out the Boost community and is focused on pushing C++ to its limits. We are helping to define what C++ will look like tomorrow, but are also curious about what we can do with C++ <i>now</i>!



<div class="textCenter">
    <h3>
        <span class="nowrap">{{site.current_year_start_date}}</span> - <span class="nowrap">{{site.current_year_end_date}}</span>
    </h3>

    <div id="countdown" data-start-date="{{site.current_year_start_date_formatted}}" data-end-date="{{site.current_year_end_date_formatted}}"></div>

{% case site.registration %}
  {% when 'will' %}
  {% when 'is' %}
    <a href="/registration/" class="buttonPrimaryLarge">Register Now</a>
  {% when 'was' %}
{% endcase %}


</div>


## Schedule

{% if site.schedule_online %}
The [session schedule for C++Now {{site.current_year}}]({{site.sched_com_URL}}) is up!
{% else %}
The session schedule for C++Now {{site.current_year}} is not yet confirmed. Keep an eye on the [announcements page](/announcements/) for updated information. To get an idea of what to expect, check out [C++Now 2018 Schedule](/history/2018/schedule/).
{% endif %}


The session schedule for C++Now 2019 is not yet confirmed. Keep an eye on the [announcements page](/announcements/) for updated information. To get an idea of what to expect, check out the {{previous_years_schedule}}.


{% case site.volunteer_applications %}
  {% when 'will' %}
  {% when 'is' %}
## Volunteer

We are currently <a href="/about/volunteer_program/">accepting applications</a> from young C++ programmers interested in helping to run the conference in exchange for financial aid to attend.
  {% when 'was' %}
{% endcase %}


## Register

{% case site.registration %}
  {% when 'will' %}
Registration for C++Now {{site.current_year}} is not yet available. Watch the [announcements page](/announcements/) for updated information.
  {% when 'is' %}

<a href="/registration/">Registration</a> is open!

  {% when 'was' %}
C++Now is over for {{site.current_year}}. Please visit again or keep an eye on the [announcements page](/announcements/) information about next year.
{% endcase %}

{% if site.hotel_registration == "is" %}
## Reserve

Rooms are still available at <a href="/location/lodging/" class="a">the Aspen Meadows Resort</a>.
{% else %}
{% endif %}

## Sponsor

There are several opportunities to sponsor C++Now, both as a [Corporate Sponsor](/about/corporate_sponsors/) and an [Individual Sponsor](/about/individual_sponsors/). Corporate sponsorships exist for multiple levels and specific needs like video production. Individual sponsors help make the [Volunteer Program](/about/volunteer_program/) and the Boost Summer of Code possible.

<div class="homeBoxes">
    <div class="homeBoxesLeft">
        <a href="/location/venue/" class="homeBoxesTitle" title="Aspen Center for Physics: Photo by Zoetica Ebb">
            <img src="/assets/img/home/venue.jpg" alt="Aspen Center for Physics: Photo by Zoetica Ebb">

            <h2>Venue</h2>
        </a>

        <p>The venue for C++Now is the <a href="https://www.aspenphys.org/">Aspen Center for Physics</a>, a beautiful location creating a lively environment for thought, education, and collaboration.</p>

        <p><a href="/location/venue/">Learn More</a></p>
    </div>
    <div class="homeBoxesRight">
        <a href="/location/lodging/" class="homeBoxesTitle" title="Aspen Meadows Resort">
            <img src="/assets/img/home/AspenMeadowsResort.jpg" alt="Aspen Meadows Resort">

            <h2>Hotel</h2>
        </a>

        <p>The conference hotel is the <a href="https://www.aspenmeadows.com/">Aspen Meadows Resort</a>, a 40 acre resort a short walk from the conference venue overlooking the Roaring Fork River.</p>

        <p><a href="/location/lodging/">Learn More</a></p>
    </div>
</div>

<div class="homeBoxes">
    <div class="homeBoxesLeft">
        <a href="/presenters/" class="homeBoxesTitle" title="Jackie Kay: Photo by Zoetica Ebb">
            <img src="/assets/img/home/jackie.jpg" alt="Jackie Kay: Photo by Zoetica Ebb">

            <h2>Become a Presenter</h2>
        </a>

        <p>Join the discussion! Get the most out of C++Now by joining the elite group of C++ experts that have presented a lightning talk or as part of the regular program.</p>

        <p><a href="/presenters/">Presenter Information</a></p>
    </div>
    <div class="homeBoxesRight">
        <a href="/about/volunteer_program/" class="homeBoxesTitle" title="Volunteers: Photo by Zoetica Ebb">
            <img src="/assets/img/home/volunteers.jpg" alt="Volunteers: Photo by Zoetica Ebb">

            <h2>Become a Volunteer</h2>
        </a>

        <p>A small group of promising young C++ programmers is selected to be part of each C++Now. In exchange for helping run the conference, volunteers receive financial assistance and what may be a career changing opportunity.</p>

        <p><a href="/about/volunteer_program/">Apply Today</a></p>
    </div>
</div>
