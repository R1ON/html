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
		type: 'critical',
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
		}],
	},
];

if (!news || news.length === 0) {
	console.log('Новостей нет');
}
else {
	// const firstNews = news[0];
	// const secondNews = news[1];
	// break; continue;

	// for (let i = 0; i < news.length; i++) {
	// 	const newsItem = news[i];

	// 	if (newsItem.partners.lenght === 0) {
	// 		continue;
	// 	}

	// 	console.log(newsItem.title);
		

	// 	// for (let j = 0; j < newsItem.partners.length; j++) {
	// 	// 	const partner = newsItem.partners[j];

	// 	// }
	// }

	let hasCriticalNews = false; 

	for (let i = 0; i < news.length; i++) {
		const newsItem = news[i];

		// if (!hasCriticalNews && newsItem.type === TYPE.CR) {
		// 	hasCriticalNews = true;
		// }

		console.log(newsItem);

		if (newsItem.type === TYPE.CR) {
			hasCriticalNews = true;
			break;
		}
	}

	if (hasCriticalNews) {
		console.log('Осторожно...');
	}
}











