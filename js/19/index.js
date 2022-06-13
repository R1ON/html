// Кавычки
// Экранирование
// Конкатенация
// toString, length
// toLowerCase, toUpperCase
// split, repeat
// charAt, indexOf, includes, startsWith, endsWith
// slice // (substring)
// replace, replaceAll
// padStart, padEnd, trim, trimStart, trimEnd

// const str = "feq\'fqe";

// console.log(str);
// console.log(typeof str);

// const one = '1';
// const two = '2';
// const three = '3';
// const result = one + ' - ' + two + ' - ' + three;
// const result = `${one} - ${two} - ${three}`;
// const result = `${one}${two}${three}`;
// console.log(result);

// const channel = 'Какие-то уроки';
// console.log(channel.toLowerCase());
// console.log(channel.toUpperCase());
// const splitExample = '[12, 41, 12, 010, 102, 12]';
// console.log(splitExample.split(' '));
// const test = '*'.repeat(5);
// console.log(test);

// console.log(channel.indexOf('-'));
// console.log(channel.charAt(5));

// const url1 = 'https://neprivet.com/';
// const url2 = 'https://neprivet.com/img/bad-good.png';

// console.log(url2.endsWith('bad-good.png/feqfqe'));

// if (url2.includes('.com')) {
// // feqfeqfeq
// }
// else if (url2.includes('.ru')) { }

// const login = '   kakie-toYroki        ';
// console.log(login.slice(3, -4));
// console.log(login.trim());

const phone = '8(800)555-35-35';
console.log(
    phone
        .replaceAll('-', ' ')
        .replaceAll('(', ' ')
        .replaceAll(')', ' ')
);

// const test = 'test';
// console.log(test.padEnd(10, '_'));
