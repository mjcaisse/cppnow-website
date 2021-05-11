{% for staffmember in staffmembers %}
#### {{staffmember.title}}

<p><div>
    {% if staffmember.cochairs %}
        {% for comember in staffmember.comembers %}
            {% if staffmember.email %}
                <a href="mailto:{{ comember.email}}">{{ comember.name }}</a>{% if comember.company %}, {{ comember.company }}{% endif %}
            {% else %}
                {{ comember.name }}{% if comember.company %}, {{ comember.company }}{% endif %}
            {% endif %}
        {% endfor %}
    {% else %}
        {% if staffmember.email %}
        <a href="mailto:{{ staffmember.email}}">{{ staffmember.name }}</a>{% if staffmember.company %}, {{ staffmember.company }}{% endif %}
        {% else %}
        {{ staffmember.name }}{% if staffmember.company %}, {{ staffmember.company }}{% endif %}
        {% endif %}
    {% endif %}
</div></p>

{% endfor %}
