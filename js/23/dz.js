// const countries = [{
//     country: "Гана",
//     weather: 10,
//     warm: true,
//     cities: ["Аккра", "Тамале", "Кумаси"],
// }, {
//     country: "Гренландия",
//     weather: 20,
//     warm: false,
//     cities: ["Нуук", "Какорток"],
// }, {
//     country: "Мали",
//     weather: 25,
//     warm: true,
//     cities: ["Мопти", "Бамако", "Джене"],
// }, {
//     country: "Дания",
//     weather: 5,
//     warm: false,
//     cities: ["Копенгаген"],
// }];


// const result = countries.reduce((acc, data) => {

//     // const cities = data.cities.reduce((citiesAcc, city, index) => {
//     //     if (index === 0) {
//     //         citiesAcc += city;
//     //     }
//     //     else {
//     //         citiesAcc += `, ${city}`;
//     //     }

//     //     return citiesAcc;
//     // }, '');

//     // const cities = `В составе такие города: ${data.cities.join(', ')}`;

//     const coldOrHotSing = data.warm === true ? '+' : '-';
//     // const coldOrHotSing = data.warm ? '+' : '-';
//     const weather = `${coldOrHotSing}${data.weather} градусов`;
//     const string = `В стране ${data.country} ${weather}. ${cities}`;

//     acc.push(string);

//     return acc;
// }, []);

// console.log(result[2]);


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


// const hotCountry = countries.reduce((acc, data) => {
//     if (data.warm && data.weather > acc.temp) {
//         acc = {
//             temp: data.weather,
//             result: `Самая жаркая страна - ${data.country}`,
//         };
//     }

//     return acc;
// }, {
//     temp: 0,
//     result: '',
// });

// console.log(hotCountry.result);


// const coldCountry = countries.reduce((acc, data) => {

//     // data.warm === false 
//     if (!data.warm && data.weather > acc.temp) {
//         acc = {
//             temp: data.weather,
//             result: `Самая холодная страна - ${data.country}`,
//         };
//     }

//     return acc;
// }, {
//     temp: 0,
//     result: '',
// });

// console.log(coldCountry.result);

// const hotAndColdCountry = countries.reduce((acc, data) => {

//     if (!data.warm && data.weather > acc.coldTemp) {
//         // acc = {
//         //     temp: data.weather,
//         //     result: `Самая холодная страна - ${data.country}`,
//         // };

//         // acc['coldTemp'] = data.weather;
//         acc.coldTemp = data.weather;
//         acc.coldResult = `Самая холодная страна - ${data.country}`;
//     }

//     if (data.warm && data.weather > acc.hotTemp) {
//         // acc = {
//         //     temp: data.weather,
//         //     result: `Самая жаркая страна - ${data.country}`,
//         // };
//         acc.hotTemp = data.weather;
//         acc.hotResult = `Самая жаркая страна - ${data.country}`;
//     }

//     return acc;
// }, {
//     coldTemp: 0,
//     coldResult: '',
//     hotTemp: 0,
//     hotResult: '',
// });

// console.log(hotAndColdCountry);





// Дополнительное Д/З - посчитать количество городов
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

const result = countries.reduce((acc, data) => {

    acc.push({
        country: data.country,
        cities: data.cities.length,
    });

    return acc;
}, []);

console.log(result);
    
// [{
// country: "Гана",
// cities: 3,
// }, {
// country: "Гренландия",
// cities: 2,
// }, {
// country: "Мали",
// cities: 3,
// }, {
// country: "Дания",
// cities: 1,
// }];