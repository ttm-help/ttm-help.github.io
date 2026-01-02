---
layout: page
title: Оксана Коновалова - клинический психолог
description: Помогаю при трихотилломании, тревожности и обсессивно-компульсивных расстройствах
is_about: "true"
permalink: /about.html
date: 2022-12-10
image: /assets/images/illustrations/about-photo.webp

certificates:
  - key: assets/images/certificates/0.webp
    value: диплом Оксаны Коноваловой о профессиональной переподготовке по программе когнитивно-поведенческая терапия
  - key: assets/images/certificates/1.webp
    value: диплом юридического психолога Оксаны Коноваловой
  - key: assets/images/certificates/2.webp
    value: диплом клинического психолога Оксаны Коноваловой
---

{% assign age = 'now' | date: "%Y" | minus:1987 %}

<div class="row align-items-start">
    <div class="col-md-6">
      <img src="/assets/images/illustrations/about-photo.webp" 
          class="img-fluid rounded-3 shadow" alt="Оксана Коновалова – клинический психолог, психотерапевт">
    </div>
    <div class="col-md-6 mt-3">
      <p>Меня зовут <strong>Оксана</strong>, мне {{ age }} лет. Работаю с 2012 года в направлениях КПТ, ДБТ и ACT терапии.</p>
      <p>Работа с людьми, страдающими трихотилломанией является моим специальным проектом по нескольким причинам:</p>
      <ul>
        <li>
            среди русскоговорящего населения достаточно мало психотерапевтов, специализирующихся на работе с данным расстройством;
        </li>
        <li>
            я сама столкнулась с данным расстройством в детстве.
        </li>
      </ul>
    </div>
</div>

## Что я предлагаю:

- <a href="https://t.me/ttm_help_ru" rel="nofollow" target="_blank">Канал ТТМ в телеграм</a>, где я размещаю статьи, переводы выступлений зарубежных коллег
  в области ТТМ и разные полезные материалы,
- [Диагностическая консультация](/contact.html), где вы заполняете подробную анкету о своем заболевании, мы общаемся более
  подробно на сессии, и я даю список рекомендаций по лечению ТТМ конкретно у вас,
- [Индивидуальная терапия](/contact.html), где мы идем по 4 направлениям - информативная часть
  (клиент знакомится с тем, что такое ТТМ, её истоки в его конкретном случае, инструменты замены ТТМ внешние,
  проработка внутренних причин ТТМ, профилактика рецидивов),
- <div>
  <a href="{% link _posts/2025/2025-10-24-training.md %}">Тренинг навыков при трихотилломании</a>, который включает в себя:
    <ul class="pt-1">
      <li>12 групповых онлайн занятий</li>
      <li>1 раз в неделю</li>
      <li>длительность 1.5-2 часа</li>
    </ul>
  </div>

## Опыт работы:

С 2012 год - корпоративный психолог.  
С 2016 года - интеллект психолог (работа с детьми и взрослыми); преподавание, коучинг.  
С 2018 года - индивидуальная терапия, консультирование.

## Образование и квалификация:

- Юридический психолог (Саратовская государственная юридическая академия)
- Клинический психолог (Институт психотерапии и клинической психологии)
- Когнитивно-поведенческая психотерапия (Академия профессиональных стандартов)
- Тренер навыков ДБТ (Международная академия научной психологии)

<div class="row justify-content-center">
    {% for item in page.certificates %}
        <div class="col-12 col-md-4 d-flex justify-content-center mb-4">
            <a href="{{ item.key }}" class="d-block w-100 text-center">
                <img src="{{ item.key }}"
                     loading="lazy"
                     alt="{{ item.value }}"
                     class="img-fluid mx-auto d-block shadow"
                     width="{% imagesize item.key:width %}"
                     height="{% imagesize item.key:height %}">
            </a>
        </div>
    {% endfor %}
</div>


## Мои публикации:
- Коновалова О.В. Трихотилломания: // Вестник Трихологии - интернет журнал союза трихологов. 2023.
  URL: <a href="http://www.trichology.pro/articles/vracham-spetsialistam/ttm.php" rel="nofollow" target="_blank">http://www.trichology.pro/articles/vracham-spetsialistam/ttm.php</a>.

<div class="mb-4 mt-5">
    {% include call.html %}
</div>>