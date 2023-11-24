// promise1 - запрос всех видео


function promise1() {
    const videos = [
        { id: 1, title: 'Топ 10 игр 2023' },
        { id: 2, title: 'Лучшая битва в Warcraft3' },
        { id: 3, title: 'Чем кормить кошек' },
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Видео получены');
            resolve(videos);
        }, 500);
    });
}


// promise2 - запросить описание этого видео
// const id = videos[0].id;



function promise2(videoId) {
    return new Promise((resolve) => {
        // fetch(videoId)
        
        setTimeout(() => {
            const description = {
                id: 1,
                title: 'Топ 10 игр 2023',
                hashTags: ['игры', '2023'],
                authorId: 55,
            };

            console.log('Описание получено');
            resolve(description);
        }, 500);
    });
}

// promise3 - в описании указан автор, нужно запросить информацию по нему
// const authorId = description.authorId;

function promise3(authorId) {
    return new Promise((resolve, reject) => {
        // fetch(authorId)

        setTimeout(() => {
            const author = {
                id: 55,
                name: 'Какие-то уроки',
                videoIds: [1,2,3],
                shortIds: [10, 15, 33],
            };

            // console.log('Автор получен');
            // resolve(author);

            reject('Автор не был получен');
        }, 500);
    });
}



// promise4 - пытаемся получить шортс автора

// const shortId = author.shortIds[1];

function promise4(authorId, shortsId) {
    return new Promise((resolve) => {
        // fetch(authorId, shortsId)

        setTimeout(() => {
            console.log('Шортс получен');
            resolve('Как готовить яичницу');
        }, 500);
    });
}


// ---

promise1()
    .then((videos) => {
        return promise2(videos[0].id);
    })
    .then((videoDescription) => {
        return promise3(videoDescription.authorId);
    })
    .then((author) => {
        return promise4(author.id, author.shortIds[1]);
    })
    .then((shortVideo) => {
        console.log('Название шортса: ', shortVideo)
    })
    .catch((message) => {
        console.error('Что-то пошло не так: ', message);
    })
    .finally(() => {
        console.log('Все данные получены');
    });