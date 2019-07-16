var express = require('express'),
	router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

/* User controllers */

// GET all users
router.get('/users', (req, res) => { // For dev purposes only
	//db.query('user', req, res);
	User.findAll().then(users => {
		res.send(users);
	});
});

// GET user by id
router.get('/user/:netid', (req, res) => {
	//db.query('user', req, res);
	User.findByPk(req.params.netid).then(user => {
		res.send(user);
	});
});

// POST new user
router.post('/register', (req, res) => {
	db.query('user', req, res);
});

// PUT updated user information, must update all fields
router.put('/user:netid', (req, res) => {
	db.query('user', req, res);
});

// PATCH updated user information, does not need to update all fields
router.patch('/user/:netid', (req, res) => {
	db.query('user', req, res);
});

// DELETE existing user
router.delete('/user/:netid', (req, res) => {
	db.query('user', req, res);
});

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1>');
});

module.exports = router;