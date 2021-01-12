// ==UserScript==
// @name         e621 ELO ranker
// @description  Allows you to rank posts on e621 and assign them an elo rank
// @version      undefined
// @author       Meras

// @namespace    https://github.com/Sasquire/
// @supportURL   https://github.com/Sasquire/
// @updateURL    undefined
// @downloadURL  undefined
// @icon         undefined

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

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/blip/create/blip_create.js":
/*!*******************************************!*\
  !*** ./source/blip/create/blip_create.js ***!
  \*******************************************/
/*! exports provided: blip_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blip_create", function() { return blip_create; });
const { raw_blip_create } = __webpack_require__(/*! ./raw_blip_create.js */ "./source/blip/create/raw_blip_create.js");

async function blip_create (text, in_response_to) {
	return raw_blip_create.call(this, {
		'blip[response_to]': in_response_to === undefined ? null : in_response_to,
		'blip[body]': text
	});
}




/***/ }),

/***/ "./source/blip/create/raw_blip_create.js":
/*!***********************************************!*\
  !*** ./source/blip/create/raw_blip_create.js ***!
  \***********************************************/
/*! exports provided: raw_blip_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_blip_create", function() { return raw_blip_create; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_blip_create (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'POST',
		path: '/blips',
		response: 'JSON',

		format: 'FORM',
		data: make_data(settings),
		authenticate: true
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function validate_settings (settings) {
	if (settings['blip[response_to]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['blip[response_to]'], 'blip[response_to]');
	}

	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_string"])(settings['blip[body]'], 'blip[body]');
}

function make_data (settings) {
	const return_object = {
		'blip[body]': settings['blip[body]']
	};

	if (settings['blip[response_to]'] !== null) {
		return_object['blip[response_to]'] = settings['blip[response_to]'];
	}

	return return_object;
}




/***/ }),

/***/ "./source/comment/create/comment_create.js":
/*!*************************************************!*\
  !*** ./source/comment/create/comment_create.js ***!
  \*************************************************/
/*! exports provided: comment_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment_create", function() { return comment_create; });
const { raw_comment_create } = __webpack_require__(/*! ./raw_comment_create.js */ "./source/comment/create/raw_comment_create.js");

async function comment_create (post_id, text) {
	return raw_comment_create.call(this, {
		'comment[post_id]': post_id,
		'comment[body]': text
	});
}




/***/ }),

/***/ "./source/comment/create/raw_comment_create.js":
/*!*****************************************************!*\
  !*** ./source/comment/create/raw_comment_create.js ***!
  \*****************************************************/
/*! exports provided: raw_comment_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_comment_create", function() { return raw_comment_create; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



// Add support for ['do_not_bump_post', 'is_sticky', 'is_hidden']

async function raw_comment_create (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'POST',
		path: '/comments',
		response: 'JSON',

		format: 'FORM',
		data: {
			'comment[post_id]': settings['comment[post_id]'],
			'comment[body]': settings['comment[body]']
		},
		authenticate: true
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function validate_settings (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['comment[post_id]'], 'comment[post_id]');
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_string"])(settings['comment[body]'], 'comment[body]');
}




/***/ }),

/***/ "./source/download/download.userscript.js":
/*!************************************************!*\
  !*** ./source/download/download.userscript.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Input to this method is structured like this
{
	method: 'POST' | 'GET' // Defines how the request should be made
	path: <string> // The path of the URL that is being accessed
	response: 'JSON' | 'XML' | 'HTML' // Defines the response type

	format: 'URL' | 'FORM' | undefined // Defines how the data is passed
	data: <object> | undefined // Data being passed in the request
}

*/
async function download (settings) {
	const request_options = build_request_options.call(this, settings);

	return new Promise((resolve, reject) => {
		const on_load = (e) => {
			if (e.status >= 200 && e.status <= 299) {
				resolve(e.response); // This will likely cause errors later
			} else {
				// eslint-disable-next-line prefer-promise-reject-errors
				reject({
					response: {
						status: e.status,
						data: e.response
					}
				});
			}
		};

		request_options.onload = on_load;
		request_options.onerror = on_load;

		// eslint-disable-next-line no-undef
		GM.xmlHttpRequest(request_options);
	});
}

function build_request_options (settings) {
	const url = new URL('https://e621.net/');
	url.pathname = settings.path + '.' + settings.response.toLowerCase();

	if (settings.format === 'URL') {
		Object.entries(settings.data).forEach(([key, value]) => {
			url.searchParams.set(key, value);
		});
	}

	const request_options = {
		url: url.href,
		method: settings.method,
		responseType: settings.response === 'JSON' ? 'json' : 'text',
		headers: {
			'user-agent': this.useragent
		}
	};

	const has_credentials = (this.username !== undefined && this.api_key !== undefined);
	if (settings.authenticate || has_credentials) {
		const key = `Basic ${btoa(`${this.username}:${this.api_key}`)}`;
		request_options.headers.Authorization = key;
	}

	if (settings.format === 'FORM') {
		const form = new FormData();
		Object.entries(settings.data).forEach(([key, value]) => {
			if (value.constructor === ArrayBuffer) {
				form.append(key, new Blob([value]));
			} else {
				form.append(key, value);
			}
		});

		request_options.data = form;
	}

	return request_options;
}

/* harmony default export */ __webpack_exports__["default"] = (download);


/***/ }),

/***/ "./source/main.js":
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_show_raw_post_show_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post/show/raw_post_show.js */ "./source/post/show/raw_post_show.js");
/* harmony import */ var _post_show_post_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/show/post_show.js */ "./source/post/show/post_show.js");
/* harmony import */ var _post_index_raw_post_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/index/raw_post_search.js */ "./source/post/index/raw_post_search.js");
/* harmony import */ var _post_index_post_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/index/post_search.js */ "./source/post/index/post_search.js");
/* harmony import */ var _post_index_post_search_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/index/post_search_iterator.js */ "./source/post/index/post_search_iterator.js");
/* harmony import */ var _post_vote_raw_post_vote_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/vote/raw_post_vote.js */ "./source/post/vote/raw_post_vote.js");
/* harmony import */ var _post_vote_post_vote_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/vote/post_vote.js */ "./source/post/vote/post_vote.js");
/* harmony import */ var _post_create_raw_post_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/create/raw_post_create.js */ "./source/post/create/raw_post_create.js");
/* harmony import */ var _post_create_post_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/create/post_create.js */ "./source/post/create/post_create.js");
/* harmony import */ var _post_update_raw_post_update_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/update/raw_post_update.js */ "./source/post/update/raw_post_update.js");
/* harmony import */ var _post_update_post_update_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/update/post_update.js */ "./source/post/update/post_update.js");
/* harmony import */ var _post_copy_notes_raw_post_copy_notes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/copy_notes/raw_post_copy_notes.js */ "./source/post/copy_notes/raw_post_copy_notes.js");
/* harmony import */ var _post_copy_notes_post_copy_notes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/copy_notes/post_copy_notes.js */ "./source/post/copy_notes/post_copy_notes.js");
/* harmony import */ var _post_flag_create_raw_post_flag_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post_flag/create/raw_post_flag_create.js */ "./source/post_flag/create/raw_post_flag_create.js");
/* harmony import */ var _post_flag_create_post_flag_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post_flag/create/post_flag_create.js */ "./source/post_flag/create/post_flag_create.js");
/* harmony import */ var _comment_create_raw_comment_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comment/create/raw_comment_create.js */ "./source/comment/create/raw_comment_create.js");
/* harmony import */ var _comment_create_comment_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comment/create/comment_create.js */ "./source/comment/create/comment_create.js");
/* harmony import */ var _post_bvas_post_bvas_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/bvas/post_bvas.js */ "./source/post/bvas/post_bvas.js");
/* harmony import */ var _blip_create_raw_blip_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blip/create/raw_blip_create.js */ "./source/blip/create/raw_blip_create.js");
/* harmony import */ var _blip_create_blip_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blip/create/blip_create.js */ "./source/blip/create/blip_create.js");
/* harmony import */ var _tags_index_raw_tag_search_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tags/index/raw_tag_search.js */ "./source/tags/index/raw_tag_search.js");
/* harmony import */ var _tags_index_tag_search_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tags/index/tag_search.js */ "./source/tags/index/tag_search.js");
/* harmony import */ var _tags_index_tag_search_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tags/index/tag_search_iterator.js */ "./source/tags/index/tag_search_iterator.js");


































class E621API {
	// Any of these can be anything, but errors will be thrown
	// when any requests are trying to be made.
	constructor (useragent, username, api_key) {
		this.useragent = useragent;
		this.username = username;
		this.api_key = api_key;
	}
}

E621API.prototype.version = '1.00100';

