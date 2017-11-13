import $ from 'jquery';

$(document).ready( () => {
	$('.hamburger').on('click', () => {
		$('.dropDownMenu').fadeIn('slow', () => {
			$(this).addClass('dropDownMenu');
		});
	});

	$('.hamburger').on('click', () => {
		$('.dropDownMenu').fadeOut();
	});
	
});



