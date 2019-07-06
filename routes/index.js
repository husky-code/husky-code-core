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
router.post('/user', (req, res) => {
	db.queryPost("INSERT INTO USERS VALUES ", req, res); //TODO
});

// DELETE existing user
router.delete('/user:netid', (req, res) => {
	db.queryDelete("DELETE FROM USERS WHERE NETID='" + req.params.netid + "'", req, res); //TODO
});

module.exports = router;