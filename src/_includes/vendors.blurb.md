{% if site.data.vendors.size != 0 %}
    {% for headerItem in site.data.vendors %}

<h2>{{headerItem.header}}</h2>

        {% for item in headerItem.vendors %}
<table>
<tr ><td class="sImageCell" style="width:320;"><a href="{{item.link | uri_escape}}" class="sLink" target="_blank" rel="noopener noreferrer">
    <img src="{{item.image | uri_escape}}" class="sImage" alt="{{item.title | xml_escape}}">
</a></td><td class="sTextCell">{{ item.blurb }}</td></tr>
</table>

        {% endfor %}

    {% endfor %}

{% endif %}
