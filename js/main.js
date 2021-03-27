$(document).ready(function () {
  // // Функция ymaps.ready() будет вызвана, когда
  // // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  // ymaps.ready(init);
  // function init() {
  //   // Создание карты.
  //   var myMap = new ymaps.Map("myMap", {
  //     // Координаты центра карты.
  //     // Порядок по умолчанию: «широта, долгота».
  //     // Чтобы не определять координаты центра карты вручную,
  //     // воспользуйтесь инструментом Определение координат.
  //     center: [7.8939, 98.2992],
  //     // Уровень масштабирования. Допустимые значения:
  //     // от 0 (весь мир) до 19.
  //     zoom: 15,
  //   });

  //   // Хочу поставить Метку <<<<<<<<<
  //   var placemark = new ymaps.Placemark([7.895, 98.3002], {
  //     // baloonContentHeader: "sdgsg",
  //     baloonContentBody: "GRAND HILTON HOTEL",
  //     hintContent: "GRAND HILTON HOTEL",
  //   });
  //   myMap.geoObjects.add(placemark);
  // }


  

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
            minlength: 16,
            maxlength: 16,
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
