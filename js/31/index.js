// fetch, axios, XMLHttpRequest
// methods: GET, POST, DELETE, PUT
// status: 200, 500, 404
// body, 
// api
// network, 3G



// 

const newPost = {
    "userId": 1,
    "id": 1,
    "title": "helllo",
    "body": "fkemqfkeqmfkeqmfq"
};

// const test = JSON.stringify(newPost);

// console.log(test)



// fetch(
//     'https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({ title: 'fejqofjqeifq' }),
//     }
// ).then((data) => {
//     if (data.status === 200) {
//         return data.json();
//     }
//     else {
//         console.error('fhueqhfiueqhiufqe')
//     }
//     console.log(data)
    
// }).then((info) => {
//     console.log(info)
// });


// ---

const url = `
https://api.open-meteo.com/v1/forecast?
latitude=55.751244&
longitude=37.618423&
current=temperature_2m,is_day,wind_speed_10m
`;

// fetch(url)
//     .then((data) => {
//         return data.json();
//     })
//     .then((info) => {
//         renderWeather(info.current);
//     });


// function renderWeather(data) {
//     const div = document.createElement('div');
//     div.textContent = `
//         Температура: ${data.temperature_2m}
//         Скорость ветра: ${data.wind_speed_10m}
//         Сейчас ${data.is_day === 0 ? 'ночь' : 'день'}
//     `;

//     document.body.append(div);
// }


// axios(
//     'https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         data: { title: 'fejqofjqeifq' }
//     }
// ).then((response) => {
//     console.log(response);
// })

// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};
