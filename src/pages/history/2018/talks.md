---
layout: page
title: 2018 Talks
permalink: /history/2018/talks/
section: history
---

Please enjoy all available videos and slides from talks, keynotes, and tutorials given at C++Now 2018, which took place in Aspen Colorado from May 6th to May 11th, 2018.

* [Playlist of 2018 Session Talks](https://www.youtube.com/watch?v=QFIOE1jKv30&list=PL_AKIMJc4roVSbTTfHReQTl1dc9ms0lWH)
* [Playlist of 2018 Lightning Talks](https://www.youtube.com/watch?v=6uon_MtpcwE&list=PL_AKIMJc4roWtkG_Qiw6uwNWcjjG5WLHE)
* [Slides](https://github.com/boostcon/cppnow_presentations_2018)

<!--
* Playlist of 2018 Session Talks (not yet available)
* Playlist of 2018 Lightning Talks (not yet available)
-->

{% for item in site.data.talks.Talks2018 %}
<div class="panelBox">
    <h3>{{item.title | xml_escape}}</h3>
    <p>
        by {{item.speakers | xml_escape}}
        <br>
        given {{item.date | xml_escape}} at {{item.time | xml_escape}} in {{item.room | xml_escape}}
    </p>
    <ul>
        <li><a href="{{item.sched | uri_escape}}">Summary</a></li>
        <li>
            {% if item.slides == '' %}<span class="greyText"><em>No Slides</em></span>{% endif %}
            {% if item.slides != '' %}<a href="{{item.slides | uri_escape}}">Slides</a>{% endif %}
        </li>
        <li>
            {% if item.youtube == '' %}<span class="greyText"><em>No Video</em></span>{% endif %}
            {% if item.youtube != '' %}<a href="https://youtu.be/{{item.youtube}}" class="panelVideoLink" data-src="{{item.youtube}}">Video</a>{% endif %}
        </li>
    </ul>
</div>
{% endfor %}

<script src="/assets/js/PanelVideoOpener.js"></script>
