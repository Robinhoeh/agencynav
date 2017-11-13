import $ from 'jquery';

$(document).ready( () => {
	$('.hamburger').on('click', () => {
		$('.menu').fadeIn('dropDownMenu');
	});

	// $('.hamburger').on('click', () => {
	// 	$('.dropDownMenu').fadeIn();
	// });

});

