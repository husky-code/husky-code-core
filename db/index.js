// var Connection = require('tedious').Connection,
// 	Request = require('tedious').Request,
// 	TYPES = require('tedious').TYPES;
var Sequelize = require('sequelize');

const config = require('./config'),
	UserModel = require('../models/user');

var connected = false;

const sequelize = new Sequelize(config.options.database, config.authentication.options.userName, 
	config.authentication.options.password, {
	host: config.server,
	dialect: 'mssql',
	dialectOptions: {
		options: {
			encrypt: true
		}
	},
	define: {
		// defaultScope: {
// 			attributes: {
// 				exclude: ['createdAt', 'updatedAt']
// 			}
// 		},
		timestamps: false
	}
});

sequelize.sync().then(); // may switch to db migration for production

module.exports = {
	init: () => {
		sequelize.authenticate().then(() => {
    		console.log('Successfully established conncection to Azure SQL Server');
    		connected = true;
		}).catch(err => {
    		console.error('Unable to connect to the database:', err);
		});
	},
	connected: () => {
		return connected;
	},
	User: UserModel(sequelize, Sequelize)
};

// Create connection to database
// var connection = new Connection(config),
// 	connected = false;
// 
// function formatParams(params, includeKey) {
// 	var result = "";
// 	Object.keys(params).forEach((key, i) => {
// 		result += ((i > 0) ? ", " : "") + (includeKey ? key.toUpperCase() + "=" : "") 
// 			+ "'" + params[key] + "'";
// 	});
// 	return result;
// }
// 
// function querySpecificRows(length, params, includeKey) {
// 	return ((length > 0) ? " WHERE " : "") + formatParams(params, includeKey);
// }
// 
// module.exports = {
// 	init: () => {
// 		// Attempt to connect to SQL server
// 		connection.on('connect', (err) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log("Connected to Azure SQL Server");
// 				connected = true;
// 			}
// 		});
// 	},
// 	connected: () => {
// 		return connected;
// 	},
// 	query: (model, req, res) => {
// 		var paramsLength = Object.keys(req.params).length;
// 		var query = "";
// 		if (req.method === "GET") {
// 			query += "SELECT * FROM " + model.toUpperCase() + "S" + querySpecificRows(paramsLength, req.params, true)
// 				+ " FOR JSON PATH, ROOT('" + model + "')";
// 		} else if (req.method === "POST") {
// 			query += "INSERT INTO " + model.toUpperCase() + "S VALUES (" + querySpecificRows(paramsLength, req.body, false) + ")";
// 		} else if (req.method === "PUT") {
// 			// TODO
// 		} else if (req.method === "PATCH") {
// 			query += "UPDATE " + model.toUpperCase() + "S SET " + formatParams(req.body, true) 
// 				+ querySpecificRows(paramsLength, req.params, true);
// 		} else if (req.method === "DELETE") {
// 			query += "DELETE FROM " + model.toUpperCase() + "S" + querySpecificRows(paramsLength, req.params, true);
// 		}
// 		var request = new Request(query, (err, rowCount, rows) => {
//     		console.log(rowCount + ' row(s) affected');
//     	});
//     	request.on('doneInProc', (rowCount, more, rows) => {
//     		if (rowCount > 0) {
//     			res.send((req.method === "GET") ? JSON.parse(rows[0][0].value)[model] : "Query succeeded");
// 			} else {
// 				console.log("Query result undefined");
// 				res.send("null");
// 			}
//     	});
//     	connection.execSql(request);
// 	}
// };