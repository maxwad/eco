$(document).ready(function () {
	
	var quant = $(".slide").length;
	var wid = $(".slide").width();
	$(".slide_area").width(wid*quant);
	var n = 0;
	
	var idleTimer = null;
	var	idleState = false; // ��������� ����������
	var	idleWait = 1000; // ����� �������� � ��. (1/1000 �������)
	var intervalID;
	
	$(".slider_next").click(function (e) {
		event.preventDefault();
		if(n==quant-1) { n=0;	}
		else {	n++;	}
		$(".slide_area").animate({'left': -wid*n}, 300);
		$(".slider_links a").removeClass("active");
		$(".slider_links a").eq(n).addClass("active");
	});

	$(".slider_prev").click(function () {
		event.preventDefault();
		if(n==0) { n=quant-1;	}
		else {	n--;	}
		$(".slide_area").animate({'left': -wid*n}, 300);
		$(".slider_links a").removeClass("active");
		$(".slider_links a").eq(n).addClass("active");
	});
	
	$(".slider_links a").click(function () {
		event.preventDefault();
		var numb = $(this).attr("numb_link");
		n = numb-1;
		$(".slide_area").animate({'left': -wid*n}, 300);
		$(".slider_links a").removeClass("active");
		$(this).addClass("active");
	});
	
	$(document).bind('mousemove keydown scroll', function(){
		clearTimeout(idleTimer); // �������� ������� ��������� �������
		if(idleState == true){ 
			// �������� �� ����������� ������������
			clearInterval(intervalID);
		}
		 
		idleState = false;
		idleTimer = setTimeout(function(){ 
			// �������� �� ���������� ������������
			intervalID = setInterval(function() {$(".slider_next").click();}, 3000);
			idleState = true; 
		}, idleWait);
	});
	
});