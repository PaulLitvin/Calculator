let checke,
	total = 5000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesCheck = document.getElementById('change-check'),
	cmsCheck = document.getElementById('change-cms'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input');
	checkbox = document.getElementsByClassName('checkbox');

const land = 5000,
	corp = 12000,
	cms = 4000,
	changes = 1000,
	blocks = 500,
	pages = 2500;
/*
Код ниже создает div элемент с классом tick, в элементе с id rect,
блока с классом  addiction-block при изменении чекбокса на значение true
и удаляет его при изменеии чекбокса на значение false
*/
window.addEventListener('change', function () {
	if (window.event.target.checked) {
		let tick = document.createElement('div');
		tick.id = 'tick';
		checke = window.event.target.parentNode.firstChild.nextSibling;
		checke.appendChild(tick);
	} else if (window.event.target == cmsCheck || window.event.target == changesCheck) {
		if (window.event.target.checked == false) {
			window.event.target.parentNode.firstChild.nextSibling.firstChild.remove();
		}
	}
}, false);

window.addEventListener('DOMContentLoaded', function () {
	tabLeft.addEventListener('click', () => {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

		for (let i = 0; i < checkbox.length; i++) {
			if (checkbox[i].checked == true) {
				document.getElementsByClassName('rect')[i].firstChild.remove();
			}
		}

		blocksBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';

		tabLeft.classList.add('active');
		tabRight.classList.remove('active');

		if (changesCheck.checked) {
			changesCheck.checked = false;
		}

		if (cmsCheck.checked) {
			cmsCheck.checked = false;
		}

		total = land;
		totalValue.value = total;

	});

	tabRight.addEventListener('click', () => {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

		for (let i = 0; i < checkbox.length; i++) {
			if (checkbox[i].checked == true) {
				document.getElementsByClassName('rect')[i].firstChild.remove();
			}
		}

		blocksBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';

		tabRight.classList.add('active');
		tabLeft.classList.remove('active');

		if (changesCheck.checked) {
			changesCheck.checked = false;
		}

		if (cmsCheck.checked) {
			cmsCheck.checked = false;
		}

		total = corp;
		totalValue.value = total;
	});

	counterBlock.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
		total = counterBlock.value * blocks;
		totalValue.value = total;
	});

	counterPages.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
		total = counterPages.value * pages;
		totalValue.value = total;
	});

	counterHours.addEventListener('change', () => {
		counterBlock.value = '';
		counterPages.value = '';
		total = 0;
		time = counterHours.value;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	});

	counterRate.addEventListener('change', () => {
		counterBlock.value = '';
		counterPages.value = '';
		total = 0;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	});

	changesCheck.addEventListener('change', () => {
		if (changesCheck.checked) {
			total += changes;
			totalValue.value = total;
		} else {
			total -= changes;
			totalValue.value = total;
		}
	});

	cmsCheck.addEventListener('change', () => {
		if (cmsCheck.checked) {
			total += cms;
			totalValue.value = total;
		} else {
			total -= cms;
			totalValue.value = total;
		}
	});
});