import $ from 'jquery';

$(document).ready( () => {
	$( "a" ).click(function( e ) {
	  e.preventDefault();
	$('.hamburger').on('click', () =>{
		$('.menu').toggleClass('dropDownMenu');
	});
});
});