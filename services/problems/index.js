var request = require('request-promise');

const URL = 'http://localhost:3000/problems';

const problemService = {
	getTopics: (course) => {
		return new Promise((resolve, reject) => {
			request.get(`${URL}/${course}`).then(response => {
				resolve(response);
			}).catch(err => {
				reject(err);
			});
		});
	},
	getProblems: (course, topic) => {
		return new Promise((resolve, reject) => {
			request.get(`${URL}/${course}/${topic}`).then(response => {
				resolve(response);
			}).catch(err => {
				reject(err);
			});
		});
	}
};

export default problemService;