/*global $ */
(function () {
	$(function () {
		var redraw, video_visible;
		redraw = true;
		video_visible = false;
		$('#video_image').click(function () {
			var $video;
			$video = $('#video_container');
			$video.css({
				background: '#000'
			});
			$video.show();
			video_visible = true;
			redraw = true;
		});
		$(window).resize(function () {
			redraw = true;
		});
		window.setInterval(function () {
			var $video, $image, offset, left, top, $vc;
			if (redraw) {
				if (video_visible) {
					$video = $('#video_container');
					$image = $('#video_image');
					offset = $image.offset();
					left = $image.width() * 0.09;
					top = $image.height() * 0.1;
					$video.css({
						top: offset.top + top,
						left: offset.left + left,
						width: $image.width() - (left * 2),
						height: $image.height() - (top * 2)
					});
				}
				$vc = $('.vertical_centered');
				$vc.each(function (index, elmt) {
					var height = $(elmt).parent().parent().find('div.col-xs-9').height();
					$(elmt).height(height);
				});
			}
			redraw = false;
		}, 100);
		$('.btn-login-signup').click(function () {
			window.location = 'contact.html';
		});
	});
}());
