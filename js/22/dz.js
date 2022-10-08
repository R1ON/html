// const array = [1,2,3,4,5];
// let result = 0;
// [1,2,3,4,5].forEach((number) => {
//     // result = number + result;
//     result += number;
// });

// console.log(result);

// let result = '';

// ['my', 'name', 'is', 'Alex'].forEach((str) => {
//     // result = result + " " + str;
//     // result += " " + str;

//     if (result === '') {
//         result += str;
//     }
//     else {
//         result += ` ${str}`;   
//     }
// });

// console.log(result.trim());
// console.log(result);

// const badAge = 0;
// const array = [15, 10, 0, 30];

// console.log(array.includes(badAge))

// const result = array.find((number) => {
//     if (number === badAge) {
//         return true;
//     }
// });

// if (result === 0) 
// console.log(result);

// // let resultBoolean = false;

// // if (result !== undefined) {
// //     resultBoolean = true;
// // }

// // console.log(resultBoolean);
// console.log(Boolean(result));

// const result = array.some((number) => {
//     if (number === badAge) {
//         return true;
//     }
// });

// console.log(result);

// Не рекомендую
// const result = array.filter((number) => {
//     if (number === badAge) {
//         return true;
//     }
// });

// console.log(result.length > 0);


// const users = [{
//     name: 'Alex',
//     age: 20,
//  }, {
//     name: 'Anna',
//     age: 30,
//  }, {
//     name: 'John',
//     age: 10
//  }];

//  const names = [];

//  users.forEach((user) => {
//     if (user.age > 18) {
//         names.push(user.name);
//     }
//  });

//  console.log(names);

// const filtered = users.filter((user) => {
//     if (user.age > 18) {
//         return true;
//     }
// });

// const names = filtered.map((user) => {
//     return user.name;
// });

// const names = users
//     .filter((user) => {
//         if (user.age > 18) {
//             return true;
//         }
//     })
//     .map((user) => {
//         return user.name;
//     });


// console.log(names);