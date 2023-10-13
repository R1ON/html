// setTimeout, clearTimeout
// setInterval, clearInterval

// const id = setTimeout(() => {
//     console.log('2');
// }, 0);

// clearTimeout(id);

// const id2 = setInterval(() => {
//     console.log('5');
// }, 1000);

// console.log('1', id, id2);

// console.log('3');

// setTimeout(() => {
//     clearInterval(id2);
// }, 4000);


function startTimer(timerId, delay, stopDelay) {
    const id = setInterval(() => {
        console.log(timerId, 'Запрос на сервер');
    }, delay);

    setTimeout(() => {
        console.log('Запросы на сервер остановлены');
        clearInterval(id);
    }, stopDelay);
}

startTimer(1, 1000, 5000);
startTimer(2, 2000, 6000);
