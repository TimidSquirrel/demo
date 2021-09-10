import axios from 'axios';

const http = axios.create({
	baseURL: '/',
	timeout: 10000
});

http.interceptors.request.use(config => {
	if(localStorage.getItem('token')) {
		config.headers.common.Authorization = localStorage.getItem('token');
	}
	return config;
});

http.interceptors.response.use(response => {
	if(response.status === 200) {
		return response.data;
	}else {
		console.log(response.statusText);
	}
});

export default http;
