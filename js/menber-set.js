/**
 * Created by QXT on 2017/4/28.
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

        var commith = $(window).height()-(62+40+20);
        $('.commit').css({'height':commith});
    }else if(768<ww<1200){
        var contextHeight = $(window).height()-140;
        var mlnrHeight = $(window).height()-460;
        $('.context').css({'height':contextHeight});
        $('.mlNr').css({'height':mlnrHeight});
        console.log(mlnrHeight)

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


//修改密码 start
function showPass(){
    $('#setPass').show()
}
function closePass(){
    $('#setPass').hide()
}
//修改密码 end


//修改头像 start
function showPhoto(){
    $('#setPhoto').show();
    var box=$('#img1_show');
    box.height(box.height());
    box.width(box.width());
}
function closePhoto(){
    $('#img1_show>[img]').hide();
    $('#img-preview>img').attr('src','');
    $('#setPhoto').hide();
}
//修改头像 end

//邮箱 start
function setMail(){
    $('#setMailOk').show();
}
function closeMail(){
    $('#setMailOk').hide();
}
//邮箱 end

//手机更换 start
function setPhone(){
    $('#setPhoneOk').show();
}
function closePhone(){
    $('#setPhoneOk').hide();
}
//手机更换 end



//成功之后的弹出框 start
function setPhotoOk(){
    layer.msg('图片上传成功');
}
function setPassOk(){
    layer.msg('密码修改成功');
}
function setPhoneOk(){
    layer.msg('手机号码更换成功');
    closePhone();
}
function getMsg(){
    layer.msg('验证码已发送');
}
function alertShow(){
    layer.msg('提交成功');
    lsHide();
}
//成功之后的弹出框 end


//律师入驻 start
(function () {
    // 居中显示弹出层
    var WH = $(window).height();
    var WW = $(window).width();
    var scht = ($(window).height() - 650) / 2;
    console.log(scht);
    $('#lsrz .sc').css({"margin-top": scht});

//        tab切换
    $('.rj .tab li').on('click', function () {
        $('.rj .tab li').removeClass('on');
        $(this).addClass('on')
        if ($('.n1').hasClass('on')) {
            $('.lv').removeClass('hide').addClass('show');
            $('.zj').removeClass('show').addClass('hide');
        } else {
            $('.zj').removeClass('hide').addClass('show');
            $('.lv').removeClass('show').addClass('hide');
        }
    })



//
    $('#add-solicitor').on('click', function () {
        lsShow()
    })
    $('#lsrz').on('click', function () {
            //lsHide()
    })
}());
//    弹出层
function lsShow() {
    $('#lsrz').css({"display": "block"})
}
function lsHide() {
    $('#lsrz').css({"display": "none"})
}
//律师入驻 end

//短信验证码倒计时 start
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value="重新获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}
//短信验证码倒计时 end