E621API.prototype.raw_post_show = _post_show_raw_post_show_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_show"];
E621API.prototype.post_show_id = _post_show_post_show_js__WEBPACK_IMPORTED_MODULE_1__["post_show_id"];
E621API.prototype.post_show_md5 = _post_show_post_show_js__WEBPACK_IMPORTED_MODULE_1__["post_show_md5"];
E621API.prototype.post_show = _post_show_post_show_js__WEBPACK_IMPORTED_MODULE_1__["post_show"];

E621API.prototype.raw_post_search = _post_index_raw_post_search_js__WEBPACK_IMPORTED_MODULE_2__["raw_post_search"];
E621API.prototype.post_search = _post_index_post_search_js__WEBPACK_IMPORTED_MODULE_3__["post_search"];
E621API.prototype.post_search_iterator = _post_index_post_search_iterator_js__WEBPACK_IMPORTED_MODULE_4__["post_search_iterator"];

E621API.prototype.raw_post_vote = _post_vote_raw_post_vote_js__WEBPACK_IMPORTED_MODULE_5__["raw_post_vote"];
E621API.prototype.post_vote_up = _post_vote_post_vote_js__WEBPACK_IMPORTED_MODULE_6__["post_vote_up"];
E621API.prototype.post_vote_down = _post_vote_post_vote_js__WEBPACK_IMPORTED_MODULE_6__["post_vote_down"];
E621API.prototype.post_vote_remove = _post_vote_raw_post_vote_js__WEBPACK_IMPORTED_MODULE_5__["post_vote_remove"];

E621API.prototype.raw_post_create = _post_create_raw_post_create_js__WEBPACK_IMPORTED_MODULE_7__["raw_post_create"];
E621API.prototype.post_create = _post_create_post_create_js__WEBPACK_IMPORTED_MODULE_8__["post_create"];

E621API.prototype.raw_post_update = _post_update_raw_post_update_js__WEBPACK_IMPORTED_MODULE_9__["raw_post_update"];
E621API.prototype.post_update = _post_update_post_update_js__WEBPACK_IMPORTED_MODULE_10__["post_update"];

E621API.prototype.raw_post_copy_notes = _post_copy_notes_raw_post_copy_notes_js__WEBPACK_IMPORTED_MODULE_11__["raw_post_copy_notes"];
E621API.prototype.post_copy_notes = _post_copy_notes_post_copy_notes_js__WEBPACK_IMPORTED_MODULE_12__["post_copy_notes"];

E621API.prototype.raw_post_flag_create = _post_flag_create_raw_post_flag_create_js__WEBPACK_IMPORTED_MODULE_13__["raw_post_flag_create"];
E621API.prototype.post_flag_create = _post_flag_create_post_flag_create_js__WEBPACK_IMPORTED_MODULE_14__["post_flag_create"];
E621API.prototype.post_flag_reasons = _post_flag_create_post_flag_create_js__WEBPACK_IMPORTED_MODULE_14__["post_flag_reasons"];

E621API.prototype.raw_comment_create = _comment_create_raw_comment_create_js__WEBPACK_IMPORTED_MODULE_15__["raw_comment_create"];
E621API.prototype.comment_create = _comment_create_comment_create_js__WEBPACK_IMPORTED_MODULE_16__["comment_create"];

E621API.prototype.post_bvas = _post_bvas_post_bvas_js__WEBPACK_IMPORTED_MODULE_17__["post_bvas"];

E621API.prototype.raw_blip_create = _blip_create_raw_blip_create_js__WEBPACK_IMPORTED_MODULE_18__["raw_blip_create"];
E621API.prototype.blip_create = _blip_create_blip_create_js__WEBPACK_IMPORTED_MODULE_19__["blip_create"];

E621API.prototype.raw_tag_search = _tags_index_raw_tag_search_js__WEBPACK_IMPORTED_MODULE_20__["raw_tag_search"];
E621API.prototype.tag_search = _tags_index_tag_search_js__WEBPACK_IMPORTED_MODULE_21__["tag_search"];
E621API.prototype.tag_search_iterator = _tags_index_tag_search_iterator_js__WEBPACK_IMPORTED_MODULE_22__["tag_search_iterator"];

/* harmony default export */ __webpack_exports__["default"] = (E621API);


/***/ }),

/***/ "./source/post/bvas/post_bvas.js":
/*!***************************************!*\
  !*** ./source/post/bvas/post_bvas.js ***!
  \***************************************/
/*! exports provided: post_bvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_bvas", function() { return post_bvas; });
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");


// settings = {
//   post_id: id of the post to be replaced
//   replacement: the replacement file/URL
//   comment: boolean if a comment should be posted to the new post
//   description: boolean if the description should be edited.
//   message: message of superior quality. '%' replaced with old_id
//   delete: boolean. If true will try to delete post. if false will flag
// }

async function post_bvas (settings) {
	settings = apply_defaults(settings);
	const old_post = await this.post_show(settings.post_id);
	settings.message = settings.message.replace('%', old_post.id);

	const new_post = await this.post_create({
		tags: filter_tags(old_post.tags),
		sources: old_post.sources,
		description: settings.description === true ? `${settings.message}\n${old_post.description}` : old_post.description,
		rating: old_post.rating,
		parent_id: old_post.relationships.parent_id,

		upload: settings.replacement
	});

	if (settings.comment === true) {
		await this.comment_create(new_post.post_id, settings.message);
	}

	await set_parent.call(this, old_post.id, new_post.post_id);
	for (const child_id of old_post.relationships.children) {
		await set_parent.call(this, child_id, new_post.post_id);
	}
	// Fix with pool

	await this.post_copy_notes(old_post.id, new_post.post_id);

	// optionally delete the post
	await this.post_flag_create(this.post_flag_reasons.inferior, old_post.id, new_post.post_id);
}

function apply_defaults (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_0__["validate_counting_number"])(settings.post_id, 'post_id');
	if (settings.replacement === undefined) {
		throw new Error('replacement must be defined');
	}

	return {
		post_id: settings.post_id,
		comment: nullish(settings.comment, false),
		description: nullish(settings.description, true),
		message: nullish(settings.message, 'Superior version of post #%'),
		delete: nullish(settings.delete, false),
		replacement: settings.replacement
	};
}

function nullish (value, replacement) {
	if (value === null || value === undefined) {
		return replacement;
	} else {
		return value;
	}
}

async function set_parent (post_id, new_parent) {
	return this.post_update({
		id: post_id,
		parent_id: new_parent
	});
}

function filter_tags (tag_object) {
	const tags_to_remove = [
		'better_version_at_source',
		'smaller_version_at_source',
		'compression_artifacts',
		'cropped',
		'upscale'
	];

	return Object.values(tag_object)
		.reduce((acc, e) => acc.concat(e))
		.filter(e => tags_to_remove.includes(e) === false);
}




/***/ }),

/***/ "./source/post/copy_notes/post_copy_notes.js":
/*!***************************************************!*\
  !*** ./source/post/copy_notes/post_copy_notes.js ***!
  \***************************************************/
/*! exports provided: post_copy_notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_copy_notes", function() { return post_copy_notes; });
const { raw_post_copy_notes } = __webpack_require__(/*! ./raw_post_copy_notes.js */ "./source/post/copy_notes/raw_post_copy_notes.js");

async function post_copy_notes (post_id, to_id) {
	return raw_post_copy_notes.call(this, {
		id: post_id,
		other_post_id: to_id
	});
}




/***/ }),

/***/ "./source/post/copy_notes/raw_post_copy_notes.js":
/*!*******************************************************!*\
  !*** ./source/post/copy_notes/raw_post_copy_notes.js ***!
  \*******************************************************/
/*! exports provided: raw_post_copy_notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_copy_notes", function() { return raw_post_copy_notes; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_post_copy_notes (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'PUT',
		path: `/posts/${settings.id}/copy_notes`,
		response: 'JSON',

		format: 'URL',
		data: {
			id: settings.id,
			other_post_id: settings.other_post_id
		}
	}).catch(handle_error);
}

function handle_error (error) {
	if (error.response.data.reason === 'Post has no notes') {
		return null; // Expected behavior is to have no errors thrown if post has no notes
	} else {
		// Todo
		console.log(error);
		throw error;
	}
}

function validate_settings (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.id, 'id');
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.other_post_id, 'other_post_id');
}




/***/ }),

/***/ "./source/post/create/post_create.js":
/*!*******************************************!*\
  !*** ./source/post/create/post_create.js ***!
  \*******************************************/
/*! exports provided: post_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_create", function() { return post_create; });
const { raw_post_create } = __webpack_require__(/*! ./raw_post_create.js */ "./source/post/create/raw_post_create.js");

async function post_create (settings) {
	validate_settings(settings);
	return raw_post_create.call(this, transform_settings(settings));
}

