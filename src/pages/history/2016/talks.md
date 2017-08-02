---
layout: page
title: 2016 Talks
permalink: /history/2016/talks/
section: history
---

Please enjoy all available videos and slides from talks, keynotes, and tutorials given at C++Now 2016, which took place in Aspen Colorado from May 9th to May 14th, 2016.

* [Playlist of 2016 Session Talks](https://www.youtube.com/playlist?list=PL_AKIMJc4roU0F3w20Ac77YeOFyvFmaJD)

{% for item in site.data.Talks2016 %}
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
