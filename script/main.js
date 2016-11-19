'use strict';

/* HEADER - SEARCH */
/*******************/
var $headerSearch = $('#search'),
	$searchToggle = $('.header__item-link_search'),
	$searchBox = $('.header__search-box'),
	searchOpen = false,
	slideDuration = 200;

$searchToggle.on('click', function(e){
	e.preventDefault();
	var searchFocus = true;
	hedSearch();
	$searchBox.focus();
});	
function hedSearch(){
	if(searchOpen === true) {
		$searchBox.animate({'opacity': 0});
		searchOpen = false;
		$headerSearch.slideUp(slideDuration);
	}else{
		$searchBox.animate({'opacity': 1});
		searchOpen = true;
		$headerSearch.slideDown(slideDuration);
	}
}


/* WHO - INIT WOW and ANIMATION NUMBER*/
/**************************************/
new WOW().init()


function meterNumberAnimate(_id, _value, _duration) {
	var currentNumber = $(_id).text();
	$({numberValue: currentNumber}).animate({numberValue: _value}, {
		duration: _duration,
		easing: 'linear',
		step: function() { 
			$(_id).text(Math.ceil(this.numberValue)); 
		}
	});
}


$(window).scroll(function () {
	var scrTop = $(window).scrollTop();
	if(scrTop>$('.who__group').offset().top - $(window).height()  ) {
		var meterNumberDuration = 4000;
		meterNumberAnimate('#meter-number1', 80, meterNumberDuration)
		meterNumberAnimate('#meter-number2', 60, meterNumberDuration)
		meterNumberAnimate('#meter-number3', 75, meterNumberDuration)
		meterNumberAnimate('#meter-number4', 90, meterNumberDuration)
		meterNumberAnimate('#meter-number5', 50, meterNumberDuration)
		meterNumberAnimate('#meter-number6', 85, meterNumberDuration)
	}
});



/* HEADER - HIDE-MENU ( and animation) for 410px, NAVICONE-MENU */
/****************************************************************/
var $headerButtenToggle = $('.header__item_toggle'),
	$headerIcon = $('.header__toggle-menu'),
	$headerHideMenu = $('.header__hide-menu'),
	hideMenuOpen = false;

$headerButtenToggle.on('click', function() {

	if($(window).width() <= 410){
		if($headerHideMenu.hasClass('hide-menu_active') && hideMenuOpen === true){
			headerToggleClass();
			return;		
		}
		headerToggleClass('hide-menu_active-animated');
		return;		
	}

	headerToggleClass();

});

$(function(){
	$(window).resize(function() {
		if($(window).width() > 410 && $headerHideMenu.hasClass('hide-menu_active-animated') && hideMenuOpen === true){
			headerToggleClass('hide-menu_active-animated');
			return;
		}
	})
})

function headerToggleClass(tm){
	if(tm === undefined) tm = 'hide-menu_active'

	$headerIcon.toggleClass('toggle-menu_active');
	$headerHideMenu.toggleClass(tm);
	headerMenuOpen();
}

function headerMenuOpen(){
	if(hideMenuOpen === false){
		hideMenuOpen = true;
		return;
	}
	hideMenuOpen = false;
}








/* WHO - COLLAPSE */
/******************/
var $collapse_pluss = $('.collapse-icon__plus'),
	$collapse_headings = $('.who__collapse-heading'),
	$collapse_who = $('.who__collapse');

function collapseToggle (){
	var $collapse_toggle = $('.in'),
		$collapse_block = $collapse_toggle.closest('.panel-default'),
		$collapse_heading = $collapse_block.find('.who__collapse-heading'),
		$collapse_plus = $collapse_block.find('.collapse-icon__plus');

	$collapse_who.find($collapse_pluss).removeClass('collapse-icon__minus');
	$collapse_who.find($collapse_headings).removeClass('who__collapse-heading_active');
	$collapse_plus.addClass('collapse-icon__minus');
	$collapse_heading.addClass('who__collapse-heading_active');
}

$('.who__collapse-heading_text').click(function(){
	setTimeout(function(){
		collapseToggle();
	},400)
});



/* WHO (max-width: 480px) - INFORMATION (slideToggle) */
/******************************************************/
var $data_hidden = $('.data__hidden'),
	$data_group = $('.data__group'),
	data_colorFlag = 0;

function dataInfo(_color, _flag){
	$data_hidden.css({'color': _color});
	$('.data__icon').css({'color': _color});
	$data_group.slideToggle();
	data_colorFlag = _flag;
	return;
}

$data_hidden.on('click', function() {
	if(data_colorFlag === 0) {
		dataInfo('#565d66', 1)
	}else{
		dataInfo('#88909a', 0)
	}
});


/* TEAM (max-width: 480px) - photos animation */
/**********************************************/
var $team_click = $('.team__icon-zoom'),
	$team_items = $('.team__item');

$team_click.on('click', function() {
	var $this = $(this),
		$team_item = $this.closest('.team__item');

	$team_item.addClass('team__item_active');
	$team_item.siblings().addClass('team__item_default');
	$team_click.css({'display': 'none'});

	$("body").click(function(e) {
		if($(e.target).closest(".team__list").length==0) {
			$team_item.removeClass('team__item_active');
			$team_item.siblings().removeClass('team__item_default');
			$team_click.css({'display': ''});
		}
	});

});



