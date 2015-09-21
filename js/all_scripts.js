$(document).ready(function () {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true
    });

    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [52.78410229, 27.51545100],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([52.78410229, 27.51545100], {
            hintContent: 'ecotool.by',
            balloonContent: 'ecotool.by'
        }, {
            preset: 'islands#greenIcon'
        });

        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }

    $().click(function () {

    });


	
});