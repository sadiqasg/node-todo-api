let mongoose = require('mongoose');

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

// let newUser = new User({
// 	email: 'sas@mail.com'
// })
// newUser.save().then((doc) => {
// 	console.log('saved', doc)
// }, (e) => {
// 	console.log('failed', e)
// })

module.exports = {User};