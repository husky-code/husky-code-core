var Connection = require('tedious').Connection,
	Request = require('tedious').Request;
const config = require('./config');

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

module.exports = {
	queryDatabase: (query) => {
    	console.log('Reading rows from the Table...');
    	// Read all rows from table
    	var request = new Request(query, (err, rowCount, rows) => {
            console.log(rowCount + ' row(s) returned');
            //process.exit();
        });
    	request.on('row', (columns) => {
        	columns.forEach((column) => {
            	console.log("%s\t%s", column.metadata.colName, column.value);
        	});
    	});
    	connection.execSql(request);
	}
};