const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost', (err, client) => {
	if (err) {
		console.log(err);
	};

	console.log('Connected to mongo server');

	let db = client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c8531d74d0ecc9e78aa25de')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})

	// client.close();

})