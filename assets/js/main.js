$(document).ready(function () {

	// Relyon hover effect
	$('div.relyon-cards div.card').mouseenter(function() {
		$(this).find('div.relyon-hover-effect').fadeIn()
	})
	$('div.relyon-cards div.card').mouseleave(function() {
		$(this).find('div.relyon-hover-effect').fadeOut()
	})

	// Cycel margin 
	$('div.footer-link-left').css('margin-left', `${$('.cycale-object img').width()}px`)


})


$(window).on("load", function() {
	// jQuery Library Install
	AOS.init();
	$('a').smoothScroll({speed: 1500});

	window.addEventListener('scroll', function() {
		if(window.scrollY >= 500) {
			$('#scrollHome').css('display', 'block')
			$('#scrollHome a').animate({
				bottom: '30px'
			}, 1000)
		} else {
			$('#scrollHome').css('display', 'none')
		}
	})
})
