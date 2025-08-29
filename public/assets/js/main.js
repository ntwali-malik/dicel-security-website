(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button and navbar shadow
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    if ($(this).scrollTop() > 10) {
        $('#site-navbar').addClass('nav-scrolled');
    } else {
        $('#site-navbar').removeClass('nav-scrolled');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Smooth internal anchor scroll
    $(document).on('click', 'a[href^="#"]', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800, 'easeInOutExpo');
        }
    });

    // Initialize carousels after window load to ensure React content is mounted
    function initCarousels(){
        var $team = $(".team-carousel");
        if ($team.length && !$team.hasClass('owl-loaded')){
            $team.owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: false,
                dots: false,
                loop: true,
                margin: 50,
                nav : true,
                navText : [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0:{ items:1 },
                    768:{ items:2 },
                    992:{ items:3 }
                }
            });
        }

        var $testimonial = $(".testimonial-carousel");
        if ($testimonial.length && !$testimonial.hasClass('owl-loaded')){
            $testimonial.owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                center: true,
                dots: true,
                loop: true,
                margin: 0,
                nav : true,
                navText: false,
                responsiveClass: true,
                responsive: {
                    0:{ items:1 },
                    576:{ items:1 },
                    768:{ items:2 },
                    992:{ items:3 }
                }
            });
        }
    }

    $(window).on('load', function(){
        initCarousels();
        // fallback: re-check shortly in case of slower React mount
        setTimeout(initCarousels, 300);
    });


     // Fact Counter (trigger on visibility)
     function animateCounter($el){
        var finalVal = parseFloat($el.text());
        var isFloat = !Number.isInteger(finalVal);
        $el.prop('Counter',0).animate({
            Counter: finalVal
        },{
            duration: 2000,
            easing: 'easeInQuad',
            step: function (now){
                $(this).text(isFloat ? now.toFixed(1) : Math.ceil(now));
            }
        });
     }

     var counterObserver;
     if ('IntersectionObserver' in window) {
        counterObserver = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if (entry.isIntersecting) {
                    var $t = $(entry.target);
                    if (!$t.data('animated')){
                        animateCounter($t);
                        $t.data('animated', true);
                    }
                }
            });
        },{ threshold: 0.3 });
        $('.counter-value').each(function(){ counterObserver.observe(this); });
     } else {
        // Fallback: animate on ready
        $('.counter-value').each(function(){ animateCounter($(this)); });
     }


    // Generic reveal on scroll using IntersectionObserver
    function setupReveals(){
        var revealObserver = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if (entry.isIntersecting){
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },{ threshold: 0.15 });
        document.querySelectorAll('.reveal').forEach(function(el){
            revealObserver.observe(el);
        });
    }
    setupReveals();


})(jQuery);

