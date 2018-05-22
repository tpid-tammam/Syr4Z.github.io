(function ($) {
    "use strict";

    //------------------------------------- Debut de la Fonction de chargement ------------------------------------------------//

    jQuery(window).load(function () {
        jQuery("#loaderInner").fadeOut();
        jQuery("#loader").delay(200).fadeOut("slow");
    });
    $(document).ready(function () {

        //------------------------------------- Fin de la Fonction de chargement ------------------------------------------------//

        //------------------------------------- Debut init easytabs ------------------------------------------------//
        $('#wrapper').easytabs({
            animate: true,
            updateHash: false,
            transitionIn: 'fadeIn',
            transitionOut: 'fadeOut',
            animationSpeed: 100,
            tabActiveClass: 'active',
            tabs: ' #main-nav.tabbed > ul > li ',
            transitionInEasing: 'linear',
            transitionOutEasing: 'linear'
        });
        //------------------------------------- Fin init easytabs ------------------------------------------------//

        //------------------------------------- Debut init prognoll ------------------------------------------------//
        $("body").prognroll({
            height: 5,
            color: "#CD5353",
            custom: false
        });
        //------------------------------------- Fin init prognoll ------------------------------------------------//

        //------------------------------------- Debut de la Fonction d'effet secretaire ------------------------------------------------//
        $(function () {
            $('#t').t({
                speed: 35,
                speed_vary: false,
                mistype: true,
                locale: 'en',
                caret: '\u258e', //\u2589
                blink: true,
                blink_perm: true,
                repeat: 0,
                pause_on_click: false,
                init: function (elm) {},
                typing: function (elm, chr_or_elem, left, total) {},
                fin: function (elm) {}
            });
        });
        //------------------------------------- Fin de la Fonction d'effet secretaire ------------------------------------------------//

        //------------------------------------- Debut de la Fonction de barre de progression ------------------------------------------------//
        $(".percentage").each(function () {
            var width = $(this).text();
            $(this).css("width", width).empty();
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 5000);
        });
        //------------------------------------- Fin de la Fonction de barre de progression ------------------------------------------------//

        //------------------------------------- Debut de la Fonction de Slider ------------------------------------------------//
        $("#testimonial-carousel").owlCarousel({
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            pagination: true,
            singleItem: true
        });

        $("#block-slider").owlCarousel({
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            pagination: false,
            singleItem: true,
            navigationText: ["<span class='icon-left-open-big'></span>", "<span class='icon-right-open-big'></span>"]
        });
        //------------------------------------- Fin de la Fonction de Slider ------------------------------------------------//

        //------------------------------------- Debut du switcher ------------------------------------------------//
        $('.toggle').click(function(e) {
            e.preventDefault();
            var switcher = $('.switcher');
            if (switcher.css('left') === '-245px') {
                $('.switcher').animate({
                    left: '0px'
                });
            } else {
                $('.switcher').animate({
                    left: '-245px'
                });
            }
        });
        $('#en').click(function(e) {
            e.preventDefault();
            $('#fr').removeClass('active');
            $('#en').addClass('active');
            $('#lang-fr').fadeOut(500);
            $('#lang-en').fadeIn(500);
            '#lang-fr'.location.reload()
        });
        $('#fr').click(function(e) {
            e.preventDefault();
            $('#en').removeClass('active');
            $('#fr').addClass('active');
            $('#lang-en').fadeOut(500);
            $('#lang-fr').fadeIn(500);
            '#lang-fr'.location.reload()
        });
        //------------------------------------- Fin du switcher ------------------------------------------------//


        //------------------------------------- Debut de la Config du portfolio ------------------------------------------------//
        $('.box').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            fixedBgPos: false,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
        $('.filter li a').on("click", function (e) {

            e.preventDefault();
            $(this).addClass('active');
            $(this).parent().siblings().find('a').removeClass('active');
            var filters = $(this).attr('data-filter');
            $(this).closest('.works').find('.item').removeClass('disable');
            if (filters !== 'all') {
                var selected = $(this).closest('.works').find('.item');
                for (var i = 0; i < selected.length; i++) {
                    if (!selected.eq(i).hasClass(filters)) {
                        selected.eq(i).addClass('disable');
                    }
                }
            }
        });
        //------------------------------------- Fin de la Config du portfolio ------------------------------------------------//
    
        //------------------------------------- Debut de la fonction du formulaire ------------------------------------------------//
        $('.submit').on("click", function () {

            $('input#name').removeClass("errorForm");
            $('input#firstname').removeClass("errorForm");
            $('textarea#message').removeClass("errorForm");
            $('input#email').removeClass("errorForm");

            var error = false;
            var firstname = $('input#firstname').val();
            if (firstnamename == "" || firstname == " ") {
                error = true;
                $('input#firstname').addClass("errorForm");
            }

            var name = $('input#name').val();
            if (name == "" || name == " ") {
                error = true;
                $('input#name').addClass("errorForm");
            }

            var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            var email = $('input#email').val();
            if (email == "" || email == " ") {
                $('input#email').addClass("errorForm");
                error = true;
            } else if (!email_compare.test(email)) {
                $('input#email').addClass("errorForm");
                error = true;
            }

            if (error == true) {
                return false;
            }

            var msg = $('textarea#message').val();
            if (msg == "" || msg == " ") {
                error = true;
                $('textarea#message').addClass("errorForm");

            }
            // Test Ajax permettant de tester l'envoi du formulaire. (Inactif dans cette version)
            //	var data_string = $('.contact-form').serialize();
            //
            //
            //	$.ajax({
            //		type: "POST",
            //		url: $('.contact-form').attr('action'),
            //		data: data_string,
            //
            //		success: function(message) {
            //				if(message == 'SENDING'){
            //					$('#success').fadeIn('slow');
            //				}
            //				else{
            //					$('#error').fadeIn('slow');
            //				}
            //					}
            //
            //	});
            return false;
        });
        //------------------------------------- Fin de la fonction du formulaire ------------------------------------------------//
    });
})(jQuery);
