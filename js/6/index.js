// Условия (if else)

// 7. Логические (&& || !)



// if (a < b) {
// 	console.log('test');
// }
// else if (a === b) {
// 	console.log('test2');
// }
// else if (a < b) {
// 	console.log('test3');
// }
// else {
// 	console.log('test4');
// }

// if (userData.value === inputData.value) console.log('test');

// 59 - true
// 1 - true
// 0 - false
const a = 1;
const b = 1;

// && И
// if (a === 0 && a === b && b === 0) {
// 	console.log('hello');
// }

// || ИЛИ
// if (a === 0 || b === 0) {
// 	console.log('hello');
// }

// true -> false
// false -> true
// if (!(a === 0)) {
// 	console.log('hello');
// }

const MIN_AGE = 18;

const userData = {
	name: 'Alex',
	age: 19,
	married: true,
	sex: 'female',
};



// if (
// 	userData.age >= MIN_AGE &&
// 	userData.sex === 'male' &&
// 	!userData.married
// ) {
// 	console.log('Вам доступен контент');
// }

// if (
// 	userData.name !== 'John' || userData.sex === 'female'
// ) {
// 	console.log('Вам доступен контент');
// }

if (
	!(userData.age === MIN_AGE && userData.name === 'John')
) {
	console.log('Вам доступен контент');
}












console.log('end');



