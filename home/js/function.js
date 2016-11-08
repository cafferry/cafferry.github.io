function loadAnimate() {
    var oInit=document.getElementById('init_animate');
    var oCase=document.getElementById('case');
    var aLi=oCase.children;
    var oTil=document.getElementById('title');
    var oDax=document.getElementById('dax');
    var dowebok=document.getElementById('dowebok');
    var nav=document.getElementById('nav');


    aLi[0].setAttribute('sd',3);
    aLi[1].setAttribute('sd',4);
    aLi[2].setAttribute('sd',5);
    aLi[3].setAttribute('sd',4);
    aLi[4].setAttribute('sd',3);

    for(var i=0;i<aLi.length;i++){
        (function (i) {
            //幕布动画
            move(aLi[i],{'height':697,'opacity':1},{time:697/aLi[i].getAttribute('sd')*8,fn:function () {
                //最后一条幕布完成之后
                if(i>=aLi.length-1){
                    //文字大象出来
                    move(oTil,{'opacity':1,'top':80})
                    move(oDax,{'opacity':1,'top':160},{'time':1000,fn:function () {
                        // 大象出来两秒之后 文字和大象消失 
                        setTimeout(function(){
                            move(oTil,{'top':80,'opacity':0})
                            move(oDax,{'top':130,'opacity':0},{time:1000,fn:function(){
                                dowebok.style.opacity='1';
                                nav.style.opacity='1';
                                // 大象消失之后 li消失
                                for (var j = 0; j < aLi.length; j++) {
                                    (function(j){

                                        move(aLi[j],{'top':697},{time:697/aLi[j].getAttribute('sd')*6,fn:function(){
                                            // li消失到最后一个后 移除全部节点
                                            if(j==aLi.length-1){
                                                document.body.removeChild(oInit);
                                            }
                                        }});
                                    })(j)
                                }
                            }})

                        }, 2000);
                    }})
                }
            }})
        })(i)
    }
}



// 第二屏
function second(){

    // 外圆
    var oOutside=document.getElementById('outside');
    var num=30;
    var R1=oOutside.offsetWidth/2;
    for (var i = 0; i < num; i++) {
        var oSpan=document.createElement('span');
        oOutside.appendChild(oSpan);
    }
    var aSpan=oOutside.children;
    for (var i = 0; i < aSpan.length; i++) {
        var a=360/aSpan.length*i;
        roundMove(aSpan[i],a,R1)
    }

    // 旋转
    var deg=0;
    setInterval(function(){
        deg++;
        oOutside.style.transform='rotateZ('+deg+'deg)';
    }, 80)


    // 内圆
    var oRound=document.getElementById('round');
    var R2=oRound.offsetWidth/2;
    var aSpans=oRound.children;
    for (var i = 0; i < aSpans.length; i++) {
        var a=360/aSpans.length*i;
        roundMove(aSpans[i],a,R2)
    }
    //
    // // 最内层的线
    var oInside=document.getElementById('inside');
    var R3=oInside.offsetWidth/2;
    for (var i = 0; i <120; i++) {
        var oSpan=document.createElement('span');
        oSpan.style.transform='rotate('+i*3+'deg)';
        oInside.appendChild(oSpan);
    }

    var aLine=oInside.children;
    for (var i = 0; i < aLine.length; i++) {
        var a=360/aLine.length*i;
        roundMove(aLine[i],a,R3);
    }

    var c=0;
    setInterval(function(){
        var a=c+1;
        var b=c+2;
        var d=c+3;
        var e=c+4;

        if(c==116){
            e = 0;
        }
        if(c==117){
            d=0;
            e=1;
        }
        if(c==118){
            b=0;
            d=1;
            e=2;
        }
        if(c==119){
            a=0;
            b=1;
            d=2;
            e=3;
        }
        if(c==120){
            c=0;
            a=1;
            b=2;
            d=3;
            e=4;
        }

        aLine[c].style.opacity='0.5';
        aLine[a].style.opacity='0.8';
        aLine[b].style.opacity='1';
        aLine[d].style.opacity='0.8';
        aLine[e].style.opacity='0.5';
        c++;

    }, 30);


    // 算坐标
    function roundMove(obj,iTarget,R){
        // 开始角度
        var start=obj.a||0;
        var dis=iTarget-start;
        var time=700;
        var count=Math.round(time/30);

        var n=0;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            n++;

            var cur=start+dis/count*n;
            obj.a=cur;
            var x=R+Math.sin(cur*Math.PI/180)*R;
            var y=R-Math.cos(cur*Math.PI/180)*R;

            obj.style.left=x+'px';
            obj.style.top=y+'px';

            if(n==count){
                clearInterval(obj.timer);
            }
        }, 30)
    }
}
/* second end*/

