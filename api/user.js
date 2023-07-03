import request from './../utils/request';

export function login(data) {
	return request({
		url: 'api.login/in',
		method: 'POST',
		data
	})
}

export function register(data) {
	return request({
		url: 'api.login/register',
		method: 'POST',
		data
	})
}
