(function (global) {
	'use strict';

	/* PRIVATE VARS */
	const _extend = function (src, props) {
		let p;
		for (p in props) if (props.hasOwnProperty(p)) src[p] = props[p];
		return src;
	};

	const _listen = function (e, type, callback, capture) {
		e.addEventListener(type, callback, capture || false);
	};


	const _index = function (a) {
		return [].slice.call(a.parentNode.children).indexOf(a);
	};

	const _currentHoverClass = function (e) {
		let c = e.className;
		if (c.includes('rating-')) {
			let r = new RegExp(/rating-[\d+]/, 'i').exec(e.className);
			return r[0];
		}
	};

	const _currentRatingClass = function (e) {
		let c = e.className;
		if (c.includes('selected-')) {
			let r = new RegExp(/selected-[\d+]/, 'i').exec(e.className);
			return r[0];
		}
	};

	const _createElement = function (a, b) {
		let c = document, d = c.createElement(a);
		if (b && 'object' == typeof b) {
			let e;
			for (e in b) if ('html' === e) d.innerHTML = b[e]; else if ('text' === e) {
				let f = c.createTextNode(b[e]);
				d.appendChild(f);
			} else d.setAttribute(e, b[e]);
		}
		return d;
	};

	const _each = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (let prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, prop, collection[prop], collection);
				}
			}
		} else {
			for (let i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, i, collection[i], collection);
			}
		}
	};

	function Rating(elem, opts) {
		this.elem = elem;

		const defaults = {
			name: 'rating'
		};

		this.options = _extend(defaults, opts);

		const items = this.elem.children;

		_each(items, (i, item) => {
			const frag = document.createDocumentFragment();
			const id = `rating-${i + 1 + Date.now()}`;
			const label = _createElement('label', {for: id});
			const radio = _createElement('input', {type: 'radio', id: id, name: this.options.name});

			frag.appendChild(radio);
			frag.appendChild(label);

			item.appendChild(frag);

		});

		this.elem.classList.add('rating');

		_listen(this.elem, 'mouseover', (e) => {
			let target = e.target;


			if (target.nodeName.toLowerCase() === 'label') {
				const rating = _index(target.parentNode) + 1;

				const c = _currentHoverClass(this.elem);

				this.elem.classList.remove(c);
				this.elem.classList.add(`rating-${rating}`);
			}
		});

		_listen(this.elem, 'mouseleave', (e) => {
			const c = _currentHoverClass(this.elem);
			if (c) {
				this.elem.classList.remove(c);
			}
		});

		_listen(this.elem, 'change', (e) => {
			const target = e.target;

			if (target.nodeName.toLowerCase() === 'input') {
				const rating = _index(target.parentNode) + 1;
				const r = _currentRatingClass(this.elem);
				const c = `selected-${rating}`;

				if (r) {
					this.elem.classList.remove(r);
				}

				if (this.elem.classList.contains(c)) {
					console.log(c);
					this.elem.classList.remove(c);
					target.checked = false;
				} else {
					this.elem.classList.add(c);
					target.checked = true;
				}
			}
		});

	};

	global.Rating = Rating;

})(this);

const elems = document.querySelectorAll('.rating');

elems.forEach(elem => {
	const rating = new Rating(elem);
});
