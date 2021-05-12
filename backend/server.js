var express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

// Load User Model
const User = require('./models/User').User;

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

PORT = process.env.PORT || 8080

const db = require('./config/keys').mongoURI;

// Connect to MONGODB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MONGODB Connected..."))
	.catch(err => console.log(err));

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

app.post('/api/login', async function(req, res) {
	await User.findOne({ mobile: req.body.mobile }).then(async user => {

		var otp = Math.floor(1000 + Math.random() * 9000);

		if(user){
			await User.updateOne({ _id: user.id}, {$set: {otp: otp}})
				.then(response => res.json(response))
          		.catch(err => res.status(400).json({ err }));
		}
		else{
			const newUser = new User({
				mobile: req.body.mobile,
				otp: otp
			})

			await newUser
				.save()
				.then(res.json({'success': 'New user added.'}))
				.catch(err => res.status(400).json({ err }));
		}
	})
});

app.post('/api/checkLogin', async function(req, res) {
	await User.findOne({ mobile: req.body.mobile }).then(async user => {
		if(user){
			if (user.otp == req.body.otp){
				res.json({'success': 'OTP VERIFIED', 'user': user})
			}
			else{
				res.status(400).json({ 'failure': 'OTP WRONG' })
			}
		}
		else{
			res.status(400).json({ 'failure': 'USER NOT FOUND' })
		}
	})
});