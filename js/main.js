function updateCheckboxes() {
	$('#filter-tags').html('');
	if ($("#f-brand").val().endsWith(', ')) {

		$.each($("#f-brand").val().split(','), function (index, value) {
			if (value != ' ') {
				$('#filter-tags').append('<div class="r-f-tags">' + value + '<span class="autodel" data-val="' + value + '">x</span></div>');
			}
		});
	}


	$('.filter-item input:checked').each(function () {
		$('#filter-tags').append('<div class="r-f-tags">' + $(this).parent().find('.name').text() + '<span class="checkdel" data-val="' + $(this).attr('name') + '">x</span></div>');
	});
	if ($('.f-year select:first-child')[0].selectedIndex != 0 || $('.f-year select:last')[0].selectedIndex != 0) {


		var year = 'от ' + $('.f-year select:first-child option:selected').text() + " - до " + $('.f-year select:last option:selected').text();
		$('#filter-tags').append('<div class="r-f-tags">' + year + '<span class="seldel" >x</span></div>');
	}

	var amount1 = $("#amount1").val();
	var amount0 = $("#amount0").val();
	if (amount0 != 0 || amount1 != 100000) {
		$('.v-p').remove();
		$('#filter-tags').append('<div class="r-f-tags v-p">от $' + amount0 + ' - до $' + amount1 + '<span class="prdel" >x</span></div>');
	}
}

// меню

$(document).ready(function () {
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	let language = document.querySelector('.language');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		language.classList.toggle('active');
	})
});

// filter button
$(document).ready(function () {
	let filterBtn = document.querySelector('.btn-filter');
	let sidebar = document.querySelector('.a-sidebar');
	let filterClose = document.querySelector('.filter-close');
	filterBtn.addEventListener('click', function () {
		this.classList.toggle('active');
		sidebar.classList.add("active");
	})
	filterClose.addEventListener('click', function () {
		sidebar.classList.remove("active");
	})
});

// табы
var circleInfo = document.getElementsByClassName("circle-info");
var circle_active = document.getElementsByClassName('circle-active');
for (i = 0; circleInfo.length > i; i++) {
	circleInfo[i].onclick = function () {
		var currentActive = circle_active[0];
		if (currentActive)
			currentActive.classList.remove("circle-active");

		if (currentActive !== this)
			this.classList.add("circle-active");
	};
}

$('.item-tab-content .tab-card').hide();
$('.item-tabs .item-tab').click(function () {
	$('.item-tabs .item-tab').removeClass("active");
	$(this).addClass("active");
	$('.item-tab-content .tab-card').hide();
	$($('.item-tab-content .tab-card')[$(this).index()]).show();
}).eq(1).trigger('click');

// табы внутри табов
$(function () {
	$("#tab-view").tabs();
});

// подсказка

$(".feature-col2 i").on({
	mouseenter: function () {
		$(this).parent().addClass("help-tip");
	},
	mouseleave: function () {
		$(this).parent().removeClass("help-tip");
	},
});

$('.btn-favor').on('click', function () {
	if ($(this).attr('data-status') === 'favorite') {
		$(this).removeAttr('data-status', 'favorite')
	} else {
		$(this).attr('data-status', 'favorite')
	}
});




// Автоставка

$("#autobid").click(function () {
	$('.auction-card').addClass("autobid-off");
});
$("#autobid-off").click(function () {
	$('.auction-card').addClass("autobid-off");
	$('.auction-card').removeClass("autobid-on");
});
$("#showbtn1 .exit-ac").click(function () {
	$('.auction-card').removeClass("autobid-off");
});
$("#showbtn2 .exit-ac").click(function () {
	$('.auction-card').removeClass("autobid-change");
});
$("#autobidon").click(function () {
	$('.auction-card').addClass("autobid-change");
});
$("#autobid-change").click(function () {
	$('.auction-card').addClass("autobid-change");
	$('.auction-card').addClass("autobid-off");
	$('.auction-card').removeClass("autobid-on");
});
$("#autobidsave").click(function () {
	$('.auction-card').addClass("autobid-on");
	$('.auction-card').removeClass("autobid-change");
	$('.auction-card').removeClass("autobid-off");
});

// прогресс бар

$("#auction-bar").progressbar({
	value: 95
});

// ставка аукцион
// $( "#price-spinner" ).spinner();