function validate_settings (settings) {
	if (settings.upload === undefined) {
		throw new Error('You must supply an upload file to upload a post');
	}

	if (typeof settings.rating !== 'string') {
		throw new Error('rating must be of type string');
	} else if (['e', 'q', 's'].includes(settings.rating.charAt(0)) === false) {
		throw new Error('first character of rating must be one of [\'e\', \'q\', \'s\']');
	}

	if (settings.tags !== undefined) {
		if (Array.isArray(settings.tags === false)) {
			throw new Error('tags must be of type array');
		} else if (settings.tags.every(e => typeof e === 'string') === false) {
			throw new Error('every element of tags must of of type string');
		}
	}

	if (settings.sources !== undefined) {
		if (Array.isArray(settings.sources === false)) {
			throw new Error('sources must be of type array');
		} else if (settings.tags.every(e => typeof e === 'string') === false) {
			throw new Error('every element of sources must of of type string');
		}
	}
}

function transform_settings (settings) {
	const return_object = {
		'upload[tag_string]': (settings.tags || []).join(' '),
		'upload[rating]': settings.rating.charAt(0),
		'upload[source]': (settings.sources || []).join('\n'),
		'upload[description]': (settings.description || ''),
		'upload[parent_id]': (settings.parent_id || null)
	};

	if (settings.upload.constructor === ArrayBuffer) {
		return_object['upload[file]'] = settings.upload;
	} else {
		return_object['upload[direct_url]'] = settings.upload;
	}

	return return_object;
}




/***/ }),

/***/ "./source/post/create/raw_post_create.js":
/*!***********************************************!*\
  !*** ./source/post/create/raw_post_create.js ***!
  \***********************************************/
/*! exports provided: raw_post_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_create", function() { return raw_post_create; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



// upload[tag_string] A space delimited list of tags.
// upload[file] The file data encoded as a multipart form.
// upload[rating] The rating for the post. Can be: s, q or e for safe, questionable, and explicit respectively.
// upload[direct_url] If this is a URL, e621 will download the file.
// upload[source] This will be used as the post's 'Source' text. Separate multiple URLs with %0A (url-encoded newline) to define multiple sources. Limit of ten URLs
// upload[description] The description for the post.
// upload[parent_id] The ID of the parent post.
// upload[referer_url]         ?
// upload[md5_confirmation]    useless
// upload[as_pending] If true post will be posted as pending

// tag_string, rating, source (file || direct_ulr) are required
// all others should be null

async function raw_post_create (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'POST',
		path: '/uploads',
		response: 'JSON',

		format: 'FORM',
		data: make_data(settings),
		authenticate: true
	}).catch(handle_error);
}

function make_data (settings) {
	const new_settings = {
		'upload[tag_string]': settings['upload[tag_string]'],
		'upload[rating]': settings['upload[rating]'],
		'upload[source]': settings['upload[source]']
	};

	if (settings['upload[file]'] !== undefined) {
		new_settings['upload[file]'] = settings['upload[file]'];
	} else {
		new_settings['upload[direct_url]'] = settings['upload[direct_url]'];
	}

	if (settings['upload[description]'] !== null) {
		new_settings['upload[description]'] = settings['upload[description]'];
	}

	if (settings['upload[parent_id]'] !== null) {
		new_settings['upload[parent_id]'] = settings['upload[parent_id]'];
	}

	return new_settings;
}

function validate_settings (settings) {
	if (settings['upload[tag_string]'] === undefined) {
		throw new Error('upload[tag_string] must be present');
	} else if (typeof settings['upload[tag_string]'] !== 'string') {
		throw new Error('upload[tag_string] must be of type string');
	}

	if (settings['upload[file]'] !== undefined && settings['upload[direct_url]'] !== undefined) {
		throw new Error('Both upload[file] and upload[direct_url] can not be defined');
	} else if (settings['upload[file]'] === undefined && settings['upload[direct_url]'] === undefined) {
		throw new Error('Either upload[file] or upload[direct_url] must be defined');
	}

	// todo test this
	if (settings['upload[file]']) {
		if (settings['upload[file]'].constructor !== ArrayBuffer) {
			throw new Error('upload[file] must be of type ArrayBuffer');
		}

		// Check for data in the array buffer?
	}

	if (settings['upload[direct_url]']) {
		if (typeof settings['upload[direct_url]'] !== 'string') {
			throw new Error('upload[direct_url] must be of type string');
		}

		// Check it is an actual url?
	}

	if (['s', 'q', 'e'].includes(settings['upload[rating]']) === false) {
		throw new Error('upload[rating] must be one of [\'s\', \'q\', \'e\']');
	}

	if (settings['upload[source]'] === undefined) {
		throw new Error('upload[source] must be present');
	} else if (typeof settings['upload[source]'] !== 'string') {
		throw new Error('upload[source] must be undefined or of type string or null');
	}

	if (settings['upload[description]'] === undefined) {
		throw new Error('upload[description] must be present');
	} else if (typeof settings['upload[description]'] !== 'string') {
		throw new Error('upload[description] must be of type string');
	}

	if (settings['upload[parent_id]'] === undefined) {
		throw new Error('upload[parent_id] must present');
	} else if (settings['upload[parent_id]'] === null) {
		// It is fine if parent_id is null
	} else {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['upload[parent_id]'], 'upload[parent_id]');
	}
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}




/***/ }),

/***/ "./source/post/index/post_search.js":
/*!******************************************!*\
  !*** ./source/post/index/post_search.js ***!
  \******************************************/
/*! exports provided: post_search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_search", function() { return post_search; });
/* harmony import */ var _raw_post_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw_post_search.js */ "./source/post/index/raw_post_search.js");


async function post_search (tag_string, page = 0) {
	return _raw_post_search_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_search"].call(this, {
		limit: 320,
		tags: tag_string,
		page: page.toString()
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}




/***/ }),

/***/ "./source/post/index/post_search_iterator.js":
/*!***************************************************!*\
  !*** ./source/post/index/post_search_iterator.js ***!
  \***************************************************/
/*! exports provided: post_search_iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_search_iterator", function() { return post_search_iterator; });
/* harmony import */ var _raw_post_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw_post_search.js */ "./source/post/index/raw_post_search.js");


const posts_per_page = 320;

// You can not have a different order when searching through posts like this
async function* post_search_iterator (search_string) {
	// "Providing arbitrarily large values to obtain the most recent posts
	// is not portable and may break in the future". (wiki)
	// I do what I want
	let max_id = 1e9;
	while (true) {
		// https://github.com/zwagoth/e621ng/issues/202
		const { posts } = await _raw_post_search_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_search"].call(this, {
			tags: search_string,
			limit: posts_per_page,
			page: `b${max_id}`
		}).catch(handle_error);

		yield* posts;
		max_id = posts.reduce((acc, e) => acc.id < e.id ? acc : e).id;

		if (posts.length < posts_per_page) {
			return;
		}
	}
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}




/***/ }),

/***/ "./source/post/index/raw_post_search.js":
/*!**********************************************!*\
  !*** ./source/post/index/raw_post_search.js ***!
  \**********************************************/
/*! exports provided: raw_post_search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_search", function() { return raw_post_search; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



// There is an edge case where the data can be md5=<md5>

async function raw_post_search (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'GET',
		path: '/posts',
		response: 'JSON',

		format: 'URL',
		data: make_data(settings)
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function validate_settings (settings) {
	if (settings.tags !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_string"])(settings.tags, 'tags');
	}

	if (settings.limit !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.limit, 'limit');
	}

	if (settings.page !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_page_string"])(settings.page, 'page');
	}
}

function make_data (settings) {
	const return_object = {};

	if (settings.limit !== null) {
		return_object.limit = settings.limit;
	}

	if (settings.tags !== null) {
		return_object.tags = settings.tags;
	}

	if (settings.page !== null) {
		return_object.page = settings.page;
	}

	return return_object;
}




/***/ }),

/***/ "./source/post/show/post_show.js":
/*!***************************************!*\
  !*** ./source/post/show/post_show.js ***!
  \***************************************/
/*! exports provided: post_show_id, post_show_md5, post_show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_show_id", function() { return post_show_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_show_md5", function() { return post_show_md5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_show", function() { return post_show; });
/* harmony import */ var _index_raw_post_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../index/raw_post_search.js */ "./source/post/index/raw_post_search.js");
/* harmony import */ var _raw_post_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raw_post_show.js */ "./source/post/show/raw_post_show.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");




async function post_show_id (post_id) {
	return _raw_post_show_js__WEBPACK_IMPORTED_MODULE_1__["raw_post_show"].call(this, {
		id: post_id
	}).then(e => e.post);
}

async function post_show_md5 (md5) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_2__["validate_md5"])(md5);
	return _index_raw_post_search_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_search"].call(this, {
		tags: `md5:${md5}`,
		limit: 1,
		page: null
	}).then(e => {
		if (e.posts.length === 0) {
			return null;
		} else {
			return e.posts[0];
		}
	});
}

async function post_show (id_md5) {
	if (typeof id_md5 === 'string' && id_md5.length === 32) {
		return post_show_md5.call(this, id_md5);
	} else {
		return post_show_id.call(this, Number(id_md5));
	}
}




