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
			$video.html('<iframe id="wyleivideo" style="z-index: 1000000; width: 100%; height: 100%" src="http://www.youtube.com/embed/DZ20CWK5h4k?rel=0&autoplay=1"></iframe>');	


			$video.show();
			video_visible = true;
			redraw = true;
		});
		$(window).resize(function () {
			redraw = true;
		});
		$('.btn-login-signup').click(function () {
			window.location = 'contact.html';
		});
		$('#logo_carousel').flexslider({
			animation: "slide",
			animationSpeed: 1000,
			animationLoop: true,
			itemWidth: 259,
			itemMargin: 5,
			minItems: 4,
			maxItems: 6,
			move: 1,
			controlNav: false,
			slideshow: true,
			startAt: 8,
			prevText: "",
			nextText: "",
			start: function () {
				redraw = true;
			}
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
				$('.flex-direction-nav a').css('top', -((154 - $('.flexslider .slides li:first').outerHeight()) / 2));
			}
			redraw = false;
		}, 100);
	});
}());
