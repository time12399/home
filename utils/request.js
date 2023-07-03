import {getToken, removeToken} from '../utils/auth';
import env from '../utils/env';

function service(options = {}) {
	options.url = `${env.baseUrl}${options.url}`;
	// 判断本地是否存在token，如果存在则带上请求头
	if (getToken()) {
		options.header = {
			'content-type': 'application/json',
			'Authtoken': `${getToken()}`,	// 这里是token(可自行修改)
		};
	}
	if(!options.header){
		options.header = {}
	}
	options.header.language = uni.getStorageSync("currLanguage")?
		uni.getStorageSync("currLanguage"):uni.getStorageSync("localeLan")	// 当前语言
	options.data = options.data? options.data: {}
// return new Promise((r, e) => {})
	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			uni.hideLoading()
			if (res.data.code !== 1) {
				if (res.data.code === 401) {
					removeToken()
					uni.removeStorageSync('userInfo')
					uni.reLaunch({
						url: '/pages/auth/login'
					})
					return
				}
			} 
			resolved(res.data)
		};
		options.fail = (err) => {
			uni.hideLoading()
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '服务器错误,请稍后再试'
			});
			rejected(err);
		};
		uni.request(options);
	});
}

export default service;
