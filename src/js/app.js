/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(function () {

    $("#auto_list").hover(function () {
        $("#bottomBar__start-list").css({
            "max-height":"192px"
        });
    });

    $("#bottomBar__start-list").hover(function () {
        $(this).css({
            "max-height":"192px"
        });
    });

    $("#bottomBar__start-list").mouseleave(function () {
        $(this).css({
            "max-height":"0px"
        });
    });

    $("#auto_list").mouseleave(function () {
        $("#bottomBar__start-list").css({
            "max-height":"0px"
        });
    });

    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(".bottomBar__luck-turbo").removeClass("off");
            $(".bottomBar__luck-turbo").addClass("on");
        }
        else if($(this).prop("checked") == false){
            $(".bottomBar__luck-turbo").removeClass("on");
            $(".bottomBar__luck-turbo").addClass("off");
        }
    });

    var audioClick = document.getElementById('audioClick');

    function fPlay() {
        audioClick.currentTime = 0;
        audioClick.play();
    }

    $(".clickAudio").on("click", function (event) {
        fPlay();
    });

    const worksSlider = $('[data-slider="slick"]');

    /* Works filter
    =========================== */

    var filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();
        $(".portfolio").fadeTo(50, 0.10);

        var category = $(this).data("filter");

        if (category == "all") {
            $("[data-category]").removeClass("hide");
        }
        else {
            $("[data-category]").each(function () {

                if ($(this).hasClass(category)) {
                    $(this).removeClass("hide");
                }
                else {
                    $(this).addClass("hide");
                }

                // if (workCategory != category) {
                //     $(this).addClass("hide");
                // }
                // else {
                //     $(this).removeClass("hide");
                // }
            });
        }
        $(".portfolio").fadeTo(50, 1);
    });

    /* Modals
    =========================== */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        var modalId = $this.data("modal");

        $(modalId).addClass('show');
        $("body").addClass("no-scroll");

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);

        worksSlider.slick("setPosition");
    });

    modalClose.on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        var modalParent = $this.parents(".modal");

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal").on("click", function () {
        var $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    /* Slider https://kenwheeler.github.io/slick/
    =========================== */

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $(".slickPrev").on("click", function (event) {
        event.preventDefault();

        var currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function (event) {
        event.preventDefault();

        var currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickNext");
    });

    /* Fixed header
    =========================== */

    var header = $("#header"),
        intro = $("#intro"),
        introHeight = intro.innerHeight()-20,
        scrollPosition = $(window).scrollTop();

        checkScroll(scrollPosition, introHeight);
    
        $(window).on("scroll resize", function() {
            introHeight = intro.innerHeight()-20;
            scrollPosition = $(this).scrollTop();
    
            checkScroll(scrollPosition, introHeight);
        });
    
        function checkScroll(scrollPosition, introHeight) {
            if (scrollPosition > introHeight) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

    /* Scroll
    =========================== */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top-header.innerHeight();

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 700)

        $("#burger").removeClass("active");
        $("#nav").removeClass("active");
    });

    /* Mobile nav
    =========================== */

    $("#burger").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $("#nav").toggleClass("active");
    });

    /* Collapse
    =========================== */

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        var $this = $(this);

        $this.parent(".accordion__item").toggleClass("active");
    });

});