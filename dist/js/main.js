(function($) {
    $(document).ready(function() {
        var pageableRefrence = new Pageable("#example", {
            // displays navigation pips
            pips: true,

            // animation speed
            animation: 300,
            // delay in ms
            delay: 0,
            // the interval in ms that the resize callback is fired
            throttle: 50,
            // swipe / mouse drag distance in px
            swipeThreshold: 50,
            // or 'horizontal'
            orientation: "vertical",
            // drag / scroll freely instead of snapping to the next page
            freeScroll: false,
            // nav elements
            navPrevEl: false,
            navNextEl: false,
            // infinite scroll
            infinite: false,
            // default: false
            slideshow: { // enable slideshow
                interval: 1500,
                delay: 0
            },
            // easing function
            easing: function easing(t, b, c, d, s) {
                return -c * (t /= d) * (t - 2) + b;
            },
            // child selector
            childSelector: '[data-anchor]',
        });
    });


    $("#parallax-container, #parallax-container-1").parallaxmouse({
        invert: false,
        range: 400,
        elms: [
            { el: $('.equis'), rate: 0.5 },
            { el: $('.bottom-circle'), rate: 0.7 },
            { el: $('.splash-circle-2'), rate: 0.2 },
            { el: $('.lines-bg'), rate: 0.2 },
            { el: $('.star3'), rate: 0.2 },
            { el: $('.splash-circle-1'), rate: 0.2 },
            { el: $('.splash-circle'), rate: 0.2 },
            { el: $('.robot'), rate: 0.4 },
            { el: $('.lines'), rate: 0.48 },
        ]
    });

    //init aos
    AOS.init({
        easing: 'ease-in-out-sine',
        offset: 0,
        disable: false,
        startEvent: 'DOMContentLoaded',
        duration: 500,
    });

    //
    $(function() {
        $().timelinr({
            arrowKeys: 'true'
        })
    });

})(jQuery);