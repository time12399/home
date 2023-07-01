import request from './../utils/request';

// export function getGoods(data) {
// 	return request({
// 		url: 'api.Goods/getGoods',
// 		method: 'POST',
// 		data
// 	})
// }

export function getGoods() {
	return request({
		url: 'api.Goods/getGoods',
		method: 'POST',
	})
}
