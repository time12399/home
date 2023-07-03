import { login, register } from '../../api/user';
import { setToken , getToken, removeToken} from '../../utils/auth';
let infoHistory = uni.getStorageSync('userInfo') || {};

const state = {
	hasLogin: Boolean(Object.keys(infoHistory).length),
	info: infoHistory
},
getters = {
	info(state) {
		return state.info;
	},
	hasLogin(state){
		return state.hasLogin;
	}
},
mutations = {
	setUserInfo(state, info) { 
		state.hasLogin = true;
		state.info = info;
		setToken(info.token)
		uni.setStorageSync('userInfo',info)
		uni.reLaunch({
			url: "/pages/tabBar/index",
		})
	},
	logout(state) {
		state.info = {};
		state.hasLogin = false;
		removeToken();
		uni.removeStorageSync('userInfo')
	}
}
, actions = {
	register({ commit }, param) {
			uni.showLoading({
				title: "加载中",
				icon: "loading"
			})
	    register(param).then(response => {
	    	if(response.code == 1){
	    		uni.reLaunch({
	    			url: "/pages/auth/login"
	    		})
	    	}else{
					uni.showLoading({
						title: response.info,
						icon: "none"
					})
				}
	    }).catch(error => {
	        console.log(error)
	    })
	},
	login({ commit }, param) {
			uni.showLoading({
				title: "加载中",
				icon: "loading"
			})
	    login(param).then(response => {
	    	if(response.code == 1){
					console.log(response)
	    		const { data } = response;
	    		commit('setUserInfo', data)
	    	}else{
					uni.showLoading({
						title: response.info,
						icon: "none"
					})
				}
				
	    	
	    }).catch(error => {
	        console.log(error)
	    })
	}
};

export default {
    namespaced: true,
	state,
	getters,
	mutations,
    actions
}
