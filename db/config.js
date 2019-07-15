const config = {
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
};

module.exports = config;