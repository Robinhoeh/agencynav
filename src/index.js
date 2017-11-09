import $ from 'jquery';

$(document).ready( () => {
	$( "a" ).click(function( event ) {
	  event.preventDefault();
	$('.hamburger').on('click', () =>{
		$('.menu').toggleClass('dropDownMenu');
	});
});
});