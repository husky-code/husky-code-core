var Connection = require('tedious').Connection,
	Request = require('tedious').Request;

module.exports = {
	sqlconfig: {
		authentication: {
        	options: {
            	userName: 'username',
            	password: 'password'
        	},
        	type: 'default'
    	},
    	server: 'server',
    	options: {
        	database: 'database',
        	encrypt: true,
        	rowCollectionOnDone: true
    	}
	}
};