const formattedGames = [];
const problemGames = [];

games.forEach((game) => {
    const price = !game.price ? 0 : parseFloat(game.price);

    const discountData = discounts.find((discount) => {
        const discountValue = discount[1];

        if (
            typeof discountValue !== 'number' &&
            discountValue.cond > price
        ) {
            return false;
        }

        if (discount[0] === game.discountType) {
            return true;
        }
    });

    const discountValue = Array.isArray(discountData)
        ? discountData[1]
        : 0;

    const numericDiscount = typeof discountValue === 'number'
        ? discountValue
        : discountValue.value;

    // const discountValue = discounts.find((discount) => (
    //     discount[0] === game.discountType
    // ));

    const newGame = {
        id: game.id,
        description: game.description,        
        name: game.name.trim(),
        finalPrice: parseFloat(price.toFixed(2)) - numericDiscount,  
    };

    if ('link' in game) {
        newGame.link = game.link;
    }

    if (Array.isArray(game.hashTags)) {
        newGame.hashTags = game.hashTags
            .flat(Infinity)
            .reduce((acc, tags) => {
                if (tags.length === 0) {
                    return acc;
                }

                const split = tags.split(',');

                split.forEach((value) => {
                    acc.push(value);
                });

                return acc;
            }, []);
    }
    else {
        newGame.hashTags = [];
    }
    
    
    if (newGame.finalPrice < 0) {
        const reasons = ['Цена уходит в минус'];
        const gameWithReasons = {
            // id: game.id,
            // name: game.name,
            // description: game.description,
            ...game,
            reasons,
        };
        problemGames.push(gameWithReasons);
        return;
    }

    const isDuplicate = formattedGames.some((formattedGame) => {
        if (newGame.name === formattedGame.name) {
            return true;
        }
    });

    if (isDuplicate) {
        const reasons = ['Дубликат'];
        const gameWithReasons = {
            // id: game.id,
            // name: game.name,
            // description: game.description,
            ...game,
            reasons,
        };

        problemGames.push(gameWithReasons);
    }
    else {
        formattedGames.push(newGame);
    }
});

problemGames.forEach((game) => {
    const name = `Игра ${game.name.trim()}`;
    const promblems = game.reasons.join(', ');
    console.error(`${name} имеет проблемы с данными: ${promblems}.`);
});

console.log('problemGames', problemGames);
console.log('formattedGames', formattedGames);


const genres = formattedGames.reduce((acc, game) => {
    game.hashTags.forEach((tag) => {
        if (tag in acc) {
            acc[tag].push(game.id);
        }
        else {
            acc[tag] = [game.id];
        }
    });

    return acc;
}, {});

console.log(genres);