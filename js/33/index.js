// async, await
// await + catch
// try / catch





// const data = await promise
// promise.then((data) => {})

    const URL = 'https://jsonplaceholder.typicode.com/todos';

    // function getData2() {
    //     console.log('1')
    //     fetch('/user-info')
    //         .then((data) => {
    //             console.log('2')
    //             return data.json();
    //         })
    //         .then((data) => {
    //             // data.userI
    //             return fetch('/video')
    //         })
    //         .then((data) => {
    //             return data.json();
    //         })
    //         .then((data) => {
    
    //         })
    
    //     console.log('4')
    // }
    
    
    // async function getData() {
    //     const userMeta = await fetch(URL);
    //     const userData = await userMeta.json(); // userData.userId
    
    //     const videosMeta = await fetch('/video');
    //     const videos = await videosMeta.json();
    
    
    
    //     // console.log('2', data2);
    //         // .then((data) => {
    //         //     return data.json();
    //         // })
    //         // .then((data) => {
    //         //     console.log(data);
    //         // })
    //         // .catch((error) => {});
    // }
    
    // getData();
    // getData2();
    
    
    
    
    
    
    
    // async function errorTest() {
    //     const data = await fetch('fjieqjfiqe').catch((error) => {
    //         console.log('error', error);
    
    //         return { error: true }
    //     });
    //     console.log(data);
    
    
    //     // let info = [];
    
    //     // try {
    //     //     const data = await fetch('fjieqjfiqe');
    //     //     console.log(data);
    
    //     //     info = await data.json();
    //     //     console.log(info);
    //     // }
    //     // catch(error) {
    //     //     console.log(error);
    //     // }
    
    //     // if (info.length === 0) {
    //     //     return;
    //     // }
    
    //     // const text = info[0].text;
    
    //     console.log('fejqifjqiefeq')
    // }
    
    // errorTest();
    
    const button = document.querySelector('#my-button');
    const button2 = document.querySelector('#my-button2');
    const loading = document.querySelector('#loading');
    
    button.addEventListener('click', () => {
        addLoader();
    
        fetch(URL)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data);
            })
            .finally(() => {
                removeLoader();
            })
    });
    
    button2.addEventListener('click', async () => {
        addLoader();
        const meta = await fetch(URL);
        const data = await meta.json();
        removeLoader();
            
        console.log(data);
    });
    
    function addLoader() {
        loading.classList.add('show');
    }
    
    function removeLoader() {
        loading.classList.remove('show');
    }
    
    
    
    
    
    
    
    
    
    // homework promise -> async
    function loadJson(url) {
      return fetch(url)
        .then(response => {
          if (response.status == 200) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
        })
    }
    
    loadJson('no-such-user.json') // (3)
      .catch((error) => { console.log(error) }); // Error: 404
