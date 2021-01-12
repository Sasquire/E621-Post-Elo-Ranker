const {
	clear_page,
	add_css
} = require('./../utils/utils.js');

const {
	init_local_database_pane
} = require('./local_database.js');

const {
	init_ranker_page
} = require('./ranker_page.js');

function exec () {
	clear_page();
	add_css(require('./main.css'));
	document.body.innerHTML = require('./main.html');

	init_pane_header();
}

function select_pane (pane_number) {
	const panes = Array.from(document.getElementsByClassName('pane'));
	panes.forEach(e => e.classList.add('hidden'));
	panes[pane_number].classList.remove('hidden');

	const pane_tabs = Array.from(document.getElementById('pane_header').children);
	pane_tabs.forEach(e => e.classList.remove('pane_selected'));
	pane_tabs[pane_number].classList.add('pane_selected');

	[
		() => null,
		() => null,
		() => null,
		() => null
	][pane_number]();
}

function init_pane_header () {
	const pane_tabs = Array.from(document.getElementById('pane_header').children);
	pane_tabs.forEach((e, i) => e.addEventListener('click', () => select_pane(i)));

	select_pane(2);
	init_local_database_pane();
	init_ranker_page();
}

module.exports = {
	exec: exec
};
