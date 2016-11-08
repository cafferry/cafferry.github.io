$(function(){
var as=$('.banner-inner a');
var lis=$('.dian li');
var width=3000;
var t=setInterval(moveL,5000);
var num=0;
var next=0;
var kaiguan=true;
for(var i=0;i<as.length;i++){
    if(i==0){
        continue;
    }
    as.eq(i).offset({left:width});
    lis.eq(i).css({background:"black"});
}

function moveL(){
    next++;
    if(next>=4){
        next=0;
    }
    as.eq(next).offset({left:width});
    as.eq(num).animate({left:-width},function(){
        kaiguan=true;
    });
    as.eq(next).animate({left:0});
    num=next;
    for(var j=0;j<lis.length;j++){
        lis.eq(j).css({background:"black"});
    }
    lis.eq(num).css({background:"#fff"})
}
function moveR(){
    next--;
    if(next<0){
        next=3;
    }
    as.eq(next).offset({left:-width});
    as.eq(num).animate({left:width},function(){
        kaiguan=true;
    });
    as.eq(next).animate({left:0});
    num=next;
    for(var j=0;j<lis.length;j++){
        lis.eq(j).css({background:"black"});
    }
    lis.eq(num).css({background:"#fff"})

}
$('.center-right').on('click',function(){
    if(kaiguan){
        moveL();
        kaiguan=false;
    }else {
        return;
    }

})
$('.center-left').on('click',function(){
    if(kaiguan){
        moveR();
        kaiguan=false
    }else {
        return
    }
})
$('.banner').on("mouseover",function(){
    clearInterval(t);
    $('.center-left').css('display','block');
    $('.center-right').css('display','block')
})
$('.banner').on("mouseout",function(){
    t=setInterval(moveL,5000);
    $('.center-left').css('display','none');
    $('.center-right').css('display','none')
})
lis.on('click',function(){
    if(kaiguan){
        var nn=$(this).index();
        for(i=0;i<lis.length;i++){
            lis.eq(i).css({background:"black"});
            as.eq(i).css({left:width});
        }
        $(this).css({background:"#fff"});
        as.eq(nn).animate({left:0},function(){
            kaiguan=true;
        });
        kaiguan=false;
        next=nn;
        num=nn;
    }else {
        return;
    }
})


    // 导航下拉菜单
    var kaiguan=true
        $(".gang").click(function(e){
            if (kaiguan){
                $(".gang1").css({transform:"rotate(45deg) translatex(9px)" });
                $(".gang2").css({transform:"rotate(-45deg) translatex(9px)" });
                $(".cd").slideDown();
                $(".icon-s").fadeOut();
                $(".headerbox").css("background","#000");
                kaiguan=false
            }else{
                $(".gang1").css({transform:"" });
                $(".gang2").css({transform:"" });
                $(".cd").slideUp();
                $(".icon-s").fadeIn();
                $(".headerbox").css("background","#333");
                kaiguan=true
            }
        });

})

$(window).resize(function() {
    if ($(document).width()>= 735) {
        $(".cd").css("display","none")
        $(".gang1").css({transform:"" });
        $(".gang2").css({transform:"" });
        $(".cd").slideUp();
        $(".icon-s").fadeIn();
        $(".headerbox").css("background","#333");
    }
})

$(".li1>div").click(function(){
    $(this).siblings().toggle(500);
})