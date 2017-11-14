import $ from 'jquery';

$(document).ready( () => {
  $('.hamburger').on('click', () => {
  $('ul.dropDownMenu').toggle('dropDownMenu');
	});
});


