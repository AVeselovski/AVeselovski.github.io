$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("navbar-brand-reduce");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("navbar-brand-reduce");
        $('.parallax-element').fadeIn(1500, 'swing');
    }
    
    var wScroll = $(this).scrollTop();
    
    $('.parallax-element').css({
        'transform' : 'translate(0px, ' + wScroll / 2 + '%)'    
    });
    if (wScroll > $('.parallax-element').offset().top) {
        $('.parallax-element').fadeOut(500, 'swing');
    }
});

$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

$("body").on("click", ".navbar-collapse a", function() {
    var $this = $(this);

    setTimeout(function() {
        $this.closest(".navbar-collapse").collapse('hide');
    }, 650);
});

// Hide navbar on scroll down
// WIP
/*
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-fixed-top').outerHeight();

if ($(window).width() < 768) {
    
    $("body").on("click", ".navbar-collapse a", function() {
        var $this = $(this);

        setTimeout(function() {
            $this.closest(".navbar-collapse").collapse('hide');
        }, 250);
    });

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 300);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.navbar-fixed-top').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.navbar-fixed-top').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }   
}*/