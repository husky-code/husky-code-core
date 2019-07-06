var Connection = require('tedious').Connection,
	Request = require('tedious').Request,
	TYPES = require('tedious').TYPES;
const config = require('./config');

// Create connection to database
var connection = new Connection(config.sqlconfig);

module.exports = {
	init: () => {
		// Attempt to connect and execute queries if connection goes through
		connection.on('connect', (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Connected to Azure SQL Server");
			}
		});
	},
	queryGet: (query, model, req, res) => {
		console.log('Reading rows from the Table...');
    	// Read all rows from table
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
		var request = new Request(query, (err, rowCount, rows) => {
			console.log(rowCount + ' row(s) affected');
		});
		// TODO
	},
	queryDelete: (query, req, res) => {
		var request = new Request(query, (err, rowCount, rows) => {
			console.log(rowCount + ' row(s) affected');
		});
		// TODO
	}
};