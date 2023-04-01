---
layout: home
section: home
---

{% if site.show_promo_video %}
<div class="homeBoxes">
    <div class="homeBoxesLeft">
        {{site.promo_video_iframe}}
    </div>
</div>
{% endif %}

The C++Now community has grown out of the Boost community and is focused on pushing C++ to its limits. We are helping to define what C++ will look like tomorrow, but are also curious about what we can do with C++ <i>now</i>!

<div class="textCenter">
    <h3>
        <span class="nowrap">{{site.current_year_start_date}}</span> - <span class="nowrap">{{site.current_year_end_date}}</span>
    </h3>

    <div id="countdown" data-start-date="{{site.current_year_start_date_formatted}}" data-end-date="{{site.current_year_end_date_formatted}}"></div>
</div>

{% if site.schedule_online %}

## <span style="color:red;">Lodging Update</span>

We've sold out of rooms at the Aspen Meadows this year, please see our [lodging page](/location/lodging/) for information regarding alternative hotels.

{% if site.lightning_talk_submission == "is" %}

## <span>Submit a Lightning Talk</span>

If you're attending this year, consider [submitting a lightning talk!](/schedule/lightning.talks/)
{% endif %}

## <span>Keynote Speakers!</span>

Check out our exciting [{{site.current_year}} keynote speakers!](/announcements/)

## <span>Program Announced!</span>

The amazing [program for C++Now {{site.current_year}} is now up!](/announcements/2023/03/2023-program-announced/)

{% else %}
{% endif %}

## <span style="color:red;">Travel Update</span>

If you are interested in attending C++Now 2023, please read this important [Travel Update](/announcements/2023/02/Travel-Update/) on the <span style="font-weight:bold;font-style:italic;">closing of the Aspen Airport</span>.


{% if site.volunteer_applications == "is" %}
## Accepting Student Volunteers

We're now accepting student volunteers!  For more information, and to apply, <a href="/announcements/2023/01/2023-call-for-student-volunteers/">see the announcement here</a>.

{% endif %}

{% if site.registration == "is" %}
## Registration is Open

We'll be back at full strength this year, with three tracks of outstanding C++ sessions.  Join us in Aspen this May for the most advanced C++ conference on the planet!

<!-- <a href="/announcements/2023/01/2023-registration-is-open/">Registration for 2023 is now open!</a> -->
<div class="textCenter">
<a href="/announcements/2023/01/2023-registration-is-open/" class="buttonPrimaryLarge">I Want to Register!</a>
</div>
<br>

{% endif %}

{% if site.submission == "is" %}
## Call for Submissions

The 2023 <a href="{{site.last_cfs}}">Call for Submissions</a> is now open!
<br>
<br>
{% endif %}


<div class="homeBoxes">
{% if site.B0_show %}
    <div class="homeBoxesLeft">
        <a href="{{site.B0_link}}" class="homeBoxesTitle" title="{{site.B0_photo_title}}">
            <img src="{{site.B0_photo}}" alt="{{site.B0_photo_title}}">

            <h2>{{site.B0_title}}</h2>
        </a>

        {{site.B0_description}}

        <p><a href="{{site.B0_link}}">{{site.B0_call}}</a></p>
    </div>
{% endif %}
{% if site.B1_show %}
    <div class="homeBoxesRight">
        <a href="{{site.B1_link}}" class="homeBoxesTitle" title="{{site.B1_photo_title}}">
            <img src="{{site.B1_photo}}" alt="{{site.B1_photo_title}}">

            <h2>{{site.B1_title}}</h2>
        </a>

        {{site.B1_description}}

        <p><a href="{{site.B1_link}}">{{site.B1_call}}</a></p>
    </div>
{% endif %}
</div>

<div class="homeBoxes">
{% if site.B2_show %}
    <div class="homeBoxesLeft">
        <a href="{{site.B2_link}}" class="homeBoxesTitle" title="{{site.B2_photo_title}}">
            <img src="{{site.B2_photo}}" alt="{{site.B2_photo_title}}">

            <h2>{{site.B2_title}}</h2>
        </a>

        {{site.B2_description}}

        <p><a href="{{site.B2_link}}">{{site.B2_call}}</a></p>
    </div>
{% endif %}
{% if site.B3_show %}
    <div class="homeBoxesRight">
        <a href="{{site.B3_link}}" class="homeBoxesTitle" title="{{site.B3_photo_title}}">
            <img src="{{site.B3_photo}}" alt="{{site.B3_photo_title}}">

            <h2>{{site.B3_title}}</h2>
        </a>

        {{site.B3_description}}

        <p><a href="{{site.B3_link}}">{{site.B3_call}}</a></p>
    </div>
{% endif %}
</div>

