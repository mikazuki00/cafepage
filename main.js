// トップへスクロール
$(function () {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
        } else {
        pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    });

// クラス付与
$(window).on('load', function() {
    var scrollStopEvent = new $.Event('scrollstop');
        let delay = 200;
        let timer;
        function scrollStopEventTrigger(){
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function(){$(window).trigger(scrollStopEvent)}, delay);
        }
        $(window).on("scroll", scrollStopEventTrigger);
        $("body").on("touchmove", scrollStopEventTrigger);
    var nav = $('.headerWrap');
    var navoffset = nav.offset();
    $(window).resize(function(){
        navoffset = nav.offset();
    });
   //$(window).scroll(function () {
    $(window).on("scroll touchmove",function () {
            if($(window).scrollTop() > navoffset.top) {
                nav.addClass("fixed");
            }else{
                nav.removeClass("fixed");
            }
        });
    });
