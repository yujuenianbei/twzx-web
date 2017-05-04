/**
 * Created by QXT on 2017/4/27.
 */
(function(){

    info();
    window.onresize = info;

    var rea = $('.reason').height();
    console.log(rea);
    //点击隐藏显示
    $('.btn-span').on('click',function(){
        if($(this).hasClass('icon-收起')){
            $(this).removeClass('icon-收起').addClass('icon-下拉');
            $(this).parents('.li-top').children('.li-top-nr').children('.reason').css({'height':'0','display':'none','opacity':'0'},500);
        }else{
            $(this).removeClass('icon-下拉').addClass('icon-收起');
            $(this).parents('.li-top').children('.li-top-nr').children('.reason').css({'height':'auto','display':'block','opacity':'1'},500);
        }
    })
//    删除
    $('.sc').on('click',function(){
        $(this).addClass('click');
        layer.confirm('是否删除本条信息？', {
            title: false, //不显示标题
            closeBtn: 0,
            btn: ['删除','取消'] //按钮
        }, function(){
            console.log(1);
            $('.click').parents('li').remove();
            layer.closeAll()
        }, function(){
            //layer.msg('的确很重要', {icon: 1});
        });
    })

}());

//页面高度计算


function info(){
    var ww = $(window).width();
    console.log(ww)
    if(ww<768){
        var contextHeight = $(window).height()-(62+40);
        var mlnrHeight = $(window).height()-440;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var infoHeight = $(window).height()-(62+40+63+40);
        $('.info').css({'height':contextHeight});
        $('.info-tabnr').css({'height':infoHeight});
    }else if(768<ww<1200){

        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var infoHeight = $(window).height()-323;
        $('.info').css({'height':contextHeight});
        $('.info-tabnr').css({'height':infoHeight});
    }else if(1200<ww){
        var contextHeight = $(window).height()-(82+30+50);
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var infoHeight = $(window).height()-323;
        $('.info').css({'height':contextHeight});
        $('.info-tabnr').css({'height':infoHeight});
    }
}
