var n=0;
init();
//
function init(){
	moveToNext(0);
}
//����i�Ƶ���Ӧ�������λ��
function moveToNext(i){
	//�ҵ�������Ҫ�ƶ��Ķ���
	var $target = $('div.target');
	//�ҵ�������Ҫ�ƶ��ĵص�(ȡĤ)
	var offset = $('#'+(i%20)).offset();
	//������target�ƶ�����Ҫ�ƶ��ĵص�
	$target.animate({top:offset.top-2,left:offset.left-2},50);
	n = i;
}
//�����ʼ�齱��ť��ʱ���������߼�
function startRun(){
	//����һ�������20֮��������
	var randomNumber = Math.random(10)*20;
	//����50
	randomNumber = Math.ceil(randomNumber)+50;
	var m = n;
	//ѭ�������ƶ�
	for(var i=m;i<randomNumber+m;i++){
		moveToNext(i);
	}
}