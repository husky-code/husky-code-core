var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt');

const db = require('../db'),
	BCRYPT_SALT_ROUNDS = 12,
	Users = db.User;

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

/* User controllers */

// GET all users
router.get('/users', (req, res) => { // For dev purposes only
	Users.findAll().then(users => {
		res.send(users);
	});
});

// GET user by id
router.get('/user/:netid', (req, res) => {
	Users.findByPk(req.params.netid).then(user => {
		res.send(user);
	});
});

// POST new user
router.post('/register', (req, res) => {
	const data = {
		netid: req.body.netid,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		class: req.body.class,
		passwd: req.body.passwd
	};
	if (data.netid === '' || data.firstname === '' || data.lastname === '' || data.passwd === '') {
		res.json("Missing required information");
	}
	Users.findOne({
		where: {
			netid: data.netid
		}	
	}).then(user => {
		if (user != null) {
			console.log("user already exists");
			res.json("user already exists");
		} else {
			bcrypt.hash(data.passwd, BCRYPT_SALT_ROUNDS).then((hashedPasswd) => {
				//console.log(hashedPasswd);
				Users.create({
					netid: data.netid,
					firstname: data.firstname,
					lastname: data.lastname,
					class: data.class,
					//passwd: hashedPasswd
					passwd: data.passwd
				});
			}).then(() => {
				console.log('user created');
				res.json('user created');
			});
		}
	}).catch(err => {
		res.status(500).json(err);
	});
});

// PUT updated user information, must update all fields
router.put('/user:netid', (req, res) => {
	//db.query('user', req, res);
});

// PATCH updated user information, does not need to update all fields
router.patch('/user/:netid', (req, res) => {
	var json = "";
	Object.keys(req.body).forEach((key, i) => {
		json += (i > 0 ? ',' : '') + '"' + key + '":"' + req.body[key] + '"';
	});
	// Users.findOne().then(); // error handling
	Users.update(JSON.parse('{' + json + '}'), {
		where: {
			netid: req.params.netid
		}
	}).then(() => {
		res.send('Query succeeded');
	}); // error handling?
});

// DELETE existing user
router.delete('/user/:netid', (req, res) => {
	Users.destroy({
		where: {
			netid: req.params.netid
		}
	}).then(() => {
		res.send('Query succeeded');
	}); // error handling?
});

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1>');
});

module.exports = router;