import $ from 'jquery';

	$(document).ready( () => {
		$( "p" ).click(function( e ) {
		  e.preventDefault();
		$('.hamburger').on('click', () =>{
			$('.menu').toggleClass('dropDownMenu');
		});
	});
});