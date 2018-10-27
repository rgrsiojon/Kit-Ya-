const express = require('express');
const database = require('../modules/database-user');
var router = express.Router();

router.use('/admin', require(__dirname + '/admin'));
// router.use('/blog', require(__dirname + '/blog'));


router.get('/',  (req, res)=> {
    res.render('user/home', {data:{}});
})

router.get('/log',  (req, res)=> {
    res.render('user/login', {data:{}});
})

router.post('/log',  (req, res)=> {
	
	var user =  req.body;
	// @check user
	if(!user) {
		// res.render('error', {data:{}})
	} else {

		if (user.id_up) {
			var arrayErr = new Array();
			// @check name
			if (!user.name_up || user.name_up.length === 0) {
				arrayErr[0] = 'Enter name';
				arrayErr[5] = 'err';
			}
			// @check username
			if (!user.username_up || user.username_up.length === 0) {
				arrayErr[1] = 'Enter username';
				arrayErr[5] = 'err';
			}
			// @check password
			if (!user.password_up || user.password_up.length === 0) {
				arrayErr[2] = 'Enter password';
				arrayErr[5] = 'err';
			}
			// @check re-password

			if (!user.re_password_up || user.re_password_up.length===0) {
				arrayErr[3] = "Emter re-password";
				arrayErr[5] = 'err';
			}

			if (user.password_up.length !==0 && user.re_password_up.length !==0 && user.password_up !== user.re_password_up) {
				arrayErr[3] = "Password isn't macth";
				arrayErr[5] = 'err';
			}
			// @check email
			if (!user.email_up || user.email_up.length === 0) {
				arrayErr[4] = 'Enter email';
				arrayErr[5] = 'err';
			}

			// @arrayErr[0]:  error for name
			// @arrayErr[1]:  error for username
			// @arrayErr[2]:  error for password
			// @arrayErr[3]:  error for re-password
			// @arrayErr[4]:  error for email
			// @arrayErr[5]:  check error
			if(arrayErr) {
				// @data has been error
				const listerr = {
					name:arrayErr[0],
					username:arrayErr[1],
					password:arrayErr[2],
					re_password:arrayErr[3],
					email:arrayErr[4],
					err: arrayErr[5]
				}
				res.render('user/login', {data:listerr})
			}


			const dataUser = {
				nameuser: user.name_up,
				username: user.username_up,
				password: user.password_up,
				email: user.email_up
			}
			// @insert database
			// var success = database.insert(dataUser);
			// success.then((result)=>{
			// 	res.render('home', {data:{}})
			// }).catch((err)=>{
			// 	res.render('error', {data:{}})
			// }) 

			res.render('user/login', {data:{}})
			
		} else {
			res.render('home', {data:{}})
		}
			

	}

	
})

module.exports = router;