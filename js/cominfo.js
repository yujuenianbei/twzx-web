/**
 * Created by QXT on 2017/4/30.
 */
/**
 * Created by QXT on 2017/4/13.
 */
(function() {
    //滚动条
    $("html").niceScroll({
        cursorcolor: "#d8261c", // 改变滚动条颜色，使用16进制颜色值
        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        cursorwidth: "4px", // 滚动条的宽度，单位：便素
        cursorborder: "0px solid #fff", // CSS方式定义滚动条边框
        cursorborderradius: "4px", // 滚动条圆角（像素）
        scrollspeed: 40, // 滚动速度
        mousescrollstep: 45 // 鼠标滚轮的滚动速度 (像素)
    });
    //window.reloadLv=function (){
    //    // 最大分数
    //    var max_lv=$('#if_lv [number]').attr('max');
    //    // 当前分数
    //    var lv=parseInt($('#if_lv [number]').html());
    //    $('#if_lv [number]').html(0);
    //
    //    // 计算角度
    //    var deg=lv/max_lv*max_deg+parseInt($('#if_lv [deg]').attr('add-deg'));
    //
    //    var box=$('#if_lv [deg]')[0];
    //
    //    box.style['-webkit-transform']='rotate(-135deg)';
    //    box.style['-ms-transform']='rotate(-135deg)';
    //    box.style['transform']='rotate(-135deg)';
    //
    //    box.style['-webkit-transition']='0s';
    //    box.style['-ms-transition']='0s';
    //    box.style['transition']='0s';
    //
    //    setTimeout(function(){
    //        box.style['-webkit-transform']='rotate('+deg+'deg)';
    //        box.style['-ms-transform']='rotate('+deg+'deg)';
    //        box.style['transform']='rotate('+deg+'deg)';
    //
    //        box.style['-webkit-transition']='0.5s';
    //        box.style['-ms-transition']='0.5s';
    //        box.style['transition']='0.5s';
    //    },0)
    //
    //    $({number:0}).animate({number:lv},{
    //            duration : 500,
    //            step : function (){
    //                $('#if_lv [number]').html(parseInt(this.number));
    //            }
    //        })
    //        .animate({number:0},0,function (){
    //            $('#if_lv [number]').html(lv);
    //        })
    //}
    //
    //setTimeout(reloadLv,500);


    ////弹出遮罩层
    //$('.rightFix').on('click',function(){
    //    layer.open({
    //        title: false, //不显示标题
    //        type: 1,
    //        time: 2000, //2秒后自动关闭
    //        skin: 'layui-layer-demo', //样式类名
    //        closeBtn: 0, //不显示关闭按钮
    //        shadeClose: true, //开启遮罩关闭
    //        content:      '亲..暂时没有这个功能哦'
    //    });
    //});
    ////提示框
    //$('.leftFix').on('click',function(){
    //    //layer.load(1, {
    //    //    shade: [0.4,'#000'], //0.1透明度的背景
    //    //    time: 2000
    //    //});
    //    layer.msg('玩命提示中');
    //});
    ////加载
    //$('.ss').on('click',function(){
    //    layer.load(1, {
    //        shade: [0.4,'#000'], //0.1透明度的背景
    //        time: 2000
    //    });
    //})


    //文字滚动调用
    setInterval('autoScroll(".left-bot")',5000);

    //tab浮动
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        console.log(sTop);

        var WH = $(window).height();
        var WW = $(window).width();
        //不同分辨率下的回到顶部的距离
        if(WW>1201){
            if (sTop >= 440) {
                $('#tt').css({'position':'fixed','top':'0px'});
                $('#tab-nr').css({'padding-top':'60px'});
            }
            else {
                $('#tt').css({'position':'relative'});
                $('#tab-nr').css({'padding-top':'0px'});
            }
        }else if(767<WW<1201){
            if (sTop >= 776) {
                $('#tt').css({'position':'fixed','top':'0px'});
                $('#tab-nr').css({'padding-top':'60px'});
            }
            else {
                $('#tt').css({'position':'relative'});
                $('#tab-nr').css({'padding-top':'0px'});
            }
        }else if(WW<767){
            if (sTop >= 500) {
                $('#tt').css({'position':'fixed','top':'0px'});
                $('#tab-nr').css({'padding-top':'60px'});
            }
            else {
                $('#tt').css({'position':'relative'});
                $('#tab-nr').css({'padding-top':'0px'});
            }
        }


    });


//锚链接位置
    leftTop();
//  锚链接
    $('.leftFix li').on('click',function(){
        $('#tt').css({'position':'fixed','top':'0px'});
        $('#tab-nr').css({'padding-top':'60px'});
    });

