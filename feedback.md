---
title: "Трихотилломания: истории людей, кто вылечился"
layout: default
description: Истории выздоровления моих пациентов от трихотилломании. Узнай, как они с ней справились и вернули контроль над собой.
date: 2022-12-10
image: /assets/img/2024/feedback-page.webp
permalink: /feedback.html
---

<div class="container pb-2 pt-md-5 pt-3 pb-md-4">
    <div class="content mb-5">
        <div class="row">
            <p class="mb-0 fs-1">
                Отзывы людей, кто вылечился от трихотилломании
            </p>
        </div>
        <div class="row mt-3">
            <p class="fs-3">
                Видео интервью с историями излечения
            </p>
            <p class="fs-5">
                Трихотилломания — это непростое состояние, которое может сильно влиять на жизнь человека. На этой странице собраны истории людей, которые прошли терапию со мной. 
                Каждая история опубликована с согласия участников и показывает их пути к выздоровлению. 
                В этих видео они делятся своими опытом и рассказывают о том, что помогло им справиться с трихотилломанией.
            </p>
        </div>
        <div class="row">
            {% assign videos = site.tags['interview'] %}
            {% for video in videos %}
                <div class="col-md-4 p-3">
                    <a href="{{ video.url }}" class="text-decoration-none text-black">
                        <img src="{{video.image}}"
                            alt="{{video.description}}"
                            title="{{video.title}}"
                            class="w-100 rounded-3 shadow"
                            style="aspect-ratio: 10/6;">
                        <p class="mt-3">{{ video.title | smartify }}</p>
                    </a>
                </div>
            {% endfor %}
        </div>
        <div class="row mt-5">
            <p class="fs-3">
                Отзывы после совместной работы
            </p>
            <div class="row">
                {% include feedback-slideshow.html %}
            </div>
        </div>
    </div>
</div>