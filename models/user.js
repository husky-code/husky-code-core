const MAX_STRING = 256;

module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		netid: {
			type: type.STRING(MAX_STRING),
			primaryKey: true,
			allowNull: false
		},
		firstname: {
			type: type.STRING(MAX_STRING),
			allowNull: false
		},
		lastname: {
			type: type.STRING(MAX_STRING),
			allowNull: false
		},
		class: {
			type: type.STRING(MAX_STRING)
		},
		passwd: {
			type: type.STRING(MAX_STRING),
			allowNull: false
		}
	});
};