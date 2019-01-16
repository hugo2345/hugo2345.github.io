// listen for scroll
var positionElementInPage = $('#navbar-collapse').offset().top;
$(window).scroll(
	function() {
		if ($(window).scrollTop() &gt;= positionElementInPage) {
			// fixed
			$('#navbar-collapse').addClass("floatable");
		} else {
			// relative
			$('#navbar-collapse').removeClass("floatable");
		}
	}
);
