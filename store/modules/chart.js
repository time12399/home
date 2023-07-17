import moment from 'moment'

moment.locale('zh-cn')

const state = {
    categories: [],
    series: [],
	index: 1
  },
  getters = {},
  mutations = {
    setSeries(state, series) {
      state.series = series
    },
    setCategories(state, categories) {
      state.categories = categories
    },
	setIndex(state, index){
		state.index = index
	}
  },
  actions = {
    setSeriesDatas({ commit, state }, res) {
	  let index = state.index
	  
      let series = JSON.parse(JSON.stringify(state.series))
      let categories = JSON.parse(JSON.stringify(state.categories))
      let time = moment().format('HH:mm:ss')
      if (!categories.includes(time)) {
        categories.push(time)
      }
	  let data = {
		  timestamp: res[index]['datetime3'],
		  open: res[index]['open'],
		  high: res[index]['height'],
		  low: res[index]['low'],
		  close: res[index]['close'],
		  volume: res[index]['val'],
		  turnover: 0
	  }
      // let data = [res[index]['open'], res[index]['close'], res[index]['low'], res[index]['height']]
      // if (!series.length) {
      //   series.push({
      //     name: res[index]['name'],
      //     data: [data],
      //   })
      // } else {
      //   series[0].data.push(data)
      // }
	  // series
	  
      // for (let key in res) {
      //   const findIndex = series.findIndex(item => parseInt(item.media_id) == parseInt(key))
      //   let data = res[key]['now_buy_arr'].map(item => parseFloat(res[key]['now_buy_arr']))
      //   if (findIndex < 0) {
      //     series.push({
      //       media_id: res[key]['media_id'],
      //       name: res[key]['name'],
      //       data: [data],
      //       // now_sell_arr: [res[key]['now_sell_arr']],
      //     })
      //   } else {
      //     series[findIndex]['data'].push(data)
      //     // series[findIndex]['now_sell_arr'].push(res[key]['now_sell_arr'])
      //   }
      // }
      // console.log(JSON.stringify(series))
      // console.log(series)
      commit('setCategories', categories)
      commit('setSeries', data)
    }
  };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}