var express = require('express'),
	router = express.Router(),
	middleware = require('../config/middleware');

router.get('/', (req, res) => {
	// TODO: authentication, redirect to login/register
//  if (middleware.isAuthenticated) {
// 		res.redirect('/dashboard');
// 	}
	res.send('<h1>Hello World!</h1>');
});

/* API routes */
router.use('/api', require('./api'));

/* Models routes */
router.use('/users', require('./users'));

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1><hr>');
});

module.exports = router;