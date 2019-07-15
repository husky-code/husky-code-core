const sequelize = require('sequelize');

const User = sequelize.define('Users', {
	netid: {
		type: Sequelize.STRING,
		primaryKey: true,
		allowNull: false
	},
	firstname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	class: {
		type: Sequelize.STRING
	},
	passwd: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = User;