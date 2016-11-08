// 时尚名店小轮播图实现

function mini(ssmdbox){
	var leftbtn=$(".left",ssmdbox)[0]
	var rightbtn=$(".right",ssmdbox)[0]
	var circleleft=$(".circle-left",ssmdbox)[0]
	var circleright=$(".circle-right",ssmdbox)[0]
	var leftimg=$(".ssmd-middle-left",ssmdbox)[0]
	var rightimg=$(".ssmd-middle-right",ssmdbox)[0]
	ssmdbox.onmouseover=function(){
		animate(leftbtn,{left:0})
		animate(rightbtn,{right:0})
	}
	ssmdbox.onmouseout=function(){
		animate(leftbtn,{left:-30})
		animate(rightbtn,{right:-30})	
	}
	circleright.onclick=rightbtn.onclick=function () {
		animate(leftimg,{left:-390})
		animate(rightimg,{left:0})
		circleleft.style.background="#6E6E6E"
		circleright.style.background="#E10D53"
		rightbtn.style.backgroundPosition="-30px 0"
	}
	circleleft.onclick=leftbtn.onclick=function () {
		animate(leftimg,{left:0})
		animate(rightimg,{left:390})
		circleleft.style.background="#E10D53"
		circleright.style.background="#6E6E6E"
		rightbtn.style.backgroundPosition=""
	}
}

var ssmdbox=$(".ssmd-middle")
mini(ssmdbox[0])
mini(ssmdbox[3])
mini(ssmdbox[4])
mini(ssmdbox[5])
mini(ssmdbox[6])
mini(ssmdbox[7])

//边框出现
var ssmdright=$(".ssmdright")
function borde(ssmdright){
	var lis=$("li",ssmdright)
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i
		lis[i].onmouseover=function(){
			var borders=$(".borders",this)
			animate(borders[0],{width:271})
			animate(borders[1],{height:182})
			animate(borders[2],{width:271})
			animate(borders[3],{height:182})
		}
		lis[i].onmouseout=function(){
			var borders=$(".borders",this)
			animate(borders[0],{width:0})
			animate(borders[1],{height:0})
			animate(borders[2],{width:0})
			animate(borders[3],{height:0})
		}
	};
}

borde(ssmdright[0])
borde(ssmdright[1])
borde(ssmdright[2])
borde(ssmdright[3])
borde(ssmdright[4])
borde(ssmdright[5])
borde(ssmdright[6])
borde(ssmdright[7])
borde(ssmdright[8])
borde(ssmdright[9])



// 轮播图实现
var bannerbox=$(".banners")[0]
var lefts=$(".banner-left")[0]
var rights=$(".banner-right")[0]
var banners=$(".banner")
var bannerbtn=$(".banner-btn")[0]
var btns=$("li",bannerbtn)
var backs=$(".backs")
//移入轮播图,左右按钮出现

bannerbox.onmouseover=function(){
	lefts.style.display="block"
	rights.style.display="block"
}
bannerbox.onmouseout=function(){
	lefts.style.display="none"
	rights.style.display="none"
}

//点击相应按钮,轮播图出现
for (var i = 0; i < btns.length; i++) {
	btns[i].index=i;
	btns[i].onmouseover=function(){
		for (var i = 0; i < btns.length; i++) {
			btns[i].style.background="#211616"
			banners[i].style.zIndex=1;
			backs[i].style.zIndex=1;
		};
		banners[this.index].style.zIndex=2;
		backs[this.index].style.zIndex=2;
		this.style.background="#e5004f";
		num=this.index	
	}
};	//用last记录上一个操作的下标也可以

//点击左右按钮实现
var now=0
rights.onclick=function(){
	now++;
	if (now==banners.length) {
		now=0;
	};
	for (var i = 0; i < banners.length; i++) {
		btns[i].style.background="#211616"
		banners[i].style.zIndex=1;
		backs[i].style.zIndex=1;
	};
	btns[now].style.background="#e5004f";
	banners[now].style.zIndex=2;
	backs[now].style.zIndex=2;	
}

lefts.onclick=function(){
	now--;
	if (now<0) {
		now=banners.length-1;
	};
	for (var i = 0; i < banners.length; i++) {
		btns[i].style.background="#211616"
		banners[i].style.zIndex=1;
		backs[i].style.zIndex=1;
	};
	btns[now].style.background="#e5004f";
	banners[now].style.zIndex=2;
	backs[now].style.zIndex=2;	
}


// 楼层跳转实现
var floorbox=$(".floorbox")[0]
var floorbtns=$("li",floorbox)
var floors=$(".ssmd")
var divs=$("div",floorbox)
var rmtjbox=$(".rmtjbox")[0]

// 滚动到相应位置实现相应按钮变色
var ofloor;	
document.onscroll=function(){
	var tops=document.documentElement.scrollTop||document.body.scrollTop
	
	if (tops>=666) {
		floorbox.style.display="block"
	}else{
		floorbox.style.display="none"
	}

	for (var i = 0; i < floors.length; i++) {
		var ft=floors[i].offsetTop;
		if (tops>=ft) {
			for (var j = 0; j <floors.length; j++) {
				divs[j].style.display="none"
			};
			divs[i].style.display="block"
			ofloor=i;
		};	
	};

}

