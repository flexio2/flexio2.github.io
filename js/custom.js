$(document).ready(function () {
    $('.search-icon .fa-search').click(function () {
        console.log("clicked");
        $('.header.private .search-icon .fa-search').fadeOut();
        $('.search-panel').slideToggle('', function () {
            $('.header.private .search-icon .fa-search').fadeIn();
        });
        setTimeout(function () {
            $('.search-panel input.form-control').focus();
        }, 500);
    });

    $('.private.search-panel a .fa-times').click(function () {
        $('.search-panel').slideToggle();
    });

    /* Product links content smooth scroll */
    $(".content-links li a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    /* Back to top button */
    var btn = $('#back-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /*$('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown("500").parent().addClass("show");
    }, function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp("300").parent().removeClass("show");
    });*/
    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().parent().addClass("show");
    }, function () {
        $(this).find('.dropdown-menu').first().parent().removeClass("show");
    });

    if ($('.dropdown-item').hasClass('active')) {
        $('.dropdown-item.active').closest("li").addClass('active');
    }

    

    $('a.dropdown-item:contains("FAST")').attr('data-target', '#fast').attr('data-toggle', 'modal');
    $('a.dropdown-item:contains("FAST"), a.btn.fast').on('click', function () {
        $('.modal#fast .modal-body iframe').attr('src', "/questionnaire/fast");
    });
    
    $('a.dropdown-item:contains("STARS")').attr('data-target', '#stars').attr('data-toggle', 'modal');
    $('a.dropdown-item:contains("STARS"), a.btn.stars').on('click', function () {
        $('.modal#stars .modal-body iframe').attr('src', "/questionnaire/stars");
    });

    $('a.dropdown-item:contains("DEQ-5")').attr('data-target', '#deq5').attr('data-toggle', 'modal');
    $('a.dropdown-item:contains("DEQ-5"), a.btn.deq5').on('click', function () {
        $('.modal#deq5 .modal-body iframe').attr('src', "/questionnaire/deq5");
    });

    $('button.close').click(function () {
        window.location.reload();
    });

    $.ajax({
        method: "GET",
        dataType: "json",
        url: "/cart/products-count",

        success: function (data) {
            if (data.total > 0) {
                $(".mini-cart > span.badge").text(data.total);
                $(".mini-cart").addClass('active');
            }
        }
    });

    $(".product .addToCart").on("click", function (event) {
        event.preventDefault();

        var $link = $(event.currentTarget);
        productid = $link.attr("data-id");

        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/cart/add/" + productid,     
            data: {
                "__RequestVerificationToken":
                    $("input[name=__RequestVerificationToken]").val()
            },

            success: function (data) {
                $(".mini-cart > span.badge").text(data.totalProducts);
                $(".mini-cart").addClass('active');
                $("html, body").animate({ scrollTop: 0 }, '300');
            }
        });
    });

});