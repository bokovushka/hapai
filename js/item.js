// табы

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

//

$(document).ready(function () {
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

