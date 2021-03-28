$(document).ready(function () {


  let map_container = document.getElementById("map_container");
  let options_map = {
    once: true,
    passive: true,
    capture: true,
  };
  map_container.addEventListener("click", start_lazy_map, options_map);
  map_container.addEventListener("mouseover", start_lazy_map, options_map);
  map_container.addEventListener("touchstart", start_lazy_map, options_map);
  map_container.addEventListener("touchmove", start_lazy_map, options_map);

  let map_loaded = false;
  function start_lazy_map() {
    if (!map_loaded) {
      let map_block = document.getElementById("ymap_lazy");
      map_loaded = true;
      map_block.setAttribute("src", map_block.getAttribute("data-src"));
      map_block.removeAttribute("data-src");
      console.log("YMAP LOADED");
    }
  }

  const hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      arrowLeftRight: true,
    },
    // effect: 'flip',
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
    document.body.classList.toggle("lock");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    document.body.classList.toggle("lock");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    document.body.classList.remove("lock");
  }

  $(".input-phone").mask("+7 (000) 000-00-00");

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        phone: {
          required: true,
          minlength: 11,
          maxlength: 16,
        },
        email: {
          minlength: 6,
        },
      },
      messages: {
        name: {
          required: "provide a name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address",
          email: "Email address must be in the format name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "At least 11 characters reguired",
        },
      },
    });
  });

  AOS.init();
});
