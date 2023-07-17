import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import chart from './modules/chart'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		user,
    chart
	}
});

export default store