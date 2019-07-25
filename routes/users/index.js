var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt');

const db = require('../../db'),
	BCRYPT_SALT_ROUNDS = 12,
	Users = db.User;
	
// GET all users
router.get('/', (req, res) => { // For dev purposes only
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
router.get('/:netid', (req, res) => {
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

// PUT updated user information, must update all fields
router.put('/:netid', (req, res) => {
	//db.query('user', req, res);
});

// PATCH updated user information, does not need to update all fields
router.patch('/:netid', (req, res) => {
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
			// TODO: PATCH BCRYPT HASH, try bcrypt.hashSync(...)
// 				var val = req.body[key];
// 				if (key === 'passwd') {
// 					bcrypt.hash(val, BCRYPT_SALT_ROUNDS).then(hash => {
// 						val = hash;
// 						console.log(val);
// 					});
// 				}
// 				json += (i > 0 ? ',' : '') + '"' + key + '":"' + val + '"';
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
router.delete('/:netid', (req, res) => {
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

module.exports = router;