var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt');

const db = require('../db'),
	BCRYPT_SALT_ROUNDS = 12,
	Users = db.User;

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

/* Models routes */
router.use('/users', require('./users'));

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
			bcrypt.hash(data.passwd, BCRYPT_SALT_ROUNDS).then((hashedPasswd) => {
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

// Handle HTTP Error 404 (page not found)
router.get('*', (req, res) => {
	res.status(404).send('<h1>Error 404: Page not found</h1><hr>');
});

module.exports = router;