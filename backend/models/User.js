const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create User Schema
const userSchema = new schema({
	name: {
		type: String,
	},
	mobile: {
		type: String,
		required: true
	},
	otp: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	deviceId: {
		type: String,
	},
	dob: {
		type: Date,
	},
	emergency: [
		{
			name: String,
			contact: String
		}
	]
});


module.exports = {
	User: mongoose.model('users', userSchema),
}