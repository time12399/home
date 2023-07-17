<template>
	<view>
		<u-navbar title="钱包" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
		<view style="height: 20rpx;"></view>
		<view class="wallet_padding">
			<view class="wallet_title">余额</view>
			<view class="wallet_prc">9454564.13</view>
		</view>
		<view style="height: 40rpx;"></view>
		<view class="title_list" @click="$utils.handleNavigate('/pages/index/binding?id=1')">
			<view class="title_list_padding">
				<view class="list_display">
					<view class="width1">绑定银行卡</view>
					<view class="width2">
						<u-icon name="arrow-right" size="30"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 40rpx;"></view>
		<view class="title_list" @click="$utils.handleNavigate('/pages/index/binding?id=2')">
			<view class="title_list_padding">
				<view class="list_display">
					<view class="width1">绑定数字货币地址</view>
					<view class="width2">
						<u-icon name="arrow-right" size="30"></u-icon>
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
		onLoad() {
				
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.wallet_padding {
		padding: 30rpx;

		.wallet_title {
			font-weight: bold;
		}

		.wallet_prc {
			color: #196ed9;
			font-weight: bold;
			font-size: 35rpx;
		}
	}

	.title_list {
		padding: 0 30rpx 0 30rpx;
		background: #ffffff;

		.title_list_padding {
			padding: 20rpx 0 20rpx 0;

			.list_display {
				display: flex;
				font-weight: bold;

				.width1 {
					width: 90%;

				}

				.width2 {
					width: 10%;
					text-align: end;
				}
			}
		}
	}
</style>