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

export function delGoods(data) {
	return request({
		url: 'api.Goods/delGoods',
		method: 'POST',
		data
	})
}

export function getDictData(data) {
	return request({
		url: 'api.auth.Data/getDictData',
		method: 'POST',
		data
	})
}

export function findGoodsId(data) {
	return request({
		url: 'api.goods/findGoodsId',
		method: 'POST',
		data
	})
}

export function getMyOrder(data) {
	return request({
		url: 'api.auth.Order/getMyOrder',
		method: 'POST',
		data
	})
}

export function addTrade(data) {
	return request({
		url: 'api.auth.Order/addTrade',
		method: 'POST',
		data
	})
}


export function addGoods(data) {
	return request({
		url: 'api.Goods/addGoods',
		method: 'POST',
		data
	})
}

export function getMyOrdernow(data) {
	return request({
		url: 'api.auth.Order/getMyOrdernow',
		method: 'POST',
		data
	})
}