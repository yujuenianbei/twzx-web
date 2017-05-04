/**
 * Created by QXT on 2017/4/5.
 */
(function(){

    var ww = $(window).width();
    var hh= $(window).height();
    if(ww>1200){
            if(hh<800){
                $('.context').css({"top":"20%"})
            }else{
                $('.context').css({"top":"30%"})
            }
    }
    //pad
    else if(769<ww<1200){
        if(hh<800){
            $('.context').css({"top":"25%"})
        }else{
            $('.context').css({"top":"30%"})
        }
    }




    $('.up').on('click',function(){
        var ww = $(window).width();
        var hh= $(window).height();
        //pc
        if(ww>1200){
            if($(".up").hasClass('n1')){
                $('.up').css({"margin-bottom":"30px"});
                $(".up").removeClass('n1');
                $(".up").html('<span class="icon icon-箭头向上"></span>');
                $('.title').css({"height":"90px"});
                if(hh<800){
                    $('.context').css({"top":"20%"})
                }else{
                    $('.context').css({"top":"30%"})
                }
            }else{
                $('.up').css({"margin-bottom":"350px"});
                $(".up").addClass('n1');
                $('.title').css({"height":"410px"});
                //$('.context').css({"top":"14%"});
                $(".up").html('<span class="icon icon-向下"></span>');
                if(hh<800){
                    $('.context').css({"top":"8%"})
                }else{
                    $('.context').css({"top":"14%"})
                }
            }
        }
        //pad
        else if(767<ww<1200){
            if($(".up").hasClass('n1')){
                $('.up').css({"margin-bottom":"30px"});
                $(".up").removeClass('n1');
                $(".up").html('<span class="icon icon-箭头向上"></span>');
                $('.title').css({"height":"90px"});
                $('.context').css({"top":"30%"})
            }else{
                $('.up').css({"margin-bottom":"390px"});
                $(".up").addClass('n1');
                $('.title').css({"height":"450px"});
                $('.context').css({"top":"14%"});
                $(".up").html('<span class="icon icon-向下"></span>');
            }
        }
        else if(ww<767){
            if($(".up").hasClass('n1')){
                $('.up').css({"margin-bottom":"30px"});
                $(".up").removeClass('n1');
                $(".up").html('<span class="icon icon-箭头向上"></span>');
                $('.title').css({"height":"0px"});
                $('.context').css({"top":"30%"})
            }else{
                $('.up').css({"margin-bottom":"390px"});
                $(".up").addClass('n1');
                $('.title').css({"height":"450px"});
                $('.context').css({"top":"18%"});
                $(".up").html('<span class="icon icon-向下"></span>');
            }
        }
        else{

        }
    })
}());
