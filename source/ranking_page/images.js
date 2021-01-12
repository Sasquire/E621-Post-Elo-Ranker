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
