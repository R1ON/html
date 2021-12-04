// Стрелочные функции


const name = 'John';
let final = 0;


// if (name === 'Alex') {
// 	const product = createProduct('Арбуз', 100, 1);
// 	const alexCart = [product];

// 	const debt = 150;

// 	final = calculateFinalPrice(alexCart);
// 	final += debt;
// }
// else if (name === 'John') {
// 	const product = createProduct('Хлеб', 30, 2);
// 	const johnCart = [product];

// 	const debt = 50;

// 	calculateFinalPrice(johnCart, (price) => {
// 		console.log('Финальная цена:', price + debt);
// 	});
// }
// else {
// 	const product = createProduct('Молоко', 50, 1);
// 	const userCart = [product];

// 	final = calculateFinalPrice(userCart);
// }

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

function calculateFinalPrice(cart, callback) {
	setTimeout(() => {
		let finalPrice = 0;

		for (let i = 0; i < cart.length; i++) {
			const product = cart[i];

			finalPrice += (product.price * product.count);
		}

		callback(finalPrice);
	}, 1000);
}



// function add(a, b) {
// 	return a+b;
// }

// const add = (a, b) => {
// 	return a+b;
// };

// const add = (a, b) => (
// 	a + b + 2 + 3 + 4 + 5 + 6 + 7
// );

// function add(a) {
// 	return a + 5;
// }

// const add = a => a + 5;


// console.log(add(5));


























