/**
 * Created by Administrator on 2017/4/3.
 */
(function(){
    //手机版判断footer
    //开始判断
    if($('body').height() < $('html').height()){
        $('.footer').css({"position":"absolute"});
    }else{
        $('.footer').css({"position":"relative"});
    }
    //点击后判断
    $('html').click(function(){
        setTimeout(function(){
            console.log($('body').height());
            console.log($('html').height());
            if($('body').height() < $('html').height()){
                $('.footer').css({"position":"absolute"});
            }else{
                $('.footer').css({"position":"relative"});
            }
        },300);
    })


}());
//登录验证（滑块）

(function($){
    $.fn.drag = function(options){
        var x, drag = this, isMove = false, defaults = {
        };
        var options = $.extend(defaults, options);
        //添加背景，文字，滑块
        var html = '<div class="drag_bg" id="bg"></div>'+
            '<div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
            '<div class="handler handler_bg" id="hand"></div>';
        this.append(html);

        var handler = drag.find('.handler');
        var drag_bg = drag.find('.drag_bg');
        var text = drag.find('.drag_text');
        var maxWidth = drag.width() - handler.width();  //能滑动的最大间距

        //鼠标按下时候的x轴的位置
        handler.mousedown(function(e){
            isMove = true;
            x = e.pageX - parseInt(handler.css('left'), 10);
        });

        //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
        $(document).mousemove(function(e){
            var _x = e.pageX - x;
            if(isMove){
                if(_x > 0 && _x <= maxWidth){
                    handler.css({'left': _x});
                    drag_bg.css({'width': _x});
                }else if(_x > maxWidth){  //鼠标指针移动距离达到最大时清空事件
                    dragOk();
                }
            }
        }).mouseup(function(e){
            isMove = false;
            var _x = e.pageX - x;
            if(_x < maxWidth){ //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
                handler.css({'left': 0});
                drag_bg.css({'width': 0});
            }
        });

        //清空事件
        function dragOk(){
            handler.removeClass('handler_bg').addClass('handler_ok_bg');
            text.text('验证通过');
            drag.css({'color': '#fff'});
            handler.unbind('mousedown');
            $(document).unbind('mousemove');
            $(document).unbind('mouseup');
        }


        //手机端
        var tt =  $('#drag');
        var bg = document.getElementById('bg');
        var hand = document.getElementById('hand');
        hand.addEventListener('touchstart',function(){
            bg.width = event.touches[0].clientX;
            hand.left = event.touches[0].clientX;
            $('.drag_bg').css({'width':bg.width });
            $('.handler').css({'left': hand.left });
        });
        hand.addEventListener('touchmove',function(){
            bg.width = event.touches[0].clientX;
            hand.left = event.touches[0].clientX;
            if(bg.width < tt.width()-40){
                $('.drag_bg').css({'width':bg.width });
                $('.handler').css({'left': hand.left });
            }else if(bg.width<0){
                $('.drag_bg').css({'width':0 });
                $('.handler').css({'left': 0});
            }else{
                $('.drag_bg').css({'width':tt.width-40});
                $('.handler').css({'left': tt.width-40});
                $('.handler').removeClass('handler_bg').addClass('handler_ok_bg')
            }

        });
        hand.addEventListener('touchend',function(){
            if(bg.width < tt.width()-40){
                $('.drag_bg').css({'width':0 });
                $('.handler').css({'left': 0});
            }else{
                $('.drag_bg').css({'width':tt.width-40});
                $('.handler').css({'left': tt.width-40});

                $('.drag_text').html('通过验证')
                drag.css({'color': '#fff'});
                dd()
            }
        });
        function not(){
            $('#drag').css({'border':'1px solid #d8261c'})
        }
        function dd(){
            hand.removeEventListener('touchstart',function(){
                bg.width = event.touches[0].clientX;
                hand.left = event.touches[0].clientX;
                $('.drag_bg').css({'width':bg.width });
                $('.handler').css({'left': hand.left });
            });
            hand.removeEventListener('touchmove',function(){
                bg.width = event.touches[0].clientX;
                hand.left = event.touches[0].clientX;
                if(bg.width < tt.width()-40){
                    $('.drag_bg').css({'width':bg.width-40 });
                    $('.handler').css({'left': hand.left-40 });
                }else{
                    $('.drag_bg').css({'width':tt.width-40});
                    $('.handler').css({'left': tt.width-40});
                    $('.handler').removeClass('handler_bg').addClass('handler_ok_bg')
                }
            });
            hand.removeEventListener('touchend',function(){
                if(bg.width < tt.width()-40){
                    $('.drag_bg').css({'width':0 });
                    $('.handler').css({'left': 0});
                }else{
                    $('.drag_bg').css({'width':tt.width-40});
                    $('.handler').css({'left': tt.width-40});

                    $('.drag_text').html('通过验证')
                    drag.css({'color': '#fff'});
                }
            });
        }
    };
})(jQuery);
$('#drag').drag();


