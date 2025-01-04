// зачем нужно (кривые данные, отлетел интернет)

// let data;
const A = 5, B = '5';
// try {
//   data = JSON.parse('{ "name": "Alex }');
// }
// catch (error) {
//   data = { "name": "unknown" };
//   console.log('Не получилось распарсить JSON', error);
//   // console.dir(error);

//   // console.log(error.message);
//   // console.log(error.stack);
//   // console.log(error.name);
// }


// setTimeout
// promise

function func() {
  return new Promise((res, rej) => {
    rej('Ошибка')
  });
}



// try {
//   // document.querySelector('button').innerText = 'Нажми на меня';
//   // setTimeout(() => {
//   //   JSON.parse('{ "name": "Alex }');
//   // }, 0);
//   // func()
// }
// catch (error) {
//   console.log('12312312', error);
// }


function calculate(a, b) {
  if (typeof a !== 'number') {
    throw new Error('a - не число');
  }

  if (typeof b !== 'number') {
    throw new Error('b - не число');
  }

  return a + (b ** 2) / 3;
}



// startAnimation
try {
  // parse
  // console.log(calculate(A, B));
}
catch (error) {
  // error
  // console.log(error.name);
  // renderError('ЛАЩУЙЛАЩУЙЛАЗУЙЛЗЩАЙ')
}


function parseJson(json) {
  console.log('startAnimation');

  try {
    const data = JSON.parse(json);
    return data.name;
  }
  catch (error) {
    console.log(error);

    throw new Error('fjieqjifeqjifoeq')
  }
  finally {
    console.log('endAnimation');
  }
}

// parseJson('{ "name": "Alex }')

// endAnimation
// console.log('123123123')

// console.log(calculate(A, B));

// console.log('fejqifjeqiifjeq')


// try {} catch () {}
// try {} catch {}

// json.parse('{')

// sync error (setTimeout, Promise)

// throw
// new Error

// SyntaxError, ReferenceError, TypeError
// finally










