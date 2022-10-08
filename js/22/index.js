// find() => {}
// some() => true/false
// filter() => [1,2,3,4] => [1,2,3]
// map() => ['15', '123'] => [15, 123]


// const prefix = 'PREF_';
// const myArray = ['hi', 'hello'];
// ['PREF_hi', 'PREF_hello']

// myArray.forEach((element) => {
//     // return - не нужно
// });

// const newArr = myArray.map((element) => {
//     return prefix + element;
// });

// ---

// const myArray = [{
//     name: 'alex',
//     hasAccount: true,
// }, {
//     name: 'john',
//     hasAccount: false,
// }];


// [1,2,3] => ['1', '2', '3']

// const newArr = myArray.map((element) => {
//     if (element.hasAccount) {
//         return element.name;
//     }

//     // return undefined;
// });

// [1,2,3] => [1,3]
// const newArr = myArray.filter((user) => {
//     // return true;
//     // return false;

//     // if (user.hasAccount) {
//     //     return true;
//     // }

//     // return user.hasAccount ? true : false;
// });

// const newArr = myArray.filter((user) => {
//     if (user.name.length > 4) {
//         return true;
//     }
// });

// console.log(newArr);

// ---

// const myArray2 = [1,2,'3', { hello: 'world' }];

// // console.log(myArray2.includes({ hello: 'world' }));

// // find(true/false) => { hello: 'world' }
// // some(true/false) => true / false


// const elem = myArray.find((user) => {
//     if (user.name === 'alex') {
//         return true;
//     }
    
//     // if (typeof value === 'object') {
//     //     return true;
//     // }
// });

// console.log(elem);

// if (elem) {
//     // ...
// }


// const data = [{
//     id: 1,
//     title: 'Новость дня',
//     author: 'Alex',
//     likes: 50
// }, {
//     id: 2,
//     title: 'Важная новость',
//     author: 'Anna',
//     likes: 150
// }, {
//     id: 3,
//     title: 'Важная новость #2',
//     author: 'John',
//     likes: 140
// }];

// const filtered = data.filter((elem) => {
//     if (elem.likes > 100) {
//         return true;
//     }

//     // return elem.likes > 100;
//     // return elem.likes > 100 ? true : false;
// });

// const data2 = filtered.map((elem) => {
//     return {
//         id: elem.id,
//         title: elem.title,
//     };
// });

// console.log(filtered);

// const data3 = filtered.map((elem) => {
//     return elem.author;
// });

// const bestAuthor = data.find((elem) => {
//     if (elem.likes >= 150) {
//         return true;
//     }
// })


// console.log(bestAuthor);

// console.log(data2);

// [{
//     id: 2,
//     title: 'Важная новость',
// }, {
//     id: 2,
//     title: 'Важная новость #2',
// }]

// Anna, John => Дать премию
























// 1. Определить, какие функции подходят для задач (forEach, map, ...):
// 2. [1,2,3,4,5] => 15
// 3. ['my', 'name', 'is', 'Alex'] => 'my name is Alex'
// 4. const badAge = 20;
//    [15, 10, 20, 30] - тут есть badAge? true/false
// 5.
// [{
//    name: 'Alex',
//    age: 20,
// }, {
//    name: 'Anna',
//    age: 30,
// }, {
//    name: 'John',
//    age: 10
// }] => age > 18 => вывести только name
// => ['Alex', 'Anna']