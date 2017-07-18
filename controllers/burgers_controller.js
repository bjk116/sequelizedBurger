//Import the model to use the database functions
var db = require('../models');

//Create all our routes and set up logic within those routes where required

module.exports = function(app) {
	//Defualt page
	app.get('/', function(req, res) {
		//Call database, use cb function to render page
		console.log('Connected to root');
    	db.burgers2.findAll({}).then(function(burgers) {
      		// We have access to the todos as an argument inside of the callback function
      		var allBurgers = {
      			hamburgers: burgers
      		};
      		res.render('index', allBurgers);
    	});
	});

	//Need a route for changing hamburger to devoured
	app.put('/:id?', function(req, res) {
		var burgerID = req.params.id;
		console.log(burgerID);
		//Then from C to V
		db.burgers2.update(
			{ devoured: true },
			{ where: { id: burgerID } }
		)
  		.then(function(result) {
				res.redirect('/');
  			}
  		)
  		.catch(function(err) {
    			console.log(err + 'Error happened');	
  			}
  		)
	});

	//Need a post to create hamburgers
	app.post('/create-burger', function(req, res) {
		var newBurgerToAdd = req.body.burgerName;
	    db.burgers2.create({
	      burger_name: newBurgerToAdd
	    })
	    .then(function(burger) {
	      res.redirect('/');
	    });
	})
};