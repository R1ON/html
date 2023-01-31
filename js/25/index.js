// деструктуризация массивов
// пропуск элементов
// лишние значения
// значение по умолчанию

// деструктуризация объектов
// значение по умолчанию
// переименование объектов

// const test = [1,2,3,4];
// const obj = { user_name: 1, user_age: 2, c: 3 };
// const userName = obj.user_name;


// const fileExtension = test[0];
// const fileExtension = test[1];
// const fileExtension = test[2];

// if (test[0] === 'JSON') {
//     fjeioqjfoiqejfoqe
// }

// const [three, first, two, name] = [1,2,3,4];

// console.log(three)

// const { user_age, user_name } = { user_name: 1, user_age: 2 };
// console.log(user_name, user_age)

// const test = [1,2,3,4];
// const one = test[0];
// const two = test[1];
// const three = test[2];
// const four = test[3];

// const [three, first, two, name, five] = [1,2,3,4];
// const { user_age, user_name, user_has_car } = { user_name: 1, user_age: 2 };

// console.log(five, user_has_car);


// const [,,, jack] = ['Alex', 'John', 'Jack'];
// // const jack = users[2];

// console.log(jack);

// const { user_name } = { user_name: 1, user_age: 2 };

const SERVER_ARRAY = ['Alex', 20, true];
const SERVER_OBJ = { user_age: 20 };



















// const [userName = 'unknown', userAge = 0, hasCar = false] = SERVER_ARRAY;
// console.log(userName, userAge, hasCar);

// const { user_name = 'unknown', user_age = 0 } = SERVER_OBJ;
// console.log(user_name, user_age);

// const { user_name: userName, user_age: userAge } = SERVER_OBJ;
// console.log(userName, userAge);


const {
    user_name: userName = 'unknown',
    user_age: userAge = 0,
} = SERVER_OBJ;
console.log(userName, userAge);