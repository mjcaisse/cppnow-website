## Program Committee

<div style="margin-bottom: 16px;">

{% for chair in programCommittee.chairs %}
<div>{{ chair.name }}{% if chair.company %}, {{ chair.company }}{% endif %} ({% if chair.title %}{{ chair.title }}{% else %}Chair{% endif %})</div>
{% endfor %}