// 第三屏
function third(){
    var oBox=document.getElementById('box');
    var oUl=document.getElementById('list1_ul');
    var aLi=oUl.getElementsByTagName('li');
    var oHdt=document.getElementById('hdt');
    var oHk=document.getElementById('hk');

    oUl.innerHTML+=oUl.innerHTML;
    var ulW=aLi[0].offsetWidth*aLi.length;
    oUl.style.width=ulW+'px';

    var timer=null;
    var step=-2;// 负数向左移动 整数向右移动

    timer=setInterval(moveList, 10);
    oBox.onmouseover=function(){
        oHk.style.opacity='1';
        dragMove()
        clearInterval(timer);
    };
    oBox.onmouseout=function(){
        oHk.style.opacity='0';
        timer=setInterval(moveList, 10);
    };

    function moveList(){
        if(oUl.offsetLeft< -oUl.offsetWidth/2){
            oUl.style.left='0px';
        }
        if(oUl.offsetLeft> 0){
            oUl.style.left=-oUl.offsetWidth/2+'px';
        }

        oUl.style.left=oUl.offsetLeft+step+'px';

        var l=oUl.offsetLeft;

        // 滚动条
        if(l<oBox.offsetWidth-oUl.offsetWidth/2){
            l=oUl.offsetLeft-(oBox.offsetWidth-oUl.offsetWidth/2);
        }
        var scale=l/(oUl.offsetWidth/2-oBox.offsetWidth);
        oHk.style.left=-scale*(oHdt.offsetWidth-oHk.offsetWidth)+'px';


    };

    // 自定义滚动条
    function dragMove(){
        oHk.onmousedown=function(ev){
            var oEvt=ev||event;
            var disX=oEvt.clientX-oHk.offsetLeft;
            var disY=oEvt.clientY;

            var l=oUl.offsetLeft;

            document.onmousemove=function(ev){
                var oEvt=ev||event;
                var l=oEvt.clientX-disX;

                move1(l);

            }
            document.onmouseup=function(){
                document.onmousemove=document.onmouseup=null;
                oHk.releaseCapture&&oHk.releaseCapture();
            }
            oHk.setCapture&&oHk.setCapture();
            return false;
        }

        function move1(l){
            if(l<0){l=0}
            if(l>oHdt.offsetWidth-oHk.offsetWidth){l=oHdt.offsetWidth-oHk.offsetWidth}

            oHk.style.left=l+'px';

            var scale=oHk.offsetLeft/(oHdt.offsetWidth-oHk.offsetWidth);
            oUl.style.left=-scale*(oUl.offsetWidth/2-oBox.offsetWidth)+'px';
        }
    }
    /* dragMove end*/

}
/* third end*/

function fourth(){
    var oWorkUl2=document.getElementById('work2_ul');
    var aLi=oWorkUl2.children;
    for (var i = 0; i < aLi.length; i++) {
        penetrate(aLi[i])
    }

    //进入函数
    function penetrate(obj){
        obj.onmouseover=function(ev){
            var oEvt=ev||event;
            // oEvt = oEvt.target || oEvt.srcElement;
            var oFrom=oEvt.fromElement||oEvt.relatedTarget;  //解决冒泡问题
            var oMask=obj.children[0].children[1];

            if(obj.contains(oFrom)){return}; //解决冒泡问题
            var n=getDiretion(obj,oEvt);
            switch(n){
                case 0://左
                    oMask.style.left='-285px';
                    oMask.style.top='0';
                    break;
                case 1://下
                    oMask.style.left='0';
                    oMask.style.top='180px';
                    break;
                case 2://右
                    oMask.style.left='285px';
                    oMask.style.top='0';
                    break;
                case 3://上
                    oMask.style.left='0';
                    oMask.style.top='-180px';
                    break;
            }

            move(oMask,{'left':0,'top':0});

        }

        obj.onmouseout=function(ev){

            var oEvt=ev||event;
            var oTo=oEvt.toElement||oEvt.relatedTarget;
            var oMask=this.children[0].children[1];
            if(obj.contains(oTo)){return};

            var n=getDiretion(obj,oEvt);
            // alert(n)
            switch(n){
                case 0:
                    move(oMask,{'left':-285,'top':0});
                    break;
                case 1:
                    move(oMask,{'left':0,'top':180});
                    break;
                case 2:
                    move(oMask,{'left':285,'top':0});
                    break;
                case 3:
                    move(oMask,{'left':0,'top':-180});
                    break;
            }
        }
    }

    function getDiretion(obj1,oEvt){
        var x=oEvt.clientX-obj1.offsetLeft-obj1.offsetWidth/2;
        var y=obj1.offsetTop+obj1.offsetHeight/2-oEvt.clientY;
        // alert(x+"__"+y+"__"+Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4)

        return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4
    }
}
/* fourth end*/

function  fifth(){
    var oTxt=document.getElementById('txts');
    var str=' 学习是一个充实愉悦的过程。前端更贴近用户，这种体验非常美妙。热爱前端，也热爱一切美好的事物。行路有良友，便是捷径。带上我吧，一起看到更大的世界';
    var arr=[];
    for (var i = 0; i <str.length; i++) {
        var oSpan=document.createElement('span');
        oSpan.innerHTML=str.charAt(i);
        oTxt.appendChild(oSpan);
        arr.push(oSpan);
    }
    var timer=null;
    var num=0;
    timer=setInterval(function(){
        move(arr[num],{'opacity':1});
        num++;
        if(num==arr.length){
            clearInterval(timer);
        }
    },100);

}/* fifth end*/