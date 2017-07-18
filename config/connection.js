//Dependencies
var Sequelize = require('sequelize');
var mysql = require('mysql');

//Creates MySQL connection using Sequelize
if (process.env.JAWSDB_URL) {
	sequelize = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var sequelize = new Sequelize('burgers_db', 'root', 'Bourassa13!bk', {
		host: 'localhost',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});	
}

//Export connection for other files
module.exports = sequelize;