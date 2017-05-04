

    eve.layer={
        open : function (e,cont){
            cont=$(cont)

            layer.open({
              type: 1,
              closeBtn : true,
              shadeClose : true,
              title : false,
              area: [cont.css('width'),cont.css('height')], //宽高
              content: cont,
            });
        },
        open404 : function (){

            setTimeout(function(){

                var area=['600px','400px']
                if(document.body.clientWidth<=554){
                    area=['300px','200px']
                }

                layer.open({
                    type: 1,
                    closeBtn : true,
                    shadeClose : true,
                    title : false,
                    area: area, //宽高
                    content: "<div class='popup'>\
                                <img src='"+rootUrl+"img/whz.png'>\
                            </div>",
                });
            },0)
        },
        close : function (e){
            layer.closeAll()
        },
    }
    
    
    eve.reg={
        allOk:function (e){

            var def=false
            $(this).find('[lab][must]').each(function (){
                if(!$(this).hasClass('ok')){
                    $.dispatchEvent($(this).find('input')[0],'blur')
                    if($(this).hasClass('error')){
                        def=true
                        $(this).focus()
                        return false
                    }
                }
            })

            e.def=def
            e.stopTrue=def

        },
        setType:function (e,input,type,errorText,okText){

            if(type){
                var ok='ok',error='error',text=okText
            }
            else{
                var ok='error',error='ok',text=errorText
                e.stopTrue=true
            }


            var lab=
            $(input)
            .addClass(ok).removeClass(error)
            .parent().parent()
            .addClass(ok).removeClass(error)

            if(ok=='ok'){
                lab.find('[ok]').html(okText||'');
                lab.find('[error]').html('');
            }
            else{
                lab.find('[ok]').html('');
                lab.find('[error]').html(errorText||'');
            }


            // 如果出错了，并且设置了自动获取焦点，则获取焦点
            if(ok=='error' && e.autoFocus==true){
                input.focus();
            }
        },
        // 是否有值
        has : function (e,errorText,okText){
            eve.reg.setType(e,this,
                this.value.length!=0,
                errorText,
                okText
            )
        },
        // 最短多少
        min : function (e,length,errorText,okText){
            eve.reg.setType(e,this,
                this.value.length>=length,
                errorText||'未达到最低限制('+length+')',
                okText
            )
        },
        // 最长多少
        max : function (e,length,errorText,okText){
            eve.reg.setType(e,this,
                this.value.length<=length,
                errorText||'以超出最长限制('+length+')',
                okText
            )
        },
        // 长度等于多少
        length : function (){
            eve.reg.setType(e,this,
                this.value.length==length,
                errorText,okText
            )
        },
        // 是不是电话
        isTel : function (e,errorText,okText){
            eve.reg.setType(e,this,
                /^1[34578]\d{9}$/.test(this.value),
                errorText||'请输入正确的手机号码！',
                okText
            )
        },
        // 是不是邮箱
        isMail:function(e,errorText,okText){
            eve.reg.setType(e,this,
                /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.value),
                errorText||'请输入正确的邮箱',
                okText
            )
        },
        // 是不是中文名字（中文，长度2-4）
        isCnName:function (e,errorText,okText){
            eve.reg.setType(e,this,
                /^[\u4E00-\u9FA5]{2,4}$/.test(this.value),
                errorText,
                okText
            )
        },
        // 是不是身份证号
        isCnId:function (e,errorText,okText){
            eve.reg.setType(e,this,
                /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(this.value),
                errorText||'请输入正确的身份证号码',
                okText
            )
        },
        // 是不是数字
        isNumber:function (e,errorText,okText){
            eve.reg.setType(e,this,
                parseFloat(this.value)+''==this.value,
                errorText,okText
            )
        },
        focus:function (e){
            e.autoFocus=true;
        },
    }


    function classOn(the){
        $(the).d(12).removeClass('on')
        $(the).addClass('on')
    }




    window.reg={
        isMail:function(str){
            return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(str)
        },
        isTel:function(str){
            return /^1[34578]\d{9}$/.test(str)
        },
        isNumber:function (str){
            return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
        },
        isCnName:function (str){
            return /^[\u4E00-\u9FA5]{2,4}$/.test(str)
        },
    }


    window.onresize=function (){
        document.title=document.body.offsetWidth
    }