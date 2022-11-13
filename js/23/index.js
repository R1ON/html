// reduce




// const test = ['Апельсин', 'Банан', 'Персик'];

// const result = test.reduce((acc, item) => {
//     acc[`name-${item}`] = item;
//     return acc;
// }, {});

// const result = test.reduce((acc, item) => {
//     acc += item;
//     return acc;
// }, 'Фрукты: ');


// console.log(result);


























// посчитать
// const test = [1,2,3,4,5];

// // const result = test.reduce((acc, number) => {
// //     acc.push(number.toString());
// //     return acc;
// // }, []);

// const result = [];

// test.forEach((number) => {
//     result.push(number.toString());
// });

// console.log(result);














// flat()
// concat()
// const test2 = [
//     ['Апельсин'],
//     ['Персик'],
//     ['Банан']
// ];

// console.log(test2.flat());

// const result = [];

// test2.forEach((array) => {
//     result.push(array[0]);
// });

// const result = test2.reduce((acc, array) => {
//     acc.push(array[0]);

//     return acc;
// }, []);

// const result = test2.reduce((acc, array) => {
//     acc += ' ' + array[0]; // ' Апельсин'

//     return acc;
// }, '');


// console.log(result);













const goodProducts = ['Салат', 'Вода', 'Шоколад', 'Булка'];

const test3 = [{
    title: 'Сникерс',
    composition: ['Шоколад', 'Сахар', 'Нуга', 'Что-то еще'],
}, {
    title: 'Бургер',
    composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
}, {
    title: 'Липтон',
    composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка магии'],
}];

// const result = [];

// test3.forEach((product) => {

//     const composition = [];

//     product.composition.forEach((item) => {
//         composition.push({
//             name: item,
//         });
//     });

//     result.push({
//         title: product.title,
//         composition,
//         // composition: composition,
//     });
// });

const result = test3.reduce((acc, product) => {

    const composition = product.composition.reduce((acc2, item) => {
        // const good = goodProducts.some((goodP) => {
        //     if (goodP === item) {
        //         return true;
        //     }
        // })
    
        acc2.push({
            name: item,
            good: goodProducts.includes(item),
        });
    
        return acc2;
    }, []);

    acc.push({
        title: product.title,
        // composition: composition,
        composition,
    })

    return acc;
}, []);

console.log(result);


// const test3 = [{
//     title: 'Сникерс',
//     composition: [
//         { name: 'Шоколад', good: true },
//         { name: 'Сахар', good: false },
//         { name: 'Нуга', good: false },
//         { name: 'Что-то еще', good: false }
//     ],
// }, {
//     title: 'Бургер',
//     composition: [{
//         name: 'Булка',
//         good: true,
//     }, {
//         name: 'Котлета',
//         good: false,
//     }, {
//         name: 'Салат',
//         good: true,
//     }, {
//         name: 'Другие овощи',
//         good: false,
//     }],
// }, {
//     title: 'Липтон',
//     composition: [
//         {
//             name: 'Вода',
//             good: true,
//         },
//         {
//             name: 'Сахар',
//             good: false,
//         },
//         {
//             name: 'Сок лимона',
//             good: false,
//         },
//         {
//             name: 'Щепотка магии',
//             good: false,
//         }
//     ],
// }];
























const countries = [{
    country: "Гана",
    weather: 19,
    warm: true,
    cities: ["Аккра", "Тамале", "Кумаси"],
}, {
    country: "Гренландия",
    weather: 20,
    warm: false,
    cities: ["Нуук", "Какорток"],
}, {
    country: "Мали",
    weather: 25,
    warm: true,
    cities: ["Мопти", "Бамако", "Джене"],
}, {
    country: "Дания",
    weather: 5,
    warm: false,
    cities: ["Копенгаген"],
}];


// Во всех заданиях можно использовать только reduce!

// Задание 1 - получить информацию про страны
// [
//     "В стране Гана +19 градусов. В составе такие города: Аккра, Тамале, Кумаси",
//     "В стране Гренландия -20 градусов. В составе такие города: Нуук, Какорток",
//     "В стране Мали +25 градусов. В составе такие города: Мопти, Бамако, Джене",
//     "В стране Дания -5 градусов. В составе такие города: Копенгаген",
// ]

// Задание 2 - найти самую жаркую и холодную страну
// Вывод: "Самая холодная страна - Гренландия"
// Вывод: "Самая жаркая страна - Мали"
