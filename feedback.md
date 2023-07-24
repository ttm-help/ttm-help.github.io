---
title: Отзывы клиентов
layout: default
description: "Анонимные отзывы моих клиентов"
date: 2022-12-10
---

<div class="container pb-6 pt-2">
    <div class="row justify-content-start">
        <div class="col-md-12 col-sm-1">
            <h2>
                Видео-интервью с моими пациентами
            </h2>


            {% assign videos = site.tags['interview'] %}
            <div class="row">
                {% for video in videos %}
                    <div class="col-md-3 content">
                        <a href="{{ video.url }}">
                            <img src="{{video.image}}"
                                alt="{{video.title}}"
                                title="{{post.description}}"
                                style="width: 100%;
                                                border-radius: .25rem ;
                                                aspect-ratio: 9/6;">
                            <p class="pt-1">{{ post.title | smartify }}</p>
                        </a>
                    </div>
                {% endfor %}
            </div>
            
            <h2>
                Отзывы после совместной работы
            </h2>
            <div class="row" id="image-container">
            </div>
        </div>
    </div>
</div>


<script>

const IMAGES = {{ site.data.feedback.image | jsonify }};

const cardContainer = document.getElementById("image-container");
const cardLimit = IMAGES.length;
const cardIncrease = 12;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 0;

let throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const createCard = (index) => {
  if(IMAGES.length <= index){
      return;
  }

  const cardTag = document.createElement("div");
  cardTag.className += "col-md-4 content";

  const linkTag = document.createElement("a");
  const imageUrl = IMAGES[index].url;
  const imageAlt = IMAGES[index].alt;
  linkTag.href = imageUrl;
  const imgTag = document.createElement("img");
  imgTag.src = imageUrl;
  imgTag.title = imageAlt;
  imgTag.alt = imageAlt;

  linkTag.appendChild(imgTag);
  cardTag.appendChild(linkTag);
  cardContainer.appendChild(cardTag);
};

const addCards = (pageIndex) => {
  currentPage = pageIndex;

  const startRange = (pageIndex - 1) * cardIncrease;
  const endRange = currentPage === pageCount ? cardLimit : pageIndex * cardIncrease;

  for (let i = startRange + 1; i <= endRange; i++) {
    createCard(i);
  }
};

const handleInfiniteScroll = () => {
    
  throttle(() => {
    const endOfPage = window.scrollY + window.innerHeight + 2 >= document.body.offsetHeight * 0.75;
    if (endOfPage) {
      addCards(currentPage + 1);
    }

    if (currentPage === pageCount) {
      removeInfiniteScroll();
    }
  }, 1000);
};

const removeInfiniteScroll = () => {
  window.removeEventListener("scroll", handleInfiniteScroll);
};

window.addEventListener("load", function(){
    console.log("i am here");
    addCards(currentPage + 1);
    window.addEventListener("scroll", handleInfiniteScroll);
});

</script>