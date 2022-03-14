## Program Committee

<div style="margin-bottom: 16px;">

{% for chair in programCommittee.chairs %}
<div>{{ chair.name }}{% if chair.company %}, {{ chair.company }}{% endif %} ({% if chair.title %}{{ chair.title }}{% else %}Chair{% endif %})</div>
{% endfor %}

<br>

{% for member in programCommittee.members %}
{% if member.disabled != true %}
<div>
    {{ member.name }}{% if member.company %}, {{ member.company }}{% endif %}
</div>
{% endif %}
{% endfor %}
</div>
