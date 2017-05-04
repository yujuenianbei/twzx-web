/**
 * Created by QXT on 2017/4/26.
 */
/**
 * Created by QXT on 2017/4/26.
 */
(function(){

    interg();
    window.onresize = interg;


    $('.commit li').on('click', function () {
        $('.commit li').removeClass('active');
        $(this).addClass('active');
    });

}());

function interg(){
    var ww = $(window).width();
    //console.log(ww)
    if(ww<768){
        var contextHeight = $(window).height()-(62+30+10);
        var mlnrHeight = $(window).height()-440;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var commith = $(window).height()-(62+40+20);
        $('.commit').css({'height':commith});
    }else if(768<ww<1200){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var commith = $(window).height()-(82+30+100+50);
        $('.commit').css({'height':commith});
    }else if(1200<ww){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});

        var commith = $(window).height()-(82+30+50);
        $('.commit').css({'height':commith});
    }
}
//删除本条信息
function del() {
    //询问框
    layer.confirm('您确定删除此条信息？', {
            closeBtn: 0,
            title: false, //不显示标题
            btn: ['确定', '取消'],//按钮,
            yes: function (index, layero) {
                $('.commit .active').remove();
                layer.close(index); //如果设定了yes回调，需进行手工关闭
            },
            cancel: function (index, layero) {
                if (confirm('确定要关闭么')) { //只有当点击confirm框的确定时，该层才会关闭
                    layer.close(index)
                }
                return false;
            }
        }
    );
}