//图标切换
    $('.n .title').on('click',function(){
        var t = $(this);
        if(t.children('.sh').hasClass('icon-收起')){
            t.children('.sh').removeClass('icon-收起').addClass('icon-下拉');
        }else{
            t.children('.sh').addClass('icon-收起').removeClass('icon-下拉');
        }
    });

    //将总目录下的内容title写入数组temp
    $('#tt a[data-toggle="tab"]').on('shown.bs.tab', function (e){
        //换页回到第一项 不同分辨率
        leftTop();
        var WW = $(window).width();
        if(WW>1201){
            $('body,html').animate({scrollTop:458},500);
        }else if(767<WW<1201){
            $('body,html').animate({scrollTop:774},500);
        }else if(WW<767){
            $('body,html').animate({scrollTop:635},500);
            alert(123)
        }


        //清空ul里面的内容
        var m = $('.leftFix ul');
        m.html('');
        //找到要获取的内容的位置
        var arr = $('#tab-nr .active .name'),
        //添加内容的数组
            temp = [],
        //.name的数量
            arrl = arr.length;
        //循环遍历内容
        for(var i = 0;i<arrl;i++){
            //获取需要存储的内容
            var x = arr[i].innerText;
            //console.log(x);
            //把内容注入数组中
            temp.push(x);

            //将内容写入到指定位置
            m.append("<li><a>"+ temp[i].substr(0,4) +'</a></li>');
            var t = $('.leftFix ul li a');
        }

        //获取ID
        //生成一个根据name个数相同的数组
        var idt = [];
        for(var i = 0; i < arrl; i++){//创建一个数字数组
            idt[i] = i;
        }
        //遍历出n的id
        var idValue = $(".active .n");
        //console.log(idValue);
        var t = $('.leftFix li a');
        $.each(idt, function(i){//循环得到不同的id的值
            var x = idValue.eq(i).attr('id');
            console.log(x);
            //把数组内容写入li中
            var a = '#'+x;
            t.eq(i).attr('href',a);
        });

        $('.leftFix li:first-child').addClass('active');
        $('body').scrollspy({ target: '#navbar-example' });
    });


//    回到顶部
    $(".scrtop").click(function(){
        var sc=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},500);
    });


//    h5分享开始
//    >1200px
    $('.rightFix .h5').on('click', function(){
        tcc();
        showMask();
        $('body').css({"overflow":"hidden"});
        //添加链接地址
        $("#lj").attr({src:"../H5/html/h5.html"});

        //$("#lj").attr({src:"/company/mobile?type=" + 1 + "&id=" + 200091});
        //codeUrl = document.getElementById("em").src;
    });
//    <1200px
    $('.r1').on('click', function(){
        tcc();
        showMask();
        $('body').css({"overflow":"hidden"});
        //添加链接地址
        $("#lj").attr({src:"../H5/html/h5.html"});

        //$("#lj").attr({src:"/company/mobile?type=" + 1 + "&id=" + 200091});
        //codeUrl = document.getElementById("em").src;
    });


    $('.gbtc1').on('click', function(){
        hideMask();
        $('body').css({"overflow":"auto"});
        //清空链接地址
        $('#lj').attr({src:""})
    })
    $('.mb-li').on('click', function(){
        $('.mb-li').removeClass('select');
        $(this).addClass('select');
        //var type = $(this).children().next().next().val();
        //$("#lj").attr({src:"/company/mobile?type=" + type + "&id=" + 200091});
        $("#lj").attr({src:"../H5/html/h5.html"});
        // console.log("jifenihu");
    });
    $('.mb-li .use').on('click', function(){
        showSuccess()
    });

//    h5分享结束

}());

//    文字滚动
function autoScroll(obj){
    $(obj).find("ul").animate({
        marginTop : "-39px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}


function showMask(){
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
}
//隐藏遮罩层
function hideMask(){
    $("#mask").hide();
}

//显示遮罩层(成功交易)
function showSuccess(){
    $("#H5_success").css("height", $(document).height());
    $("#H5_success").css("width", $(document).width());
    $("#H5_success").show();
}
//隐藏遮罩层（）
function hideSuccess(){
    $("#H5_success").hide();
}

function tcc(){
    //居中显示弹出层
    var WH = $(window).height();
    var WW = $(window).width();
    var scht = ($(window).height() - 600) / 2;
    console.log(scht);
    $('#mask .ce').css({"margin-top":scht});
}


//    锚链接位置
function leftTop(){
    var WH = $(window).height();
    var LH = $('.leftFix').height();
    var LT = (WH-LH)/2;
    $('.leftFix').css({'top':LT});
    //console.log(WH);
}


function zxbg(){
    layer.confirm('您确定下载征信报告？', {
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



