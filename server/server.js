let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

let newUser = new User({
	email: 'sas@mail.com'
})
newUser.save().then((doc) => {
	console.log('saved', doc)
}, (e) => {
	console.log('failed', e)
})

// let addTodo = new Todo({
// 	text: 'read',
// 	completed: true,

// })

// addTodo.save().then((doc) => {
// 	console.log('saved', doc)
// }, (e) => {
// 	console.log('failed to save')
// })