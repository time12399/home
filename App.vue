<script>
	export default {
		onLaunch: function(options) {
			if (!this.$store.state.user.hasLogin) {
				// 判断有没有登陆
				// if("pages/tabBar/index".indexOf(options.path) == -1){
				// 	uni.reLaunch({
				// 		url: "/pages/auth/login",
				// 	})
				// }
			}
			// console.log('App Launch')
			uni.getSystemInfo({
				success:(e)=> {
					uni.setStorageSync('statusBarHeight', e.statusBarHeight);
					// this.statusBarHeight = e.statusBarHeight;
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import url("static/iconfont/iconfont.css");

	/*每个页面公共css */
	.viewFlex {
		display: flex;
	}

	// 顶部
	.nav {
		height: var(--status-bar-height); // --status-bar-height系统状态栏高度
	}

	button::after {
		border: none;
	}

	button {
		border-radius: 0;
	}
</style>