/***/ }),

/***/ "./source/post/show/raw_post_show.js":
/*!*******************************************!*\
  !*** ./source/post/show/raw_post_show.js ***!
  \*******************************************/
/*! exports provided: raw_post_show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_show", function() { return raw_post_show; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_post_show (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.id, 'post_id');

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'GET',
		path: `/posts/${settings.id}`,
		response: 'JSON',

		format: undefined,
		data: null
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}




/***/ }),

/***/ "./source/post/update/post_update.js":
/*!*******************************************!*\
  !*** ./source/post/update/post_update.js ***!
  \*******************************************/
/*! exports provided: post_update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_update", function() { return post_update; });
/* harmony import */ var _raw_post_update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw_post_update.js */ "./source/post/update/raw_post_update.js");


async function post_update (settings) {
	return _raw_post_update_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_update"].call(this, {
		id: settings.id,
		'post[tag_string_diff]': get_differences(settings, 'tags_to_add', 'tags_to_remove', ' '),
		'post[tag_string]': optional_join(settings.tags, ' '),
		'post[old_tag_string]': optional_join(settings.old_tags, ' '),
		'post[source_diff]': get_differences(settings, 'sources_to_add', 'sources_to_remove', '\n'),
		'post[source]': optional_join(settings.sources, '\n'),
		'post[old_source]': optional_join(settings.old_sources, '\n'),
		'post[description]': settings.description || null,
		'post[old_description]': settings.old_description || null,
		'post[parent_id]': settings.parent_id || null,
		'post[old_parent_id]': settings.old_parent_id || null,
		'post[rating]': get_rating(settings.rating),
		'post[old_rating]': get_rating(settings.old_rating),
		'post[edit_reason]': settings.reason || null
	});
}

// Idea for a different type of update function. Maybe its better in some cases
// async function transform_post (post_id, transform_function) {
//   const post = await get_post(post_id);
//   const new_post = await transform_function(post_id)
//   return post_update(post, new_post);
// }

function get_rating (rating) {
	if (rating !== undefined) {
		return rating.charAt(0);
	} else {
		return null;
	}
}

function optional_join (list, joiner) {
	if (list !== undefined) {
		return list.join(joiner);
	} else {
		return null;
	}
}

function get_differences (settings, add_string, remove_string, joiner) {
	if (settings[add_string] !== undefined || settings[remove_string] !== undefined) {
		const adds = (settings[add_string] || [])
			.join(joiner);
		const removes = (settings[remove_string] || [])
			.map(e => `-${e.toString()}`)
			.join(joiner);

		return `${adds}${joiner}${removes}`;
	} else {
		return null; // If no changes return null
	}
}




/***/ }),

/***/ "./source/post/update/raw_post_update.js":
/*!***********************************************!*\
  !*** ./source/post/update/raw_post_update.js ***!
  \***********************************************/
/*! exports provided: raw_post_update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_update", function() { return raw_post_update; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_post_update (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'PATCH',
		path: `/posts/${settings.id}`,
		response: 'JSON',

		format: 'FORM',
		data: make_data(settings),
		authenticate: true
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function validate_settings (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.id, 'id');

	[
		'post[tag_string_diff]',
		'post[tag_string]',
		'post[old_tag_string]',
		'post[source_diff]',
		'post[source]',
		'post[old_source]',
		'post[description]',
		'post[old_description]',
		// parent_id
		'post[rating]',
		'post[old_rating]',
		'post[edit_reason]'
		// has_embedded_notes will be removed at some point.
	].forEach(e => {
		if (settings[e] === undefined) {
			throw new Error(`${e} must be present`);
		} else if (settings[e] === null) {
			// all of these can be null
		} else if (typeof settings[e] !== 'string') {
			throw new Error(`${e} must be of type string`);
		}
	});

	if (settings['post[parent_id]'] === undefined) {
		throw new Error('post[parent_id] must be present');
	}

	if (settings['post[old_parent_id]'] === undefined) {
		throw new Error('post[old_parent_id] must be present');
	}

	[
		'tag_string',
		'source',
		'description',
		'parent_id',
		'rating'
	].forEach(e => {
		if (settings[`post[old_${e}]`] !== null && settings[`post[${e}]`] === null) {
			throw new Error(`old_${e} must not be present if ${e} is not present`);
		}
	});

	if (settings['post[tag_string]'] !== null && settings['post[tag_string_diff]'] !== null) {
		throw new Error('at most one of tag_string and tag_string_diff can be non-null');
	}

	if (settings['post[source]'] !== null && settings['post[source_diff]'] !== null) {
		throw new Error('at most one of source and source_diff can be non-null');
	}

	// Parent_id
	if (settings['post[parent_id]'] === undefined) {
		throw new Error('parent_id must be present');
	} else if (settings['post[parent_id]'] === null) {
		// it can be null without issue
	} else {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['post[parent_id]'], 'parent_id');
	}

	if (settings['post[old_parent_id]'] === undefined) {
		throw new Error('old_parent_id must be present');
	} else if (settings['post[old_parent_id]'] === null) {
		// it can be null without issue
	} else {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['post[old_parent_id]'], 'old_parent_id');
	}

	// Rating
	if (settings['post[rating]'] !== null && ['e', 'q', 's'].includes(settings['post[rating]']) === false) {
		throw new Error('rating must be one of [\'e\', \'q\', \'s\']');
	}

	if (settings['post[old_rating]'] !== null && ['e', 'q', 's'].includes(settings['post[old_rating]']) === false) {
		throw new Error('old_rating must be one of [\'e\', \'q\', \'s\']');
	}
}

function make_data (settings) {
	return [
		'post[tag_string_diff]',
		'post[tag_string]',
		'post[old_tag_string]',
		'post[source_diff]',
		'post[source]',
		'post[old_source]',
		'post[description]',
		'post[old_description]',
		'post[parent_id]',
		'post[old_parent_id]',
		'post[rating]',
		'post[old_rating]',
		'post[edit_reason]'
	].reduce((acc, e) => {
		if (settings[e] !== null) {
			acc[e] = settings[e];
		}

		return acc;
	}, {});
}




/***/ }),

/***/ "./source/post/vote/post_vote.js":
/*!***************************************!*\
  !*** ./source/post/vote/post_vote.js ***!
  \***************************************/
/*! exports provided: post_vote_up, post_vote_down */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_vote_up", function() { return post_vote_up; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_vote_down", function() { return post_vote_down; });
/* harmony import */ var _raw_post_vote_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw_post_vote.js */ "./source/post/vote/raw_post_vote.js");


async function post_vote_up (post_id) {
	return _raw_post_vote_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_vote"].call(this, {
		id: post_id,
		score: 1,
		no_unvote: true
	});
}

async function post_vote_down (post_id) {
	_raw_post_vote_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_vote"].call(this, {
		id: post_id,
		score: -1,
		no_unvote: true
	});
}




/***/ }),

/***/ "./source/post/vote/raw_post_vote.js":
/*!*******************************************!*\
  !*** ./source/post/vote/raw_post_vote.js ***!
  \*******************************************/
/*! exports provided: raw_post_vote, post_vote_remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_vote", function() { return raw_post_vote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_vote_remove", function() { return post_vote_remove; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_post_vote (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'POST',
		path: `/posts/${settings.id}/votes`,
		response: 'JSON',

		format: 'URL',
		data: make_data(settings),
		authenticate: true
	}).catch(handle_error);
}

async function post_vote_remove (id) {
	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'DELETE',
		path: `/posts/${id}/votes`,
		response: 'JSON',

		format: undefined,
		data: undefined,
		authenticate: true
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function validate_settings (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.id, 'post_id');
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_vote_option"])(settings.score);

	if (settings.no_unvote !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_boolean"])(settings.no_unvote, 'no_unvote');
	}
}

function make_data (settings) {
	const return_object = {
		score: settings.score
	};

	if (settings.no_unvote !== null) {
		return_object.no_unvote = settings.no_unvote;
	}

	return return_object;
}




/***/ }),

/***/ "./source/post_flag/create/post_flag_create.js":
/*!*****************************************************!*\
  !*** ./source/post_flag/create/post_flag_create.js ***!
  \*****************************************************/
/*! exports provided: post_flag_create, post_flag_reasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_flag_create", function() { return post_flag_create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post_flag_reasons", function() { return post_flag_reasons; });
/* harmony import */ var _raw_post_flag_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw_post_flag_create.js */ "./source/post_flag/create/raw_post_flag_create.js");


const post_flag_reasons = {
	deletion: 'deletion',
	inferior: 'inferior',
	custom: 'user',
	dnp: 'dnp_artist',
	pay_content: 'pay_content',
	trace: 'trace',
	previously_deleted: 'previously_deleted',
	real: 'real_porn',
	corrupt: 'corrupt'
};

