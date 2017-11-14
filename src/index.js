import $ from 'jquery';

$(document).ready( () => {
  $('.hamburger').on('click', () => {
  $('.dropDownMenu').toggleClass('visible');
	});
});


