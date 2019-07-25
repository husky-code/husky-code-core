//var request = require('request');
var axios = require('axios');

const URL = 'http://localhost:3000';

export function login(credentials) {
	return request.post(`${URL}/login`).form({
		netid: credentials.netid,
		passwd: credentials.passwd
	});
};

export function register(credentials) {
	console.dir(credentials);
	// return request.post(`${URL}/register`).form({
// 		netid: credentials.netid,
// 		firstname: credentials.firstname,
// 		lastname: credentials.lastname,
// 		class: credentials.class,
// 		passwd: credentials.passwd
// 	});
	axios.post(`${URL}/register`, credentials).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
}