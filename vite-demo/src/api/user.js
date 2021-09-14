import http from '../utils/http';

export function login(userInfo) {
	return http.post('/api/login', {...userInfo})
}
