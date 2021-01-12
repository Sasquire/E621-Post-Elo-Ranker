const {
	e621,
	get_authenticated_e621
} = require('./../utils/utils.js');
const { make_thumb } = require('./images.js');
const { default_elo } = require('./../default_settings.js');

const memory_database = {};

function init_local_database_pane () {
	document.getElementById('add_e621_posts').addEventListener('click', add_posts_from_e621_search);
	document.getElementById('database_dump_database').addEventListener('click', reset_local_database);
	document.getElementById('database_remove_favorites').addEventListener('click', remove_fav_info);
	document.getElementById('database_load_posts').addEventListener('click', load_all_e621_posts);

	if (window.localStorage.getItem('elo_ranker_data') === undefined) {
		reset_local_database();
	}
	// load_all_e621_posts();
	refresh_local_database_pane();
}

async function add_posts_from_e621_search () {
	const search_string = document.getElementById('database_e621_post_searchstring').value;
	const in_favs = [...new Set(search_string
		.split(' ')
		.filter(e => e.startsWith('fav:'))
		.map(e => e.split('fav:')[1]))];

	document.getElementById('loading_e621_posts').classList.remove('hidden');
	return get_authenticated_e621().catch(e => e621).then(async api => {
		const iterator = api.post_search_iterator(search_string);
		for await (const post of iterator) {
			add_data_to_database(post.file.md5, {
				site: 'e621',
				data: {
					md5: post.file.md5,
					file_ext: post.file.ext,
					post_id: post.id,
					favs: in_favs
				},
				elo: default_elo,
				times_ranked: 0
			});

			await new Promise(resolve => setTimeout(resolve, 1));
		}
	}).catch(e => null).then(() => {
		document.getElementById('loading_e621_posts').classList.add('hidden');
		refresh_local_database_pane();
	});
}

async function load_all_e621_posts () {
	const posts = JSON.parse(window.localStorage.getItem('elo_ranker_data'));
	const keys_to_load = Object.entries(posts)
		.filter(([key, data]) => data.site === 'e621')
		.map(e => e[0]);

	document.getElementById('loading_posts_into_memory').classList.remove('hidden');
	for (let i = 0; i < keys_to_load.length; i += 100) {
		const keys_to_search = [];
		for (let j = i; (j < i + 100) && (j < keys_to_load.length); j++) {
			keys_to_search.push(keys_to_load[j]);
		}

		await get_authenticated_e621().catch(e => e621)
			.then(async api => api.post_search(`md5:${keys_to_search.join(',')}`))
			.then(results => results.posts.forEach(e => {
				memory_database[e.file.md5] = ({
					key: e.file.md5,
					tags: Object.values(e.tags).reduce((acc, e) => [...acc, ...e]),
					favs: posts[e.file.md5].data.favs
				});

				refresh_local_database_pane();
			}));
	}
	document.getElementById('loading_posts_into_memory').classList.add('hidden');
}

function get_memory_database () {
	return memory_database;
}

function reset_local_database () {
	Array.from(document.getElementsByClassName('thumb'))
		.forEach(e => e.parentNode.removeChild(e));
	window.localStorage.setItem('elo_ranker_data', '{}');
	refresh_local_database_pane();
}

function remove_fav_info () {
	const posts = JSON.parse(window.localStorage.getItem('elo_ranker_data'));
	Object.keys(posts).forEach(e => (posts[e].data.favs = []));
	window.localStorage.setItem('elo_ranker_data', JSON.stringify(posts));
}

function add_data_to_database (key, data) {
	const posts = JSON.parse(window.localStorage.getItem('elo_ranker_data'));
	if (posts[key] !== undefined) {
		posts[key].data.favs = [...new Set(posts[key].data.favs.concat(data.data.favs))];
	} else {
		posts[key] = data;
	}
	window.localStorage.setItem('elo_ranker_data', JSON.stringify(posts));

	refresh_local_database_pane();
}

function refresh_local_database_pane () {
	update_database_size();
	display_images();
}

function update_database_size () {
	const posts = JSON.parse(window.localStorage.getItem('elo_ranker_data'));
	document.getElementById('database_pane_usage').textContent = Object.keys(posts).length;

	document.getElementById('database_pane_memory_usage').textContent = Object.keys(memory_database).length;
}

function display_images () {
	Object.entries(JSON.parse(window.localStorage.getItem('elo_ranker_data')))
		.filter(([key, data]) => document.querySelector(`[data-key="thumb-${key}"]`) === null)
		.map(([key, data]) => make_thumb(key, data))
		.forEach(e => document.getElementById('database_pane_page').appendChild(e));
}

module.exports = {
	init_local_database_pane: init_local_database_pane,
	get_memory_database: get_memory_database
};