async function post_flag_create (reason, post_id, extra) {
	if (post_flag_reasons[reason] === undefined) {
		throw new Error(`Reason must be one of [${Object.keys(post_flag_reasons).join(', ')}]`);
	}

	const data = {
		'post_flag[post_id]': post_id,
		'post_flag[reason_name]': post_flag_reasons[reason],
		'post_flag[user_reason]': null,
		'post_flag[parent_id]': null
	};

	if (reason === post_flag_reasons.custom) {
		data['post_flag[user_reason]'] = extra;
	} else if (reason === post_flag_reasons.inferior) {
		data['post_flag[parent_id]'] = extra;
	}

	return _raw_post_flag_create_js__WEBPACK_IMPORTED_MODULE_0__["raw_post_flag_create"].call(this, data);
}




/***/ }),

/***/ "./source/post_flag/create/raw_post_flag_create.js":
/*!*********************************************************!*\
  !*** ./source/post_flag/create/raw_post_flag_create.js ***!
  \*********************************************************/
/*! exports provided: raw_post_flag_create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_post_flag_create", function() { return raw_post_flag_create; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_post_flag_create (settings) {
	validate_settings(settings);

	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'POST',
		path: '/post_flags',
		response: 'JSON',

		format: 'URL',
		data: make_data(settings),
		authenticate: true
	}).catch(handle_error);
}

function validate_settings (settings) {
	Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['post_flag[post_id]'], 'post_flag[post_id]');
	const valid_reason = [
		'deletion',
		'inferior',
		'user',
		'dnp_artist',
		'pay_content',
		'trace',
		'previously_deleted',
		'real_porn',
		'corrupt'
	];

	if (valid_reason.includes(settings['post_flag[reason_name]']) === false) {
		throw new Error(`post_flag[reason_name] must be one of [${valid_reason.join(', ')}]`);
	}

	if (settings['post_flag[reason_name]'] === 'user') {
		if (typeof settings['post_flag[user_reason]'] !== 'string')	{
			throw new Error('if post_flag[reason_name] is \'user\' then post_flag[user_reason] must be a string');
		}
	} else if (settings['post_flag[user_reason]'] !== null) {
		throw new Error('post_flag[user_reason] must be null unless post_flag[reason_name] is \'user\'');
	}

	if (settings['post_flag[reason_name]'] === 'inferior') {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['post_flag[parent_id]'], 'post_flag[parent_id]');
	} else if (settings['post_flag[parent_id]'] !== null) {
		throw new Error('post_flag[parent_id] must be null unless post_flag[parent_id] is \'inferior\'');
	}
}

function make_data (settings) {
	const return_object = {
		'post_flag[post_id]': settings['post_flag[post_id]'],
		'post_flag[reason_name]': settings['post_flag[reason_name]']
	};

	if (settings['post_flag[reason_name]'] === 'user') {
		return_object['post_flag[user_reason]'] = settings['post_flag[user_reason]'];
	} else if (settings['post_flag[reason_name]'] === 'inferior') {
		return_object['post_flag[parent_id]'] = settings['post_flag[parent_id]'];
	}

	return return_object;
}

function handle_error (err) {
	console.log(err);
	throw err;
};




/***/ }),

/***/ "./source/tags/index/raw_tag_search.js":
/*!*********************************************!*\
  !*** ./source/tags/index/raw_tag_search.js ***!
  \*********************************************/
/*! exports provided: raw_tag_search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw_tag_search", function() { return raw_tag_search; });
/* harmony import */ var _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../download/download.__TARGET__.js */ "./source/download/download.userscript.js");
/* harmony import */ var _validation_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../validation/validation.js */ "./source/validation/validation.js");



async function raw_tag_search (settings) {
	validate_settings(settings);
	return _download_download_TARGET_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, {
		method: 'GET',
		path: '/tags',
		response: 'JSON',

		format: 'URL',
		data: make_data(settings)
	}).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function validate_settings (settings) {
	if (settings['search[id]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['search[id]'], 'search[id]');
	}

	if (settings['search[fuzzy_name_matches]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_string"])(settings['search[fuzzy_name_matches]'], 'search[fuzzy_name_matches]');
	}

	if (settings['search[name_matches]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_string"])(settings['search[name_matches]'], 'search[name_matches]');
	}

	if (settings['search[name]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_string"])(settings['search[name]'], 'search[name]');
	}

	if (settings['search[category]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings['search[category]'], 'search[category]');
	}

	if (settings['search[hide_empty]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_boolean"])(settings['search[hide_empty]'], 'search[hide_empty]');
	}

	if (settings['search[has_wiki]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_boolean"])(settings['search[has_wiki]'], 'search[has_wiki]');
	}

	if (settings['search[has_artist]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_boolean"])(settings['search[has_artist]'], 'search[has_artist]');
	}

	if (settings['search[is_locked]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_boolean"])(settings['search[is_locked]'], 'search[is_locked]');
	}

	if (settings['search[hide_wiki]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_boolean"])(settings['search[hide_wiki]'], 'search[hide_wiki]');
	}

	if (settings['search[order]'] !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_from_list"])(settings['search[order]'], ['name', 'date', 'count', 'similarity'], 'search[order]');
	}

	if (settings.limit !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_counting_number"])(settings.limit, 'limit');
	}

	if (settings.page !== null) {
		Object(_validation_validation_js__WEBPACK_IMPORTED_MODULE_1__["validate_page_string"])(settings.page, 'page');
	}
}

function make_data (settings) {
	const return_object = {};

	if (settings['search[id]'] !== null) {
		return_object['search[id]'] = settings['search[id]'];
	}

	if (settings['search[fuzzy_name_matches]'] !== null) {
		return_object['search[fuzzy_name_matches]'] = settings['search[fuzzy_name_matches]'];
	}

	if (settings['search[name_matches]'] !== null) {
		return_object['search[name_matches]'] = settings['search[name_matches]'];
	}

	if (settings['search[name]'] !== null) {
		return_object['search[name]'] = settings['search[name]'];
	}

	if (settings['search[category]'] !== null) {
		return_object['search[category]'] = settings['search[category]'];
	}

	if (settings['search[hide_empty]'] !== null) {
		return_object['search[hide_empty]'] = settings['search[hide_empty]'];
	}

	if (settings['search[has_wiki]'] !== null) {
		return_object['search[has_wiki]'] = settings['search[has_wiki]'];
	}

	if (settings['search[has_artist]'] !== null) {
		return_object['search[has_artist]'] = settings['search[has_artist]'];
	}

	if (settings['search[is_locked]'] !== null) {
		return_object['search[is_locked]'] = settings['search[is_locked]'];
	}

	if (settings['search[order]'] !== null) {
		return_object['search[order]'] = settings['search[order]'];
	}

	if (settings.limit !== null) {
		return_object.limit = settings.limit;
	}

	if (settings.page !== null) {
		return_object.page = settings.page;
	}

	return return_object;
}




/***/ }),

/***/ "./source/tags/index/tag_search.js":
/*!*****************************************!*\
  !*** ./source/tags/index/tag_search.js ***!
  \*****************************************/
/*! exports provided: tag_search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag_search", function() { return tag_search; });
/* harmony import */ var _raw_tag_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw_tag_search.js */ "./source/tags/index/raw_tag_search.js");


const tag_category = {
	general: 0,
	artist: 1,
	copyright: 3,
	character: 4,
	species: 5,
	invalid: 6,
	meta: 7,
	lore: 8
};

async function tag_search (settings, page = 0) {
	if (settings.page === null || settings.page === undefined) {
		settings.page = page.toString();
	} // else page is already set

	return _raw_tag_search_js__WEBPACK_IMPORTED_MODULE_0__["raw_tag_search"].call(this, make_settings(settings)).catch(handle_error);
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}

function make_settings (settings) {
	const return_object = {
		'search[id]': null,
		'search[fuzzy_name_matches]': null,
		'search[name_matches]': null,
		'search[name]': null,
		'search[category]': null,
		'search[hide_empty]': null,
		'search[has_wiki]': null,
		'search[has_artist]': null,
		'search[is_locked]': null,
		'search[hide_wiki]': null,
		'search[order]': null,
		limit: null,
		page: settings.page
	};

	if (settings.id !== undefined && settings.id !== null) {
		return_object['search[id]'] = settings.id;
	} else if (settings.fuzzy_match !== undefined && settings.fuzzy_match !== null) {
		return_object['search[fuzzy_name_matches]'] = settings.fuzzy_match;
	} else if (settings.wild_match !== undefined && settings.wild_match !== null) {
		return_object['search[name_matches]'] = settings.wild_match;
	} else if (settings.exact_match !== undefined && settings.exact_match !== null) {
		return_object['search[name]'] = settings.exact_match;
	}

	for (const term of ['hide_empty', 'has_wiki', 'has_artist', 'is_locked', 'hide_wiki', 'order']) {
		if (settings[term] !== undefined && settings[term] !== null) {
			return_object[`search[${term}]`] = settings[term];
		}
	}

	if (settings.category !== null && settings.category !== undefined) {
		if (tag_category[settings.category] === undefined) {
			throw new Error(`Category must be one of [${Object.keys(tag_category).join(', ')}]`);
		} else {
			return_object['search[category]'] = settings.category;
		}
	}

	if (settings.limit !== null && settings.limit !== undefined) {
		return_object.limit = settings.limit;
	} else {
		return_object.limit = 1000;
	}

	return return_object;
}




/***/ }),

/***/ "./source/tags/index/tag_search_iterator.js":
/*!**************************************************!*\
  !*** ./source/tags/index/tag_search_iterator.js ***!
  \**************************************************/
/*! exports provided: tag_search_iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag_search_iterator", function() { return tag_search_iterator; });
/* harmony import */ var _tag_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag_search.js */ "./source/tags/index/tag_search.js");


const tags_per_page = 1000;

// You can not have a different order when searching through posts like this
async function* tag_search_iterator (search_options) {
	// "Providing arbitrarily large values to obtain the most recent posts
	// is not portable and may break in the future". (wiki)
	// I do what I want
	search_options.page = null;
	search_options.limit = null;

	let max_id = 1e9;
	while (true) {
		// https://github.com/zwagoth/e621ng/issues/202
		const tags = await _tag_search_js__WEBPACK_IMPORTED_MODULE_0__["tag_search"].call(this, {
			...search_options,
			page: `b${max_id}`,
			limit: 1000
		}).catch(handle_error);

		yield* tags;
		max_id = tags.reduce((acc, e) => acc.id < e.id ? acc : e).id;

		if (tags.length < tags_per_page) {
			return;
		}
	}
}

function handle_error (error) {
	// Todo
	console.log(error);
	throw error;
}




/***/ }),

/***/ "./source/validation/validation.js":
/*!*****************************************!*\
  !*** ./source/validation/validation.js ***!
  \*****************************************/
/*! exports provided: validate_md5, validate_counting_number, validate_string, validate_vote_option, validate_page_string, validate_boolean, validate_from_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_md5", function() { return validate_md5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_counting_number", function() { return validate_counting_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_string", function() { return validate_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_vote_option", function() { return validate_vote_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_page_string", function() { return validate_page_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_boolean", function() { return validate_boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_from_list", function() { return validate_from_list; });
function validate_md5 (md5) {
	if (typeof md5 !== 'string') {
		throw new Error('md5 must be of type string');
	}

	if (md5.length !== 32) {
		throw new Error('md5 must be of length 32');
	}

	const contains_non_hex = /[^0-9a-fA-F]/g;
	if (contains_non_hex.test(md5)) {
		throw new Error('md5 contains non-hexadecimal character');
	}
}

function validate_counting_number (number, name) {
	if (typeof number !== 'number') {
		throw new Error(`${name} must be a number`);
	}

	if (Number.isInteger(number) === false) {
		throw new Error(`${name}must be an integer`);
	}

	if (number < 0) {
		throw new Error(`${name} must be greater than zero`);
	}
}

function validate_string (string, name) {
	if (typeof string !== 'string') {
		throw new Error(`${name} is not a string`);
	}
}

function validate_vote_option (vote) {
	if (vote !== -1 && vote !== 0 && vote !== 1) {
		throw new Error('vote is not of the values [-1, 1]');
	}
}

function validate_page_string (string, name) {
	validate_string(string, name);

	if ((/[ab]?\d+/).test(string) === false) {
		throw new Error(`${name} does not match the format /[ab]?\\d+/`);
	}
}

function validate_boolean (boolean, name) {
	if (boolean !== false && boolean !== true) {
		throw new Error(`${name} is not of the type boolean`);
	}
}

function validate_from_list (value, list, name) {
	if (list.some(e => e === value) === false) {
		throw new Error(`Value ${value} not in list [${list.join(', ')}] for ${name}`);
	}
}




/***/ })

