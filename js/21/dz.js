// Задача №1 (подсказка в файле help.txt)
const fromYou = 'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';
const splitted = fromYou.split(',');

const final = [];

console.log(splitted);

splitted.forEach((tag) => {
    const value = tag.split(' ').join('_');
    const changedTag = '#' + value.toLocaleLowerCase();

    final.push(changedTag);
});

console.log(final);

const str = final.join(' ');

console.log(str);

// '#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css';