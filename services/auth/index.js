var request = require('request-promise');

const URL = 'http://localhost:3000/auth';

export function login(credentials) {
	request.post(`${URL}/login`).form({
		netid: credentials.netid,
		passwd: credentials.passwd
	}).then(response => {
		console.log(response);
		return response;
	}).catch(err => {
		console.log(err);
	});
};

export function register(credentials) {
	request.post(`${URL}/register`).form({
		netid: credentials.netid,
		firstname: credentials.firstname,
		lastname: credentials.lastname,
		class: credentials.class,
		passwd: credentials.passwd
	}).then(response => {
		console.log(response);
		return response; // call to Store instead?
	}).catch(err => {
		console.log(err);
	});
};