// Number
// parseInt, Math.ceil, toFixed, Number.isInteger, Math.round, toString, Number, Math.random, Math.floor
// Math.pow, parseFloat, Number.isNaN

// String
// endsWith, padStart, concat, экранирование, length, indexOf, toString, Number, toUpperCase, toLowerCase
// includes, trim, repeat, replaceAll, startsWith, trimStart, конкатенация, charAt, replace, padEnd, trimEnd, split

// Object
// Object.values, Object.entries, for in, toString, JSON.parse, JSON.stringify, Object.keys

// Array
// flat, forEach, concat, map, some, unshift, length, indexOf, toString, push, pop,
// includes, reduce, find, Array.isArray, filter, shift, reverse, join















// --------------------------------------------------

const discounts = [
    [5, { value: 100, cond: 150 }], 
    [10, 200],
    [15, 300],
    [20, 500],
];

const games = [
    {
        id: 1,
        name: ' death stranging   ',
        price: '1000rub',
        description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
        link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
        discountType: null,
        hashTags: ['Шутер', '', ['Приключения,Доставка еды']],
    },
    {
        id: 2,
        name: 'the last of us   ',
        price: 300,
        description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
        link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
        discountType: 20,
        hashTags: ['Стелс', 'Экшен', 'Приключения'],
    },
    {
        id: 3,
        name: 'death stranging',
        price: null,
        description: null,
        discountType: null,
        hashTags: [],
    },
    {
        id: 4,
        name: 'SHREK 2: THE GAME',
        price: '321',
        description: 'Игра про зеленого мужика, который всем нравится',
        discountType: 5,
        hashTags: [['Шутер,Приключения'], 'Хоррор', 'Криминал'],
    },
    {
        id: 5,
        name: 'GTA 3',
        price: 20.512830102,
        description: 'Игра про безумного мужика, который всем нравится',
        discountType: 5,
        hashTags: undefined,
    },
];



// Итог
// 1. Форматируем данные до нормального вида
// 1.1. Цена должна быть числом
// 1.2. Формируем финальную цену, учитывая скидку
// 1.3. hashTags должен быть всегда плоским массивом
// 1.4. Имя игры не должно содержать пробелов по бокам
// const formattedGames = [
//     {
//         id: 1,
//         name: 'death stranging',
//         finalPrice: 1000,
//         description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
//         link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
//         hashTags: ['Шутер', 'Приключения', 'Доставка еды'],
//     }, 
//     {
//         id: 4,
//         name: 'SHREK 2: THE GAME',
//         finalPrice: 221, // Тут изменилась цена из-за скидки
//         description: 'Игра про зеленого мужика, который всем нравится',
//         hashTags: ['Шутер', 'Приключения', 'Хоррор', 'Криминал'],
//     },
//     {
//         id: 5,
//         name: 'GTA 3',
//         finalPrice: 20.51, // Цена не изменилась, так как условие скидки не проходит
//         description: 'Игра про безумного мужика, который всем нравится',
//         hashTags: [],
//     },
// ];

// 2. Формируем массив с проблемными играми
// const problemGames = [
//     {
//         id: 2,
//         reasons: ['Цена уходит в минус'],
//         name: 'the last of us   ',
//         price: 300,
//         description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
//         link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
//         discountType: 20,
//         hashTags: ['Стелс', 'Экшен', 'Приключения'],
//     },
//     {
//         id: 3,
//         reasons: ['Дубликат'],
//         name: 'death stranging',
//         price: null,
//         description: null,
//         discountType: null,
//         hashTags: [],
//     },
// ];
// 2.1. Выводим в консоль данные, про эти проблемные игры в виде:
// 'Игра "the last of us" имеет проблемы с данными: Цена уходит в минус.'
// 'Игра "death stranging" имеет проблемы с данными: Дубликат, Отсутствие данных.'

// 3. Формируем список жанров (Ключ - название жанра. Значение - id игры)
// 3.1. Название жанров мы должны вытащить из массива игр. А не формировать руками.
// const genres = {
//     'Шутер': [1, 4],
//     'Приключения': [1, 4],
//     'Доставка еды': [1],
//     'Хоррор': [4],
//     'Криминал': [4],
// };













// Доп. задание.
// 4. Визуально отобразить это. Как угодно :)