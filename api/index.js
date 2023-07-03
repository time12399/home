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

export function searchGoods() {
	return request({
		url: 'api.Goods/searchGoods',
		method: 'POST',
	})
}

export function getDictImg() {
	return request({
		url: 'api.Qrcode/getDictImg',
		method: 'GET',
	})
}

export function delGoods() {
	return request({
		url: 'api.Qrcode/delGoods',
		method: 'POST',
	})
}
