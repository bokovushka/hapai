// меню

$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	let language = document.querySelector('.language');
	let header_active = document.querySelector('.header-menu');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		language.classList.toggle('active');
		header_active.classList.toggle('active');
		body_lock.classList.toggle('lock-menu-m');
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
$("#popup-authorization .login .txt-link").click(function () {
	$(".login").addClass("hide");
	$(".register").removeClass("hide");

});
$("#popup-authorization .register .txt-link").click(function () {
	$(".register").addClass("hide");
	$(".login").removeClass("hide");
});

//accordion

$(function () {
	$("#accordion").accordion();
});

//календар

$(function () {
	$("#datepicker").datepicker({
		// changeMonth: true,
		// changeYear: true,
		showOn: "button",
		showOtherMonths: true,
		selectOtherMonths: true
	});
});
$(document).ready(function () {
	$(".date-link").click(function () {
		$("#datepicker").datepicker("show");
	});
});

//slider month

$(function () {
	$("#selection-car__slider-month").slider({
		range: "min",
		value: 1,
		min: 1,
		max: 12,
		slide: function (event, ui) {
			$('.v-p').remove();
			$('#selection-car__slider-result h3').append('<span class="v-p">' + ui.value + '</span>');

		}
	});
});

//block active-search sell-car page

$(".top-banner-sell-car .btn-style-3").click(function () {
	$('.choice-help__sell-car-info').addClass("active-search");
	$('.choice-help__seacrh-number-car').addClass("hide");
});

//href link

$(document).ready(function () {
	$('.menu-btn').bind("click", function (e) {
		var anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top - 20,
				},
				800
			);
		e.preventDefault();
	});
	return false;
});

// MAIN SEARCH

$(function () {
	$.widget("custom.catcomplete", $.ui.autocomplete, {
		_create: function () {
			this._super();
			this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
		},
		_renderMenu: function (ul, items) {
			var that = this,
				currentCategory = "";
			$.each(items, function (index, item) {
				var li;
				if (item.category != currentCategory) {
					ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
					currentCategory = item.category;
				}
				li = that._renderItemData(ul, item);
				if (item.category) {
					li.attr("aria-label", item.category + " : " + item.label);
				}
			});
		}
	});
	var data = [
		{ label: "anders", category: "" },
		{ label: "andreas", category: "" },
		{ label: "antal", category: "" },
		{ label: "annhhx10", category: "Products" },
		{ label: "annk K12", category: "Products" },
		{ label: "annttop C13", category: "Products" },
		{ label: "anders andersson", category: "People" },
		{ label: "andreas andersson", category: "People" },
		{ label: "andreas johnson", category: "People" }
	];

	$("#search").catcomplete({
		delay: 0,
		source: data
	});
});