const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', (err, client) => {

  if (err) throw err;
  let db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  // 	text: 'Something to do',
  // 	completed: false
  // }, (err, result) => {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   client.close();
  // });

  db.collection('Users').insertOne({
  	name: 'Sadiq',
  	age: 40,
  	location: 'Abuja'
  }, (err, result) => {
  	if (err) throw err;
  	console.log(JSON.stringify(result.ops, undefined, 2));
  	client.close();
  })

});

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// 	if (err) {
// 		return console.log("Unable to connect to MongoDB server");
// 	}
// 	console.log('Connected to MongoDB server');

// 	db.collection('Todos').insertOne({
// 		text: 'Something to do',
// 		completed: false
// 	}, (err, result) => {
// 		if (err) {
// 			return console.log('Unable to insert todo', err);
// 		}

// 		console.log(JSON.stringify(result.ops, undefined, 2));
// 	})

// 	db.close();
// })