var Connection = require('tedious').Connection,
	Request = require('tedious').Request,
	TYPES = require('tedious').TYPES;
const config = require('./config');

// Create connection to database
var connection = new Connection(config.sqlconfig),
	connected = false;

function formatParams(params, includeKey) {
	var result = "";
	Object.keys(params).forEach((key, i) => {
		result += ((i > 0) ? ", " : "") + ((includeKey === true) ? key.toUpperCase() + "=" : "") 
			+ "'" + params[key] + "'";
	});
	return result;
}

function querySpecificRows(length, params, includeKey) {
	return ((length > 0) ? " WHERE " : "") + formatParams(params, includeKey);
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
	query: (model, req, res) => {
		var paramsLength = Object.keys(req.params).length;
		var query = "";
		if (req.method === "GET") {
			query += "SELECT * FROM " + model.toUpperCase() + "S" + querySpecificRows(paramsLength, req.params, true)
				+ " FOR JSON PATH, ROOT('" + model + "')";
		} else if (req.method === "POST") {
			query += "INSERT INTO " + model.toUpperCase() + "S VALUES (" + querySpecificRows(paramsLength, req.body, false) + ")";
		} else if (req.method === "PUT") {
			// TODO
		} else if (req.method === "PATCH") {
			query += "UPDATE " + model.toUpperCase() + "S SET ()" + querySpecificRows(paramsLength, req.params, true);
			query = query.replace("()", formatParams(req.body, true));
		} else if (req.method === "DELETE") {
			query += "DELETE FROM " + model.toUpperCase() + "S" + querySpecificRows(paramsLength, req.params, true);
		}
		var request = new Request(query, (err, rowCount, rows) => {
    		console.log(rowCount + ' row(s) affected');
    	});
    	request.on('doneInProc', (rowCount, more, rows) => {
    		if (rowCount > 0) {
    			res.send((req.method === "GET") ? JSON.parse(rows[0][0].value)[model] : "Query succeeded");
			} else {
				console.log("Query result undefined");
				res.send("null");
			}
    	});
    	connection.execSql(request);
	}
};