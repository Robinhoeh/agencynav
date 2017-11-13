import $ from 'jquery';


$(document).ready( () => {
  $('.hamburger').on('click', () => {
  $( ".dropDownMenu" ).fadeToggle( "slow", "linear" );
	});
});


