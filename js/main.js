// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [7.8939, 98.2992],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
  });

  // Хочу поставить Метку <<<<<<<<<
  var placemark = new ymaps.Placemark([7.895, 98.3002], {
    // baloonContentHeader: "sdgsg",
    baloonContentBody: "GRAND HILTON HOTEL",
    hintContent: "GRAND HILTON HOTEL",
  });
  myMap.geoObjects.add(placemark);
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
  console.log("клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
