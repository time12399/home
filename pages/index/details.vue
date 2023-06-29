<template>
	<view>
			<u-navbar title="HSI50" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
			<view v-for="item1 in 3">
				<view class="search_index_padding">
						<view class="search_index_title">
								HSI 50 Index
						</view>
				</view>
				<view class="breed_padding">
					<view class="breed_padding_1">
							<view style="display: flex;">
								<view class="title">小数位</view>
								<view class="title1">1</view>
							</view>
					</view>
					<view class="breed_padding_1">
							<view style="display: flex;">
								<view class="title">合约数量</view>
								<view class="title1">10</view>
							</view>
					</view>
					<view class="breed_padding_1">
							<view style="display: flex;">
								<view class="title">点差</view>
								<view class="title1">浮动</view>
							</view>
					</view>
					<view class="breed_padding_1">
							<view style="display: flex;">
								<view class="title">止损水平</view>
								<view class="title1">0</view>
							</view>
					</view>
					<view class="breed_padding_1">
							<view style="display: flex;">
								<view class="title">预付款货币</view>
								<view class="title1">HKD</view>
							</view>
					</view>
				</view>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.search_index_padding{
		padding: 20rpx 20rpx 0 20rpx;
		
		.search_index_title{
			font-weight: bold;
			color: #8a8a8a;
		}
	}
	.breed_padding{
		padding: 20rpx;
		background: #ffffff;
		// border-top: 1rpx solid #e8e8e8;
		// border-bottom: 1rpx solid #e8e8e8;
		.breed_padding_1{
			padding-bottom: 20rpx;
		}
		
		.title{
			width:50%;
			// font-weight: bold;
			color: #000;
			font-size: 28rpx;
		}
		.title1{
			width:50%;
			text-align: right;
			color: #808080;
		}
	}
</style>
