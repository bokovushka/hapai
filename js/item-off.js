//popup btn-info
$(".ic-top__rb .btn-info").click(function () {
	$('.popup-bg-body').addClass("open");
});
$(".close-popup").click(function () {
	$('.popup-bg-body').removeClass("open");
});
$(".popup-bg-body").click(function () {
	$(this).removeClass("open");
	$('.popup').removeClass("open");
	$('.lock').removeClass("lock");
});

//payment methods
$(".credit-card").click(function () {
	$(".payment-methods").addClass("hide");
	$(".payment-methods").removeClass("show");
	$(".bank-card-data").addClass("show");
	$(".bank-card-data").removeClass("hide");
});
$(".bank-card-data .bank-card__button .btn-style-1").click(function () {
	$(".card-error").addClass("show");
	$(".card-error").removeClass("hide");
	$(".bank-card-data").addClass("hide");
	$(".bank-card-data").removeClass("show");
});
$(".bank-card-data .bank-card__button .btn-style-2").click(function () {
	$(".payment-methods").addClass("show");
	$(".payment-methods").removeClass("hide");
	$(".bank-card-data").addClass("hide");
	$(".bank-card-data").removeClass("show");
});
$(".card-error .bank-card__button .btn-style-1").click(function () {
	$(".card-accepted").addClass("show");
	$(".card-accepted").removeClass("hide");
	$(".card-error").addClass("hide");
	$(".card-error").removeClass("show");
});
$(".card-error .bank-card__button .btn-style-2").click(function () {
	$(".payment-methods").addClass("show");
	$(".payment-methods").removeClass("hide");
	$(".card-error").addClass("hide");
	$(".card-error").removeClass("show");
});
$(".card-accepted .bank-card__button .btn-style-2").click(function () {
	$("#popup-auction").removeClass("open");
	$('.lock').removeClass("lock");
	$(".bank-card-data").addClass("hide");
	$(".card-error").addClass("hide");
	$(".card-accepted").addClass("hide");
	$(".card-accepted").removeClass("show");
	$(".payment-methods").addClass("show");
});

//installment-accepted
$("#popup-installment .btn-style-1").click(function () {
	$(".installment").addClass("hide");
	$("#popup-installment .installment-accepted").addClass("show");
	$("#popup-installment .installment-accepted").removeClass("hide");
});
$(".installment-accepted .btn-style-2").click(function () {
	$('.popup').removeClass("open");
	$('.lock').removeClass("lock");
});

//installment-accepted
$("#popup-test-drive .btn-style-1").click(function () {
	$(".popup-test-drive__main").addClass("hide");
	$("#popup-test-drive .installment-accepted").addClass("show");
	$("#popup-test-drive .installment-accepted").removeClass("hide");
});
$("#popup-test-drive .installment-accepted .btn-style-2").click(function () {
	$('.popup').removeClass("open");
	$('.lock').removeClass("lock");
});

//href link
$(document).ready(function () {
	$('a[href^="#"]').bind("click", function (e) {
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