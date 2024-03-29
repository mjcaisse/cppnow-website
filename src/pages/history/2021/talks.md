---
layout: page
title: 2021 Talks
permalink: /history/2021/talks/
section: history
---

Please enjoy all available videos and slides from talks, keynotes, and tutorials given at C++Now 2021, which took place online from May 2nd to May 7th, 2021.

<!--
* [Playlist of 2020 Session Talks](https://www.youtube.com/watch?v=QFIOE1jKv30&list=PL_AKIMJc4roVSbTTfHReQTl1dc9ms0lWH)
* [Playlist of 2020 Lightning Talks](https://www.youtube.com/watch?v=6uon_MtpcwE&list=PL_AKIMJc4roWtkG_Qiw6uwNWcjjG5WLHE)
* [Slides](https://github.com/boostcon/cppnow_presentations_2020)
-->

* Playlist of 2021 Session Talks (not yet available)
* Playlist of 2021 Lightning Talks (not yet available)
* Slides (not yet available)

{% for item in site.data.talks.Talks2021 %}
<div class="panelBox">
<a name="{{item.sched | remove_first: "https://sched.co/" |uri_escape}}"></a>
    <h3>{{item.title | xml_escape}}</h3>
    <p>
        by {% if item.bio and item.bio != ''  %}<a href="{{item.bio | uri_escape}}">{{item.speaker | xml_escape}}</a>{% else %}{{item.speaker | xml_escape}}{% endif %}{% if item.bio2 and item.bio2 != ''  %} and <a href="{{item.bio2 | uri_escape}}">{{item.speaker2 | xml_escape}}</a>{% else %}{% if item.speaker2 and item.speaker2 != '' %} and {{item.speaker2 | xml_escape}}{% endif %}{% endif %}{% if item.bio3 and item.bio3 != '' %}<a href="{{item.bio3 | uri_escape}}">{{item.speaker3 | xml_escape}}</a>{% else %}{% if item.speaker3 and item.speaker3 != '' %} and {{item.speaker3 | xml_escape}}{% endif %}{% endif %}
        <br>
        given {{item.date | xml_escape}} at {{item.time | xml_escape}} in {{item.room | xml_escape}}
    </p>
    <ul>
        <li><a href="{{item.sched | uri_escape}}">Summary</a></li>
        <li>
            {% if item.slides and item.slides != '' %}<a href="{{item.slides | uri_escape}}">Slides</a>{% else %}<span class="greyText"><em>No Slides</em></span>{% endif %}
        </li>
        <li>
            {% if item.youtube and item.youtube != '' %}<a href="https://youtu.be/{{item.youtube}}" class="panelVideoLink" data-src="{{item.youtube}}">Video</a>{% else %}<span class="greyText"><em>No Video</em></span>{% endif %}
        </li>
    </ul>
</div>
{% endfor %}

<script src="/assets/js/PanelVideoOpener.js"></script>

