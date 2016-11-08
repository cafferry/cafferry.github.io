window.onload=function () {


//层级轮播实现
var banner=$(".banner")[0]
var bannerbox=$(".bannerbox")[0]
var imgs=$(".img")
var btns=$(".btn")

	//左右轮播实现
var now=0;
var colors=["#33c8ff","#e9e7ea","#0b9d6e","#8014b5","#02bfff"]

function move(){
	now++;
	if(now==imgs.length){
		now=0
	}
	for (var i = 0; i <imgs.length; i++) {
		imgs[i].style.zIndex=1;
		btns[i].style.background="#999"
	};
	imgs[now].style.zIndex=2;
	btns[now].style.background="#ccc"
	bannerbox.style.background=colors[now]
}
var t=setInterval(move,2000)

	//底部轮播实现

for (var i = 0; i < btns.length; i++) {
	btns[i].index=i
	btns[i].onmouseover=function(){
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.zIndex=1;
			btns[i].style.background="#3290b2"
		};		
		this.style.background="#91e2ff"
		imgs[this.index].style.zIndex=2;
		now=this.index;
	}
};

	//悬浮停止实现

banner.onmouseover=function(){
	clearInterval(t)
}
banner.onmouseout=function(){
	t=setInterval(move,2000)		//防止重复触发
}
	//点击透明度实现
var alertright=$(".alert-right")[0]
alertright.onmouseover=function(){
	animate(this,{opacity:1})
}
alertright.onmouseout=function(){
	animate(this,{opacity:0.7})
}
var alertimg1=$(".alert-img1")[0]
var alertimgs=$("img",alertimg1)
for (var i = 0; i < alertimgs.length; i++) {
	alertimgs[i].onmouseover=function(){
		animate(this,{opacity:1})
	}
	alertimgs[i].onmouseout=function(){
		animate(this,{opacity:0.8})
	}
};


	//下部导航实现
var redbox=$(".redcatbox")
var redcat=$(".redcat")
for (var i = 0; i < redbox.length; i++) {
	redbox[i].index=i;
	redbox[i].onmouseover=function(){
		for (var i = 0; i < redcat.length; i++) {
			animate(redcat[i],{top:0},100)
		};
		animate(redcat[this.index],{top:-13},300)
	}
	redbox[i].onmouseout=function(){
		for (var i = 0; i < redcat.length; i++) {
			animate(redcat[i],{top:0},100)
		};
	}
};

	//潮流前沿图片方法

var circles=$(".circles")
var cirimgs=$(".cirimg")
for (var i = 0; i < circles.length; i++) {
	circles[i].index=i;
	circles[i].onmouseover=function(){
		animate(cirimgs[this.index],{width:145,height:145},300)
	}
	circles[i].onmouseout=function(){
		animate(cirimgs[this.index],{width:125,height:125},300)
	}
};

	//图片移动

var moveimgs=$(".moveimg")
for (var i = 0; i < moveimgs.length; i++) {
	moveimgs[i].onmouseover=function(){
		animate(this,{right:5},200)
	}
	moveimgs[i].onmouseout=function(){
		animate(this,{right:-2},200)
	}
};

	//图片透明度
var opctimgs=$(".opctimg")
for (var i = 0; i < opctimgs.length; i++) {
	opctimgs[i].onmouseover=function(){
		animate(this,{opacity:0.7},200)
	}
	opctimgs[i].onmouseout=function(){
		animate(this,{opacity:1},200)
	}
};


	//楼层跳转实现
var floorbtnbox=$('.floorbox')[0]
var floorbtn=$('.floor')
var floor=$(".qzsg")
var fcolors=["#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#ea5f8d","black","black"]
var sh=document.body.scrollTop?document.body:document.documentElement;
var fixed7=$(".fixed-7")[0]

	//到达指定楼层后相应按钮变色
var fnum=0
var kg=true;
document.onscroll=function(){
	if(kg){
		kg=false
		var tops=document.documentElement.scrollTop||document.body.scrollTop;
		for (var i = 0; i < floor.length; i++) {
				var bh=floor[i].offsetTop-50;
				var flags=rmppbox.offsetTop;
		
			if(tops>=bh){
				for (var j = 0; j < floor.length; j++) {
					floorbtn[j].style.background="#626262"
				};
				floorbtn[i].style.background=fcolors[i]
				fnum=i	
			}
			if (tops>flags) {
				animate(floorbtnbox,{width:36,height:370},300,function(){
					kg=true;
				})
				animate(dfixedsbox,{top:0})
				fixed7.style.display="block"		
			}else{
				animate(floorbtnbox,{width:0,height:0},300,function(){
					kg=true;
				})
				animate(dfixedsbox,{top:-50})
				fixed7.style.display="none"	
			}
		}
	}
}

	//点击实现楼层跳转
for (var i = 0; i < floorbtn.length; i++) {
	floorbtn[i].index=i;
	floorbtn[i].onclick=function(){
		var bh=floor[this.index].offsetTop-50;
		animate(sh,{scrollTop:bh})			//醉人
		for (var j = 0; j < floorbtn.length; j++) {		//注意用i时的冲突
			floorbtn[j].style.background="#626262"
		};
		floorbtn[this.index].style.background=fcolors[this.index]
		fnum=thid.index		
	}

	floorbtn[i].onmouseover=function(){
		for (var j = 0; j < floorbtn.length; j++) {	
			if (j!=fnum) {		
				floorbtn[j].style.background="#626262"
			};
		};
		floorbtn[this.index].style.background=fcolors[this.index]	
	}

	floorbtn[i].onmouseout=function(){
		for (var j = 0; j < floorbtn.length; j++) {	
			if (j!=fnum) {	
				floorbtn[j].style.background="#626262"
			}
		}
	}	
};

var rmppbox=$(".rmppbox")[0]
var dfixedsbox=$(".dfixedsbox")[0]

//获得失去焦点事件

var searchtext=$("#search-text")
searchtext.onfoucs=function(){
	this.style.color="#ccc"
}
searchtext.onblur=function(){
	this.style.color="black"
}

//固定定位滑动事件
var huadong=$(".huadong")
var fixed8=$(".fixed-8")
for (var i = 0; i < fixed8.length; i++) {
	fixed8[i].index=i
	fixed8[i].onmouseover=function(){
		for (var i = 0; i < huadong.length; i++) {
			huadong[i].style.opacity=0
			animate(huadong[i],{right:55},200)
		};
		huadong[this.index].style.opacity=1
		animate(huadong[this.index],{right:25},200)
	}
	fixed8[i].onmouseout=function(){
		huadong[this.index].style.opacity=0
	}
};

//二维码点击出现
var huadong1=$(".huadong1")[0]
var fixed10=$(".fixed-10")[0]

fixed10.onmouseover=function(){
		huadong1.style.display="block"
	}
fixed10.onmouseout=function(){
		huadong1.style.display="none"
	}


//遮罩动效

var zhezao=$(".zhezao")
var rmppmiddle=$(".rmpp-middle")[0]
var liss=$("li",rmppmiddle)
for (var i = 0; i < liss.length; i++) {
	liss[i].index=i
	liss[i].onmouseover=function(){
		zhezao[this.index].style.display="block"
		animate(zhezao[this.index],{opacity:0.8})
	}
	liss[i].onmouseout=function(){
		for (var i = 0; i < zhezao.length; i++) {
			zhezao[i].style.display="none"
			zhezao[i].style.opacity=0
		};
		
	}
};


//回到顶层
var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
var totop=$(".totop")[0]
totop.onclick=function(){
	animate(obj,{scrollTop:0},1000,function(){
		totop.style.display="none"
	})
}
}