/*global $ */
(function () {
	$(function () {
		var redraw, visible;
		redraw = false;
		visible = false;
		$('#video_image').click(function () {
			var $video;
			$video = $('#video_container');
			$video.css({
				background: '#000'
			});
			$video.show();
			visible = true;
			redraw = true;
		});
		$(window).resize(function () {
			redraw = true;
		});
		window.setInterval(function () {
			if (redraw && visible) {
				var $video, $image, offset, left, top;
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
			redraw = false;
		}, 100);
	});
}());
