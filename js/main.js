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

// карусель рекомендуемое

new Swiper(".partners__swiper", {
	spaceBetween: 8,
	grabCursor: true,
	breakpoints: {
		1280: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 1.7,
		},
		360: {
			slidesPerView: 1.2,
		}
	},
	navigation: {
		prevEl: "#qa-loop .swiper__buttons .icon-u_arrow-left",
		nextEl: "#qa-loop .swiper__buttons .icon-u_arrow-right"
	},
})

// карусель на карточках товара

var mySwiper = new Swiper('.swiper-item-gallery', {
	direction: 'horizontal',
	nested: true,
	grabCursor: true,
	navigation: {
		nextEl: '.item-gallery-button .btn-item-swiper.icon-right',
		prevEl: '.item-gallery-button .btn-item-swiper.icon-left',
	},
});

// slider gallery

if (window.innerWidth < 993) {
	var swipercontainer = $('.ic-gallery');
	var swiperwrapper = $('.ic-img-loop');
	var swiperslide = $('.ic-img');
	$('.ic-gallery').addClass('swiper-container');
	$('.ic-img-loop').addClass('swiper-wrapper');
	$('.ic-img').addClass('swiper-slide');
	var mySwiper2 = new Swiper('.ic-gallery', {
		direction: 'horizontal',
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			prevEl: ".ic-gallery .item-gallery-button .btn__swiper-prev",
			nextEl: ".ic-gallery .item-gallery-button .btn__swiper-next"
		},
	});
}

// article Swiper slider

var articleSwiper = new Swiper('.article__swiper', {
	direction: 'horizontal',
	grabCursor: true,
	slidesPerView: 4,
	spaceBetween: 20,
	breakpoints: {
		1280: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		639: {
			slidesPerView: 1.7,
		},
		360: {
			slidesPerView: 1.1,
		}
	},
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
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


