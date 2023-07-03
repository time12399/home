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
		setToken(data.token)
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
	    register(param).then(response => {
	    	if(response.code == 1){
	    		uni.reLaunch({
	    			url: "/pages/auth/login"
	    		})
	    	}
	    }).catch(error => {
	        console.log(error)
	    })
	},
	login({ commit }, param) {
	    login(param).then(response => {
	    	if(response.code == 1){
					console.log(response)
	    		const { data } = response;
	    		commit('setUserInfo', data)
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
