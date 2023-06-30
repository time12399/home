import App from './App'

import store from 'store/index.js'
import * as utils from '@/utils/utils.js'
import AccountError from '@/exception/AccountError.js';
import uView from "uview-ui";

import VueI18n from 'vue-i18n'
import messages from './locale/index'

let currLanguage = uni.getStorageInfoSync("currLanguage")

let i18nConfig = {
	locale: currLanguage? currLanguage: uni.getLocale(),// 获取已设置的语言
	messages
}



Vue.use(VueI18n)
Vue.use(uView);
const i18n = new VueI18n(i18nConfig)

Vue.prototype.$utils = utils
Vue.prototype.$throw = function (message) {
	this.$u.toast(message)
	throw new AccountError(message);
};

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

try {
	function isPromise(obj) {
		return (
			!!obj &&
			(typeof obj === "object" || typeof obj === "function") &&
			typeof obj.then === "function"
		);
	}

	// 统一 vue2 API Promise 化返回格式与 vue3 保持一致
	uni.addInterceptor({
		returnValue(res) {
			if (!isPromise(res)) {
				return res;
			}
			return new Promise((resolve, reject) => {
				res.then((res) => {
					if (res[0]) {
						reject(res[0]);
					} else {
						resolve(res[1]);
					}
				});
			});
		},
	});
} catch (error) {}

const app = new Vue({
	...App,
	store,
	i18n
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif