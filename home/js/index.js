
$(function(){
    $(document).scrollTop(0)
    var cw=document.documentElement.clientWidth;
    var flag=true
    var flag2=true;
    loadAnimate()
    // if($(document).scrollTop()>500){
    //     if(flag){
    //         alert(1)
    //         flag=false
    //     }
    // }
    second()
    third()
    fifth()

    var kaiguan=true
    $("#down_menu").click(function(){
        if (kaiguan){
            $(".gang1").css({transform:"rotate(45deg) translatex(13px) " });
            $(".gang2").css({transform:"rotate(-45deg) translatex(13px)" });
            $("#menu2").slideDown().css("background","rgba(0,0,0,.8)");
            kaiguan=false
        }else{
            $(".gang1").css({transform:"" });
            $(".gang2").css({transform:"" });
            $("#menu2").slideUp();
            kaiguan=true
        }
    });
    $("#menu2 li a").click(function () {
        $("#menu2 li a").css('color','#fff')
        $(this).css('color','#ffff00')
    })
    $(window).resize(function() {
        if ($(document).width()>= 800) {
            $("#menu2").css("display","none")
            $(".gang1").css({transform:"" });
            $(".gang2").css({transform:"" });
            $("#menu2").slideUp();
            kaiguan=true
        }
    })
//切换效果
 $('#nav #menu li ').click(function () {
        var index=$(this).index()
        var top=$('.section')[index].offsetTop
        $(document).scrollTop(top)
        $('#nav #menu li span').css({background:'',color:'#fff'}).eq(index).css({background:'#FFFF00',color:'#000'})
    })
    if($('#nav #menu2')){
        $('#nav #menu2 li').click(function () {
            var index=$(this).index()
            var top=$('.section')[index].offsetTop
            $(document).scrollTop(top)
            $('#nav #menu2 li span').css({background:'',color:'#fff'}).eq(index).css({color:'#FFFF00'})
        })
    }

    var sec=$('.section')
    document.onscroll=function(){
        var tops=document.documentElement.scrollTop||document.body.scrollTop;
        top=tops
        for(var i=0;i<sec.length;i++){
            if(tops>=sec[i].offsetTop&&tops<sec[i+1].offsetTop){
                if($('#menu2')){
                    $('#nav #menu2 li span').css({background:'',color:'#fff'}).eq(i).css({color:'#FFFF00'})
                }
                $('#nav #menu li span').css({background:'',color:'#fff'}).eq(i).css({background:'#FFFF00',color:'#000'})
            }
        }

    }





    function welcome(){
        $(".jinru").css({opacity:1})
        $(".range").animate({width:"100%"},2000,function(){
            $(".huanying").animate({opacity:0},function(){
                $(".huanying").css({display:"none"})
            })
        })
        setInterval(function(){
            var baifenbi=Math.round(parseInt($(".range").css("width"))/5)+"%"
            $(".baifen").html(baifenbi)
        },60)
    }
    welcome()



// 方位判断函数
    function getDicration(e,obj){
        var x=e.offsetX
        var y=e.offsetY
        var w=$(obj).width()
        var h=$(obj).height()
        var b=0
        if(x>y){
            if(y>h-(x*(h/w))){
                b=1 /*右边*/
            }
            else{
                b=2 /*上面*/
            }
        }else if(x<=y){
            if(y>h-(x*(h/w))){
                b=3 /*下面*/
            }
            else{
                b=4 /*左边*/
            }
        }
        return b
    }
// 作品上的信息的显示
    function workwordsshow(m){  /*第一件事*/
        // $(".lineup").eq(m).addClass("active")
        $(".workwordup:eq("+m+") .line").addClass("active")
        $(".workworddown").eq(m).addClass("active")
        $(".linkbox").eq(m).addClass("move")
    }

    function workwordhide(m){ /*第一件事*/
        // $(".lineup").removeClass("active")
        // $(".line").removeClass("active")
        $(".workworddown").removeClass("active")
        $(".linkbox").removeClass("move")
    }
    // 作品的鼠标及进入方位
    $(".hovermask").hover(function(e){
        $(".workmask").stop(false,true)
        var index=$(this).index(".hovermask")
        var m=getDicration(e,this)
        if(m==1){
            $(".workmask").eq(index).css({"right":"-100%","top":"0","bottom":"0","left":"auto","display":"block"}).animate({"right":"0"},1000,function(){workwordsshow(index)})
        }else if(m==2){
            $(".workmask").eq(index).css({"right":"0","top":"-100%","bottom":"auto","left":"0","display":"block"}).animate({"top":"0"},1000,function(){workwordsshow(index)})
        }else if(m==3){
            $(".workmask").eq(index).css({"right":"0","top":"auto","bottom":"-100%","left":"0","display":"block"}).animate({"bottom":"0"},1000,function(){workwordsshow(index)})
        }else if(m==4){
            $(".workmask").eq(index).css({"right":"auto","top":"0","bottom":"0","left":"-100%","display":"block"}).animate({"left":"0"},1000,function(){workwordsshow(index)})
        }

    },function(e){
        $(".workmask").stop(true,true)
        var index=$(this).index(".hovermask")
        var m=getDicration(e,this)
        workwordhide(index)
        setTimeout(function(){
            if(m==1){
                $(".workmask").eq(index).animate({"left":"100%"},1000)
            }else if(m==2){
                $(".workmask").eq(index).animate({"top":"-100%"},1000)
            }else if(m==3){
                $(".workmask").eq(index).animate({"top":"100%"},1000)
            }else if(m==4){
                $(".workmask").eq(index).animate({"left":"-100%"},1000)
            }
        },10)
    })
// icon变形
    $(".linkbox .iconfont").hover(function(){
        $(this).addClass("active")
    },function(){
        $(this).removeClass("active")
    })
// 检查重复
    function checkrepeat(obj,arr){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==obj){
                return false
            }
        }
        return true
    }
    function del(colornow,a,b){
        for(var i=0;i<colornow.length;i++){
            if(colornow[i]==a){
                colornow.splice(i,1)
                colornow.push(b)
                return
            }
        }
    }

})
