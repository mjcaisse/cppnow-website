---
layout: announcements-page
title: Announcements
permalink: /announcements/
section: announcements
pagination: 
  enabled: true
---

{% for post in paginator.posts %}
<div class="post">
    <div class="postHeader">
        <h2 class="postTitle"><a href="{{ post.url }}" class="postTitleLink">{{ post.title }}</a></h2>
        <div class="postDate">{{ post.date | date: "%B %-d, %Y" }}</div>
    </div>

    <div class="postContent formattedTags">
        {{ post.content | split:'<!--break-->' | first }}
        {% if post.content contains '<!--break-->' %}
            <p><a href="{{ post.url }}#read-more">read more...</a></p>
        {% endif %}
    </div>
</div>
{% endfor %}

{% if paginator.total_pages > 1 %}
<ul class="postPagination">
    <li class="postPaginationItem">
        {% if page.pagination_info.curr_page != 1 %}
            <a href="/announcements/" class="a">« First</a>
        {% else %}
            <span class="postPaginationDisabledlink">« First</span>
        {% endif %}
    </li>
    <li class="postPaginationItem">
        {% if paginator.previous_page %}
            <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}" class="a">‹ Newer</a>
        {% else %}
            <span class="postPaginationDisabledlink">‹ Newer</span>
        {% endif %}
    </li>
    {% for trail in paginator.page_trail %}
        <li class="postPaginationItem postPaginationNumber">
            {% if trail.num != page.pagination_info.curr_page %}
                <a href="{{ trail.path | prepend: site.baseurl | replace: 'index.html', '' }}" class="a">{{ trail.num }}</a>
            {% else %}
                <span class="postPaginationDisabledlink">{{ trail.num }}</span>
            {% endif %}
        </li>
    {% endfor %}
    <li class="postPaginationItem">
        {% if paginator.next_page_path %}
            <a href="{{ paginator.next_page_path | prepend: site.baseurl }}" class="a">Older ›</a>
        {% else %}
            <span class="postPaginationDisabledlink">Older ›</span>
        {% endif %}
    </li>
    <li class="postPaginationItem">
        {% if page.pagination_info.curr_page < paginator.total_pages %}
            <a href="/announcements/page-{{paginator.total_pages}}/" class="a">Last »</a>
        {% else %}
            <span class="postPaginationDisabledlink">Last »</span>
        {% endif %}
    </li>
</ul>
{% endif %}
