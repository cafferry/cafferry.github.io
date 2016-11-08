$(function () {
    // $(".fullpage").on("click",function () {
    //     alert(1)
    // })
    // var num=0
    // touch.on(".fullpage","dragend",function (e) {
    //     num++
    //    
    // })

    //**********************************arrow动效**********************************
    var clientH=document.documentElement.clientHeight
    var num=0
    $(".arrow").on("click",function () {
        num++
        $(".page").eq(0).css("marginTop",-num*clientH+"px")
        $(".btn").css("background","#fff").eq(num).css("background","#000")
        $(".page").each(function (index,obj) {
            if(index==num){
                $(obj).find(".text2").css({"transform":"translateX(50px)"}).css("opacity", 1)
                $(obj).find(".imgs").css({"transform":"translateX(-50px)"}).css("opacity", 1)
            }else{
                $(obj).find(".text2").css({"transform":"translateX(0)"}).css("opacity", 0)
                $(obj).find(".imgs").css({"transform":"translateX(0)"}).css("opacity", 0)
            }
        })
    })
    //***************************************************************************

    //**********************************btn动效***********************************
    $(".btn").on("click",function () {
        var index = $(this).index()
        num=index+1
        $(".page").eq(0).css("marginTop",-index*clientH+"px")
        $(".btn").css("background","#fff").eq(index).css("background","#000")
        $(".page").each(function (index,obj) {
            if(index==num-1){
                $(obj).find(".text2").css({"transform":"translateX(50px)"}).css("opacity", 1)
                $(obj).find(".imgs").css({"transform":"translateX(-50px)"}).css("opacity", 1)
            }else{
                $(obj).find(".text2").css({"transform":"translateX(0)"}).css("opacity", 0)
                $(obj).find(".imgs").css({"transform":"translateX(0)"}).css("opacity", 0)
            }
        })
    })

//***************************************************************************

//**********************************keydown***********************************
    $(window).keydown(function(e){
        console.log(e.keyCode)
        if(num==0){
            num=0
        }else{
            if(e.keyCode==38){
                num--
                $(".page").eq(0).css("marginTop",-num*clientH+"px")
            }
        }
        if(num==3){}else{
            if(e.keyCode==40){
                num++
                $(".page").eq(0).css("marginTop",-num*clientH+"px")
            }
        }
        $(".page").each(function (index,obj) {
            if(index==num){
                $(obj).find(".text2").css({"transform":"translateX(50px)"}).css("opacity", 1)
                $(obj).find(".imgs").css({"transform":"translateX(-50px)"}).css("opacity", 1)
            }else{
                $(obj).find(".text2").css({"transform":"translateX(0)"}).css("opacity", 0)
                $(obj).find(".imgs").css({"transform":"translateX(0)"}).css("opacity", 0)
            }
        })
        $(".btn").css("background","#fff").eq(num).css("background","#000")
    });



    //***************************************************************************

    //**********************************滑轮动效***********************************
    // jquery 兼容的滚轮事件
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

        if (delta > 0) {
            // 向上滚
            if(num==0){
                num=0
            }else{
                console.log("wheelup");
                num--
                $(".page").eq(0).css("marginTop",-num*clientH+"px")

            }
        } else if (delta < 0) {
            // 向下滚
            if(num==3){}else{
                console.log("wheeldown");
                num++
                $(".page").eq(0).css("marginTop",-num*clientH+"px")

            }
        }
        $(".page").each(function (index,obj) {
            if(index==num){
                $(obj).find(".text2").css({"transform":"translateX(50px)"}).css("opacity", 1)
                $(obj).find(".imgs").css({"transform":"translateX(-50px)"}).css("opacity", 1)
            }else{
                $(obj).find(".text2").css({"transform":"translateX(0)"}).css("opacity", 0)
                $(obj).find(".imgs").css({"transform":"translateX(0)"}).css("opacity", 0)
            }
        })
        $(".btn").css("background","#fff").eq(num).css("background","#000")
    });
    //***************************************************************************

    //**********************************onresize***********************************
    $(window).on("resize",function () {
        clientH=document.documentElement.clientHeight
        $(".page").eq(0).css("marginTop",-num*clientH+"px")
    })
})
//***************************************************************************

//**********************************滑动***********************************
//  touch.on(box,"swipestart",function (e) {
//         box.style.transition="none"
//         leftInit=parseInt(box.style.marginLeft)?parseInt(box.style.marginLeft):0
//     })
//     touch.on(box,"swipe",function (e) {
//         box.style.marginLeft=e.x+leftInit+"px"
//     })
//     touch.on(document.body,"swipeend",function (e) {
//         if(e.direction=="left"){
//             console.log("left")

//             if(Math.abs(e.x)>100){
//                 num++
//                 if(num>list.length-1){
//                     num=list.length-1
//                     console.log(num)
//                     box.style.transition="margin 1s ease"
//                     box.style.marginLeft=-num*800+"px"
//                 }else{
//                     box.style.transition="margin 1s ease"
//                     box.style.marginLeft=-num*800+"px"
//                 }
//             }
//         }else if(e.direction=="right"){
//             console.log("right")
//             if(Math.abs(e.x)>100){
//                 num--
//                 if(num<0){
//                     num=0
//                     console.log(num)
//                     box.style.transition="margin 1s ease"
//                     box.style.marginLeft=-num*800+"px"
//                 }else{
//                     box.style.transition="margin 1s ease"
//                     box.style.marginLeft=-num*800+"px"
//                 }
//             }
//         }
// //

//     })
