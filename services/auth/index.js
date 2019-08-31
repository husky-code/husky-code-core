var request = require('request-promise');

const URL = 'http://localhost:3000/auth';

function login(credentials) {
	return new Promise((resolve, reject) => {
		request.post(`${URL}/login`).form({
			netid: credentials.netid,
			passwd: credentials.passwd
		}).then(response => {
			resolve(response);
		}).catch(err => {
			reject(err);
		});
	});
}

function register(credentials) {
	return new Promise((resolve, reject) => {
		request.post(`${URL}/register`).form({
			netid: credentials.netid,
			firstname: credentials.firstname,
			lastname: credentials.lastname,
			class: credentials.class,
			passwd: credentials.passwd
		}).then(response => {
			resolve(response);
		}).catch(err => {
			reject(err);
		});
	});
};

export const auth = {
	login,
	register
};