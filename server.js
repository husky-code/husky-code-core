var express = require('express');
var app = express();
var router = express.Router();
var logger = require('morgan');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

router.get('/', (req, res) => {
	//res.send('<h1>Hello, world!</h1>' + req.data);
	res.render('Question');
});

router.post('/redirect', (req, res) => {
	res.send({ data: req.body.data });
});

app.use('/', router);

app.listen(PORT, () => {
	console.log(`App is up and running. Listening on port ${PORT}`);
});