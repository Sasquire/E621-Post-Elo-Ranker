const browserify = require('browserify');
const stringify = require('stringify');
const path = require('path');
const fs = require('fs');
const { performance } = require('perf_hooks');

const apply_header = require('./dependencies/prepend-text.js');
const info = {
	base_version: '1.00001',
	authors: 'Meras' //,
//	updateURL: 'https://raw.githubusercontent.com/Sasquire/Idems-Sourcing-Suite/master/distribution/header.user.js',
//	downloadURL: 'https://raw.githubusercontent.com/Sasquire/Idems-Sourcing-Suite/master/distribution/main.user.js',
//	icon: 'https://raw.githubusercontent.com/Sasquire/Idems-Sourcing-Suite/master/resources/icon32.png'
};

function bundle (header_string) {
	const entry = path.join('source', 'entry.js');

	return browserify()
		.add(entry)
		.transform(stringify(['.css', '.html']))
		.plugin(apply_header, header_string)
		.bundle();
}

function build_header () {
	return `// ==UserScript==
// @name         e621 ELO ranker
// @description  Allows you to rank posts on e621 and assign them an elo rank
// @version      ${info.version}
// @author       ${info.authors}

// @namespace    https://github.com/Sasquire/
// @supportURL   https://github.com/Sasquire/
// @updateURL    ${info.updateURL}
// @downloadURL  ${info.downloadURL}
// @icon         ${info.icon}

// @license      Unlicense

// @noframes
// @connect      e621.net
// @grant        GM.addStyle
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest

//               Legacy userscript support
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest

//               Settings page
// @match        *://*.e621.net/extensions

//               Elo-Ranking page
// @match        *://*.e621.net/extensions/elo_ranker
// ==/UserScript==

`;
}

function build () {
	const start = performance.now();
	const output_main = path.join('distribution', 'main.user.js');
	const output_header = path.join('distribution', 'header.user.js');
	const header = build_header();

	fs.writeFileSync(output_header, header, 'utf8');

	const output_stream = fs.createWriteStream(output_main);
	bundle(header).pipe(output_stream).on('finish', () => {
		const end = performance.now();
		console.log(`Built package in ${Math.floor((end - start) * 100) / 100}ms`);
	});
}

build();
