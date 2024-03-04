/* Nav Icon */

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header_top-row');

navBtn.onclick = function() {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header_top-row--mobile');
  document.body.classList.toggle('no-scroll');
};

/* Phone Mask */

mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value == '+') input.value = '';
  });
  input.addEventListener('blur', () => {
    if (input.value == '+') input.value = '';
  });
});

/* Yandex Map */

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var map = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.943543,30.338928],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
        var myPlacemark = new ymaps.Placemark(
          [59.943543,30.338928],
          {
            balloonContent: `
            <div class="balloon">
              <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
              <div class="balloon__contacts">
                <a href="tel:+78121234567">+8 (812) 123-45-67</a>
              </div>
            </div>
          `,     
          },
           {
          iconLayout: 'default#image',
          iconImageHref: 'html/img/map/location-pin.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-20, -40]
      }
      );
      map.controls.remove('geolocationControl'); // удаляем геолокацию
	    map.controls.remove('searchControl'); // удаляем поиск
	    map.controls.remove('trafficControl'); // удаляем контроль трафика
	    map.controls.remove('typeSelector'); // удаляем тип

	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	    map.controls.remove('rulerControl'); // удаляем контрол правил
	    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      map.geoObjects.add(myPlacemark);
      myPlacemark.balloon.open();
    }



  
    





































// function toCount(digits) {

// let arr = [
//   {2 : 'abc'},
//   {3 : 'def'},
//   {4 : 'ghi'},
//   {5 : 'jkl'},
//   {6 : 'mno'},
//   {7 : 'pqrs'},
//   {8 : 'tuv'},
//   {9 : 'wxyz'}
// ]

// let newArr = arr.filter(el => el[digits]).map(el => el[digits]);
// let str = newArr.join('');
// let newStrArr = [str.slice(0,1),str.slice(1,2),str.slice(2,3),str.slice(-1)]
// console.log(newStrArr);
// }

// toCount('7');



















































































