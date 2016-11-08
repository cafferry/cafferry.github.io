	
	$(function(){
		var ship=document.querySelector('.ship')
		var page2left=document.querySelector('.page2left')
		var page2right=document.querySelector('.page2right')
		var page3word=document.querySelector('.page3word')
		var page3tree=document.querySelector('.page3tree')
		var page4words=document.querySelector('.page4words')
		var zhuan2=document.querySelector('.zhuan2')
		var zhuan3=document.querySelector('.zhuan3')
		var zhuan4=document.querySelector('.zhuan4')
		var tree=document.querySelector('.tree')
		$('#dowebok').fullpage({
			navigation:true,
			navigationTooltips:["登陆百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"],
			afterLoad(afterLoad,index){
				ship.className="ship"
				page2left.className="page2left"
				page2right.className="page2right"
				page3word.className="page3word"
				page3tree.className="page3tree"
				page4words.className="page4words"
				zhuan2.className="zhuan2"
				zhuan3.className="zhuan3"
				zhuan4.className="zhuan4"
				tree.className="tree"
				if(index==1){
					ship.className+=" active"
				}else if(index==2){
					page2left.className+=" active"
					page2right.className+=" active"
					zhuan2.className+=" active"
				}else if(index==3){
					page3word.className+=" active"
					page3tree.className+=" active"
					zhuan3.className+=" active"
				}else if(index==4){
					page4words.className+=" active"
					tree.className+=" active"
					zhuan4.className+=" active"
				}
			}
		})
	})
		var plane=document.querySelector('.plane')
		setInterval(function(){
			setTimeout(function(){
				plane.className="plane active"
			},0)
			setTimeout(function(){
				plane.className="plane"
			},2000)
		},2500)
	

