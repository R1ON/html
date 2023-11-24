// function
// arrow function
// аргументы
// return
// 


// function calculate() {
// 	const a = 10;
// 	const b = 15;

// 	console.log(a + b);
// }

// calculate();



// Click 1
// console.log('Нажали на товар А');
// addProduct();


// // Click 2
// console.log('Нажали на товар Б');
// addProduct(true);


// // Click 3
// console.log('Нажали на товар В');
// const result = addProduct(true);

// console.log(result);



// function addProduct(ignoreBlocked = false) {

// 	console.log('addProduct', ignoreBlocked);

// 	const isAvailable = isProductAvailable();

// 	if (!isAvailable) {
// 		console.log('Товара нет в наличие');
// 		return;
// 	}

// 	if (!ignoreBlocked) {
// 		const blocked = isBlocked();

// 		if (blocked) {
// 			console.log('Вы заблокированы');
// 			return;
// 		}
// 	}
	
	
// 	const possible = possibleToDelivery();

// 	if (!possible) {
// 		console.log('Нет возможности доставить');
// 		return;
// 	}
	

// 	console.log('Товар добавлен в корзину');


// 	return 'Все хорошо';


// 	// fehfueqhfqe
// 	// fehfueqhfqe
// 	// fehfueqhfqe
// 	// fehfueqhfqe
// }


// function isProductAvailable() {
// 		// jfieqjfoiqe 
// 		// fjeqifjoqei
// 		// fjeqifjoieq
// 		const result = true; // то есть продукт доступен

// 		return result;
// }

// function isBlocked() {
// 	// fjeqifjoieq
// 	// fjeqifjoieq
// 	// fjeqifjoieq
// 	const result = false; // то есть не заблокирован

// 	return result;
// }

// function possibleToDelivery() {
// 	// fjeqifjoieq
// 	// fjeqifjoieq
// 	// fjeqifjoieq
// 	const result = true; // то есть доставка возможна

// 	return result;
// }






// function calculate() {
// 	const a = 10;
// 	const b = 15;

// 	const result = a + b;
// 	const result2 = a - b;

// 	return b;


// 	// return undefined;
// 	// return { one: result, two: result2 };

// 	// return [result, result2];

// 	// // fjeqifjeoqifeq
// 	// return result2;
// }

// const sum = calculate();

// console.log(sum);
// const sum2 = calculate();
// const sum3 = calculate();

// console.log(sum, sum2, sum3);

// console.log(sum[0]);
// console.log(sum[1]);

// console.log(sum.one);
// console.log(sum.two);





// calculate2()

// const calculate2 = () => {
// 	const a = 10;
// 	const b = 15;

// 	return a + b;
// }


// function calculate(a = 0, b = 0) {

// 	const result = a * 2;
// 	return result + b;
// }


// const sum = calculate();

// console.log(sum);



// Практика 


function getFilms(title = 'Все фильмы') {
	return {
		filmTitle: title,
		films: getFilmsArray(),
	};
}

function getFilmsArray() {
	const films = [];

	addNewFilm(films, { name: 'Хроники Нарнии' }, 0);
	addNewFilm(films, { name: 'Человек паук' }, 1);
	addNewFilm(films, { name: 'Что-то еще' }, 2);
	addNewFilm(films, { name: 'Плохой фильм' });

	

	return films;
}


function addNewFilm(films, film, index) {
	if (index === undefined) {
		console.log('этот фильм не будет добавлен, тк нет индекса')
		return;
	}

	films[index] = film;
}


// const myFilms = getFilms();


// {
// 	filmTitle: 'Все фильмы',
// 	films: [
// 		{ name: 'Хроники Нарнии' },
// 		{ name: 'Человек паук' },
// 		{ name: 'Что-то еще' },
// 	]
// }
// console.log(myFilms);



// ---

// const myFilms2 = getFilms('Фильмы за сегодня');


// {
// 	title: 'Фильмы за сегодня',
// 	films: [
// 		{ name: 'Хроники Нарнии' },
// 		{ name: 'Человек паук' },
// 		{ name: 'Что-то еще' },
// 	]
// }
// console.log(myFilms);




// getFilmsArray
// const films = [];

// addNewFilm({ name: 'Хроники Нарнии' }, 0);
// addNewFilm({ name: 'Человек паук' }, 1);
// addNewFilm({ name: 'Что-то еще' }, 2);

// // console.log - этот фильм не будет добавлен, тк нет индекса
// addNewFilm({ name: 'Плохой фильм' });









// function a() {
// 	const hello = 10;

// 	function b() {
// 		console.log(hello);
// 	}

// 	b();
// }

// a();















// function calc(a, b, logger) {
// 	logger('Алекс');


// 	return a + b;
// }

// calc(1, 2, function (name) {
// 	console.log(name, 'Я вызвалась');
// });


// calc(1, 2, (name) => {
// 	console.log(name, 'Я вызвалась');
// });


const data = [
	{ id: 10, name: 'Alex', money: 1000 },
	{ id: 11, name: 'John', money: 500 },
	{ id: 55, name: 'Anna', money: 5500 },
];



// getUsersMoney({ id: 11 }, (user) => {
// 	// John has $500

// 	const str = 'John has $' + user.money;
// 	console.log(str);
// }); 

// getUsersMoney({ id: 55 }, (user) => {
// 	// Anna = 5500
// 	const str = user.name + ' = ' + user.money;
// 	console.log(str);
// }); 

function getUsersMoney(userInfo, callback) {
	const id = userInfo.id;

	let result = null;

	for (let i = 0; i < data.length; i++) {
		const user = data[i];

		if (user && user.id === id) {
			result = user;
		}
	}

	const str = callback(result);

	return str;
}


const alexStr = getUsersMoney({ id: 10 }, (user) => {
	// У Alex 1000 P

   const str = 'У ' + user.name + ' ' + user.money + ' P';
   // const str = `У ${user.name} ${user.money} P`;
   
   return str;
});

console.log(alexStr);









// ------ ДЗ

// Создайте функцию, которая принимает строку как параметр и возвращает ее длину.
// getLength('Привет') // 6
// getLength('') // 0
// getLength() // 0

// Создайте функцию, которая принимает массив чисел как параметр и возвращает их среднее значение. (среднее арифметическое)
// average([1,2,3,4,5]) // 3

// Создайте функцию, которая принимает массив строк как параметр и возвращает новый массив, содержащий только строки, длина которых больше 5 символов.
// getStrings(['привет', 'а', 'б', 'Мир'], 3) // ['привет', 'Мир']
// getStrings(['привет', 'а', 'б', 'Мир'], 4) // ['привет']
// getStrings(['привет', 'а', 'б', 'Мир']) // []


// Создайте функцию, которая принимает массив чисел как параметр и возвращает новый массив, содержащий только уникальные значения.
// getUniq([1,2,1,3,2,5]) // [3,5]
// getUniq([1,2,3,4,4]) // [1,2,3]

