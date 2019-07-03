var express = require('express'),
	app = express(),
	router = express.Router(),
	logger = require('morgan'),
	bodyParser = require('body-parser');
var Request = require('tedious').Request;
const PORT = process.env.PORT || 3000;
const db = require('./db');

var connection = db.init();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

router.get('/', (req, res) => {
	res.send('<h1>Hello, world!</h1>');
});

router.get('/users', (req, res) => {
	console.log('Reading rows from the Table...');
    // Read all rows from table
    var request = new Request("SELECT * FROM USERS FOR JSON PATH", (err, rowCount, rows) => {
    	console.log(rowCount + ' row(s) returned');
    });
    request.on('doneInProc', (rowCount, more, rows) => {
    	rows.forEach((row, i) => {
    		console.log(row[i].value);
    	});
		res.send('<h1>Users</h1>' + rows[0][0].value);
    });
    connection.execSql(request);
});

router.post('/createUser', (req, res) => {
	res.send({ data: req.body.data }); //add to db functionality needed
});

app.use('/', router);

app.listen(PORT, () => {
	console.log(`App is up and running. Listening on port ${PORT}`);
});