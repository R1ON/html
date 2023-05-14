// spread

// const user = {
//     name: 'alex',
//     age: 18,
//     car: 'nissan'
// };

// const admin = {
//     ...user,
// };

// console.log(user);
// console.log(admin === user);

// const cars = ['nissan', 'BMW', 'porshe'];
// const favourite = ['food', 'code', cars[0], cars[1], cars[2]];

// cars.forEach((car) => {
//     favourite.push(car);
// })

// const favourite = [...cars];

// console.log(cars);
// console.log(favourite === cars);


// ------------
// rest

// function printUser(params) {
//     console.log(params.name, params.age);

//     for (const key in params) {
//         console.log(key);
//     }
// }

const user = {
    name: 'Alex',
    age: 18,
    hasCar: true,
};

const cars = ['nissan', 'BMW', 'porshe'];

// const [nissan, ...rest] = cars;

// console.log(rest);

// const { hasCar, ...rest } = user;

// printUser(rest);

function a({ one, two, ...rest }) {
    console.log(one, two)
    return b(rest);
}


// function printUser({ hasCar, ...rest }) {
//     console.log(rest);
// }

// function printCars([nissan, ...rest]) {
//     console.log(rest);
// }

// printUser(user);
// printCars(cars);



function calculate(...rest) {
    console.log(rest);
    // return num1 + num2 + num3 + num4 + num5;
}

console.log(calculate('alex', 15, true));