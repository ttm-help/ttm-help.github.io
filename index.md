---
layout: default
date: 2022-12-10
keywords:
  лечение трихотилломании, как лечить трихотилломанию, психотерапия трихотилломании,
  помощь при трихотилломании, трихотилломания симптомы, выдергивание волос, когнитивно-поведенческая терапия,
  онлайн терапия трихотилломании, лечение у детей, лечение у подростков, лечение у взрослых,
  трихотилломания последствия, советы психолога, поддержка при трихотилломании,
  трихотилломания у женщин, трихотилломания у мужчин
video:
  url: /assets/videos/welcome-video.mp4
  duration: PT1M7S
image: /assets/img/2024/main-page-image.webp
---

<div class="hero-block d-flex flex-column align-items-center justify-content-center">

    <div class="main-title reveal-mask">Лечение</div>
    <div class="main-title reveal-mask gradient-box">трихотилломании</div>
    
    <div class="fs-3 mt-3 text-center">
        Как перестать выдергивать волосы
    </div>

    <div class="mt-4 d-flex flex-column flex-sm-row gap-3">
        <a href="https://t.me/Konovalova_Oksana"
           class="cta-btn rounded fade-menu-button text-decoration-none text-white"
           target="_blank" rel="noopener">
            Обратиться за помощью
        </a>
        <a href="https://vk.com/ttm.help"
           class="cta-btn hover-slide text-decoration-none"
           target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-telegram" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
            </svg>
            <span class="text-black">Узнать больше</span>
        </a>
    </div>

</div>

<div class="adaptive-video-padding">
    <section class="video-scroll">
        <div class="video-sticky">
            <div class="video-card" id="welcomeVideo">
                <video class="video" playsinline muted loop preload="metadata" poster="/assets/img/2024/kasia-serbin-UxcRjTtzLXw-unsplash-1.webp">
                    <source src="/assets/videos/welcome-video.mp4" type="video/mp4"/>
                </video>

                <button class="play-pill fs-6" type="button" aria-label="Смотреть видео">
                    ▶︎ Смотреть
                </button>
            </div>
        </div>
    </section>
    
    <section class="container adaptive-video-padding">
        <div class="fs-4 mb-4">
            <p>
                Меня зовут Оксана Коновалова, я клинический психолог, специализируюсь на лечении трихотилломании. Сама страдала ТТМ с 3 летнего возраста, поэтому понимаю проблему изнутри. Практикую более 10 лет.
            </p>
        </div>
        <div class="fs-4">
            <p>
                В работе использую научно-доказанные методы: когнитивно-поведенческая терапия (КПТ), диалектико-поведенческая терапия (ДБТ), терапия принятия и ответственности (АСТ). 
            </p>
        </div>
    </section>
</div>


<script>
(function () {
  const card = document.getElementById("welcomeVideo");
  if (!card) return;

  const video = card.querySelector("video");
  const playBtn = card.querySelector(".play-pill");
  if (!video || !playBtn) return;

  video.muted = true;
  video.loop = true;

  const startPreview = async () => {
    try { await video.play(); } catch (_) {}
  };
  startPreview();

  playBtn.addEventListener("click", async () => {
    card.classList.add("is-playing");

    video.pause();
    video.currentTime = 0;

    video.loop = false;
    video.muted = false;
    video.controls = true;

    try {
      await video.play();
    } catch (e) {
      video.controls = true;
    }
  });

  video.addEventListener("ended", () => {
    card.classList.remove("is-playing");
    video.controls = false;
    video.muted = true;
    video.loop = true;
    startPreview();
  });
})();
</script>

<script>
(function () {
  const card = document.getElementById("welcomeVideo");
  if (!card) return;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const shrinkDistancePx = 450;
  const startScale = 1.25;
  const endScale = 1.0;
  let ticking = false;

  function update() {
    ticking = false;

    const y = window.scrollY || window.pageYOffset || 0;
    const t = clamp(y / shrinkDistancePx, 0, 1);

    const scale = startScale + (endScale - startScale) * t;
    card.style.transform = `scale(${scale})`;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
})();
</script>