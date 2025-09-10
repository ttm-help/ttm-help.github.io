---
title: "Трихотилломания: истории людей, кто вылечился"
layout: default
description: Истории выздоровления моих пациентов от трихотилломании. Узнай, как они с ней справились и вернули контроль над собой.
date: 2022-12-10
image: 
    url: /assets/images/feedbacks/15.webp
permalink: /feedback.html
---

<div class="container">
    <div class="content mb-5">
        <div class="row mt-2">
            <h1>
                Отзывы пациентов, кто вылечился от трихотилломании.
            </h1>
        </div>
        <div class="row">
            <h3>
                Видео интервью с историями избавления.
            </h3>
            <span>
                Мои пациенты, которые прошли терапию со мной, делятся своим опытом и рассказывают, что помогло им справиться с трихотилломанией.
            </span>
        </div>
        <div class="row">
            {% assign videos = site.tags['interview'] %}
            {% for video in videos %}
                <div class="col-md-4 p-1">
                    <a href="{{ video.url }}">
                        <img src="{{video.image.url}}"
                            alt="{{video.description}}"
                            title="{{video.title}}"
                            style="width: 100%;
                                    border-radius: .25rem ;
                                    aspect-ratio: 10/6;">
                        <p>{{ video.title | smartify }}</p>
                    </a>
                </div>
            {% endfor %}
        </div>
         <div class="row">
            <h2>
                Отзывы после совместной работы.
            </h2>
            <div class="row">
                {% include feedback-slideshow.html %}
            </div>
        </div>
    </div>
</div>