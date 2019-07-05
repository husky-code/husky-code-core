var express = require('express'),
	app = express(),
	router = express.Router(),
	logger = require('morgan'),
	bodyParser = require('body-parser');
var Request = require('tedious').Request;
const PORT = process.env.PORT || 3000;
const db = require('./db');

db.init();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

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

app.use('/', router);

app.listen(PORT, () => {
	console.log(`App is up and running. Listening on port ${PORT}`);
});