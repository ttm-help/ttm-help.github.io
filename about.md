---
layout: page
title: Оксана Коновалова - клинический психолог, когнитивно-поведенческий психотерапевт
description: Помогаю при трихотилломании, тревожности и обсессивно-компульсивных расстройствах
is_about: "true"
permalink: /about.html
date: 2022-12-10
image: /assets/images/illustrations/about-photo.webp

certificates:
  - key: assets/images/certificates/0.webp
    value: диплом о профессиональной переподготовке по программе когнитивно-поведенческая терапия
  - key: assets/images/certificates/1.webp
    value: диплом юридического психолога
  - key: assets/images/certificates/2.webp
    value: удостоверение о повышении квалификации по психологическому консультированию родителей
  - key: assets/images/certificates/3.webp
    value: удостоверение о повышении квалификации по библиотерапии в работе в детьми
  - key: assets/images/certificates/4.webp
    value: сертификат по коучингу ICF
  - key: assets/images/certificates/5.webp
    value: сертификат о прохождении программы Ирвин Ялом и искусство психотерапии
  - key: assets/images/certificates/6.webp
    value: техника эмоциональной свободы
  - key: assets/images/certificates/7.webp
    value: сертификат о прохождении программы ACT in action
  - key: assets/images/certificates/8.webp
    value: сертификат о прохождении программы групповая терапия
  - key: assets/images/certificates/9.webp
    value: сертификат о прохождении программы типы организации личности
---

<picture class="ml-sm-3 mb-sm-3 mt-sm-0">
    <source media="(min-width:720px)"
            width="1200" height="1524"
            srcset="/assets/images/illustrations/about-photo.webp">
    <img src="/assets/images/illustrations/about-photo-mobile.webp"
         alt=">" width="1000" height="739"
         title="{{ site.description }}"
         style="width:50%; min-width: 300px">
</picture>
{% assign age = 'now' | date: "%Y" | minus:1987 %}

Добро пожаловать на мой сайт, посвященный трихотилломании!  

Меня зовут **Оксана**, мне {{ age }} лет, я психотерапевт (основное направление КПТ), работаю с 2012 года.  

Работа с людьми, страдающими трихотилломанией (ТТМ) является моим специальным проектом по нескольким причинам:
- среди русскоговорящего населения достаточно мало психотерапевтов, специализирующихся на работе с данным расстройством;
- я знаю, как решить вопрос с ТТМ у моих пациентов.

На моем сайте вы сможете найти информацию по следующим направлениям:
- Самодиагностика,
- Тревожность,
- Трихотилломания у детей,
- Профилактика рецидивов,
- Причины развития ттм,
- Лечение трихотилломании   

## Контакты

{% include call.html %}

## Что я предлагаю:

- <a href="https://t.me/ttm_help_ru" rel="nofollow" target="_blank">Канал ТТМ в телеграм</a>, где я размещаю статьи, переводы выступлений зарубежных коллег
  в области ТТМ и разные полезные материалы,
- [Диагностическая консультация](/contact.html), где вы заполняете подробную анкету о своем заболевании, мы общаемся более
  подробно на сессии, и я даю список рекомендаций по лечению ТТМ конкретно у вас,
- [Индивидуальная психотерапия](/contact.html), где мы идем по 4 направлениям - информативная часть
  (клиент знакомится с тем, что такое ТТМ, её истоки в его конкретном случае, инструменты замены ТТМ внешние,
  проработка внутренних причин ТТМ, профилактика рецидивов),
- <div>
  <a href="/contact.html">Клуб самотерпии ТТМ с моей обратной связью</a>, который включает в себя:
    <ul class="pt-1">
      <li>Индивидуальная обратная связь 1 раз в неделю</li>
      <li>Онлайн вебинар раз в месяц (+запись)</li>
      <li>Доступ к закрытому телеграм каналу</li>
      <li>Материалы для самостоятельного изучения</li>
    </ul>
  </div>


Начало любой терапии предваряется диагностической консультацией, где мы знакомимся и намечаем план лечения.

## Мои публикации:
- Коновалова О.В. Трихотилломания: // Вестник Трихологии - интернет журнал союза трихологов. 2023. 
  URL: <a href="http://www.trichology.pro/articles/vracham-spetsialistam/ttm.php" rel="nofollow" target="_blank">http://www.trichology.pro/articles/vracham-spetsialistam/ttm.php</a>.

## Опыт работы:

С 2012 год - корпоративный психолог.  
С 2016 года - интеллект психолог (работа с детьми и взрослыми); преподавание.  
С 2018 года - индивидуальная терапия, консультирование, коучинг.

## Образование и квалификация:

- Юридический психолог (Саратовская государственная юридическая академия).  
- Психологическое консультирование родителей (Психологический институт Российской академии образования).  
- Библиотерапия в работе с детьми (Психологический институт Российской академии образования).  
- Когнитивно-поведенческая психотерапия (Академия профессиональных стандартов).  
- Professional Coach (IICA ICF ICF).  
- Professional coaching of groups and companies (IICA ICF ICF).  
- НЛП-практик.  
- EFT Emotional Freedom Technique: Hair Pulling & Skin Picking  
- Irvin Yalom and the Art of Psychotherapy (Newpsy education)  
- ACT in Action by Steven C.Hayes (Newpsy education)  

<div class="row">
    {% for item in page.certificates %}
        <div class="col-md-3">
            <a href="{{ item.key }}">
                <img src="{{ item.key }}" loading="lazy"
                     alt="{{ item.value }}"
                     width="{% imagesize item.key:width %}"
                     height="{% imagesize item.key:height %}">
            </a>
        </div>
    {% endfor %}
</div>