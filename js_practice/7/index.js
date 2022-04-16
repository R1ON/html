const TYPE = {
	CR: 'critical',
	NE: 'not_exactly',
	ST: 'standart',
};

const news = [
	{
		title: 'Я сегодня поел',
		date: 'Сегодня',
		price: 1001,
		subtitle: 'Курицу',
		content: 'Сегодня был веселый день...',
		images: ['feqfqeeq', 'feqfeqfqe', '12414', 'feqfqeofq'],
		links: ['https://koklp', 'https://12312'],
		partners: [{
			title: 'Мы за все хорошее, ',
			site: 'https://nfjefq',
			keywords: ['Мы хорошие', 'Мы красивые'],
		}, {
			title: 'Мы за все хорошее2, ',
			site: 'https://nfjefq2',
			keywords: ['Мы хорошие2', 'Мы красивые2'],
		}],
	},
	{
		title: 'Я сегодня поел3',
		subtitle: 'Курицу3',
		type: 'not_exactly',
		content: 'Сегодня был веселый день...3',
		images: ['https://fueqfuqehfeq', 'https://jfiq'],
		links: ['https://koklp', 'https://12312'],
		partners: [{
			title: 'Мы за все хорошее, ',
			site: 'https://nfjefq',
			keywords: ['Мы хорошие', 'Мы красивые'],
		}, {
			title: 'Мы за все хорошее2, ',
			site: 'https://nfjefq2',
			keywords: ['Мы хорошие2', 'Мы красивые2'],
		}],
	},
];

if (!news || news.length === 0) {
	console.log('Новостей нет');
}
else {
	const firstNews = news[0];
	const secondNews = news[1];

	const type = firstNews.type ? firstNews.type : TYPE.ST;

	let type = TYPE.ST;
	if (firstNews.type) {
		type = firstNews.type;
	}

	// if (firstNews.type === TYPE.CR) {
	// 	console.error(firstNews.title);
	// }
	// else if (firstNews.type === TYPE.NE) {
	// 	console.warn(firstNews.title);
	// }
	// else if (firstNews.type === TYPE.ST) {
	// 	console.log(firstNews.title);
	// }
	// else {
	// 	console.log(firstNews.title);
	// }

	// firstNews.type === TYPE.CR
	// 	? console.error(firstNews.title)
	// 	: console.log(firstNews.title); 

	switch (type) {
		case TYPE.CR:
			console.error(firstNews.title);
			break;
		case TYPE.NE:
			console.warn(firstNews.title);
			break;
		case TYPE.ST:
			console.log(firstNews.title);
			break;
		default:
			console.log(firstNews.title);
	}
}