var obj=document.body.scrollTop?document.body:document.documentElement;
for (var i = 0; i < floorbtns.length; i++) {
	floorbtns[i].index=i;
	floorbtns[i].onclick=function(){
		var ft=floors[this.index].offsetTop;
		animate(obj,{scrollTop:ft})
		divs[this.index].style.display="block"
	}
	floorbtns[i].onmouseover=function(){
		divs[this.index].style.display="block"
	}
	floorbtns[i].onmouseout=function(){
		for (var j = 0; j < floors.length; j++) {
			if (j!=ofloor) {
				divs[j].style.display="none"
			};
		};		
	}
};

//图片透明度变化
var rmtjbox=$(".rmtj-content")[0]
var rmtjimgs=$("img",rmtjbox)
var zgtkbox=$(".zgtk-right-content")[0]
var zgtkimgs=$("img",zgtkbox)

for (var i = 0; i < zgtkimgs.length; i++) {
	zgtkimgs[i].onmouseover=function(){
		animate(this,{opacity:0.6},80)
	}
	zgtkimgs[i].onmouseout=function(){
		animate(this,{opacity:1},80)
	}
};
for (var i = 0; i < rmtjimgs.length; i++) {
	rmtjimgs[i].onmouseover=function(){
		animate(this,{opacity:0.7},80)
	}
	rmtjimgs[i].onmouseout=function(){
		animate(this,{opacity:1},80)
	}
};

// 图片移动变化
var twonavimg=$("#twonav-img")
twonavimg.onmouseover=function(){
	animate(twonavimg,{right:10},150)
}
twonavimg.onmouseout=function(){
	animate(twonavimg,{right:0},150)
}

// 选项卡

var rmtjtitle=$(".rmtj-title")[0]
var rmtjlis=$("li",rmtjtitle)
var rmtjcontent=$(".rmtj-content")

for (var i = 0; i < rmtjlis.length; i++) {
	rmtjlis[i].index=i;
	rmtjlis[i].onmouseover=function(){
		for (var j = 0; j < rmtjcontent.length; j++) {
			rmtjcontent[j].style.display="none";
			rmtjlis[j].style.cssText="border-bottom: 5px solid #333333;"
		};
		rmtjcontent[this.index].style.display="block";
		rmtjlis[this.index].style.cssText="border-bottom: 5px solid #E5004F;"
	}
};

//选项卡边框
var rmtjcontent02=$(".rmtj-content02")
function newborde(ssmdright){
	var lis=$("li",ssmdright)
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i
		lis[i].onmouseover=function(){
			var borders=$(".newborders",this)
			animate(borders[0],{width:218})
			animate(borders[1],{height:258})
			animate(borders[2],{width:218})
			animate(borders[3],{height:258})
		}
		lis[i].onmouseout=function(){
			var borders=$(".newborders",this)
			animate(borders[0],{width:0})
			animate(borders[1],{height:0})
			animate(borders[2],{width:0})
			animate(borders[3],{height:0})
		}
	};
}
newborde(rmtjcontent02[0])
newborde(rmtjcontent02[1])

//小无缝轮播

function miniwufeng(wufengbox){
	var wufengleft=$(".wufengleft",wufengbox)[0]
	var wufengright=$(".wufengright",wufengbox)[0]
	var wufengson=$(".wufengson",wufengbox)[0]
	var speed=0;
	wufengleft.onclick=function(){		
		if (speed==480) {
			wufengson.style.left=0;
			speed=0;
		}
		speed+=160;
		animate(wufengson,{left:-speed})
	}
	wufengright.onclick=function(){		
		if (speed==-480) {	
			wufengson.style.left=0;
			speed=0;
		};
		speed-=160;
		animate(wufengson,{left:speed})
	}
}

var wufengbox=$(".wufengbox")
miniwufeng(wufengbox[0])
miniwufeng(wufengbox[1])
miniwufeng(wufengbox[2])
miniwufeng(wufengbox[3])
miniwufeng(wufengbox[4])
miniwufeng(wufengbox[5])
miniwufeng(wufengbox[6])
miniwufeng(wufengbox[7])
miniwufeng(wufengbox[8])


//专柜同款选项卡
var zgtkrighttitle=$(".zgtk-right-title")[0]
var zgtklis=$("li",zgtkrighttitle)
var zgtkuls0=$(".zgtk-right-content")[0]
var zgtkuls1=$(".zgtk-right-over")[0]

zgtklis[0].onmouseover=function(){
	this.style.borderColor="#E70050"
	zgtklis[1].style.borderColor="#333"
	zgtkuls1.style.display="none"
	zgtkuls0.style.display="block"
}
zgtklis[1].onmouseover=function(){
	this.style.borderColor="#E70050"
	zgtklis[0].style.borderColor="#333"
	zgtkuls0.style.display="none"
	zgtkuls1.style.display="block"
}

//专柜同款边框

function zgtkborde(ssmdright){
	var lis=$("li",ssmdright)
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i
		lis[i].onmouseover=function(){
			var borders=$(".borders",this)
			animate(borders[0],{width:196})
			animate(borders[1],{height:255})
			animate(borders[2],{width:196})
			animate(borders[3],{height:255})
		}
		lis[i].onmouseout=function(){
			var borders=$(".borders",this)
			animate(borders[0],{width:0})
			animate(borders[1],{height:0})
			animate(borders[2],{width:0})
			animate(borders[3],{height:0})
		}
	};
}
zgtkborde(zgtkuls1)


//返回顶部
var retops=$(".floor10")[0]
retops.onclick=function(){
	animate(obj,{scrollTop:0})
}

        document.onmousedown=function (e) {
            var ev=e||window.event;
            ev.preventDefault()
            document.onmousemove=function (e) {
                var ev=e||window.event;
                ev.preventDefault()
            }
        };