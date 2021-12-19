// Конкатенация
// document без window
// firstElementChild, lastElementChild, children
// parentNode, nextElementSibling, previousElementSibling - sibling
// innerHTML, textContent



// const value = 2;
// const value2 = true;
// const value3 = 'Строка';

// console.log('Привет' + value + ' мир');
// console.log(`Привет ${value} мир`);
// console.log(`${value}-${value2}:${value3}`)

const div = document.querySelector('div');

for (let i = 0; i < div.children.length; i++) {
	const element = div.children[i];

	console.log(element.tagName);

	if (element.tagName === 'UL') {
		element.innerHTML = `
			<ul>
				<li>Первый</li>
				<li>Второй</li>
				<li>Третий</li>
			</ul>
		`;
	}
	else if (element.tagName === 'SPAN') {
		element.textContent = 'Привет из JS';
	}
}

// div.innerHTML = '<button>Привет мир</button>';
// div.textContent = '<button>Привет мир</button>';

console.log(div);