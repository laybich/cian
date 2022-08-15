'use strict';

$('.wrapper').addClass('loaded');

// fade transition
$('#up').on('click', e => {
	e.preventDefault();
	
	let dn = $('.flats').last().offset().top;
	
	$('html, body').animate({scrollTop: dn - 30}, 1000);
});

// make it as accordion for smaller screens
if (window.innerWidth >= 992) {
	document.querySelectorAll('#navbarNavDropdown .nav-item').forEach(item => {
		item.addEventListener('mouseover', e => {
			const el_link = e.currentTarget.querySelector('a[data-bs-toggle="dropdown"]');

			$('.dropdown-menu').removeClass('show');

			if(el_link != null){
				const nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}
		});
		item.addEventListener('mouseleave', e => {
			const el_link = e.currentTarget.querySelector('a[data-bs-toggle="dropdown"]');

			if(el_link != null){
				const nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}
		});
	});
}
// end if innerWidth

// чтобы выпадающее меню не закрывалось при клике на него
$(document).on('click', '.dropdown-menu', e => e.stopPropagation());

// for checkbox
$('[data-toggle="checkbox"]').on('click', e => {
	$(e.currentTarget).parent().children().removeClass('active');
	$(e.currentTarget).addClass('active');
});

//
$('[data-toggle="prev"]').on('click', e => {
	$('.report__list li').show();
	$('.report__list li li').hide();
	$(e.currentTarget).hide()
});

// 
$('.dropdown-select .form-check-label').on('click', e => {
	$(e.currentTarget).parent().removeClass('show');
	let target = $(e.currentTarget).parent().attr('id');
	$(`[data-target="${target}"]`).text($(e.currentTarget).text());
});
$('.summury__sortlist button').on('click', e => {
	$('.summury__sortlist button').removeClass('checked');
	$(e.currentTarget).addClass('checked');
	$(e.currentTarget).parent().parent().removeClass('show');
	let target = $(e.currentTarget).parent().parent().attr('id');
	const svg = '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.207 1.293 4.5.586l-.707.707-3.5 3.5 1.414 1.414L3.5 4.414V15h2V4.414l1.793 1.793 1.414-1.414-3.5-3.5Zm7 13.414-.707.707-.707-.707-3.5-3.5 1.414-1.414 1.793 1.793V1h2v10.586l1.793-1.793 1.414 1.414-3.5 3.5Z" fill="currentColor"></path></svg>';
	$(`[data-target="${target}"]`).html(svg + ' ' + $(e.currentTarget).text());
});
$('#price-select .form-check-label').on('click', e => {
	$('#price-select .form-check-label').removeClass('checked');
	$(e.currentTarget).addClass('checked');
	$(e.currentTarget).parent().parent().removeClass('show');
	let target = $(e.currentTarget).parent().attr('id');
	$(`[data-target="#${target}"]`).html($(e.currentTarget).text());
});

$('.report__list li li').hide();
$('[data-toggle="sublist"]').on('click', e => {
	$('.report__list li').hide();
	$(e.currentTarget).parent().show();
	$(e.currentTarget).next().find('li').show();
	$('[data-toggle="prev"]').show();
});

$('.card__tool').on('click', e => {
	$(e.currentTarget).toggleClass('active');
	$(e.currentTarget).blur();
});

// ibg - Image Background. It looks for all .ibg elements and set bg-image in css from srcof image.
// It is for easier edit in html and not in css.
function ibg() {
	$.each($('.ibg'), (index, val) => {
		if($(val).find('img').length > 0) {
			$(val).css('background-image', `url('${$(val).find('img').attr('src')}')`);
		}
	});
}
ibg();

// for bootstrap tooltip
$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});

// count number of slider for each slider
document.querySelectorAll('.carousel').forEach(e => {
	const totalSlides = $(e).find('.carousel-item').length;
	let currentIndex = $(e).find('.carousel-item.active').index() + 1;
	$(e).find('.badge').last().text(currentIndex + '/' + totalSlides);
});

// count number of slider for each slider
$('.carousel').on('slid.bs.carousel', e => {
	const totalSlides = $(e.currentTarget).find('.carousel-item').length;
	let currentIndex = $(e.currentTarget).find('.carousel-item.active').index() + 1;
	$(e.currentTarget).find('.badge').last().text(currentIndex + '/' + totalSlides);
});

// for auth form
$('.auth__choose').on('click', e => {
	e.preventDefault();
	if($(e.currentTarget).data('toggle') === 'phone') {
		$('.auth__title').text('Вход по телефону');
		$('.auth__input').attr('placeholder', 'Телефон');
		$(e.currentTarget).text('Войти по email или id');
		$(e.currentTarget).data('toggle', 'email');
	} else {
		$('.auth__title').text('Вход и регистрация');
		$('.auth__input').attr('placeholder', 'Email или id');
		$(e.currentTarget).text('Войти по телефону');
		$(e.currentTarget).data('toggle', 'phone');
	}
});