const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost', (err, client) => {
	if (err) {
		console.log(err);
	};

	console.log('Connected to mongo server');

	let db = client.db('TodoApp');

	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		throw err;
	})

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	return console.log(err);
	// })

	// db.collection('Users').find({name: 'Seema'}).toArray().then((docs) => {
	// 	// console.log(`Users count: ${count}`);
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	return console.log(err);
	// })	

	client.close();

})