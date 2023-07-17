<template>
	<view>
		<u-navbar title="提现" back-icon-color="#196ed9"></u-navbar>
		<view class="widthdra_padd">
			<view class="widthdra_title">
				金额
			</view>
			<view class="widthdra_input">
				<u-input v-model="value" :type="type" placeholder="请输入金额" />
			</view>
			<view class="widthdra_commission">手续费: $0.00</view>

			<view class="widthdra_title">
				钱包地址
			</view>
			<view class="widthdra_add">
				<view class="widthdra_add_display">
					<view class="widthdra_add_width">
						<view class="widthdra_add_text" style="font-weight: bold;">TCR20</view>
						<view class="widthdra_add_text">TSKNAHADJKADJWHHJAN</view>
					</view>
					<view class="widthdra_add_width_1">
						<u-icon name="arrow-down" color="#96a9b3" size="30" hover-class="icon"></u-icon>
					</view>
				</view>
			</view>

			<view class="widthdra_button">
				<u-button type="primary" shape="circle">提交</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.widthdra_padd {
		padding: 20rpx;

		.widthdra_title {
			padding-bottom: 20rpx;
		}

		.widthdra_input {
			border: 1rpx solid #96a9b3;
			border-radius: 20rpx;
			padding: 0 20rpx 0 20rpx;
		}

		.widthdra_commission {
			padding: 20rpx 0 20rpx 0;
			color: #96a9b3;
			font-size: 20rpx;
			text-align: end;
		}

		.widthdra_add {
			padding: 40rpx 40rpx 20rpx 40rpx;
			border: 1rpx solid #96a9b3;
			border-radius: 20rpx;

			.widthdra_add_display {
				display: flex;

				.widthdra_add_width {
					width: 90%;

					.widthdra_add_text {
						font-size: 28rpx;
						padding-bottom: 20rpx;
					}
				}

				.widthdra_add_width_1 {
					width: 10%;
					margin-top: 30rpx;
					text-align: center;
				}
			}
		}

		.widthdra_button {
			position: fixed;
			width: 90%;
			bottom: 50rpx;
			left: 5%;
		}
	}
</style>