/**
 * Created by QXT on 2017/4/29.
 */
(function(){

    interg();
    window.onresize = interg;

    $('.top img').on('click',function(){
        console.log('只能在个人设置修改头像')
    })

}());

function interg(){
    var ww = $(window).width();
    //console.log(ww)
    if(ww<768){
        var contextHeight = $(window).height()-(62+30+10);
        var mlnrHeight = $(window).height()-440;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var recharge = $(window).height()-(62+40+20);
        $('.recharge').css({'height':recharge});
    }else if(768<ww<1200){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});
        console.log(mlnrHeight)

        var recharge = $(window).height()-(82+30+100+50);
        $('.recharge').css({'height':recharge});
    }else if(1200<ww){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var recharge = $(window).height()-(82+30+50);
        $('.recharge').css({'height':recharge});
    }
}