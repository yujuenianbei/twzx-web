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
    //弹出遮罩层
    $('.rightFix').on('click',function(){
        layer.open({
            title: false, //不显示标题
            type: 1,
            time: 2000, //2秒后自动关闭
            skin: 'layui-layer-demo', //样式类名
            closeBtn: 0, //不显示关闭按钮
            shadeClose: true, //开启遮罩关闭
            content:      '亲..暂时没有这个功能哦'
        });
    });
    //提示框
    $('.leftFix').on('click',function(){
        //layer.load(1, {
        //    shade: [0.4,'#000'], //0.1透明度的背景
        //    time: 2000
        //});
        layer.msg('玩命提示中');
    });
    //加载
    $('.ss').on('click',function(){
        layer.load(1, {
            shade: [0.4,'#000'], //0.1透明度的背景
            time: 2000
        });
    })
}());