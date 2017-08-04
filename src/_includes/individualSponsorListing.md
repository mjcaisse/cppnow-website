{% if DATA.individual.size > 0 %}

## Individual Sponsors

{% for type in DATA.individual %}
{% if type.sponsors.size > 0 %}

### {{type.title | xml_escape}}

<p>
    {% for item in type.sponsors %}
        {% if item.disabled != true %}
            <span class="block">
                {{item.name}}
            </span>
        {% endif %}
    {% endfor %}
</p>

{% endif %}
{% endfor %}

{% endif %}