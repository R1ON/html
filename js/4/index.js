// Тип данных object
// Объекты {}

// const hello = 'hello JS';


// const test = {
// 	hello,
// 	key1: 'ttst',
// 	key2: 15135,
// 	key3: true,
// 	key4: ['12', 'test'],

// 	'ktes jfieq': 'true',
// 	'test-123': 'test',
// };



// console.log(test);

const cart = {
	money: {
		sum: 500,
		currency: 'Руб',
		allowCurrency: ['Рубли', 'Евро'],
		discount: {
			hasDiscount: true,
			value: 30,
		},
	},
	items: [{
		title: 'Ручку',
		count: 2,
		price: 100,
	}, {
		title: 'Книгу',
		count: 1,
		price: 300,
	}],
};

cart.name = true;

console.log(cart);

// console.log(cart.money.discount.value);
// console.log(cart.items[1].title);

// console.log(cart['money']['sum']);
// console.log(cart.money.sum);











