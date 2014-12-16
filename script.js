var changeEnable = false;
var currentPage = 0;
var arraySlide;

$(document).ready(function(){

	var position = 0;

	$(".title").delay(1000).animate({
	    opacity: 1
	  }, 1500);
	$(".subtitle").delay(1200).animate({
	    opacity: 1
	  }, 2000);
	$(".reseaux").delay(1600).animate({
	    opacity: 1
	  }, 2000);

	$("#arrow").delay(3000).animate({
	    opacity: 1
	  }, 2000);

	arraySlide = $('.slide');

  	$(window).on("scrollstart", function() {
	    changeEnable = true;
	})

	$('#wrapper').bind('mousewheel', function(event, delta, deltaX, deltaY) {
		
		if (changeEnable) {
			calculDelta(delta);
			changeEnable = false;
		};

	});

	$('#wrapper').hammer().on("swipeup", function(event) {
		currentPage++;
		if (currentPage >= arraySlide.length) {
			currentPage = arraySlide.length - 1;
		};
        changePage();
    });

    $('#wrapper').hammer().on("swipedown", function(event) {
		currentPage--;
		if (currentPage < 0) {
			currentPage = 0;
		};
		changePage();
    });
});

function calculDelta (delta) {
	if (delta < 0) {
		currentPage++;
		if (currentPage >= arraySlide.length) {
			currentPage = arraySlide.length - 1;
		};
	}else{
		currentPage--;
		if (currentPage < 0) {
			currentPage = 0;
		};
		
	};
	changePage();
}

function changePage () {
	if (currentPage > 0) {
		$("#arrow").animate({
	    opacity: 0
	  }, 500);
	}else{
		$("#arrow").animate({
	    opacity: 1
	  }, 500);
	};
	
	$('#wrapper').scrollTo( $(arraySlide[currentPage]), 800 , {easing:'easeOutCirc'});
}