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
