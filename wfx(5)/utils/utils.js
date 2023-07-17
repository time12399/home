import env from './env';

export function handleNavigate(url) {
	uni.navigateTo({
		url: url
	})
}

export function handleRedirectTo(url) {
	uni.redirectTo({
		url: url
	});
}

export function handleSwitchTab(url) {
	uni.switchTab({
		url: url
	});
}

export function handleReLaunch(url) {
	uni.reLaunch({
		url: url
	})
}

export function comeback() {
	let pages = getCurrentPages() 
	if (pages[pages.length - 2]) {
		//如果有上一页，就返回上一页        
		uni.navigateBack();
	} else {
		//如果没有上一页，则返回首页        
		uni.reLaunch({
			url: "/pages/tabBar/index"
		});
	}
}