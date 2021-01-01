---
layout: page
title: Presenter Information
permalink: /presenters/
section: presenters
redirect_from:
    - /submission/
---

Thank you for your interest in becoming a speaker at C++Now.

## Types of Presentations

We have two programs of presentations at C++Now. We have a [main program](#main_program) and a [lightning talk program](#lightning_talks).

<a name="main_program"></a>
### Main Program
Every year we release a <a href="{{site.last_csf}}">Call for Submissions for the <i>main program</i></a>.

{% case site.submission %}
  {% when 'will' %}
The CfS is not yet opened for C++Now {{site.current_year}}. Please visit again or keep an eye on the [announcements page](/announcements/) for updated information.
  {% when 'is' %}
  {% when 'was' %}
The CfS is now closed for C++Now {{site.current_year}}{% unless site.over %}, but it isn't too late to become a presenter. Please checkout [our lightning talk program](#lightning_talks){% endunless %}.
{% endcase %}

Most C++Now sessions are 90 minutes long, but sessions can be either shorter (45 minutes) or longer (multiples of 90 minutes). For 90 minute or longer sessions, registration will be waived for one presenter. For shorter sessions, registration will be prorated.

Interactive and collaborative sessions are encouraged, as this is the style of learning and participation that has proven most successful at these events. Many sessions take the form of a traditional presentation with a slide deck and a single speaker, but other formats are encouraged and supported.

- _Lectures_ focus on a practitioner’s ideas and experience with anything relevant to the C++ community.

- _Tutorials_ are sessions at which instructors teach conference participants specific skills or knowledge relevant to C++.

- _Workshops_ provide an active arena for advancements in C++-relevant topics. Workshops provide the opportunity for experienced practitioners to develop new ideas about a topic of common interest and experience. Workshops usually feature significant hands-on exercises.

- _Case Studies_ are reports on a particular project or projects that attempted something new and the results of the experience.

- _Panels_ feature several people presenting their ideas and experiences relating to C++’s relevant, controversial, emerging, or unresolved issues. _Panels_ may be conducted in several ways, such as comparative, analytic, or historic and usually feature interaction between participants as well as Q&A with the audience.

- _Demonstrations_ show attendees what a particular process, product, technique, or library is capable of and how it is best used.

- Other formats may also be of interest. Don’t hold back a proposal just because it doesn’t fit into a pigeonhole.

{% if site.current_year_online %}
#### Information specific C++Now 2021 (online-only)

##### Safety Session
If your submission is accepted for the C++Now 2021 main program, we'll schedule a *Safety Session* with you to work with conference staff on your presentation. The Safety Session will be exactly one week before your conference scheduled session (so in the week of April 26th - 30th). If this time doesn't work for you, please contact [Chris Ryan, our Speaker Liaison](mailto:speakers@cppnow.org), as soon as possible to scheduled an alternative Safety Session time.

During your Safety Session, conference staff will assist with with your hardware/software configuration and provide you with guidance on how to optimize for online presentation.

You will also *record your entire session presentation* so that we'll have a back-up to run in case of any system failures on the day of. Yes, this means that *you'll need to have your slides completed and your presentation ready one week before* it is scheduled. You will also submit a PDF of your slides at this time.

Does this mean that you cannot make further changes to your presentation? Of course not. It wouldn't be C++Now if ~~Michael~~ someone wasn't updating their slides up until the last minute. You can modify your presentation as necessary and update your submitted PDF at any time, but we want to have a "fallback" in place for the day of.

##### Prerecorded Sessions
Audiences prefer "live" online sessions and most presenters prefer these as well. However, you may be more comfortable prerecording your presentation (or you may have bandwidth issues that require this). If this is your choice, do plan to attend your talk online so you can discuss the presentation in the chat room and do a live Q&A session at the end of your recorded talk. (Allow time for your Q&A session when preparing your recording.)

{% endif %}

#### Presenter FAQs

Before you submit your talk, please have a look at our [Submitter FAQ](/about/faq/#submitter-faq) and our [Speaker FAQ](/about/faq/#speaker-faq). Before you give your talk, please read our [Attendee FAQ](/about/faq/#attendee-faq){% if site.current_year_online == false %}, particularly, [the question about the CatchBox](/about/faq/#CatchBox){% endif %}.

For more information about regular program submissions, contact the Program Chair: [program@cppnow.org](mailto:program@cppnow.org)

{% if site.submission == "is" %}

<!--
<p class="highlight" markdown="1">Please [make your main program submission here](https://cppform.cierecloud.com/sessions/submitter/?conf=boostcon&year={{site.current_year}}).
</p>
-->
<p style="text-align: center; font-size: 40px;"><a href="https://cppform.cierecloud.com/sessions/submitter/?conf=boostcon&year={{site.current_year}}">Submit Now</a></p>

{% endif %}

<a name="lightning_talks"></a>
### Lightning Talks

In addition to the [main program](#main_program) we also have <i>lightning talks</i>. Lightning talks are only five minutes long. This is a challenging length for a technical talk! We make a Call for Lightning Talks a few days before the conference and continue to accept submission after the start of the conference.

The [BoostCon YouTube Channel](https://www.youtube.com/user/BoostCon/) has examples of [previous lightning talks](https://www.youtube.com/watch?v=6uon_MtpcwE&list=PL_AKIMJc4roWtkG_Qiw6uwNWcjjG5WLHE).

For more information about lightning talks, contact the Lightning Talk Chair: [lightning@cppnow.org](mailto:lightning@cppnow.org)


## Registration

**All speakers must register to attend the conference.**

Speakers that are speaking as Lightning Talk (only) presenters do not have their registration waived.

Regular program speakers have their registration cost waived. (Prorated up to one registration per full session.)

If your registration cost is waived, you will be contacted about how to register.

## Promotion

Please let people know that you are speaking! You are the attraction for this year’s conference, so let people know on [Twitter](https://twitter.com/cppnow/) (#CppNow), [Facebook](https://www.facebook.com/CppNow/), [LinkedIn](https://www.linkedin.com/groups/6593259), [Slack](https://cpplang.slack.com/messages/cppnow/), or wherever is appropriate for you.

If you want to engage with other CppNow attendees, including other presenters, please join [the Slack #cppnow channel](https://cpplang.slack.com/messages/cppcon/) by first using [the auto-invite page for the CppLang workspace](https://cpplang-inviter.cppalliance.org/).

## Connecting with other speakers
Please join [the Slack #speakerscorner channel](https://cpplang.slack.com/messages/speakerscorner/) by first using [the auto-invite page for the CppLang workspace](https://cpplang-inviter.cppalliance.org/). This is a good way of asking questions of and getting advise from experienced presenters at C++ conferences.

## Practice
If possible, give your talk before a live technical audience. Do it at work and/or with a local user group. You’ll be surprised at what you learn about how long it takes, what you find yourself wishing you’d included, and what questions you get. Pay attention to these issues, learn from them, and incorporate them into your talk. It will improve every time you give it, try to give it as many times as you can arrange an audience.

## Questions
Please be prepared for questions. The C++Now audience is made up of seasoned software engineers with an advanced level of understanding of C++. It is also an audience that expects presenters to be ready, willing, and able to address non-trivial questions during a session.
The environment is collaborative. The audience doesn’t want to see you fail and isn’t trying to play “Gotcha” or “ISO Standard Trivia,” but they do expect their questions and suggestions to be taken seriously.

### How and why to repeat questions
There are two important reasons to repeat questions. One is that, even if you can hear the question, others may not. They may be seated behind the individual asking the question, so the questioner is facing away from them. Even if everyone in the room can hear the question, it may not be picked up well on the recording. You have a microphone; your version of the question will be clear.

So, if the questioner has a microphone, you don’t need to repeat the question, right? Wrong, because there is another reason to repeat the question (in your own words) and that is to let the questioner and the audience know what you thought was asked. Sometimes it isn’t clear what the questioner is asking. Time spent clarifying a point that was already clear is wasted time. Putting the question in your own words allows the questioner to say, “No, what I’m asking is…”

Not only does it work better to put the question in your own words, it may be smoother to just incorporate the question into the answer. “Yes, we could use a lambda expression here.” This works even if it is a comment rather than a question. “Correct, it would be wrong to use ‘unsigned’ in this case.” "Good point. It would be harder to understand this syntax if we weren't using East const."

## Ending Your Presentation

It isn’t uncommon for content to take longer to deliver than you expect. This is part of the reason that we urge you to practice before a live technical audience. We aren’t so tightly scheduled that (with one important exception–see Half Sessions) you can't go over by a minute or two. But do not go beyond that.

If you find that questions are taking you beyond your allotted time, you may cut them off by saying that you’ll continue to take questions during break.

You may feel that, since you were speaking before the lunch or dinner break, that you are free to run long. That is not the case. The audience, the volunteers, and the camera operators are all within their rights to expect you to end when you agreed to end. To not do so is rude and unacceptable.

The volunteers have been instructed to cut you off, but they really don’t want to do that. It is awkward for everyone. Practice your session, watch your time, skip the digressions if necessary, and _end on time_.

## Half Sessions
If you are scheduled to deliver a half session, your help is needed to make the program run smoothly.

### First Half
If you are giving the first half session, arrive at your session extra early because not only will you need to get your AV setup and checked, the following presenter will need to be setup and checked as well. Please let the following speaker get set up and checked before you, so you’ll be setup and ready to go for your talk.

It is very important that you start on time, so that you be able to finish on time. Finishing on time means finishing with questions as well. You need to be off-mic and unplugged at the end of your allotted time so the following speaker will have their full time to present. If you want to offer to take more questions outside the session, please say that you’ll be available after the next speaker is finished, not during that speaker’s session.

If you are scheduled for the first of a pair of half-session talks, you cannot go over our time. **You must stop when your time is up.** There are no exception to this, even if your sessions started late through no fault of your own.

### Second Half
If you are giving the second half of two half session talks, arrive early before the session before yours starts. You need to be checked out on AV before that other speaker is setup for their talk. Since you need to allow at least ten minutes for the other speaker to be setup, you need to arrive in time so that you can be finished being setup (including necessary troubleshooting) at least an hour before your session is scheduled to begin.

It is understandable that right before speaking you might be too nervous to sit quietly through their talk (although that might help calm your nerves). If you can’t avoid pacing, please slip out of the session, but not far away. You’ll need to be available right after the previous speaker finishes to get set up and going.

## Slides
Better safe than sorry: Your laptop may break or go missing. Consider:

* Have copy of your slides on a USB stick.
* Mail yourself a copy of the slides.
* Put a copy on Google drive/Dropbox/iCloud.

## Archiving Your Presentation
Please send a PDF of your presentation to the [Conference Archivist](mailto:speaker-files@cppnow.org). Please use this address for both Main Program presentations and Lightning Talk presentations. {% if site.current_year_online %}This should be done a week before you give your presentation, but you can update it at any time, even after your presentation is over.{% else %}This need not be done _before_ you give your presentation, but please have it done in time to have the slides online by the time the video recording of your presentation is uploaded (shortly after the conference).{% endif %}

## Advice from Bash Films
Bash is company that records, edits, and uploads our videos. Here is their [advice to presenters](https://drive.google.com/file/d/0BylxYEqmZhqTV0JnS1A0WS1CUnM/view?usp=sharing).

## Advice from Scott Meyers
Here is Scott’s take on presenting code from his 2014 keynote at Meeting C++. (Thanks Jens.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/smqT9Io_bKo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Advice from Meeting C++ (Jens Weller)
Here is [a page of advice](https://meetingcpp.com/index.php/br/items/presenting-code.html) from the organizer of the Meeting C++ conference and user groups.

## More information

If you have any questions, please [contact the Speaker Liaison](mailto:speakers@cppnow.org).

We'll see you in Aspen!

