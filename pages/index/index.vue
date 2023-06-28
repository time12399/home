<template>
	<view>
			<view :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="searchInput">
					<u-search placeholder="输入交易品种进行搜索" shape="square" :show-action="true" action-text="取消" ></u-search>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
					statusBarHeight:uni.getStorageSync('statusBarHeight')
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.searchInput {
			padding: 20rpx;
	}
</style>