/******/ })["default"];

},{}],2:[function(require,module,exports){
((base_html, base_css, GM) => {
	function do_constructor (options) {
		// Must have options.name
		// If options.url is not present, will not link anywhere
		// If options.description is not present, will have no description
		const container = document.createElement('div');
		container.id = options.name;
		container.classList.add('setting_section');

		// Title
		container.appendChild((() => {
			const type = options.url !== undefined ? 'a' : 'span';
			const title = document.createElement(type);
			title.textContent = options.name + '\u200B'; // Add zerowidth space
			title.classList.add('setting_header');
			if (options.url !== undefined) {
				title.href = options.url;
			}
			return title;
		})());

		// Description
		container.appendChild((() => {
			const description = document.createElement('span');
			description.classList.add('setting_description');
			if (options.description !== undefined) {
				description.textContent = options.description;
			}
			return description;
		})());

		// Setting values
		const settings_div = document.createElement('div');
		settings_div.classList.add('setting_values');
		['Name', 'Value', 'Description']
			.map(e => {
				const span = document.createElement('span');
				span.textContent = e;
				span.classList.add('settings_table_head');
				return span;
			})
			.forEach(e => settings_div.appendChild(e));
		container.appendChild(settings_div);

		return container;
	}

	async function get_value (key, default_value) {
		return GM.getValue(key)
			.then(e => e === undefined ? default_value : e);
	}

	function do_checkbox (options) {
		// Must have options.name, options.key, and options.section
		// options.default defaults to false
		const checkbox_name = `${options.section}_${options.key}`;

		// Title
		const title = document.createElement('label');
		title.textContent = options.name;
		title.htmlFor = checkbox_name;

		// Checkbox with load saved setting
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = checkbox_name;
		get_value(options.key, options.default || false)
			.then(e => (checkbox.checked = e));
		checkbox.addEventListener('change', () => {
			GM.setValue(options.key, checkbox.checked);
		});

		return [title, checkbox, options.description || ''];
	}

	function do_list (options) {
		const select = document.createElement('select');

		// Fill options
		options.values.map(e => {
			const option = document.createElement('option');
			option.textContent = e.name;
			option.value = e.value;
			if (e.title) {
				option.title = e.title;
			}
			return option;
		}).forEach(e => {
			select.appendChild(e);
		});

		// Listen for change
		select.addEventListener('change', () => {
			GM.setValue(options.key, select.value);
		});

		// Set default
		get_value(options.key, options.default).then(set_value => {
			Array.from(select.getElementsByTagName('option'))
				.map((e, i) => ({ index: i, value: e.value }))
				.filter(e => e.value === set_value)
				.forEach(e => (select.selectedIndex = e.index));
		});

		return [options.name || '', select, options.description || ''];
	}

	function do_custom (options) {
		const input = document.createElement('input');
		input.type = options.is_secret ? 'password' : 'text';
		input.placeholder = options.placeholder || '';

		// You can set options.key to null to have this be a dummy
		// placeholder. If you do then you can set it's id
		if (options.key !== null) {
			input.addEventListener('change', () => {
				GM.setValue(options.key, input.value);
			});

			get_value(options.key, options.default || '')
				.then(e => (input.value = e));
		} else {
			input.id = options.id;
		}

		return [options.name || '', input, options.description || ''];
	}

	class Setting {
		constructor (options) {
			// Insert the new node in alphabetical order. A nice qol feature
			const container = do_constructor(options);
			const other_sections = document.getElementsByClassName('setting_section');
			const last_item = Array.from(other_sections)
				.filter(e => section_compare(e, container) > 0)
				.sort(section_compare)[0];
			document.getElementById('settings').insertBefore(container, last_item);

			this.setting_node = container.getElementsByClassName('setting_values')[0];
			this.name = options.name;

			function section_compare (a, b) {
				const first = a.id.toLowerCase();
				const second = b.id.toLowerCase();
				return first.localeCompare(second);
			}
		}

		append (node) {
			const container = document.createElement('span');
			if (typeof node === 'string') {
				// innerHTML isn't usually liked, but what is a userscript
				// going to do that it can't already do?
				container.innerHTML = node;
			} else {
				container.appendChild(node);
			}

			this.setting_node.appendChild(container);
		}

		checkbox (options) {
			// options = { name, key, section, default }
			do_checkbox({
				...options,
				section: this.setting_node.parentNode.id
			}).forEach(this.append.bind(this));
		}

		list (options) {
			// options = {
			//   name, description, default, key
			//   values = [{ name, value, title? }],
			// }
			do_list(options).forEach(this.append.bind(this));
		}

		custom (options) {
			// options = {
			//   name, default?, key?, id?
			//   placeholder, description, is_secret,
			// }
			do_custom(options).forEach(this.append.bind(this));
		}

		button (options) {
			const button = document.createElement('button');
			button.textContent = options.value || '';
			button.id = options.id;

			[options.name || '', button, options.description || '']
				.forEach(this.append.bind(this));
		}
	};

	function init_css () {
		const node = document.createElement('style');
		node.type = 'text/css';
		node.textContent = base_css;
		document.head.appendChild(node);
	}

	function clear_page () {
		while (document.head.firstChild) {
			document.head.removeChild(document.head.firstChild);
		}
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	}

	function init_page () {
		document.body.innerHTML = base_html;
		document.body.dataset.page_loaded = true;
	}

	function init_common () {
		const settings = new Setting({
			name: '\u200BCommon',
			description: 'Settings that are common throughout many userscripts'
		});

		settings.button({
			name: 'Update Scripts',
			id: 'update_credentials_button',
			value: 'Update',
			description: 'Pressing this button should update username and API key on all relevant userscripts'
		});

		settings.custom({
			name: 'Username',
			placeholder: 'username',
			description: 'This should be your username on e621.net',
			key: null,
			id: 'credentials_username',
			is_secret: false
		});

		settings.custom({
			name: 'API Key',
			placeholder: 'API Key',
			description: 'Your api key which can be found from your <a href="https://e621.net/users/home">homepage</a>',
			key: null,
			id: 'credentials_api_key',
			is_secret: true
		});
	}
/*
	Example settings
	const a = new Setting({
		name: 'Testing',
		url: 'https://e621.net/extensions',
		description: 'things for that one thing that does stuff'
	});

	a.checkbox({
		name: 'Good Setting',
		key: 'setting_key',
		default: false,
		description: 'This is supposed to be a setting that does very good things'
	});

	a.list({
		name: 'Things that are listed',
		key: 'list_key',
		description: 'This is the testing for a list option',
		default: 'random',
		values: [
			{ name: '1', value: 'option1' },
			{ name: '2', value: 'what' },
			{ name: 'great', value: 'more' },
			{ name: 'bad', value: 'random' },
			{ name: 'ooops', value: 'norepeats' }
		]
	});

	a.custom({
		name: 'what',
		key: 'testtttt',
		description: 'does stuff',
		default: 'both',
		placeholder: 'ahhhh',
		is_secret: true
	}); */

	const is_correct_url = window.location.href === 'https://e621.net/extensions';
	const is_loaded = document.body.dataset.page_loaded === 'true';
	if (is_correct_url && is_loaded === false) {
		clear_page();
		init_css();
		init_page();
		init_common();
	}

	// Export so it can be used in both browserify and greasemonkey
	if (module && module.exports) {
		module.exports = Setting;
	} else {
		window.Setting = Setting;
	}
})(`
<h1>e621 Extension Hub</h1>
<div id="settings"></div>
`, `
:root {
	--background-blue: #031131;
	--home-blue: #012e56;
	--standard-blue: #152f56;
	--comment-blue: #213a5f;
	--quote-blue: #284a81;
	--link-blue: #b4c7d9;
	--hover-blue: #2e76b4;

	--other-blue: #174891;

	--yellow: #fdba31;
	--light-yellow: #ffde9b;
	--dark-yellow: #d8b162;
}

body {
	background-color: var(--background-blue);
	background-image: url(https://e621.net/images/stripe.png);
}

/* Title at the top of the page */
h1 {
	padding: 1rem 3rem;
	color: var(--yellow);
	background-color: var(--standard-blue);
	border-radius: 1rem;
}

.setting_section {
	background-color: var(--standard-blue);
	margin: 1rem 0px;
	padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    border-radius: 1rem;
}

/* Header and description */
.setting_header {
	color: var(--yellow);
    margin: 0px 0.5rem 0.5rem 1rem;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
}

.setting_description {
	color: #ccc;
}

/* Actual settings to be changed */
.setting_values {
	display: grid;
	grid-template-columns: 1fr 100px 4fr;
	color: #ccc;
}

.setting_values > * {
	border-bottom: 1px solid white;
	margin-bottom: 0.5rem;
	padding-bottom: 0.2rem;
}

.setting_values > span > input[type=text],
.setting_values > span > input[type=password] {
	width: 90px;
}

.settings_table_head {
	color: var(--hover-blue);
    text-decoration: underline;
}

.setting_values a, .setting_values a:visited {
	color: var(--link-blue);
}
`,
(() => {
	// eslint-disable-next-line no-undef
	const gm_object = window.GM ? window.GM : GM;
	wrap_generic('GM_setValue', 'setValue');
	wrap_generic('GM_getValue', 'getValue');
	return gm_object;

	async function wrap_generic (generic_name, new_name) {
		if (gm_object[new_name]) {
			return; // Already exists
		}

		if (window[generic_name] === undefined) {
			return; // No old function
		}

		gm_object[new_name] = async (...args) => new Promise((resolve, reject) => {
			try {
				resolve(window[generic_name](...args));
			} catch (e) {
				reject(e);
			}
		});
	}
})());

},{}],3:[function(require,module,exports){
/*
Originally I wanted to use https://github.com/greasemonkey/gm4-polyfill
to provide compatibility between the new async greasemonkey functions
and the old GM_* functions. But in order to keep this project purely
public domain, I could not use their MIT licensed code.

This is an attempt at providing the same functionality, while being
separate from that work. I understand how the old version functions
but this will be my own unique creation, free from their license.

Unlicense (2019)
*/

// old https://violentmonkey.github.io/api/gm/
// new https://wiki.greasespot.net/Greasemonkey_Manual%3aAPI

let gm_object = null;
try {
	if (window.GM) {
		// We are not in a sandbox
		gm_object = window.GM;
	} else {
		// We are in a sandbox
		// eslint-disable-next-line no-undef
		gm_object = GM;
	}
} catch (e) { // e should be a ReferenceError
	// We have no access to the GM object. Something is wrong
	// Attempt to recover and hope we can make something out of it
	gm_object = {};
}

const transitions = [
	// Values
	['GM_getValue', 'getValue'],
	['GM_setValue', 'setValue'],
	['GM_listValues', 'listValues'],
	['GM_deleteValue', 'deleteValue'],

	// GM_getResourceText and GM_getResourceURL
	// are not supported in this version because of the
	// incompatibility between the GM_* functions and GM 4

	// Other
	['GM_notification', 'notification'],
	['GM_openInTab', 'openInTab'],
	['GM_setClipboard', 'setClipboard'],
	['GM_xmlhttpRequest', 'xmlHttpRequest'],
	['GM_addStyle', 'addStyle']
];

transitions.forEach(([old_id, new_id]) => {
	// If this is ever true, we are not in a sandbox. I do not think
	// there is a userscript manager that uses both the old GM_* functions
	// and sandboxes the code. The day I am wrong is the day this breaks.
	const old_function = window[old_id];
	if (old_function === undefined) {
		return;
	}

	// Why would we overwrite the new function with a worse old one
	if (gm_object[new_id] !== undefined) {
		return;
	}

	// Again, there should not be a time when we get here that the
	gm_object[new_id] = (...args) => new Promise((resolve, reject) => {
		try {
			resolve(old_function(...args));
		} catch (error) {
			reject(error);
		}
	});
});

function add_style (css) {
	const node = document.createElement('style');
	node.type = 'text/css';
	node.textContent = css;

	const head = document.head;
	const body = document.body;
	head ? head.appendChild(node) : body.appendChild(node);
}

// If its not present, overwrite with our own function
if (gm_object.addStyle === undefined) {
	gm_object.addStyle = add_style;
}

module.exports = gm_object;

},{}],4:[function(require,module,exports){
// This is a js file so it can be commented

module.exports = {
	// Values so that the helper function will have something to return.
	username: null,
	api_key: null,

	default_elo: 1000
};

},{}],5:[function(require,module,exports){
const here = new URL(window.location.href);
if (here.href === 'https://e621.net/extensions') {
	console.log('e621-elo-ranker settings page detected');
	require('./settings_page/settings_page.js').exec();
} else if (here.href === 'https://e621.net/extensions/elo_ranker') {
	console.log('e621-elo-ranker ranking page detected');
	require('./ranking_page/main.js').exec();
}

},{"./ranking_page/main.js":10,"./settings_page/settings_page.js":12}],6:[function(require,module,exports){
const options = {
	e621: {
		thumb: (key, data) => {
			const container = document.createElement('a');
			container.classList.add('thumb');

			const img = document.createElement('img');
			const info = document.createElement('span');

			container.appendChild(img);
			container.appendChild(info);

			container.href = `https://e621.net/posts/${data.data.post_id}`;
			container.dataset.key = `thumb-${key}`;
			container.target = '_blank';
			img.src = (() => {
				const start = `https://static1.e621.net/data/preview/${data.data.md5.substring(0, 2)}/${data.data.md5.substring(2, 4)}/${data.data.md5}`;
				if (data.data.file_ext === 'swf') {
					return 'https://static1.e621.net/images/download-preview.png';
				} else {
					return `${start}.jpg`;
				}
			})();
			info.textContent = `e621: ${data.data.post_id}`;

			return container;
		},
		full: (key, data) => {
			const container = document.createElement('div');
			container.dataset.key = `full-${key}`;

			const img = document.createElement('img');
			const info = document.createElement('span');

			const link = document.createElement('a');
			link.href = `https://e621.net/posts/${data.data.post_id}`;
			link.textContent = `e621: ${data.data.post_id}`;
			link.target = '_blank';
			info.appendChild(link);

			const elo = document.createElement('span');
			elo.textContent = `elo: ${data.elo}`;
			info.appendChild(elo);

			container.appendChild(img);
			container.appendChild(info);

			img.src = (() => {
			//	if (data.data.file_ext === 'swf') {
			//		return 'https://static1.e621.net/images/download-preview.png';
			//	} else {
				return `https://static1.e621.net/data/${data.data.md5.substring(0, 2)}/${data.data.md5.substring(2, 4)}/${data.data.md5}.${data.data.file_ext}`;
			//	}
			})();

			return container;
		}
	}
};

function make_thumb (key, data) {
	const site = options[data.site];
	if (site !== undefined) {
		return site.thumb(key, data);
	} else {
		return null;
	}
}

function make_full (key, data) {
	const site = options[data.site];
	if (site !== undefined) {
		return site.full(key, data);
	} else {
		return null;
	}
}

module.exports = {
	make_thumb: make_thumb,
	make_full: make_full
};

},{}],7:[function(require,module,exports){
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

},{"./../default_settings.js":4,"./../utils/utils.js":16,"./images.js":6}],8:[function(require,module,exports){
module.exports = ":root {\n\t--background-blue: #031131;\n\t--home-blue: #012e56;\n\t--standard-blue: #152f56;\n\t--comment-blue: #213a5f;\n\t--quote-blue: #284a81;\n\t--link-blue: #b4c7d9;\n\t--hover-blue: #2e76b4;\n\n\t--other-blue: #174891;\n\n\t--yellow: #fdba31;\n\t--light-yellow: #ffde9b;\n\t--dark-yellow: #d8b162;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\na {\n\tcolor: var(--link-blue);\n}\n\nbody {\n\tbackground-color: var(--background-blue);\n\tmargin: 0px;\n\tpadding: 0px;\n\tdisplay: flex;\n\tcolor: white;\n}\n\n#pane_header {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: var(--standard-blue);\n\tpadding-bottom: 0.4rem;\n\tmargin-bottom: 1rem;\n\twidth: 100vw;\n}\n\n#pane_header > * {\n\tmargin-right: 0.5rem;\n\tmargin-left: 0.5rem;\n\tcolor: var(--yellow);\n\tpadding: 0.2rem 0.5rem;\n\tborder-radius: 0px 0px 0.6rem 0.6rem;\n\tborder: 1px solid black;\n    border-top: none;\n}\n\n#pane_header > .pane_selected {\n\tbackground-color: var(--quote-blue);\n\tcolor: var(--dark-yellow);\n}\n\n.thumb {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: var(--standard-blue);\n\tpadding: 0.2rem;\n\tborder: 2px solid black;\n\twidth: fit-content;\n\theight: fit-content;\n\tmargin: 0.5rem;\n}\n\n.thumb > img {\n\tmax-width: 7rem;\n\tmax-height: 10rem;\n}\n\n#database_pane_page {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n#ranker_page {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n\n#ranker_page > * {\n\tmargin: 1rem;\n}\n\n#ranker_page img {\n\tmax-width: 45vw;\n\tmax-height: 80vh;\n}\n\n#ranker_post_1 > div, #ranker_post_2 > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: var(--standard-blue);\n\tpadding: 0.2rem;\n\tborder: 2px solid black;\n\twidth: fit-content;\n\theight: fit-content;\n}\n\n#page2 {\n\twidth: 50px;\n\theight: 50px;\n\tbackground-color: red;\n}\n\n#page3 {\n\twidth: 50px;\n\theight: 50px;\n\tbackground-color: green;\n}";

},{}],9:[function(require,module,exports){
module.exports = "<div id=\"main\">\n\t<!-- TODO better accessability for these tabs? not properly\n\tindicated that they are buttons -->\n\t<div id=\"pane_header\">\n\t\t<span>Post Ranker</span>\n\t\t<span>Post Listing</span>\n\t\t<span>Local Database</span>\n\t\t<span>Settings</span>\n\t\t<span>About</span>\n\t</div>\n\t<!-- Post Ranker -->\n\t<div id=\"pane1\" class=\"pane\">\n\t\t<div id=\"ranker_header\">\n\t\t\t<span>Use posts matching <input type=\"text\" placeholder=\"e621 tagstring\" id=\"post_ranker_tagstring\"></input>. <span id=\"post_ranker_count\">UNLOADED</span> posts loaded.</span>\n\t\t\t<br/>\n\t\t\t<button id=\"ranker_new_posts\">New images</button>\n\t\t</div>\n\t\t<div id=\"ranker_page\">\n\t\t\t<div id=\"ranker_post_1\"></div>\n\t\t\t<div id=\"ranker_post_2\"></div>\n\t\t</div>\n\t</div>\n\t<!-- Post Listing -->\n\t<div id=\"pane2\" class=\"pane\">\n\t\t<div id=\"page2\">\n\t\t</div>\n\t</div>\n\t<!-- Local Database -->\n\t<div id=\"database_pane\" class=\"pane\">\n\t\t<div id=\"database_pane_header\">\n\t\t\t<span>Detected <span id=\"database_pane_usage\">UNLOADED</span> posts in the local database. <span id=\"database_pane_memory_usage\">UNLOADED</span> are loaded into memory.</span>\n\t\t\t<br/>\n\t\t\t<button id=\"add_e621_posts\">Add/Update from e621 search</button>\n\t\t\t<input id=\"database_e621_post_searchstring\" type=\"text\" placeholder=\"e621 search string\"></input>\n\t\t\t<span id=\"loading_e621_posts\" class=\"hidden\">Currently loading e621 posts. Please be patient.</span>\n\t\t\t<br/>\n\t\t\t<button id=\"database_load_posts\">Load posts into memory</button>\n\t\t\t<span id=\"loading_posts_into_memory\" class=\"hidden\">Currently loading posts into memory. Please be patient.</span>\n\t\t\t<br/>\n\t\t\t<button id=\"database_remove_favorites\">Remove Favorite info</button>\n\t\t\t<br/>\n\t\t\t<button id=\"database_dump_database\">Erase database</button>\n\t\t</div>\n\t\t<div id=\"database_pane_page\">\n\t\t\t\n\t\t</div>\n\t</div>\n\t<!-- Settings -->\n\t<div id=\"pane4\" class=\"pane\">\n\t\t<div id=\"page3\">\n\t\t</div>\n\t</div>\n\t<!-- About -->\n\t<div id=\"pane5\" class=\"pane\">\n\t\t<div id=\"page5\">\n\t\t</div>\n\t</div>\n</div>";

},{}],10:[function(require,module,exports){
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

},{"./../utils/utils.js":16,"./local_database.js":7,"./main.css":8,"./main.html":9,"./ranker_page.js":11}],11:[function(require,module,exports){
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

	console.log(first_post, second_post, posts, valid_posts);
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

},{"./images.js":6,"./local_database.js":7}],12:[function(require,module,exports){
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

},{"./../../dependencies/extensions.js":2,"./../default_settings.js":4,"./../utils/utils.js":16}],13:[function(require,module,exports){
const E621API = require('./../../dependencies/e621_API.commonjs2.userscript.js');
const gm_values = require('./gm_values.js');

const user_agent_string = 'Idem\'s Post ELO Ranker thing';

const e621 = new E621API(user_agent_string);

async function get_authenticated () {
	const username = await gm_values.get_value('username');
	const api_key = await gm_values.get_value('api_key');

	if (username === null || api_key === null) {
		throw new Error('username or api_key are not set');
	}

	return new E621API(user_agent_string, username, api_key);
}

module.exports = {
	e621: e621,
	get_authenticated_e621: get_authenticated
};

},{"./../../dependencies/e621_API.commonjs2.userscript.js":1,"./gm_values.js":14}],14:[function(require,module,exports){
const GM = require('./../../dependencies/gm_functions.js');
const defaults = require('./../default_settings.js');

async function get_value (key) {
	return GM.getValue(key).then(e => e === undefined ? defaults[key] : e);
}

async function set_value (key, value) {
	return GM.setValue(key, value);
}

module.exports = {
	get_value: get_value,
	set_value: set_value
};

},{"./../../dependencies/gm_functions.js":3,"./../default_settings.js":4}],15:[function(require,module,exports){
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

},{"./../../dependencies/gm_functions.js":3}],16:[function(require,module,exports){
module.exports = {
	...require('./e621_api.js'),
	...require('./gm_values.js'),
	...require('./nodes.js')
};

},{"./e621_api.js":13,"./gm_values.js":14,"./nodes.js":15}]},{},[5]);
