/*global $ */
(function () {
	$(function () {
		$('#button_back').click(function () {
			window.location = 'index.html';
		});
		$('#contact_form').submit(function (e) {
			if ($('#name').val() === '' || $('#email').val() === '') {
				e.preventDefault();
				return false;
			}
			return true;
		});
	});
}());
