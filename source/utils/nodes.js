const GM = require('./../../dependencies/gm_functions.js');

function clear_page () {
	clear_children(document.head);
	clear_children(document.body);
}

function clear_children (node) {
	while (node.firstChild) {
		remove_node(node.firstChild);
	}
}

function move_children (donor_node, new_node) {
	while (donor_node.firstChild !== null) {
		new_node.appendChild(donor_node.firstChild);
	}
}

function remove_node (node) {
	if (node) {
		node.parentNode.removeChild(node);
	}
}

function apply_common_styles () {
	GM.addStyle(`
		span.iss_hash_checking { color: #830; }	
		span.iss_hash_notfound { color: #333; }
		a.iss_hash_found, a.iss_hash_found:visited { color: #4cf; }
		a.iss_image_link, a.iss_image_link:visited { color: #fff; }
		.iss_hash { font-family: monospace; }
	`);
}

function add_css (css) {
	GM.addStyle(css);
}

function string_to_node (string) {
	return new DOMParser().parseFromString(string, 'text/html').documentElement;
}

function append (parent, node) {
	if (node) {
		parent.appendChild(node);
	}
}

module.exports = {
	clear_children: clear_children,
	clear_page: clear_page,
	remove_node: remove_node,
	common_styles: apply_common_styles,
	add_css: add_css,
	string_to_node: string_to_node,
	move_children: move_children,
	append: append
};
