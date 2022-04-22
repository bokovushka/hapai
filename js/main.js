// меню

$(document).ready(function () {
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	let language = document.querySelector('.language');
	let header_active = document.querySelector('.header-menu');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		language.classList.toggle('active');
		header_active.classList.toggle('active');
	})
});

// height = max height

$(document).ready(function () {
	function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.each(function () {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}
	$(document).ready(function () {
		setEqualHeight($(".item-loop__txtblock h3"));
		setEqualHeight($(".article__swiper .swiper-slide"));
		setEqualHeight($(".happy-customers__swiper .swiper-slide"));
		setEqualHeight($(".favorite__main .item-loop__link"));
	});
});

//favorite

$('.btn-favor').on('click', function () {
	if ($(this).attr('data-status') === 'favorite') {
		$(this).removeAttr('data-status', 'favorite')
	} else {
		$(this).attr('data-status', 'favorite')
	}
});

//popup-authorization

$(function () {
	$(".checkbox input").checkboxradio();
});
$(".login .txt-link").click(function () {
	$(".login").addClass("hide");
	$(".register").removeClass("hide");

});
$(".register .txt-link").click(function () {
	$(".register").addClass("hide");
	$(".login").removeClass("hide");
});