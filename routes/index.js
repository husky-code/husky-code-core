var express = require('express'),
	router = express.Router();
	
const db = require('../db');

if (!db.connected()) {
	db.init();
}

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

/* User controllers */

// GET all users
router.get('/users', (req, res) => { // For dev purposes only
	db.queryGet("SELECT * FROM USERS FOR JSON PATH, ROOT('users')", 'users', req, res);
});

// GET user by id
router.get('/user/:netid', (req, res) => {
	db.queryGet("SELECT * FROM USERS WHERE NETID='" + req.params.netid
		+ "' FOR JSON PATH, ROOT('user')", 'user', req, res);
});

// POST new user
router.post('/register', (req, res) => {
	db.queryPost("INSERT INTO USERS VALUES ", req, res); // TODO: data model param?
});

// DELETE existing user
router.delete('/deleteUser/:netid', (req, res) => {
	db.queryDelete("DELETE FROM USERS WHERE NETID='" + req.params.netid + "'", req, res);
});

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1>');
});

module.exports = router;