// in, hasOwnProperty
// .toString, JSON.stringify, JSON.parse
// Ключ объекта
// for in
// Object.keys, Object.entries, Object.values
// {} === {} - false

// const key = [1,2,3];

// const value = 'Привет';

// const obj = {
//     // value: value
//     value,
// };

// console.log(obj);
// console.log(typeof obj);

const user = {
    name: 'alex',
    age: null,
    state: 0,
    family: {
        dad: {
            name: 'feqf'
        },
        mom: {
            name: 'feqfqe',
        }
    }
};

// console.log('name' in user);
// console.log(user.hasOwnProperty('id'));

// if ('age' in user) {
//     console.log(user.age);
// }

// if (typeof user.age === 'number' || user.age === undefined) {
//     console.log(user.age);
// }

// if ('state' in user) {
//     console.log('Привет');
// }
// else {
//     user.state = null;
// }

// const key = 'state';

// console.log(key in user);

// console.log(user.toString());
// const str = JSON.stringify(user);
// console.log(JSON.parse(str));

// for (let i in user.family) {
//     const value = user.family[i];
//     console.log(i, value);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// [
    // ['name', 'alex'],
    // ['age', null],
    // ['state', 0],
// ]

// const entries = Object.entries(user);

// for (let i = 0; i < entries.length; i++) {
//     const entry = entries[i];
//     const key = entry[0];
//     const value = entry[1];

//     console.log(key, value);
// }


// const obj1 = { test: 'hello' }; // 1
// const obj2 = { test: 'hello' }; // 2




// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));































const userInformation = {
    name: 'Иван',
    surname: 'Иванов',
    age: 15,
    family: {
        dad: {
            name: 'Александр',
            surname: 'Иванов',
            age: undefined,
        },
         mom: {
            name: 'Наталья',
            surname: 'Иванова',
        },
         brother: {
            name: 'Константин',
            surname: 'Иванов',
            age: '10',
        },
        sister: {
            name: 'Константин',
            surname: 'Иванов',
            age: '10',
        },
   }
 }

 const listOfFamily = {
    dad: 'Отец',
    mom: 'Мать',
    brother: 'Брат',
 };

 function getInfo(info) {
    let str = `У ${info.name} ${info.surname}`;
    let family = '';
    let sizeOfFamily = 0;

    for (let familyMember in info.family) {
        const data = info.family[familyMember];
        const member = listOfFamily[familyMember];

        if (!member) {
            console.error(`Добавьте ${familyMember} в словарь listOfFamily`);
            continue;
        }

        sizeOfFamily++;
        family += ` ${member} - ${data.name} ${data.surname}`;

        if (
            typeof data.age === 'number' ||
            typeof data.age === 'string'
        ) {
            family += ` (${data.age} лет).`
        }
        else {
            family += ` (возраст не известен).`
        }
    }

    str += ` ${sizeOfFamily} член(-а/-ов) семьи.`;
    str += family;

    return str;
 }

 const data = getInfo(userInformation);
 console.log(data);

// У {user.name + user.surname} {family.length} член(-а/-ов) семьи.
// Отец - {dad.name + dad.surname} (возраст не известен).
// Мать - {mom.name + mom.surname} (возраст не известен).
// Брат - {brother.name + brother.surname} ({brother.age} лет).
