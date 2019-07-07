var Connection = require('tedious').Connection,
	Request = require('tedious').Request,
	TYPES = require('tedious').TYPES;
const config = require('./config');

// Create connection to database
var connection = new Connection(config.sqlconfig),
	connected = false;

function execNoRowsReturned(query, res) { // TODO: data model param?
	var request = new Request(query, (err, rowCount, rows) => {
		console.log(rowCount + ' row(s) affected');
	});
	request.on('doneInProc', (rowCount, more, rows) => {
    	if (rowCount > 0) {
    		res.send("Query succeeded");
		} else {
			console.log("Query result undefined");
			res.send("null");
		}
    });
	connection.execSql(request);
}

module.exports = {
	init: () => {
		// Attempt to connect to SQL server
		connection.on('connect', (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Connected to Azure SQL Server");
				connected = true;
			}
		});
	},
	connected: () => {
		return connected;
	},
	queryGet: (query, model, req, res) => {
		console.log('Reading rows from the Table...');
    	var request = new Request(query, (err, rowCount, rows) => {
    		console.log(rowCount + ' row(s) returned');
    	});
    	request.on('doneInProc', (rowCount, more, rows) => {
    		if (rowCount > 0) {
    			rows.forEach((row, i) => {
    				console.log(row[i].value);
    			});
				res.send(JSON.parse(rows[0][0].value)[model]);
			} else {
				console.log("Query result undefined");
				res.send("null");
			}
    	});
    	connection.execSql(request);
	},
	queryPost: (query, req, res) => {
		var values = "";
		Object.keys(req.body).forEach((key, i) => {
			values += ((i > 0) ? ", " : "") + "'" + req.body[key] + "'";
		});
		execNoRowsReturned(query + "(" + values + ")", res);
	},
	queryDelete: (query, req, res) => {
		execNoRowsReturned(query, res);
	}
};