{% if DATA.corporate.size > 0 %}

<!-- 
<h2>Corporate Sponsors</h2> 
-->

{% for type in DATA.corporate %}
{% assign filtered_type = type | until_filter %}

{% if filtered_type.sponsors.size > 0 %}

<h1 style="text-align: center; padding-top: 20px;"  data-level="{{filtered_type.level}}">{{filtered_type.title | xml_escape}}</h1>

{% for item in filtered_type.sponsors %}
<table>
<tr data-until="{{item.until}}" data-level="{{item.level}}"><td class="sImageCell" style="width:320;"><a href="{{item.link | uri_escape}}" class="sLink" target="_blank" rel="noopener noreferrer">
    <img src="{{item.image | uri_escape}}" class="sImage" alt="{{item.title | xml_escape}}">
</a></td><td class="sTextCell">{{ item.blurb }}</td></tr>
</table>

{% endfor %}

{% endif %}
{% endfor %}

{% endif %}
