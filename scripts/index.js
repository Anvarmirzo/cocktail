document.addEventListener('DOMContentLoaded', function () {
	(function slider() {
		if (Swiper) {
			const bannerSwiper = new Swiper('.banner-swiper', {
					navigation: {
						nextEl: '.banner-swiper .banner-swiper-next',
						prevEl: '.banner-swiper .banner-swiper-prev'
					}
				}
			);
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