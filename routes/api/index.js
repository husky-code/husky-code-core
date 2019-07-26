var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt'),
	middleware = require('../../config/middleware');
	
const db = require('../../db'),
	BCRYPT_SALT_ROUNDS = 12,
	Users = db.User;
	
router.post('/login', (req, res) => {
	// TODO: create JWT auth token; use Passport?
	if (!(req.body.hasOwnProperty('netid')) || !(req.body.hasOwnProperty('passwd'))) {
		res.send('Missing required info');
	} else {
		Users.findByPk(req.body.netid).then(user => {
			if (user == null) {
				res.send('Username does not exist');
			} else {
				bcrypt.compare(req.body.passwd, user.passwd).then(result => {
					if (result) {
						// TODO: create JWT auth token
						// TODO: redirect to /dashboard
						res.redirect('/'); // temporary?
					} else {
						res.send('Invalid login. Username and password do not match');
					}
				});
			}
		}).catch(err => {
			res.status(500).send(err);
		});
	}
});

// Register new user
router.post('/register', (req, res) => {
	const data = {
		netid: req.body.netid,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		class: req.body.class,
		passwd: req.body.passwd
	};
	if (data.netid === '' || data.firstname === '' || data.lastname === '' || data.passwd === '') {
		res.json('Missing required information');
	}
	Users.findOne({
		where: {
			netid: data.netid
		}
	}).then(user => {
		if (user != null) {
			console.log('user already exists');
			res.json('user already exists');
		} else {
			bcrypt.hash(data.passwd, BCRYPT_SALT_ROUNDS).then(hash => {
				Users.create({
					netid: data.netid,
					firstname: data.firstname,
					lastname: data.lastname,
					class: data.class,
					passwd: hash
				}).then(newUser => {
					console.log('user created');
					res.json({user: newUser, msg: 'user created'});
				});
			});
		}
	}).catch(err => {
		res.status(500).json(err);
	});
});

router.delete('/logout', (req, res) => {
	// TODO: delete JWT auth token; use Passport?
});

module.exports = router;