{% if DATA.individual.size > 0 %}

<h2>Individual Sponsors</h2>

{% for type in DATA.individual %}
{% if type.sponsors.size > 0 %}

<h3>{{type.title | xml_escape}}</h3>

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