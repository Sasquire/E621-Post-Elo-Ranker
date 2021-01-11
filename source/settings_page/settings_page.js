const defaults = require('./../default_settings.js');
const Settings = require('./../../dependencies/extensions.js');
const { set_value } = require('./../utils/utils.js');

function exec () {
	add_credentials_listener();
	add_elo_settings();
}

function add_elo_settings () {
	const settings = new Settings({
		name: 'e621 elo ranker',
		description: 'Allows you to rank posts on e621 and by assigning them elo ranks',
		url: 'https://e621.net/extensions/elo_ranker'
	});
}

function add_credentials_listener () {
	document.getElementById('update_credentials_button').addEventListener('click', async e => {
		const username = document.getElementById('credentials_username').value;
		const api_key = document.getElementById('credentials_api_key').value;
		await set_value('username', username);
		await set_value('api_key', api_key);
	});
}

module.exports = {
	exec: exec
};
