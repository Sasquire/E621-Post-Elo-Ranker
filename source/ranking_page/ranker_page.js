const { get_memory_database } = require('./local_database.js');
const { make_full } = require('./images.js');
let valid_keys = [];

function init_ranker_page () {
	document.getElementById('post_ranker_tagstring').addEventListener('change', update_available_posts);
	document.getElementById('ranker_new_posts').addEventListener('click', select_two_posts);
	document.body.addEventListener('keypress', handle_keypress);
	update_available_posts();
}

function update_available_posts () {
	const search = document.getElementById('post_ranker_tagstring')
		.value
		.split(' ')
		.filter(e => e)
		.reduce((acc, e) => {
			if (e.startsWith('fav:')) {
				acc.favd.push(e.substring(4));
			} else if (e.startsWith('-')) {
				acc.doesnt_have.push(e.substring(1));
			} else {
				acc.has.push(e);
			}
			return acc;
		}, { has: [], doesnt_have: [], favd: [] });

	valid_keys = Object.entries(get_memory_database())
		.filter(([key, data]) => {
			return search.has.every(e => data.tags.includes(e) === true) &&
				search.doesnt_have.every(e => data.tags.includes(e) === false) &&
				search.favd.every(e => data.favs.includes(e) === true);
		})
		.map(([key, data]) => key);

	document.getElementById('post_ranker_count').textContent = valid_keys.length;

	select_two_posts();
}

function choose_random_element (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function select_two_posts () {
	clear_posts();

	const posts = JSON.parse(window.localStorage.getItem('elo_ranker_data'));
	const valid_posts = Object.entries(posts)
		.filter(([key, value]) => valid_keys.includes(key));
	const lowest_seen = valid_posts
		.map(e => e[1].times_ranked)
		.reduce((acc, e) => acc < e ? acc : e, 1e9);
	const first_post = choose_random_element(valid_posts.filter(e => e[1].times_ranked <= lowest_seen + 1));
	if (first_post === undefined) {
		return;
	}
	const second_post = valid_posts
		.sort((a, b) => {
			const elo_diff = Math.abs(a[1].elo - first_post[1].elo) - Math.abs(b[1].elo - first_post[1].elo);
			const times_ranked_diff = a[1].times_ranked - b[1].times_ranked;
			if (elo_diff !== 0) {
				return elo_diff;
			} else if (times_ranked_diff !== 0) {
				return times_ranked_diff;
			} else {
				return 1 - Math.floor(Math.random() * 3);
			}
		})
		.splice(0, 10)
		.filter(([key, value]) => key !== first_post[0])[0];

	document.getElementById('ranker_post_1').appendChild(make_full(...first_post));
	document.getElementById('ranker_post_2').appendChild(make_full(...second_post));
}

function vote_post (winner) {
	const k = 50;
	const key1 = document.getElementById('ranker_post_1').children[0].dataset.key.split('-')[1];
	const key2 = document.getElementById('ranker_post_2').children[0].dataset.key.split('-')[1];
	const posts = JSON.parse(window.localStorage.getItem('elo_ranker_data'));
	const elo1 = posts[key1].elo;
	const elo2 = posts[key2].elo;
	const q1 = Math.pow(10, elo1 / 400);
	const q2 = Math.pow(10, elo2 / 400);
	const expected1 = q1 / (q1 + q2);
	const expected2 = q2 / (q1 + q2);
	const [updated1, updated2] = (() => {
		if (winner === 'left') {
			const updated1 = elo1 + k * (1 - expected1);
			const updated2 = elo2 + k * (0 - expected2);
			return [updated1, updated2];
		} else if (winner === 'right') {
			const updated1 = elo1 + k * (0 - expected1);
			const updated2 = elo2 + k * (1 - expected2);
			return [updated1, updated2];
		} else {
			// idk lol
		}
	})();
	posts[key1].elo = updated1;
	posts[key2].elo = updated2;
	posts[key1].times_ranked += 1;
	posts[key2].times_ranked += 1;
	window.localStorage.setItem('elo_ranker_data', JSON.stringify(posts));
	select_two_posts();
}

function handle_keypress (event) {
	if (document.getElementById('pane_header').children[0].classList.contains('pane_selected') === false) {
		return null;
	} else if (document.activeElement.id === 'post_ranker_tagstring') {
		return null;
	} else if (event.code === 'KeyA' || event.code === 'KeyD' || event.code === 'KeyS') {
		event.stopPropagation();
		if (event.code === 'KeyA') {
			vote_post('left');
		} else if (event.code === 'KeyD') {
			vote_post('right');
		} else if (event.code === 'KeyS') {

		}
	}
}

function clear_posts () {
	Array.from(document.getElementById('ranker_post_1').children)
		.concat(Array.from(document.getElementById('ranker_post_2').children))
		.forEach(e => e.parentNode.removeChild(e));
}

module.exports = {
	init_ranker_page: init_ranker_page
};
