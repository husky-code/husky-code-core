var express = require('express'),
	app = express(),
	router = express.Router(),
	logger = require('morgan'),
	bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./db');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

router.get('/users', (req, res) => {
	res.send('<h1>Users</h1>' + db.queryDatabase("SELECT * FROM USERS WHERE NETID='jonsnow' FOR JSON PATH"));
});

router.post('/createUser', (req, res) => {
	res.send({ data: req.body.data });
});

app.use('/', router);

app.listen(PORT, () => {
	console.log(`App is up and running. Listening on port ${PORT}`);
});