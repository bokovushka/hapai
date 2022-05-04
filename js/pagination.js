// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

var items = $(".news__item");
var numItems = items.length;
var perPage = 9;

items.slice(perPage).hide();

$('#pagination-container').pagination({
	items: numItems,
	itemsOnPage: perPage,
	prevText: " ",
	nextText: " ",
	onPageClick: function (pageNumber) {
		var showFrom = perPage * (pageNumber - 1);
		var showTo = showFrom + perPage;
		items.hide().slice(showFrom, showTo).show();
	}
});

jQuery(document).ready(function () {
	var w = screen.width;
	if (w == '992' || w >= '1280') {
		var perPage = 9;
		// выполняем на экранах больше 1280рх && 992
	} else {
		var perPage = 10;
	}
	var items = $(".loop-cover");
	var numItems = items.length;

	items.slice(perPage).hide();

	$('#pagination-container').pagination({
		items: numItems,
		itemsOnPage: perPage,
		prevText: " ",
		nextText: " ",
		onPageClick: function (pageNumber) {
			var showFrom = perPage * (pageNumber - 1);
			var showTo = showFrom + perPage;
			items.hide().slice(showFrom, showTo).show();
		}
	});
});