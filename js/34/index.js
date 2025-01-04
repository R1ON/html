// console.log('Подпишись на канал, пожалуйста ))))')

// class {}
// constructor
// new
// инстанс
// this
// потеря контекста
// instanceof

// extends
// Наследование классов – это способ расширения одного класса другим классом.
// Таким образом, мы можем добавить новый функционал к уже существующему.
// private / public
// super
// static
// get / set





// function user(name, age) {
//   const getFullInfo = () => {
//     return `${name}-${age}`;
//   }

//   return { name, age, getFullInfo };
// }

// function admin(name, age, id) {
//   const data = user(name, age);

//   const blockUser = (id) => {
//     // return fkeqokfpoeq
//   }

//   return { ...data, adminId: id, blockUser };
// }

// const alex1 = user('Алекс', 20);
// const john1 = admin('Джохн', 25);


// console.log(alex1);
// console.log(john1);


// class User2 {
//   name = null;
//   age = null;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getFullInfo() {
//     return `${this.name}-${this.age}`;
//   }
// }

// class Admin extends User2 {
//   adminId = null;

//   constructor(name, age, id) {
//     super(name, age);

//     this.adminId = id;
//   }

//   blockUser = (id) => {
//     // fjeqifjqeio id
//   }
// }

// const alex2 = new User2('Алекс', 20);
// const john2 = new Admin('Джохн', 25, 'john2');

// console.log(alex2);
// console.log(john2);



// class Product {
//   name, price
// }

// class Shoes {
//   size, season
//   getPrice = () => {}
// }

// class Phone {
//   model, memory
//   getPrice = () => {}
// }

// const sneakers = new Shoes({
//   name: 'Кеды', season: 'Лето',
//   size: 41, price: 500
// });

// console.log(sneakers.getPrice()); // Кеды (Лето) - 41 размер - 500 Руб

// const iphone = new Phone({
//   model: 'iphone-4s',
//   memory: '128GB', price: 1000
// });

// console.log(iphone.getPrice()); // Iphone (4s) - 128GB - 1000 Руб
// console.log(iphone.model); // '4s'
// console.log(iphone.name); // 'iphone'










// ---- 2 Часть ---- //
// ---- 2 Часть ---- //
// ---- 2 Часть ---- //
// ---- 2 Часть ---- //
// ---- 2 Часть ---- //











// class Product {
//   name = '';
//   price = 0;
//   currency = 'RUB';

//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getPrice() {
//     return `${this.price} ${this.currency}`;
//   }


//   getData() {
//     return 'fkeoqfkoqef';
//   }
// }

// class Shoes extends Product {
//   #size = 0;
//   season = null;

//   constructor(data) {
//     super(data.name, data.price);

//     this.#size = data.size;
//     this.season = data.season;
//   }

//   #getData = () => 0;

//   #testData = () => 'fkoeqkfoqe';


//   canBuy = () => {
//     return true;
//   }

//   getPrice = () => {
//     console.log(this.#size);
//     console.log(this.#testData())

//     const newPrice = super.getPrice();

//     // console.log(super.getData())

//     return `${this.name} (${this.season}) - ${this.#size} размер - ${newPrice}`;
//   };

//   // changeSize = (size) => {
//   //   if (size < 26 || size > 47) {
//   //     // 
//   //   }

//   //   if (typeof !== 'number') {

//   //   }
//   // }
// }

// class Phone extends Product {
//   model = null;
//   memory = null;

//   constructor(data) {
//     const splitted = data.model.split('-'); // ['iphone', '4s']

//     super(splitted[0], data.price);

//     this.model = splitted[1];
//     this.memory = data.memory;
//   }

//   getPrice = () => {
//     const newPrice = super.getPrice();

//     return `${this.name} (${this.model}) - ${this.memory} - ${newPrice}`;
//   }
// }

// const sneakers = new Shoes({
//   name: 'Кеды', season: 'Лето',
//   size: 41, price: 500
// });

// sneakers.canBuy()


// console.log(sneakers.getPrice()); // Кеды (Лето) - 41 размер - 500 Руб

// console.log(sneakers.getPrice());

// sneakers.changeSize('39049314-031')

// sneakers.#size = '134803413';

// console.log(sneakers.size);

// const iphone = new Phone({
//   model: 'iphone-4s',
//   memory: '128GB', price: 1000
// });

// console.log(iphone);

// console.log(iphone.getPrice()); // Iphone (4s) - 128GB - 1000 Руб
// console.log(iphone.model); // '4s'
// console.log(iphone.name); // 'iphone'




///////////////// Геттеры сеттеры


// class User {
//   surname = '';
//   #name = '';

//   get name() {
//     return this.#name + ' ' + this.surname;
//   }

//   set name(value) {
//     if (typeof value !== 'string') {return null;}

//     if (value.length < 1) {

//     }


//     this.#name = value;
//   }

//   get fullName() {
//     return (this.#name + ' ' + this.surname).toUpperCase();
//   }
// }


