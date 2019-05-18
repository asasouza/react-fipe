import axios from 'axios';

class RequestProvider {
	constructor() {
		axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1/';
	}

	async get(url) {
		return new Promise((resolve, reject) => {
			axios.get(url)
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				console.log(err);
				if (err.response) {
					reject(err.response.data);
				} else if (err.request) {
					reject(err.request);
				} else {
					reject(err);
				}
			})
		})
	}
}

export default new RequestProvider();
