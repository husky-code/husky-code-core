var express = require('express'),
	router = express.Router();
	
const db = require('../db');

db.init();

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

router.get('/users', (req, res) => {
	db.query("SELECT * FROM USERS FOR JSON PATH", req, res);
});

router.get('/user/:netid', (req, res) => {
	var query = "SELECT * FROM USERS WHERE NETID='" + req.params.netid + "' FOR JSON PATH";
	db.query(query, req, res);
});

router.post('/createUser', (req, res) => {
	res.send({ data: req.body.data }); //add to db functionality needed
});

module.exports = router;