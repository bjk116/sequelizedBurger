module.exports = function(sequelize, DataTypes) {

	//Burger model that matches up with database
	var burger2 = sequelize.define('burgers2', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
		    len: [1]
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		createdAt: {
    		type: DataTypes.DATE,
    		defaultValue: DataTypes.NOW
  		},
  		updatedAt: {
    		type: DataTypes.DATE,
  			defaultValue: DataTypes.NOW
  		}
	});

	return burger2;
}