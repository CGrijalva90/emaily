// keys.js - figure out what set of credentials to run

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev')
}

// 390547213561-oag5rfvk0krsnqpmigqbf5dn4fem9hut.apps.googleusercontent.com

// iVQaJ6dL0FcCcrBfjqE50Qwc
