const setupAPI = () => {
	switch (process.env.NODE_ENV) {
		case 'local':
			return 'https://api.stimulus.fi';
		case 'development':
			return 'https://api.stimulus.fi';
		case 'demo':
			return 'https://api.stimulus.fi';
		case 'staging':
			return 'https://api.stimulus.fi';
		case 'production':
			return 'https://api.stimulus.fi';
		default:
			return 'https://api.stimulus.fi';
	}
};

const apiBaseUrl = setupAPI();

module.exports = {
	API_BASE_URL: JSON.stringify(apiBaseUrl),
	VERSION: JSON.stringify(require('./package.json').version),
};
