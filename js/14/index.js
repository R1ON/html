// createElement, append, prepend, before, after, remove
//
// insertAdjacentHTML:
// beforebegin - begin
// afterbegin - prepend
// beforeend - append
// afterend - after

const div = document.querySelector('.element');


// div.append('Привет');
// div.append('Привет 2');
// div.prepend('Привет 3');
// div.prepend('В самое начало');
// div.append('В самый конец');
// div.prepend('В самое начало2');

// div.before('Перед тэгом див');
// div.after('После тэга див');
// div.before('Перед тэгом див2');
// div.after('После тэга див2');

// const button = document.createElement('button');
// button.textContent = 'Наша кнопка';

// const button2 = document.createElement('button');
// button2.textContent = 'Наша кнопка #2';

// div.before(button);
// div.after(button2);

// const ul = document.createElement('ul');
// ul.innerHTML = `
// 	<li>1</li>
// 	<li>2</li>
// `;

// div.append(ul);

div.insertAdjacentHTML('afterbegin', `
	<ul>
		<li>1</li>
		<li>2</li>
	</ul>
`);

div.insertAdjacentHTML('beforebegin', `
	<p>text</p>
`);

const ul = div.querySelector('ul');
// ul.insertAdjacentHTML('beforeend', `
// 	<li>3</li>
// `);

ul.innerHTML = '<li>3</li>';
















