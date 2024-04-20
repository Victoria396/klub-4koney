window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);

  const scene = document.getElementById("scene");
  const parallaxInstance = new Parallax(scene);

  if (document.documentElement.clientWidth < 992) {
    document
      .getElementById("idea__breack")
      .appendChild(document.getElementById("idea__img"));

    const swiperSteps = new Swiper(".steps__wrp", {
      slidesPerView: 1,
      pagination: {
        el: ".steps .swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".steps .swiper-button-next",
        prevEl: ".steps .swiper-button-prev",
      },
    });
  }

  const swiperPlayers = new Swiper(".swiperPlayers", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".players .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".players .swiper-button-next",
      prevEl: ".players .swiper-button-prev",
    },
    breakpoints: {
      736: {
        slidesPerView: 2,
      },
      1041: {
        slidesPerView: 3,
      },
    },
  });

  let openPopupButtons = document.querySelectorAll(".open-popup");
  let popups = document.querySelectorAll(".popup__bg");
  let closePopupButtons = document.querySelectorAll(".close-popup");
  let bodyHidden = document.querySelector("body");

  function togglePopup(e) {
    e.preventDefault();
    let index = Array.from(openPopupButtons).indexOf(this);
    popups[index].classList.toggle("active");
    bodyHidden.classList.add("active");
  }

  function closePopup(e) {
    let index = Array.from(closePopupButtons).indexOf(this);
    popups[index].classList.toggle("active");
    bodyHidden.classList.remove("active");
  }

  openPopupButtons.forEach((btn) => btn.addEventListener("click", togglePopup));
  closePopupButtons.forEach((btn) => btn.addEventListener("click", closePopup));

  document.addEventListener("click", (e) => {
    let popupActive = document.querySelector(".popup__bg.active");
    if (e.target === popupActive) {
      popupActive.classList.remove("active");
      bodyHidden.classList.remove("active");
    }
  });

  document.onkeydown = function (evt) {
    if (evt.keyCode == 27) {
      document.querySelector(".popup__bg.active").classList.remove("active");
      bodyHidden.classList.remove("active");
    }
  };
};
