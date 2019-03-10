const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost', (err, client) => {
	if (err) {
		console.log(err);
	};

	console.log('Connected to mongo server');

	let db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Todos').deleteOne({text: 'something light'}).then((result) => {
		console.log(result);
	})	

	// client.close();

})