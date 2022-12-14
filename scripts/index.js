document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	(function slider() {
		if (Swiper) {
			const bannerSwiper = new Swiper('.banner-swiper', {
					navigation: {
						nextEl: '.banner-swiper .banner-swiper-next',
						prevEl: '.banner-swiper .banner-swiper-prev'
					}
				}
			);

			const bestsellerSwiper = new Swiper('.bestseller-swiper', {
					slidesPerView: 2,
					navigation: {
						nextEl: '.bestseller-swiper-next',
						prevEl: '.bestseller-swiper-prev'
					},
					breakpoints: {
						300: {
							slidesPerView: 2
						},
						992: {
							slidesPerView: 4
						}
					}
				}
			);

			const quotesSwiper = new Swiper('.section-quotes-swiper', {
					slidesPerView: 1,
					pagination: {
						el: '.section-quotes .swiper-pagination',
						type: 'bullets',
						clickable: true
					},
					breakpoints: {
						300: {
							slidesPerView: 1
						},
						992: {
							slidesPerView: 3
						}
					}
				}
			);

			const detailSwiper = new Swiper('.section-detail-swiper', {
				slidesPerView: 1,
				pagination: {
					clickable: true,
					el: '.section-detail-swiper .swiper-pagination'
				},
				navigation: {
					prevEl: '.section-detail-control-btn.prev',
					nextEl: '.section-detail-control-btn.next'
				}
			});

			const benefitsSwiper = new Swiper('.section-benefits-swiper', {
				pagination: {
					el: '.section-benefits .swiper-pagination',
					clickable: true
				},
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					992: {
						slidesPerView: 3
					}
				}
			});
			const recipesSwiper = new Swiper('.section-recipes-swiper', {
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: '.section-recipes .swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.section-recipes-swiper .section-recipes-swiper-next'
				},
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					992: {
						slidesPerView: 1.2
					}
				}
			});

			const recommendsSwiper = new Swiper('.section-recommends-swiper', {
				navigation: {
					nextEl: '.section-recommends .next',
					prevEl: '.section-recommends .prev'
				},
				breakpoints: {
					0: {
						slidesPerView: 2
					},
					992: {
						slidesPerView: 3
					}
				}
			});
		} else {
			console.warn('Swiper not found');
		}
	})();

	(function dropdown() {
		const dropdowns = document.querySelectorAll('.dropdown');

		if (dropdowns?.length) {
			dropdowns.forEach(dropdown => {
				const btn = dropdown.querySelector('.dropdown__title');
				const list = dropdown.querySelector('.dropdown-list');

				btn.addEventListener('click', function () {
					list.classList.toggle('active');
				});
			});
		} else {
			console.warn('Dropdown not found');
		}
	})();

	(function burger() {
		const btn = document.getElementById('burger-btn');
		const menu = document.getElementById('mobile-menu');

		if (btn && menu) {
			btn.addEventListener('click', function () {
				menu.classList.toggle('active');
			});
			menu.addEventListener('click', function (e) {
				if (e.target.classList.contains('mobile-menu')) {
					menu.classList.toggle('active');
				}

			});
		} else {
			console.warn('Burger or menu not found');
		}
	})();
});
