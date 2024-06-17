$(document).ready(function() {
    /* Якорь */
    $("a[href^='#']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
        // if($('.header-menu').hasClass('nav-active')) {
        //     mobMenu.removeClass('fixed');
        //     headNav.removeClass('nav-active');
        //     mml1.removeClass('switched');
        //     mml2.removeClass('switched');
        //     mml3.removeClass('switched');
        // }
    });


/*Конец документа*/
});