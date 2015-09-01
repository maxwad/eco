$(document).ready(function () {
	
	$(".activate").click(function (e) {
        $(".activate").toggleClass("deactivate");
        var link = $(".link");
        var i = 0;

        if ($(link[i]).hasClass("down")){
            var down = setInterval(function(){
                if(i>=link.length) {
                    clearInterval(down);
                }
                $(link[i]).removeClass("down");
                i++;
            },50);
        }
        else {
            $(link).addClass("down");
        }

	});


	
});