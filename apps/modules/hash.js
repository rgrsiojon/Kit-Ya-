const bcrypt =  require('bcryptjs');
const config = require('config');
const q = require('q');

function hashPassword(pass) {
	var salt = bcrypt.genSaltSync(config.get("salt"));
	return bcrypt.hashSync(pass, salt);
}

function Comparepass(pass, hashpass) {
	console.log('test');
	var compare = bcrypt.compareSync(pass, hashpass);
	return compare;
}

module.exports = {
	hashPassword: hashPassword,
	Comparepass:Comparepass
}