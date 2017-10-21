var n=0;
init();
//
function init(){
	moveToNext(0);
}
//根据i移到对应的礼物的位置
function moveToNext(i){
	//找到我们需要移动的对象
	var $target = $('div.target');
	//找到我们需要移动的地点(取膜)
	var offset = $('#'+(i%20)).offset();
	//让我们target移动到需要移动的地点
	$target.animate({top:offset.top-2,left:offset.left-2},50);
	n = i;
}
//点击开始抽奖按钮的时候调用这个逻辑
function startRun(){
	//生成一个随机数20之间的随机数
	var randomNumber = Math.random(10)*20;
	//加上50
	randomNumber = Math.ceil(randomNumber)+50;
	var m = n;
	//循环调用移动
	for(var i=m;i<randomNumber+m;i++){
		moveToNext(i);
	}
}