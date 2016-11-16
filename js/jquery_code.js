$(function(){
	var now_data = '';
	var flag = false;
	var qanum = 0;
	var wakaran = '';

	init();	//初期動作
	$(window).keyup(function(e){
		//キーが押されたら
		if(e.keyCode === 13 || e.keyCode === 39 || e.keyCode === 40){
			//回答があるかないかを判別
			if(flag === false){
				//回答がなかったら回答を表示
				$('#answer').text(now_data.a);
				flag = true;
			}else{
				//あったら次の問題を表示
				init();
				flag = false;
			}
		}
	});


	//分からなかった単語をテキストエリアへ
	$(window).keyup(function(e){
		//wキーが押されたら
		if(e.keyCode === 87){
			wakaran = wakaran + now_data.q +'：'+ now_data.a + '\r\n';
			$('#wakaranai').text(wakaran);
		}
	});

	$('#archive i').on({
		'mouseover': function(){
			$(this).css('cursor','pointer');
		},
		'touchend, click': function(){
			wakaran = wakaran + now_data.q +'：'+ now_data.a + '\r\n';
			$('#wakaranai').text(wakaran);
		}
	});


	$('#tango').on({
		//回答があるかないかを判別
		'touchend, click': function(){
			if(flag === false){
				//回答がなかったら回答を表示
				$('#answer').text(now_data.a);
				flag = true;
			}else{
				//あったら次の問題を表示
				init();
				flag = false;
			}
		}
	});

	//入力した問題から表示
	$('#questionNum').keypress( function (e) {
		if ( e.keyCode == 13 ) {
			var n = $(this).val();
			qanum = n;
			init();
			$(this).val('').blur();
		}
	});

	//問題ランダム
	function getData(num){
		//return qa[Math.floor(Math.random() * qa.length)];
		return qa[num];
	}


	function init(){
		$('#answer').text('');
		now_data = getData(qanum);
		$('#question').text(qanum + '. ' + now_data.q);
		qanum ++;
	}

}); //end jQuery