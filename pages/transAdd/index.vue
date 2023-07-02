<template>
	<view>
		<view class="navigation">
			<view class="display">
				<view class="width_1">
					<u-icon name="arrow-left" color="#2979ff" size="35" @click="goLink1"></u-icon>
				</view>
				<view class="width_2">
					<view class="nav_padding">
						<view class="title" @click="goLink('/pages/transAdd/add')">EURUSD <u-icon name="arrow-down" color="#333" size="20"></u-icon> </view>
						<view class="xi">Euro vs US Dollar</view>
					</view>
				</view>
				<view class="width_1">

				</view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>

		<view class="execute_padding">
			<u-collapse>
				<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
					<view class="price_display">
						<view class="price_width price_color_1" @click="BuyClick">Buy Limit</view>
						<u-icon name="checkmark" color="#196ed9" size="28"></u-icon>
					</view>
					<view class="price_display">
						<view class="price_width price_color_2">Buy Limit</view>
					</view>
					<view class="price_display">
						<view class="price_width price_color_1">Buy Limit</view>
					</view>
					<view class="price_display">
						<view class="price_width price_color_2">Buy Limit</view>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>

		<view style="background: #ffffff;">
			<view class="display_list">
				<view class="list_width price_color_1">-0.5</view>
				<view class="list_width price_color_1">-0.1</view>
				<view class="list_width">0.01</view>
				<view class="list_width price_color_1">+0.1</view>
				<view class="list_width price_color_1">+0.5</view>
			</view>

			<view class="list_padd">
				<view class="display_list">
					<view class="list_width_1">{{$t("transAdd.index.StopLoss")}}</view>
					<view class="list_width_1">
						<view style="display:flex">
							<view class="list_num_width">
								<u-icon name="minus" color="#2979ff" size="28"></u-icon>
							</view>
							<view class="list_num_width_1">
								<input type="number" :placeholder="placeholder" placeholder-class="my-input-placeholder" />
							</view>
							<view class="list_num_width">
								<u-icon name="plus" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="list_padd">
				<view class="display_list">
					<view class="list_width_1">{{$t("transAdd.index.makeProfit")}}</view>
					<view class="list_width_1">
						<view style="display:flex">
							<view class="list_num_width">
								<u-icon name="minus" color="#2979ff" size="28"></u-icon>
							</view>
							<view class="list_num_width_1">
								<input type="number" :placeholder="placeholder" placeholder-class="my-input-placeholder" />
							</view>
							<view class="list_num_width">
								<u-icon name="plus" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="list_padd">
				<view class="display_list">
					<view class="list_width_1">{{$t("transAdd.index.deviation")}}</view>
					<view class="list_width_1">
						<view style="display:flex">
							<view class="list_num_width">
								<u-icon name="minus" color="#2979ff" size="28"></u-icon>
							</view>
							<view class="list_num_width_1">
								<input type="number" :placeholder="placeholder" placeholder-class="my-input-placeholder" />
							</view>
							<view class="list_num_width">
								<u-icon name="plus" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="num_display">
			<view class="num_width">
				<view class="num_title color_text_1">
					<view class="num_top">1.08</view>
					<text class="num_bag">89</text>
					<view class="num_right">8</view>
				</view>
			</view>
			<view class="num_width">
				<view class="num_title color_text_2">
					<view class="num_top">1.08</view>
					<text class="num_bag">89</text>
					<view class="num_right">8</view>
				</view>
			</view>
		</view>

		<view v-show="type == 0" class="button_display">
			<view class="button_width button_color_1">
				<view>Sell</view>
			</view>
			<view class="button_width button_color_2">
				<view>Buy</view>
			</view>
		</view>
		<view v-show="type == 1">
			<view class="button_price">
				下单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					head: this.$t("transAdd.index.execute"),
					open: true,
					disabled: true
				}],
				type: 0,
				placeholder:this.$t("transAdd.index.notset")
			}
		},
		methods: {
			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
			goLink1(url) {
				uni.navigateBack({
					delta: 1
				});
			},
			BuyClick() {
				this.type = 1
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: rgb(240, 240, 240);
	}

	.navigation {
		height: 100rpx;
		background: #fff;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99999;
		border-bottom: 1px solid #e8e8e8;

	}

	.display {
		display: flex;

		.width_1 {
			width: 15%;
			line-height: 100rpx;
			padding-left: 20rpx;
		}

		.width_2 {
			width: 70%;

			.nav_padding {
				padding: 16rpx 0 0 0;
				text-align: center;

				.title {
					font-weight: bold;
					font-size: 30rpx;
				}

				.xi {
					color: #808080;
					font-size: 20rpx;
				}
			}
		}
	}

	.execute_padding {
		padding: 20rpx;
		border-bottom: 1px solid #e8e8e8;
		background: #ffffff;

		.price_display {
			display: flex;
			padding: 20rpx 0 20rpx 0;

			.price_width {
				width: 95%;
				font-size: 30rpx;
			}

			.price_color_1 {
				color: #196ed9;
			}

			.price_color_2 {
				color: red;
			}
		}
	}


	.display_list {
		display: flex;

		.list_width {
			width: 20%;
			text-align: center;
			padding: 20rpx 0 20rpx 0;
			font-weight: bold;
			font-size: 26rpx;
		}

		.price_color_1 {
			color: #196ed9;
		}
	}

	.list_padd {
		padding: 20rpx;

		.display_list {
			display: flex;

			.list_width_1 {
				width: 50%;

				.list_num_width {
					width: 20%;
					text-align: center;
				}

				.list_num_width_1 {
					width: 60%;
					text-align: center;

					.my-input-placeholder {
						color: rgb(198, 198, 198);
						font-size: 25rpx;
					}
				}
			}
		}
	}

	.num_display {
		display: flex;

		.num_width {
			width: 50%;
			text-align: center;

			.num_title {
				display: flex;
				font-weight: bold;
				justify-content: center;
				padding: 20rpx 0 20rpx 0;

				.num_top {
					font-size: 35rpx;
					margin-top: 20rpx;
				}

				.num_bag {
					font-size: 55rpx;
				}

				.num_right {
					font-size: 30rpx;
				}
			}


			.color_text_1 {
				color: red;
			}

			.color_text_2 {
				color: #2979ff;
			}
		}
	}

	.button_display {
		display: flex;

		.button_width {
			width: 50%;
			padding: 20rpx;
			color: #fff;
			text-align: center;
			font-size: 28rpx;
		}

		.button_color_1 {
			background: red;
		}

		.button_color_2 {
			background: #196ed9;
		}
	}

	.button_price {
		background: rgb(190, 190, 190);
		text-align: center;
		text-align: center;
		font-size: 28rpx;
		padding: 20rpx;
		color: #fff;
	}
</style>