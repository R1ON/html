// Array.isArray()
// push() - добавить в конец
// unshift() - добавить в начало
// pop(), - удалить конец
// shift() - удалить начало
// concat()
// includes()
// split() и join()

// flat()
// reverse()

// forEach()

// sort()
// slice(), splice() - [1,2,3,4,5,6] => [2,3] || [2] || [1,3]


// const array = {};
// console.log(array);
// console.log(Array.isArray(array)); // false

// const myArray = [1,2, { hello: 'world'}];
// const myArray2 = [true,5,'6'];

// myArray.push({
//     hello: 'world'
// });
// myArray.unshift(0);

// myArray.pop();
// myArray.shift();

// const final = myArray.concat(myArray2);
// console.log(final);

// const myArray = [1,2,3, 'hello'];
// console.log(myArray.includes('hello'))

// const fio = 'Иван Иванович Пупкин';

// const fioArray = fio.split(' ');
// const fioArray = ['Иван', 'Иванович', 'Пупкин'];

// console.log(`${fioArray[0]} - ${fioArray[1]} - ${fioArray[2]}`);
// console.log(fioArray.join(' - '));

// const myArray = [[1,2], [[[[[3]]]]], 4, [[5]]];
// console.log(myArray.flat(Infinity));

// const myArray = [1,2,3];
// console.log(myArray.reverse());

// const myArray = ['1','2',true,4];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];

//     console.log(element);
// }


// myArray.forEach((element) => {
//     console.log(element);
// });













// Задача №1 (подсказка в файле help.txt)
const fromYou = 'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';
// Решение в файле dz.js
// '#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css';
