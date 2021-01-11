const here = new URL(window.location.href);
if (here.href === 'https://e621.net/extensions') {
	console.log('e621-elo-ranker settings page detected');
	require('./settings_page/settings_page.js').exec();
} else if (here.href === 'https://e621.net/extensions/elo_ranker') {
	console.log('e621-elo-ranker ranking page detected');
	require('./ranking_page/index.js').exec();
}
