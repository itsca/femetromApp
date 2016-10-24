var toggleNav = function(){
	if ($('#main-wrapper').hasClass('show-nav')) {
	  // Do things on Nav Close
	  $('#main-wrapper').removeClass('show-nav');
	} else {
	  // Do things on Nav Open
	  $('#main-wrapper').addClass('show-nav');
	}

	if ($('#blur').hasClass('displayed')) {
	  // Do things on Nav Close
	  $('#blur').removeClass('displayed');
	} else {
	  // Do things on Nav Open
	  $('#blur').addClass('displayed');
	}
	/*Aliena el menu8*/
	$('#offNav-wrapper').css('top', $(window).scrollTop() + 20);
	/*focus al menu
	window.location.hash = '#menu-wrapper';*/
};

/*Headroom acativation*/
jQuery("header").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "header--fixed",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
/*End Headroom acativation*/

/*Eventos*/
$(function() {
  $('.toggle-nav').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
  $('#blur').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});
/*Alienar menu con el header*/
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $('#offNav-wrapper').css('top', $(window).scrollTop() + 20);
    }
}
);
