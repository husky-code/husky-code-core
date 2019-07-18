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
		if (users == null) {
			res.json('no existing users');
		} else {
			res.send(users);
		}
	}).catch(err => {
		res.status(500).json(err);
	});
});

// GET user by id
router.get('/user/:netid', (req, res) => {
	Users.findByPk(req.params.netid).then(user => {
		if (user == null) {
			res.json('user does not exist');
		} else {
			res.send(user);
		}
	}).catch(err => {
		res.status(500).json(err);
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
	Users.findOne({
		where: {
			netid: req.params.netid
		}
	}).then(user => {
		if (user == null) {
			console.log('user does not exist');
			res.json('user does not exist');
		} else {
			var json = "";
			Object.keys(req.body).forEach((key, i) => {
				json += (i > 0 ? ',' : '') + '"' + key + '":"' + req.body[key] + '"';
			});
			Users.update(JSON.parse('{' + json + '}'), {
				where: {
					netid: req.params.netid
				}
			}).then(() => {
				res.send('Query succeeded');
			});
		}
	}).catch(err => {
		res.status(500).json(err);
	});
});

// DELETE existing user
router.delete('/user/:netid', (req, res) => {
	Users.findOne({
		where: {
			netid: req.params.netid
		}
	}).then(user => {
		if (user == null) {
			console.log('user does not exist');
			res.json('user does not exist');
		} else {
			Users.destroy({
				where: {
					netid: req.params.netid
				}
			}).then(() => {
				res.send('Query succeeded');
			});
		}
	}).catch(err => {
		res.status(500).json(err);
	});
});

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1><hr>');
});

module.exports = router;