$('.btn-dl').on('click',function(){
    if( $('.handler').hasClass('handler_ok_bg')){
        if( $('.n1').hasClass('has-success')){
           if($('.n2').hasClass('has-success')){
               alert(1)
           }else{
               console.log(2)
           }
        }else{
            console.log(3)
        }
    }else{
       console.log(4)
    }
})







//用户 密码验证
/*将默认提示中文化start*/
jQuery.extend(jQuery.validator.messages, {
    required   : "必选字段",
    remote     : "请修正该字段",
    email      : "请输入正确格式的电子邮件",
    url        : "请输入合法的网址",
    date       : "请输入合法的日期",
    dateISO    : "请输入合法的日期 (ISO).",
    number     : "请输入合法的数字",
    digits     : "只能输入整数",
    creditcard : "请输入合法的信用卡号",
    equalTo    : "请再次输入相同的值",
    accept     : "请输入拥有合法后缀名的字符串",
    maxlength  : jQuery.validator.format("请输入一个长度最多是{0}的字符串"),
    minlength  : jQuery.validator.format("请输入一个长度最少是{0}的字符串"),
    rangelength: jQuery.validator.format("请输入一个长度介于{0}和{1}之间的字符串"),
    range      : jQuery.validator.format("请输入一个介于{0}和{1}之间的值"),
    max        : jQuery.validator.format("请输入一个最大为{0}的值"),
    min        : jQuery.validator.format("请输入一个最小为{0}的值")
});
/*将默认提示中文化end*/

/*验证demo表单start*/
$(function(){
    jQuery.validator.addMethod('tel',function(value,element){
        var telmatch = /^1[0-9]{10}$/;
        return this.optional(element) || (telmatch.test(value));
    },'请输入正确的手机号码');

    $('#login').validate({
        errorElement: 'span',
        errorClass: 'false',
        validClass: 'right',
        onfocusout: function(element){
            $(element).valid();
        },
        errorPlacement: function(error,element){
            element.parent().parent().next().append(error);
        },
        highlight: function(element, errorClass, validClass) {
            $(element).removeClass('right').addClass('false');
            $(element).parent().removeClass('has-success').addClass('has-error');
            $(element).parent().next().removeClass('right').addClass('false').find('i').html('&#xe606;');
        },
        success: function(span,element){
            $(element).parent().removeClass('has-error').addClass('has-success');
            $(element).parent().next().removeClass('false').addClass('true');
            span.parent().removeClass('false').addClass('right');
            span.removeClass('false').addClass('right');
            span.prev('.iconfont').html('&#xe607;');
        },
        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16
            },
            password2: {
                required: true,
                equalTo: '#password',
                minlength: 8,
                maxlength: 16
            },
            tel: {
                required: true,
                minlength: 11,
                maxlength: 11,
                digits: true
            },
            sex: {
                required: true
            },
            favorite: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            username: {
                required: '用户名不正确'
            },
            password: {
                required: '密码不正确',
                minlength: '密码长度不正确',
                maxlength: '密码长度不正确'
            },
            usernameset: {
                required: '请设置一个用户名'
            },
            password1: {
                required: '请设置一个密码',
                minlength: '密码长度不小于8个字符',
                maxlength: '密码长度不大于16个字符'
            },
            password2: {
                required: '请再次确认密码',
                equalTo: '两次输入密码不相同',
                minlength: '密码长度不小于8个字符',
                maxlength: '密码长度不大于16个字符'
            },
            tel: {
                required: '请输入您的常用手机号码',
                minlength: '手机号码长度为11位',
                maxlength: '手机号码长度为11位',
                digits: '手机号码只能输入数字'
            },
            sex: {
                required: '请选择您的性别'
            },
            favorite: {
                required: '请选择您的爱好',
                minlength: '请至少选择两项'
            }
        }
    });
})
/*验证demo表单end*/




