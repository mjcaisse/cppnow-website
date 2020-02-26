{% if DATA.corporate.size > 0 %}

<h2>Corporate Sponsors</h2>

{% for type in DATA.corporate %}
{% if type.sponsors.size > 0 %}

<h3>{{type.title | xml_escape}}</h3>

{% for item in type.sponsors %}
<table>
<tr><td class="sImageCell" style="width:320;"><a href="{{item.link | uri_escape}}" class="sLink" target="_blank" rel="noopener noreferrer">
    <img src="{{item.image | uri_escape}}" class="sImage" alt="{{item.title | xml_escape}}">
</a></td><td class="sTextCell">{{ item.blurb }}</td></tr>
</table>

{% endfor %}

{% endif %}
{% endfor %}

{% endif %}
