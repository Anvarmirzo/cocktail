(function accordion() {
	const accordions = document.querySelectorAll('.accordion-item');

	const openAccordion = (accordion) => {
		const body = accordion.querySelector('.accordion-item__body');
		if (body) {
			accordion.classList.add('accordion-item__active');
			body.style.maxHeight = body.scrollHeight + 'px';

			const icon = accordion.querySelector('span');
			if (icon) {
				icon.textContent = '-';
			} else {
				console.warn('Icon(+/-) not found');
			}
		} else {
			console.warn('Accordion body not found');
		}
	};

	const closeAccordion = (accordion) => {
		const body = accordion.querySelector('.accordion-item__body');
		if (body) {
			accordion.classList.remove('accordion-item__active');
			body.style.maxHeight = null;

			const icon = accordion.querySelector('span');
			if (icon) {
				icon.textContent = '+';
			} else {
				console.warn('Icon(+/-) not found');
			}
		} else {
			console.warn('Accordion body not found');
		}
	};

	accordions.forEach((accordion) => {
		const head = accordion.querySelector('.accordion-item__head');
		const body = accordion.querySelector('.accordion-item__body');

		if (head && body) {
			head.addEventListener('click', () => {
				if (body.style.maxHeight) {
					closeAccordion(accordion);
				} else {
					accordions.forEach((accordion) => closeAccordion(accordion));
					openAccordion(accordion);
				}
			});
		} else {
			console.warn('Accordion head or body not found');
		}
	});
})();
