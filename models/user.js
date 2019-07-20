module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		netid: {
			type: type.STRING,
			primaryKey: true,
			allowNull: false
		},
		firstname: {
			type: type.STRING,
			allowNull: false
		},
		lastname: {
			type: type.STRING,
			allowNull: false
		},
		class: {
			type: type.STRING
		},
		passwd: {
			type: type.STRING(60),
			allowNull: false
		}
	}, {
		paranoid: true,
		timestamps: false
	});
};