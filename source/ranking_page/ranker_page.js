const { get_memory_database } = require('./local_database.js');
const { make_full } = require('./images.js');
let valid_keys = [];

function init_ranker_page () {
	document.getElementById('post_ranker_tagstring').addEventListener('change', update_available_posts);
	document.getElementById('ranker_new_posts').addEventListener('click', select_two_posts);
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
	const first_post = choose_random_element(valid_posts);
	if (first_post === undefined) {
		return;
	}
	const second_post = valid_posts
		.sort((a, b) => Math.abs(b[1].elo - first_post.elo) - Math.abs(a[1].elo - first_post.elo))
		.splice(0, 10)
		.filter(([key, value]) => key !== first_post[0])
		.sort((a, b) => b.times_ranked - a.times_ranked)[0];

	document.getElementById('ranker_post_1').appendChild(make_full(...first_post));
	document.getElementById('ranker_post_2').appendChild(make_full(...second_post));
}

function clear_posts () {
	Array.from(document.getElementById('ranker_post_1').children)
		.concat(Array.from(document.getElementById('ranker_post_2').children))
		.forEach(e => e.parentNode.removeChild(e));
}

module.exports = {
	init_ranker_page: init_ranker_page
};
