/*global $ */
(function () {
	$(function () {
		$('#button_back').click(function () {
			window.location = 'index.html';
		});
		$('#contact_form').submit(function (e) {
			e.preventDefault();
			var $name, $email;
			$name = $('#name');
			$email = $('#email');
			if ($name.val() !== '' && $email.val() !== '') {
				$.ajax({
					url: 'contact.php',
					dataType: "jsonp",
					data: {
						'name' : $name.val(),
						'email' : $email.val()
					},
					success: function () {
						$('#thanks_modal').modal();
					}
				});
			}
			return false;
		});
		$('#contact_ok').click(function () {
			window.location = 'index.html';
		});
		$('#login_form').submit(function (e) {
			e.preventDefault();
			$('#login_modal').modal();
			return false;
		});
	});
}());
