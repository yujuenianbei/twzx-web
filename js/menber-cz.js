/**
 * Created by QXT on 2017/4/26.
 */
(function(){

    interg();
    window.onresize = interg;
    change()
}());

function interg(){
    var ww = $(window).width();
    console.log(ww);
    if(ww<768){
        var contextHeight = $(window).height()-90;
        var mlnrHeight = $(window).height()-440;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});



        var conHeight = $(window).height()-122;
        $('.commit').css({'height':conHeight});
        console.log(1)
    }else if(768<ww<1200){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});


        var comHeight = $(window).height()-172;
        $('.commit').css({'height':comHeight});
        console.log(2)
    }else if(1200<ww){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});


        var contextHeight = $(window).height()-348;
        $('.commit').css({'height':contextHeight});
        console.log(3)
    }
}

function change(){
    $('.yhtc li').on('click',function(){
        $('.yhtc li').removeClass('on');
        $(this).addClass('on');
    })
    $('.yhtc li:last-child').on('click',function(){
        taocan()
    })
}
//弹出框正在开发中
function taocan(){
    layer.msg('更多套餐即将上线');
}