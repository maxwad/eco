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

    $(".button_call").click(function (e) {
        e.preventDefault();
        $("#overlay_layer").addClass("visible_flag").height(screen.availHeight).width(screen.availWidth);
    });

    $(".close_block").click(function () {
        $("#overlay_layer").removeClass("visible_flag");
    });

    $(".advantages_product").mouseover(function () {
           $(this).find(".advantages_detail").fadeIn(500);
        });
    $(".advantages_product").mouseleave(function () {
        $(this).find(".advantages_detail").fadeOut(500);
        $(this).addClass("second");
    });

    $('.logo_echo').waypoint(function() {
        $(this.element).removeClass('invisible_up_flag');
        },
        {offset: '65%'}
    );
    $('.description_center div').waypoint(function() {
            $(this.element).removeClass('invisible_up_flag');
        },
        {offset: '65%'}
    );
    $('.advantages_product').waypoint(function() {
            $(this.element).removeClass('invisible_up_flag');
        },
        {offset: '65%'}
    );
    $('.buy_now').waypoint(function() {
            $(this.element).removeClass('invisible_up_flag');
        },
        {offset: '65%'}
    );
    $('.price_product').waypoint(function() {
            $(this.element).removeClass('invisible_up_flag');
        },
        {offset: '65%'}
    );

    $('.logo_echo').waypoint(function() {
            $(this.element).removeClass('invisible_down_flag');
        },
        {offset: '65%'}
    );

    $('.top_block').waypoint(function() {
            $(this.element).removeClass('invisible_down_flag');
        },
        {offset: '0'}
    );



});