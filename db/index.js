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
		var data = [];
    	console.log('Reading rows from the Table...');
    	// Read all rows from table
    	var request = new Request(query, (err, rowCount, rows) => {
            console.log(rowCount + ' row(s) returned');
            //process.exit();
        });
    	request.on('row', (columns) => {
        	var rowData = [];
        	columns.forEach((column) => {
            	//console.log("%s\t%s", column.metadata.colName, column.value);
            	rowData = column.value;
        	});
        	//module.exports.data.push(rowData);
        	data.push(rowData);
    	});
    	request.on('doneInProc', (rowCount, more, rows) => {
    		//console.log(rows);
    		// console.log(module.exports.data);
    		console.log(data);
    		//return data;
    	});
    	connection.execSql(request);
	}// ,
// 	data: []
};