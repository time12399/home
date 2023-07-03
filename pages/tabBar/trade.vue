<template>
	<view>
		<u-navbar :is-back="false" title="USD" :title-bold="true" title-color="#000">
			<view class="u-nav-slot" slot="right" @click="goLink('/pages/transAdd/index')">
				<u-icon name="plus" size="30"></u-icon>
			</view>
		</u-navbar>

		<view class="display_content">
			<view style="width:50%">
				<view class="content_title_1">{{$t("tabBar.trade.balance")}}:</view>
				<view class="content_title_1">{{$t("tabBar.trade.worth")}}:</view>
				<view class="content_title_1">{{$t("tabBar.trade.advance")}}:</view>
				<view class="content_title_1">{{$t("tabBar.trade.available")}}:</view>
				<view class="content_title_1">{{$t("tabBar.trade.prepayment")}}(%):</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text3">100 000.00</view>
				<view class="text3">100 000.00</view>
				<view class="text3">100 000.00</view>
				<view class="text3">100 000.00</view>
				<view class="text3">177.82</view>
			</view>
		</view>

		<view class="price_display">
			<view class="price_width">{{$t("tabBar.trade.price")}}</view>
			<u-icon name="more-dot-fill" color="#808080" size="28" @click="actionSheetShow = true"></u-icon>
		</view>

		<view class="display_content" v-for="item in 5" @click="goLink('../index/deposit')">
			<view style="width:50%">
				<view class="content_title_2">
					<text class="content_title">USDCAD,</text>
					<text class="text1">buy 0.10</text>
				</view>
				<view class="content_title_2">
					<text class="text4">1.31564 → 1.31569</text>
				</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text2" style="font-weight: bold;">2023.06.26 16:09:57</view>
				<view class="text1" style="margin-top: 5rpx;">0.38</view>
			</view>
		</view>

		<u-action-sheet :list="actionList" v-model="actionSheetShow" border-radius="30"
			@click="actionClick" :cancelText="cancelText"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actionSheetShow: false,
				actionList: [{
					text: this.$t("tabBar.trade.closed"),
				}, {
					text: this.$t("tabBar.trade.closing")
				}, {
					text: this.$t("tabBar.trade.positions")
				}],
				cancelText:this.$t("common.cancel"),
			}
		},
		onLoad() {

		},
		methods: {
			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 价位操作
			actionClick(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.actionList[index].text}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-nav-slot {
		padding: 20rpx;
	}

	.display_content {
		display: flex;
		padding: 20rpx;
		border-bottom: 1px solid #e8e8e8;

		.content_title {
			font-weight: bold;
			font-size: 30rpx;
		}

		.content_title_1 {
			font-size: 28rpx;
			padding-bottom: 10rpx;
		}

		.content_title_2 {

			.text1 {
				font-weight: bold;
				color: #196ed9;
			}

			.text4 {
				font-size: 26rpx;
				font-weight: bold;
				color: #808080;
			}
		}

		.content_right {
			text-align: right;

			.text1 {
				font-weight: bold;
				color: #196ed9;
			}

			.text2 {
				font-size: 23rpx;
				color: #808080;
			}

			.text3 {
				font-weight: bold;
				padding-bottom: 10rpx;
			}
		}
	}

	.price_display {
		display: flex;
		padding: 20rpx;
		border-bottom: 1px solid #e8e8e8;

		.price_width {
			width: 95%;
		}
	}
</style>