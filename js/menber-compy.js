/**
 * Created by yujuenianbei on 2017/4/25.
 */
(function () {
    //加载页面时的高度随浏览器变化
    interg();

    $('.panel-body li').on('click', function () {
        $('.panel-body li').removeClass('active');
        $(this).addClass('active');
    });

    window.onresize = adjust;
    window.onresize = interg;
}());


function nr(){
    var contextHeight = $(window).height()-140;
    var mlnrHeight = $(window).height()-290;
    $('.context').css({'height':contextHeight});
    $('.com_nr').css({'height':mlnrHeight});
}
function interg(){
    var ww = $(window).width();
    //console.log(ww)
    if(ww<768){
        var contextHeight = $(window).height()-(62+40);
        var mlnrHeight = $(window).height()-440;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});
        $('.mRight').css({'height':contextHeight});

        var commith = $(window).height()-(62+40+50+60);
        $('.com_nr').css({'height':commith});
    }else if(768<ww<1200){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var commith = $(window).height()-(82+30+60+60+30);
        $('.com_nr').css({'height':commith});
    }else if(1200<ww){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var commith = $(window).height()-(82+30+50);
        $('.com_nr').css({'height':commith});
    }
}
