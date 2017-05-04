/**
 * Created by yujuenianbei on 2017/4/24.
 */
(function(){
//滚动条
//    $("html").niceScroll({
//        cursorcolor: "#d8261c", // 改变滚动条颜色，使用16进制颜色值
//        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
//        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
//        cursorwidth: "4px", // 滚动条的宽度，单位：便素
//        cursorborder: "0px solid #fff", // CSS方式定义滚动条边框
//        cursorborderradius: "4px", // 滚动条圆角（像素）
//        scrollspeed: 40, // 滚动速度
//        mousescrollstep: 45 // 鼠标滚轮的滚动速度 (像素)
//    });
    $(".mlNr_left").niceScroll({
        cursorcolor: "#d8261c", // 改变滚动条颜色，使用16进制颜色值
        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        cursorwidth: "4px", // 滚动条的宽度，单位：便素
        cursorborder: "0px solid #fff", // CSS方式定义滚动条边框
        cursorborderradius: "4px", // 滚动条圆角（像素）
        scrollspeed: 40, // 滚动速度
        mousescrollstep: 45 // 鼠标滚轮的滚动速度 (像素)
    });

    window.onresize = adjust;

//菜单点击事件
    $('.mlNr_left>li').on('click',function(){
        $(this).parent().children('li').removeClass('active');
        $(this).addClass('active');
    })
    $('.li_ul li').on('click',function(){
        $('.li_ul li').removeClass('on');
        $(this).addClass('on')
    });


//  导航菜单选择
    $('.mRight').load("menber-cz.html");
    $(".mlNr_left>li").eq(0).click(function() {
        $('.mRight').load("menber-set.html");
    });
    $(".mlNr_left>li").eq(1).click(function() {
        $('.mRight').load("menber-info.html");
    });
    $(".mlNr_left>li").eq(2).click(function() {
        $('.mRight').load("menber-compy.html");
    });
    $(".mlNr_left>li").eq(3).click(function() {
        $('.mRight').load("menber-commit.html");
    });
    $(".mlNr_left>li").eq(4).click(function() {
        $('.mRight').load("menber-gz.html");
    });
    $(".mlNr_left>li").eq(5).click(function() {
        $('.mRight').load("menber-interg.html");
    });
    $(".mlNr_left>li").eq(7).click(function() {
        $('.mRight').load("menber-czxf.html");
    });


    function mouin(){
        $(this).mouseenter(
            $(this).children('.none').css({'display':'block'})
        )
    }

    $('.lijicz').on('click',function(){
        $('.mRight').load('menber-cz.html');
    })


}());

//页面高度
function adjust(){
    var contextHeight = $(window).height()-140;
    var mlnrHeight = $(window).height()-600;
    var infoHeight = $(window).height()-323;
    console.log(contextHeight);
    console.log(infoHeight);
    $('.context').css({'height':contextHeight});
    $('.mlNr').css({'height':mlnrHeight});
    $('.info').css({'height':contextHeight});
    $('.info-tabnr').css({'height':infoHeight});
}


//控制页面高度
(function(){
    interg();
    window.onresize = interg;
}())

function interg(){
    var ww = $(window).width();
    if(ww<768){
        var conHeight = $(window).height()-125;
        $('.mRight').css({'height':conHeight});
    }else{
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-600;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});
        $('.mRight').css({'height':contextHeight});
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
                $('.panel-body .active').remove();
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

//撤销本条信息
function move() {
    //询问框
    layer.confirm('您确定撤销此条信息？', {
            closeBtn: 0,
            title: false, //不显示标题
            btn: ['确定', '取消'],//按钮,
            yes: function (index) {
                $('.panel-body .active').remove();
                layer.close(index); //如果设定了yes回调，需进行手工关闭
            },
            cancel: function (index) {
                if (confirm('确定要关闭么')) { //只有当点击confirm框的确定时，该层才会关闭
                    layer.close(index)
                }
                return false;
            }
        }
    );
}
//重新申请
function retry() {
    //询问框
    layer.confirm('您确定重新申请？', {
            closeBtn: 0,
            title: false, //不显示标题
            btn: ['确定', '取消'],//按钮,
            yes: function (index) {
                console.log(1);
                layer.close(index); //如果设定了yes回调，需进行手工关闭
            },
            cancel: function (index) {
                if (confirm('确定要关闭么')) { //只有当点击confirm框的确定时，该层才会关闭
                    layer.close(index)
                }
                return false;
            }
        }
    );
}

//弹出框正在开发中
function msg(){
    layer.msg('功能正在开发中');
}

//弹出框正在开发中
function taocan(){
    layer.msg('更多套餐即将上线');
}



