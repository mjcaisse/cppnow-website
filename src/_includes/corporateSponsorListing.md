{% if DATA.corporate.size > 0 %}

## Corporate Sponsors

{% for type in DATA.corporate %}
{% if type.sponsors.size > 0 %}

### {{type.title | xml_escape}}

{% for item in type.sponsors %}
<a href="{{item.link | uri_escape}}" class="sLink" target="_blank" rel="noopener noreferrer">
    <img src="{{item.image | uri_escape}}" class="sImage" alt="{{item.title | xml_escape}}">
</a>
{% endfor %}

{% endif %}
{% endfor %}

{% endif %}
