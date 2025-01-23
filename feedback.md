---
title: Отзывы клиентов, справившимися с трихотилломанией
layout: default
description: Отзывы моих клиентов после совместной работы, истории излечения от трихотилломании
date: 2022-12-10
image: 
    url: /assets/images/feedbacks/15.jpg
permalink: /feedback.html
---

<div class="container">
    <div class="content mb-10">
        <div class="row">
            <h2>
                Видео интервью с моими пациентами
            </h2>
            <span>
                Истории излечения от трихотилломании от людей прошедших терапию со мной
            </span>
            {% assign videos = site.tags['interview'] %}
            {% for video in videos %}
                <div class="col-md-4">
                    <a href="{{ video.url }}">
                        <img src="{{video.image.url}}"
                            alt="{{video.description}}"
                            title="{{video.title}}"
                            style="width: 100%;
                                    border-radius: .25rem ;
                                    aspect-ratio: 10/6;">
                        <p class="pt-1">{{ post.title | smartify }}</p>
                    </a>
                </div>
            {% endfor %}
        </div>
         <div class="row">
            <h2>
                Отзывы после совместной работы
            </h2>
            <div class="row">
                {% include feedback-slideshow.html %}
            </div>
        </div>
    </div>
</div>