$.widget("ui.spinner", $.ui.spinner, {
	_buttonHtml: function () {
		return '<span class="input-group-prepend"><a class="btn ui-spinner-button ui-spinner-down icon-minus icon-u_minus" type="button"></a></span><div class="spinner-card"><span class="spinner-show"><span class="price-value">10000</span> $</span><span class="spinner-show2"><span class="sub-price-value">290000</span> грн.</span></div>'
			+ '<span class="input-group-append"><a class="btn ui-spinner-button ui-spinner-up icon-plus icon-fi_plus" type="button"></a></span>';
	},
	_uiSpinnerHtml: function () {
		return '<div class="ui-spinner input-group"></div>';
	}
});

$('#price-spinner').spinner({
	create: function () {
		$(this).next().insertBefore(this)
	},
	value: 10000,
	culture: "en-US",
	min: 10000,
	step: 50,
	start: 10000,
	numberFormat: "C",
});

$(document).ready(function () {
	var price = $("#price-spinner").val();
	var price2 = price * 29;
	$('.spinner-card .spinner-show .price-value').text(price);
	$('.spinner-card .spinner-show2 .sub-price-value').text(price2);

	$(".price-spinner a").on("click", function () {
		var price = $("#price-spinner").val();
		var price2 = price * 29;
		$('.spinner-card .spinner-show .price-value').text(price);
		$('.spinner-card .spinner-show2 .sub-price-value').text(price2);
	});

});



// карусель рекомендуемое