<div class="homeBoxes">
{% if site.B4_show %}
    <div class="homeBoxesLeft">
        <a href="{{site.B4_link}}" class="homeBoxesTitle" title="{{site.B4_photo_title}}">
            <img src="{{site.B4_photo}}" alt="{{site.B4_photo_title}}">

            <h2>{{site.B4_title}}</h2>
        </a>

        {{site.B4_description}}

        <p><a href="{{site.B4_link}}">{{site.B4_call}}</a></p>
    </div>
{% endif %}
{% if site.B5_show %}
    <div class="homeBoxesRight">
        <a href="{{site.B5_link}}" class="homeBoxesTitle" title="{{site.B5_photo_title}}">
            <img src="{{site.B5_photo}}" alt="{{site.B5_photo_title}}">

            <h2>{{site.B5_title}}</h2>
        </a>

        {{site.B5_description}}

        <p><a href="{{site.B5_link}}">{{site.B5_call}}</a></p>
    </div>
{% endif %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "C++Now 2023",
  "startDate": "2023-05-07T15:00",
  "endDate": "2023-05-12T18:00",
  "image": [
    "http://cppnow.org/assets/img/theme/CppNowLogo.svg"
   ],
  "description": "{{ site.description }}",
  "offers": {
    "@type": "Offer",
    "url": "http://cppnow.org/registration/",
    "price": "1500",
    "priceCurrency": "USD",
    "availability": "http://schema.org/InStock",
    "validFrom": "2022-05-01T16:00",
    "offeredBy": {
        "@type": "Organization",
        "name": "Boost Libraries",
        "url": "http://boost.org/"
      },
    "seller": {
        "@type": "Organization",
        "name": "Boost Libraries",
        "url": "http://boost.org/"
      }
  },
  "organizer": {
    "@type": "Person",
    "familyName": "Steagall",
    "givenName": "Bob"},
  "audience": {
    "@type": "Audience",
    "audienceType": "C++ programmers"
  },
  "eventStatus": "http://schema.org/EventScheduled",
  "funder": {
    "@type": "Organization",
    "name": "Boost Libraries",
    "url": "http://boost.org/"
  },
  "inLanguage": "en",
  "isAccessibleForFree": false,
  "sponsor": [
    {
        "@type": "Organization",
        "name": "Bloomberg LP",
        "url": "http://techatbloomberg.com/"},
    {
        "@type": "Organization",
        "name": "C++ Alliance",
        "url": "http://cpp.al/"},
    {
        "@type": "Organization",
        "name": "Commvault",
        "url": "http://www.commvault.com/"},
    {
        "@type": "Organization",
        "name": "Ciere Consulting",
        "url": "http://ciere.com/"},
    {
        "@type": "Organization",
        "name": "Jet Brains",
        "url": "http://www.jetbrains.com/"}]
}
</script>

## Schedule

{% if site.schedule_online %}
The [session schedule for C++Now {{site.current_year}}](/schedule/) is up!
{% else %}
The session schedule for C++Now {{site.current_year}} is not yet confirmed. Keep an eye on the [announcements page](/announcements/) for updated information. To get an idea of what to expect, check out the {{ site.previous_years_schedule }}.
{% endif %}

{% if site.show_tag_cloud %}
<div class="homeBoxes">
    <div class="homeBoxesLeft">
        <div>
        This is the tag cloud for the scheduled sessions.


        Mobile users may find the <a href="/taglist/">tag list</a> a more useful format.

        {% include tagclouds/tagcloud.infra.html %}

        <img alt="Tag Cloud" src="{{site.tag_cloud_image}}" height="{{site.tag_cloud_image_height_}}" width="{{site.tag_cloud_image_height_}}" usemap="#wordCloudMap" class="imageCenter map">
        {% include {{site.tag_cloud_map}} %}
        </div>
    </div>
</div>
{% endif %}


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
