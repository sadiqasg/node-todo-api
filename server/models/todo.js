let mongoose = require('mongoose');

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

// let addTodo = new Todo({
// 	text: 'read',
// 	completed: true,

// })

// addTodo.save().then((doc) => {
// 	console.log('saved', doc)
// }, (e) => {
// 	console.log('failed to save', e)
// })

module.exports = {Todo};