(function counter() {
	const counters = document.querySelectorAll('.counter');
	if (counters) {
		counters.forEach((counter) => {
			const decrement = counter.querySelector('.counter-decrement');
			const increment = counter.querySelector('.counter-increment');
			const count = counter.querySelector('.counter-count');

			if (count && decrement && increment) {
				count.addEventListener('change', (e) => {
					if (e.target.value < 1) {
						e.target.value = 1;
					}
				});

				counter.addEventListener('click', (e) => {
					if (e.target === decrement && count.value > 1) {
						count.value = parseInt(count.value) - 1;
					} else if (e.target === increment) {
						count.value = parseInt(count.value) + 1;
					}
				});
			} else {
				console.warn('Counter count or decrement or increment not found');
			}
		});
	}
})();