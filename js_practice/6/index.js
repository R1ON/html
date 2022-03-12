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

	if (firstNews.price <= 1000) {
		console.log(firstNews.price);
	}

	if (firstNews.images.length >= 3) {
		console.log(firstNews.images[0]);
		console.log(firstNews.images[1]);
		console.log(firstNews.images[2]);
	}

	if ('date' in firstNews) {
		console.log(
			'Опубликовано ' +
			firstNews.date + ' - ' + firstNews.title
		);
	}
	if (
		'title' in firstNews &&
		'subtitle' in firstNews
	) {
		console.log(
			firstNews.title + ' - ' + firstNews.subtitle
		);
	}

	if (!('date' in secondNews)) {
		console.log(
			secondNews.title
		);
	}
}