new Swiper(".partners__swiper", {
	spaceBetween: 8,
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
			slidesPerView: 1,
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

// фильтр

$(document).ready(function () {


	$(".fmoreButton").on("click", function () {
		$(this).next().css("display", "block");
		$(this).css("display", "none");
	});


	$(".group-f").controlgroup();
	$(".f-checkbox input").checkboxradio();

	$(function () {
		var availableTags = [
			"Acura", "Alfa Romeo", "Alpine", "Apollo", "Apple", "Aston Martin", "Audi", "Automobili Pininfarina", "Bentley", "BMW", "Bollinger", "Brilliance", "Bugatti", "Buick", "BYD", "Cadillac", "Chana", "Chery", "Chevrolet", "Chrysler", "Citroen", "Continental", "CUPRA", "Dacia", "Daewoo", "Daihatsu", "Datsun", "Detroit Electric", "Dodge", "DS Automobiles", "FAW", "Ferrari", "Fiat", "Fisker", "Ford", "Foxtron", "Geely", "Genesis", "GMC", "Great Wall", "Haval", "Honda", "Hummer", "Hyundai", "Ineos", "Infiniti", "Iran Khodro", "JAC", "Jaguar", "Jeep", "JETOUR", "KIA", "Koenigsegg", "Lada", "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lifan", "Lincoln", "Lordstown", "Lotus", "Lucid", "LvChi", "Lynk & Co", "Maserati", "Maybach", "Mazda", "MCLaren", "Mercedes-Benz", "MG", "MINI", "Mitsubishi", "Nikola", "NIO", "Nissan", "Opel", "Pagani", "Peugeot", "Polestar", "Porsche", "Qoros", "Range Rover", "Ravon", "Renault", "Rimac", "Rivian", "Rolls-Royce", "Saab", "Saipa", "SEAT", "Skoda", "smart", "SsangYong", "SSC North America", "Stellantis", "Subaru", "Suzuki", "Tata", "Tesla", "Torsus", "Toyota", "VinFast", "Volkswagen", "Volvo", "Xpeng", "Zotye", "ВАЗ", "ГАЗ", "ЗАЗ", "КрАЗ", "УАЗ"
		];
		function split(val) {
			return val.split(/,\s*/);
		}
		function extractLast(term) {
			return split(term).pop();
		}

		$("#f-brand")
			// don't navigate away from the field on tab when selecting an item
			.on("keydown", function (event) {
				if (event.keyCode === $.ui.keyCode.TAB &&
					$(this).autocomplete("instance").menu.active) {
					event.preventDefault();
				}
			})
			.autocomplete({
				minLength: 0,
				source: function (request, response) {
					// delegate back to autocomplete, but extract the last term
					response($.ui.autocomplete.filter(
						availableTags, extractLast(request.term)));
				},
				focus: function () {
					// prevent value inserted on focus
					return false;
				},
				classes: {
					"ui-autocomplete": "f-tags-custom"
				},

				select: function (event, ui) {
					var terms = split(this.value);
					// remove the current input
					terms.pop();
					// add the selected item
					terms.push(ui.item.value);
					// add placeholder to get the comma-and-space at the end
					terms.push("");
					this.value = terms.join(", ");
					return false;
				}
			});
	});
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 100000,
		step: 50,
		values: [0, 100000],
		slide: function (event, ui) {
			$("#amount0").val(ui.values[0]);
			$("#amount1").val(ui.values[1]);
			$('.v-p').remove();
			$('#filter-tags').append('<div class="r-f-tags v-p">от $' + ui.values[0] + ' - ' + 'до $' + ui.values[1] + '<span class="prdel" >x</span></div>');
		}
	});
	$("#amount0").val($("#slider-range").slider("values", 0));// значение 0 по умолчанию
	$("#amount1").val($("#slider-range").slider("values", 1));// значение 1 по умолчанию
	$('#amount0').on('keyup', function () {
		var amount0 = $("#amount0").val();
		var amount1 = $("#amount1").val();
		$("#slider-range").slider("values", 0, amount0);
		$('.v-p').remove();
		$('#filter-tags').append('<div class="r-f-tags v-p"> от $' + amount0 + ' - до $' + amount1 + '<span class="prdel" >x</span></div>');

	});
	$('#amount1').on('keyup', function () {
		var amount1 = $("#amount1").val();
		var amount0 = $("#amount0").val();
		$("#slider-range").slider("values", 1, amount1);
		updateCheckboxes();
		$('.v-p').remove();
		$('#filter-tags').append('<div class="r-f-tags v-p">от $' + amount0 + ' - до $' + amount1 + '<span class="prdel" >x</span></div>');

	});

});
/* sort TABS */
$("#sortmode").selectmenu();
$("#sortitems").selectmenu();
/* FILTER TABS */
jQuery(document).ready(function ($) {






	$(document).on('click', '.filter-item input,.ui-menu-item', function () {
		updateCheckboxes();
	});
	$(document).on('click', '.checkdel', function () {
		// $('.filter-item input[name="'+$(this).attr("data-val")+'"]').closest('label').trigger('click');
		//
		$('.filter-item input[name="' + $(this).attr("data-val") + '"]').prop('checked', false).button("refresh");

		updateCheckboxes();

	});
	$("#mycheck").button("refresh");
	$("#f-brand").change(function () {

		updateCheckboxes();
	});

	$(document).on('click', '.autodel', function () {
		$("#f-brand").val($("#f-brand").val().replace($(this).attr('data-val') + ",", ''));
		updateCheckboxes();

	});

	$(document).on('click', '.seldel', function () {

		$(this).parent().remove();


	});
	$(document).on('click', '.ui-menu-item', function () {
		if ($(this).parent().is('#number1-menu') && $('.f-year select:last')[0].selectedIndex == 0) {
			$('#number2').val('2006');
			$("select").selectmenu("refresh");
		} else if ($(this).parent().is('#number2-menu') && $('.f-year select:first-child')[0].selectedIndex == 0) {
			$('#number1').val('1995');
			$("select").selectmenu("refresh");
		}
		updateCheckboxes();
	});
	$(document).on('click', '.prdel', function () {

		$(this).parent().remove();
		$("#slider-range").slider('values', 0, 0);
		$("#slider-range").slider('values', 1, 100000);
		$("#amount0").val(0);
		$("#amount1").val(100000);

	});
});

jQuery.fn.putCursorAtEnd = function () {

	return this.each(function () {

		// Cache references
		var $el = $(this),
			el = this;

		// Only focus if input isn't already
		if (!$el.is(":focus")) {
			$el.focus();
		}

		// If this function exists... (IE 9+)
		if (el.setSelectionRange) {

			// Double the length because Opera is inconsistent about whether a carriage return is one character or two.
			var len = $el.val().length * 2;

			// Timeout seems to be required for Blink
			setTimeout(function () {
				el.setSelectionRange(len, len);
			}, 1);

		} else {

			// As a fallback, replace the contents with itself
			// Doesn't work in Chrome, but Chrome supports setSelectionRange
			$el.val($el.val());

		}

		// Scroll to the bottom, in case we're in a tall textarea
		// (Necessary for Firefox and Chrome)
		this.scrollTop = 999999;

	});

};

(function () {

	var searchInput = $("#f-brand");

	searchInput
		.putCursorAtEnd() // should be chainable
		.on("focus", function () { // could be on any event
			searchInput.putCursorAtEnd()
		});

})();


// height = max height
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