/**
 * Created by QXT on 2017/4/29.
 */
/**
 * Created by QXT on 2017/4/26.
 */
(function(){

    interg();
    window.onresize = interg;
    $('#home td p').on('click',function(){
        //layer.open({
        //    type: 1,
        //    shade: false,
        //    title: false, //不显示标题
        //    content: $('.bh'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        //});
        //页面层
        layer.open({
            type: 1,
            //skin: 'layui-layer-rim', //加上边框
            area: ['350px', '150px'], //宽高
            content: $('.bh'),
            closeBtn: 0,
            title: false, //不显示标题
            btn: ['知道了'] //按钮
        });
    })

    //点击跳转
    $('#ljcz').on('click',function(){
        $('.mRight').load('menber-cz.html');
    })

}())

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
