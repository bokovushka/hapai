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