// const user = new User();

// foekqfokeqopfeq
// kfeqofeiqfqe


// user.name = 'Alex';
// user.surname = 'Alexov';

// console.log(user.name)
// console.log(user.fullName)
 




// class Rectangle {
//   #width = 0;
//   #height = 0;

//   constructor(width, height) {
//       this.#width = width;
//       this.#height = height;
//   }

//   area() {
//     return this.#width * this.#height;
//   }
// }

// const rect = new Rectangle(10, 5);

// console.log(rect.area()); // 50








/////////////// STATIC












// class Test {
//   name = '';

//   constructor(name) {
//       this.name = name;
//       // this.sayHello = this.sayHello.bind(this);
//   }

//   sayHello = () => {
//     console.log(this)
//       return `Hello ${this.name}`
//   }
// }

// const test = new Test('Alice');


// const user = {
//   getUserData: () => {
//     // fkoeqpkfeq
//   },
//   sayHello: test.sayHello,
// }

// // fkeqkfqeifqe

// console.log(user.sayHello())





/// INSTANCEOF


// class User {}

// class Admin extends User {}

// const myAdmin = new Admin();

// const test = '1341341';

// console.log(myAdmin instanceof User)






/////////////// STATIC




// class VideoEditor {
//   length = 0;
//   static formats = ['mp4', 'mov'];
//   maxVideoLength = 50_000;

//   constructor() {
//     console.log(this)
//   }

//   static feqkofk = () => {
//     return 0;
//   }
// }


// console.log(VideoEditor.feqkofk())

// const feqfqe =  new VideoEditor();

// if (kokfqeofkqe FORMATS) {
//   // const fkoqefqe = new VideoEditor();
//   // fkoqefqe.

//   console.log(fkoqefqe.maxVideoLength);
// }



















//////////////////// Задача



class Product {
  #price = 0;
  static maxPrice = 10_000_000;

  constructor(price) {
    this.price = price;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (!Product.isCorrectPrice(value)) {
      throw new Error('Неккоректное значение');
    }
    

    this.#price = value;
  }

  getFilters() {
    return { price: this.#price };
  }

  static isCorrectPrice = (value) => {
    if (typeof value !== 'number') {
      return false;
    }

    if (value < 0 || value > Product.maxPrice) {
      return false;
    }

    return true;
  }
}

class Shoes extends Product {
    size = 0;
    season = null;

    constructor(price, size, season) {
      super(price);

      this.size = size;
      this.season = season;
    }
   

    getFilters = () => {
      const data = super.getFilters();

      return {
        ...data,
        size: this.size,
        season: this.season,
      };
    }
}

class Phone extends Product {
  model = null;
  memory = null;


  constructor(price, model, memory) {
    super(price);

    this.model = model;
    this.memory = memory;
  }


  getFilters = () => {
    const data = super.getFilters();

    return {
      ...data,
      model: this.model,
      memory: this.memory,
    };
  }
}


const shoesPrice = 120;

if (Shoes.isCorrectPrice(shoesPrice)) {
  const shoes = new Shoes(shoesPrice, 42, 'Winter');

  // shoes.price = 100;

  // console.log(shoes);
  console.log(shoes.getFilters());
  // // Output: { price: 120, size: 42, season: 'Winter' }

  // const product = new Product(shoesPrice);
  // console.log(product.getFilters())
  // Output: { price: 120 }
  

  // shoes.price = 130;
  // Output: 130

  // shoes.price = -5; // ОШИБКА
}

const phonePrice = 999;

if (Phone.isCorrectPrice(phonePrice)) {
  const phone = new Phone(phonePrice, 'iPhone 13', '128GB');
  console.log(phone.getFilters());
//   // Output: { price: 999, model: 'iPhone 13', memory: '128GB' }

//   const product = new Product(phonePrice);
//   console.log(product.getFilters())
//   // Output: { price: 999 }

// phone.price = -5;// ОШИБКА
}

























// Практика
// Создание и отправка комментариев

// const lessonComments = new LessonComments();
// const programComments = new ProgramComments();


// lessonComments.add('Этот урок был очень полезным');
// lessonComments.add('Спасибо');

// Ошибка, слишком длинный комментарий (больше 50 символов)
// lessonComments.add('Этот урок был очень полезным и информативным! Спасибо за хорошее объяснение.');


// programComments.add('Отличная программа, хочу еще');
// Ошибка, слишком длинный комментарий (больше 50 символов)
// programComments.add('Хотелось бы намного больше практики в этой программе и все такое и пятое и десятое');


// Сохраняем данные на сервер
// lessonComment.send(lessonId); // Отправляет комментарии к уроку
// programComment.send(programId); // Отправляет комментарии к программе


// class Comment {
//   lessonComments = [];
//   programComments = [];
//   addLessonComment = () => {};
//   addProgrammComment = () => {};
//   sendLessonComments = () => {}
//   sendProgramComments = () => {}
// }





