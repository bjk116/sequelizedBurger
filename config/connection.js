//Dependencies
var Sequelize = require('sequelize');

//Creates MySQL connection using Sequelize
var sequelize = new Sequelize('burgers_db', 'root', 'Bourassa13!bk', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

//Export connection for other files
module.exports = sequelize;