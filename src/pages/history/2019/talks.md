---
layout: page
title: 2019 Talks
permalink: /history/2019/talks/
section: history
---

Please enjoy all available videos and slides from talks, keynotes, and tutorials given at C++Now 2019, which took place in Aspen Colorado from May 5th to May 10th, 2019.

* [Playlist of 2019 Session Talks](https://www.youtube.com/playlist?list=PL_AKIMJc4roW3jQgghyouFoX15m84YYB0)
* [Playlist of 2019 Lightning Talks](https://www.youtube.com/playlist?list=PL_AKIMJc4roXZPycnYPqK-FamxJdISihj)
* [Slides](https://github.com/boostcon/cppnow_presentations_2019)

<!--
* Playlist of 2019 Session Talks (not yet available)
* Playlist of 2019 Lightning Talks (not yet available)
* Slides (not yet available)
-->

{% for item in site.data.talks.Talks2019 %}
<div class="panelBox">
<a name="{{item.sched | remove_first: "https://cppnow2019.sched.com/event/" |uri_escape}}"></a>
    <h3>{{item.title | xml_escape}}</h3>
    <p>
        by {% if item.bio == '' %}{{item.speakers | xml_escape}}{% else %}<a href="{{item.bio | uri_escape}}">{{item.speakers | xml_escape}}</a>{% endif %}
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
