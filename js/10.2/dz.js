// ------ ДЗ

// Создайте функцию, которая принимает строку как параметр и возвращает ее длину.
// getLength('Привет') // 6
// getLength('') // 0
// getLength() // 0

// Создайте функцию, которая принимает массив чисел как параметр и возвращает их среднее значение. (среднее арифметическое)
// average([1,2,3,4,5]) // 3

// Создайте функцию, которая принимает массив строк как параметр и возвращает новый массив, содержащий только строки, длина которых больше 5 символов.
// getStrings(['привет', 'а', 'б', 'Мир'], 3) // ['привет', 'Мир']
// getStrings(['привет', 'а', 'б', 'Мир'], 4) // ['привет']
// getStrings(['привет', 'а', 'б', 'Мир']) // []


// Создайте функцию, которая принимает массив чисел как параметр и возвращает новый массив, содержащий только уникальные значения.
// getUniq([1,2,1,3,2,5]) // [3,5]
// getUniq([1,2,3,4,4]) // [1,2,3]


// function getLength(string) {
//     if (!string) {
//         return 0;
//     }

//     return string.length;
// }

// console.log(getLength());


// ---


// function average(array) {
//     let sum = 0;

    // for (let i = 0; i < array.length; i++) {
    //     const value = array[i];

    //     sum += value;
    // }

//     return sum / array.length;
// }

// console.log(average([1,2,3,4,5]));

// ---


// function getStrings(array, maxLength = 0) {
//     const result = [];

//     if (maxLength === 0) {
//         return result;
//     }

//     for (let i = 0; i < array.length; i++) {
//         const value = array[i];

//         if (value.length >= maxLength) {
            // const index = result.length;
            // result[index] = value;

            // // result.push(value);
//         }
//     }

//     return result;
// }

// console.log(getStrings(['привет', 'а', 'б', 'Мир'], 3)) // ['привет', 'Мир']
// console.log(getStrings(['привет', 'а', 'б', 'Мир'], 4)) // ['привет']
// console.log(getStrings(['привет', 'а', 'б', 'Мир'])) // []


// ---

function getUniq(array) {
    const result = [];
    const obj = {};

    for (let i = 0; i < array.length; i++) {
        const value = array[i]; // 1

        if (obj[value]) {
            obj[value] = obj[value] + 1;
        }
        else {
            obj[value] = 1;
        } 
    }

    for (const key in obj) {
        const value = obj[key];

        if (value === 1) {
            const index = result.length;
            // result[index] = Number(key);
            result[index] = +key;

            // result.push(Number(key));
            // result.push(+key);
        }
    }

    return result;
}

console.log(getUniq([1,2,1,3,2,5,1])) // [3,5]
console.log(getUniq([1,2,3,4,4])) // [1,2,3]