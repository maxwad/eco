$(document).ready(function () {

    var link = $(".link");

	$(".activate").click(function () {
        $(".activate").toggleClass("deactivate");
        $(".links_block .wrapper").toggleClass("zoom");
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
            $(link).removeClass("open_link");
            $(link).addClass("down");
            $(".link+.activate").removeClass("active_down");
        }
	});

    $(link).click(function () {
        $(this).addClass("open_link");
        $(".link+.activate").addClass("active_down");
    });


	
});