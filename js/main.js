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
  var placemark = new ymaps.PlaceMark([7.895, 98.3002], {
    baloonContentHeader: "",
    baloonContentBody: "",
    hintContent: "",
  });
  myMap.geoObjects.add(placemark);
}

const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    arrowLeftRight: true,
  },
  // effect: 'flip',
});

// keypPess(swiper, 37)

// document.addEventListener("keydown", function (e) {
//   if (e.keyCode == 37) {
//     swiper.slidePrev();
//     //Left arrow pressed
//   }
//   if (e.keyCode == 39) {
//     swiper.slideNext();
//     //Right arrow pressed
//   }
// });
