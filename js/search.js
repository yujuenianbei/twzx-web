/**
 * Created by QXT on 2017/4/6.
 */
(function(){
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
    //$('.pagination li').on('click',function(){
    //    $('.pagination li').removeClass('active');
    //    $(this).addClass('active');
    //    if($('.pagination li:nth-child(3)').hasClass('active')){
    //        $('.pagination li:nth-child(1)').addClass('disabled');
    //        $('.pagination li:nth-child(2)').addClass('disabled');
    //    }else if($('.pagination li:nth-child(12)').hasClass('active')){
    //        $('.pagination li:nth-child(14)').addClass('disabled');
    //        $('.pagination li:last-child').addClass('disabled');
    //    }else{
    //        $('.pagination li').removeClass('disabled');
    //    }
    //})

    //分页
    $.jqPaginator('#pagination1', {
        totalPages: 20,
        visiblePages: 10,
        currentPage: 1,
        first: '<li class="prev"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        last: '<li class="next"><a href="javascript:;">尾页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            //ajax可以写在里面加载数据
            $('.search-li-nr .nr-li li').html('<div class="li-1">'+
                '<div class="img">'+
                '<a href="#"> ' +
                '<img src="https://twzx.sandbox.qixinyun.com/image/companyLogo.svg" alt=""> ' +
                '</a> ' +
                '</div> ' +
                '</div> ' +
                '<div class="li-2"> ' +
                '<div class="name"> ' +
                '<h3> ' +
                '<a href="#">北京百度网讯科技有限公司1 </a> </h3> ' +
                '<p>法定代表人：梁志祥</p> ' +
                '<p>企业地址：北京市海淀区上地十街百度大厦</p> ' +
                '</div> ' +
                '</div> ' +
                '<div class="li-3"> ' +
                '<h5>'+num+'</h5> ' +
                '</div> ' +
                '<div class="li-4"> ' +
                '<h5>2001-10-3</h5> ' +
                '</div> ' +
                '<div class="li-5"> ' +
                '<div class="zt"> ' +
                '<span class="span">开业</span> ' +
                '<div class="log"> ' +
                '<span class="icon icon-商标签"></span> ' +
                '<span class="icon icon-投资"></span> ' +
                '<span class="icon icon-证书"></span> ' +
                '</div> ' +
                '</div> ' +
                '</div>');
            console.log(num)
        }
    });


    //点击收缩 展开
    $('.s .ul .xl a').on('click',function(){
        var hh = $(this).parent().next().height();
        if( hh > 40){
            $(this).parent().next().css({"height":"40px"});
            $(this).html('<a>更多 <span class="icon icon-向下"></span></a>');
            console.log($(this).parent().next().height())
        }else{
            $(this).parent().next().css({"height":'auto'});
            $(this).html('<a>收起 <span class="icon icon-箭头向上"></span></a>');
            console.log($(this).parent().next().height())
        }
    });

    //筛选点击
    $('#sx-btn').on('click',function(){
        if($(this).hasClass('collapsed')){
            $(this).children('span').removeClass('icon-向下').addClass('icon-箭头向上')
        }else{
            $(this).children('span').removeClass('icon-箭头向上').addClass('icon-向下')
        }
    });

    //清除全部
    $('.lic').on('click',function(){
        //清除当前筛选的内容
        //$(this).parent().children('li').html('');
        window.location.reload();

    });


    //企业状态筛选

    //出现菜单
    $('.li-5 .zt-top').on('click',function(){
        var ul = $('.li-5 ul');
        if(ul.hasClass('on')){
            ul.removeClass('on');
            ul.css({'z-index':'-1'});
            ul.parent().children('.zt-top').children().removeClass('icon-箭头向上').addClass('icon-向下');
        }else{
            ul.addClass('on');
            ul.css({'z-index':'999'});
            ul.parent().children('.zt-top').children().removeClass('icon-向下').addClass('icon-箭头向上');
        }
    });
    //点击sort条件
    $('.li-5 ul a').on('click',function(){
        var ul = $('.li-5 ul');
        ul.removeClass('on');

        $(this).parent().siblings().children().removeClass('oo');
        var nr = $(this).text();
    //    加上sort函数
        if($(this).hasClass('oo')){
            $(this).removeClass('oo');
            $('.zt-top').html('状态 <span class="icon icon-向下"></span>');
            console.log('状态');
        //    恢复默认序列

        }else{
            $(this).addClass('oo');
            $('.zt-top').html(nr+' <span class="icon icon-向下"></span>');
            console.log(nr);
        //    根据状态排序

        }
    });
    //sort函数


//   筛选点击事件(单选)
    var mm = $('.ul ul li');
    var nn = $('.s');
    mm.on('click',function(){
        //获取本列相对总筛选的顺序 和相对本序列的顺序
        //
        var li = $(this).index();
        //
        var s = $(this).parents('.s').index();
        //
        var n = $(this).parents('.s').children('on').length;
        //console.log(s,li,n);
        //获取当前点击的内容
        var txt = $(this).text();


        if($(this).hasClass('on')){
            $(this).removeClass('on');
            //span外层div样式
            $('.sx-li li span').parent().parent().eq(s).children().css({"width":"0px",'padding':'0px 0px','margin':'0px 0px','display':'none'});
            //span li样式
            $('.sx-li li').eq(s).css({'margin':'0px 0px'});
            //span li的内容清空
            $('.sx-li li').eq(s).html('');
            //输出li的内容
            //console.log( $('.sx-li li').eq(s).text())
        }else{
            $(this).parent().children().removeClass('on');
            $(this).addClass('on');
            //span外层div样式
            $('.sx-li li span').parent().parent().eq(s).children().css({"width":"auto",'padding':'0px 7px','margin':'5px 0px 0px','display':'block'});
            //span li样式
            $('.sx-li li').eq(s).css({'margin':'0px 5px'});
            //span li的内容写入
            $('.sx-li li').eq(s).html('<div>'+txt+'<span class="icon icon-叉"></span></div>');
            //console.log( $('.sx-li li').eq(s).text());
        }

        //     单个删除选择的条件
        $(".sx-li li span").on('click',function(){

            $('.s').removeClass('off');
            var d = $(this).parent().parent().index();
            //下面相对应的li
            $('.s').eq(d).addClass('off');
            $('.off li').eq(li).removeClass('on');
            //外层li
            $(this).parent().parent().css({'margin':'0px 0px'});
            //外层div
            $(this).parent().css({"width":"0px",'padding':'0px 0px','margin':'0px 0px','display':'none'});
            console.log(d);
        })
    });




}());


//   筛选点击事件(多选)
//    var mm = $('.ul ul li');
//    var nn = $('.s');
//    mm.on('click',function(){
//        //获取当前li的序列（相对所有序列）
//        //console.log(mm.index(this)+1);
//
//        //获取当前li的序列(相对本序列)
//        //var li = $(this).index();
//        //console.log(li);
//        //获取本列相对总筛选的顺序
//        //var s = $(this).parents('.s');
//        //console.log(s.index(),li);
//
//        //获取本列相对总筛选的顺序 和相对本序列的顺序
//        //
//        var li = $(this).index();
//        //
//        var s = $(this).parents('.s').index();
//        //
//        var n = $(this).parents('.s').children('on').length;
//        console.log(s,li,n);
//        //获取当前点击的内容
//        var txt = $(this).text();
//
//
//        if($(this).hasClass('on')){
//            $(this).removeClass('on');
//            $('.sx-li li').eq(s).children().eq(n).remove();
//            console.log( $('.sx-li li').eq(s).text())
//        }else{
//            $(this).addClass('on');
//            $('.sx-li li').eq(s).append('<div>'+txt+'</div>');
//            console.log( $('.sx-li li').eq(s).text())
//        }
//    });

