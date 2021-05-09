{% if DATA.corporate.size > 0 %}

<h2>Corporate Sponsors</h2>

{% for type in DATA.corporate %}
{% assign filtered_type = type | until_filter %}

{% if filtered_type.sponsors.size > 0 %}

<h3>{{filtered_type.title | xml_escape}}</h3>

{% for item in filtered_type.sponsors %}
<a until="{{item.until}} "href="{{item.link | uri_escape}}" class="sLink" target="_blank" rel="noopener noreferrer">
    <img src="{{item.image | uri_escape}}" class="sImage" alt="{{item.title | xml_escape}}">
</a>
{% endfor %}

{% endif %}
{% endfor %}

{% endif %}
