/**
 * Created by QXT on 2017/4/26.
 */
(function(){

    interg();
    window.onresize = interg;
}())

//function interg(){
//    var ww = $(window).width();
//    if(ww<768){
//        var conHeight = $(window).height()-125;
//        var tableHeight = $(window).height()-467;
//        $('.table').css({'height':tableHeight});
//        $('.mRight').css({'height':conHeight});
//        $('.interg').css({'height':conHeight});
//    }else{
//        var contextHeight = $(window).height()-140;
//        var mlnrHeight = $(window).height()-460;
//        var interHeight = $(window).height()-522;
//        $('.table').css({'height':interHeight});
//        $('.context').css({'height':contextHeight});
//        $('.mlNr').css({'height':mlnrHeight});
//        $('.mRight').css({'height':contextHeight});
//    }
//}

function interg(){
    var ww = $(window).width();
    console.log(ww)
    if(ww<768){
        var contextHeight = $(window).height()-90;
        var mlnrHeight = $(window).height()-440;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var comHeight = $(window).height()-140-322;
        $('.table').css({'height':comHeight});
      console.log(1)
    }else if(768<ww<1200){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var comHeight = $(window).height()-140-382;
        $('.table').css({'height':comHeight});
    }else if(1200<ww){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var contextHeight = $(window).height()-140-382;
        $('.table').css({'height':contextHeight});
    }
}