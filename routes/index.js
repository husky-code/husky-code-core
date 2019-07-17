var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt');

const db = require('../db'),
	BCRYPT_SALT_ROUNDS = 12;
	
const User = db.User;

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

/* User controllers */

// GET all users
router.get('/users', (req, res) => { // For dev purposes only
	User.findAll().then(users => {
		res.send(users);
	});
});

// GET user by id
router.get('/user/:netid', (req, res) => {
	User.findByPk(req.params.netid).then(user => {
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
	User.findOne({
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
				User.create({
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
	// User.findOne().then();
	// temporarily just updating password, need to generalize PATCH for all fields
	// JSON push array?
	User.update({passwd: req.body.passwd}, {
		where: {
			netid: req.params.netid
		}
	}).then(() => {
		res.send('Query succeeded');
	});
});

// DELETE existing user
router.delete('/user/:netid', (req, res) => {
	User.destroy({
		where: {
			netid: req.params.netid
		}
	}).then(() => {
		res.send('Query succeeded');
	});
});

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1>');
});

module.exports = router;