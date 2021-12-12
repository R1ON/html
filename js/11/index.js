// Аниномная, IIFE (Самовызывающаяся), рекурсивная
// return


// (function() {
// 	const result = 5;
// 	console.log(result);
// })();


// (function() {
// 	const result = 0;
// 	console.log(result);
// })();

let i = 0;

const test = () => {
	i++;
	console.log('tet');

	if (i === 10) {
		return;
	}


	test();
}

test();

const name = 'John';
let final = 0;


if (name === 'Alex') {
	const product = createProduct('Арбуз', 100, 1);
	const alexCart = [product];

	const debt = 150;

	final = calculateFinalPrice(alexCart);
	final += debt;
}
else if (name === 'John') {
	const product = createProduct('Хлеб', 30, 2);
	const johnCart = [product];

	const debt = 50;

	// calculateFinalPrice(johnCart, (price) => {
	// 	console.log('Финальная цена:', price + debt);
	// });

	final = calculateFinalPrice(johnCart);

	console.log('Финальная цена:', final + debt);
}
else {
	const product = createProduct('Молоко', 50, 1);
	const userCart = [product];

	final = calculateFinalPrice(userCart);
}

function createProduct(name, price, count) {
	if (name === '') {
		name = 'Неизвестный продукт';
		console.log('Вы задали неправильное имя продукта');
	}

	if (typeof price !== 'number') {
		price = 0;
		console.log('Вы задали неправильную цену');
	}

	if (typeof count !== 'number') {
		count = 0;
		console.log('Вы задали неправильное количество');
	}

	return {
		name,
		price,
		count,
	};
}

function calculateFinalPrice(cart) {
	let finalPrice = 0;

	if (!cart || cart.length === 0) {
		return finalPrice;
	}

	for (let i = 0; i < cart.length; i++) {
		const product = cart[i];

		finalPrice += (product.price * product.count);
	}

	return finalPrice;
}


// const log = (time) => {
// 	return (message) => {
// 		return time + ' - ' + message;
// 	}
// }

// const logWithTime = log('9:00');

// setTimeout(() => {
// 	const message = logWithTime('Пользователь нажал войти');
// 	console.log(message);
// }, 1000);

// setTimeout(() => {
// 	const message = logWithTime('Пользователь нажал выйти');
// 	console.log(message);
// }, 2000);

























