var Connection = require('tedious').Connection,
	Request = require('tedious').Request,
	TYPES = require('tedious').TYPES;
const config = require('./config');

module.exports = {
	init: () => {
		// Create connection to database
		var connection = new Connection(config.sqlconfig);
		// Attempt to connect and execute queries if connection goes through
		connection.on('connect', (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Connected to Azure SQL Server");
			}
		});
		return connection;
	}
};