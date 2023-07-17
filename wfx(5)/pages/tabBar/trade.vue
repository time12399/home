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
				<view class="content_title_1" v-show="getMyNowOrderDataLength > 0">{{$t("tabBar.trade.available")}}:
				</view>
				<view class="content_title_1" v-show="getMyNowOrderDataLength > 0">
					{{$t("tabBar.trade.prepayment")}}(%):
				</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text3">100 000.00</view>
				<view class="text3">100 000.00</view>
				<view class="text3">100 000.00</view>
				<view class="text3" v-show="getMyNowOrderDataLength > 0">100 000.00</view>
				<view class="text3" v-show="getMyNowOrderDataLength > 0">177.82</view>
			</view>
		</view>

		<view class="price_display">
			<view class="price_width">{{$t("tabBar.trade.price")}}</view>
			<u-icon name="more-dot-fill" color="#808080" size="28" @click="actionSheetShow = true"></u-icon>
		</view>

		<!--  @click="goLink('../index/deposit')" -->

		<view class="display_content" v-for="item in getMyNowOrderData.data" :key="item.id"
			@click="actionListShow = true">
			<view style="width:50%">
				<view class="content_title_2">
					<text class="content_title">{{item.name}},</text>
					<text :class="item.k_buy_status == 1 ?'text1' : 'text5'">buy {{item.k_num}}</text>
				</view>
				<view class="content_title_2">
					<text class="text4">{{item.create_price}} → {{item.finish_price}}</text>
				</view>
			</view>
			<view class="content_right" style="width:50%">
				<view :class="item.k_iswin == 1 ?'text1' : 'text5'" style="margin-top: 5rpx;">{{item.k_money}}</view>
				<view class="text2" style="font-weight: bold;">{{item.user_time_end}}</view>
			</view>
		</view>

		<u-action-sheet :list="actionList" v-model="actionSheetShow" border-radius="30" @click="actionClick"
			:cancelText="cancelText"></u-action-sheet>
		<u-action-sheet :list="actionListData" v-model="actionListShow" border-radius="30"></u-action-sheet>
	</view>
</template>

<script>
	import {
		getMyOrdernow
	} from "@/api/index.js"
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

				actionListShow: false,
				actionListData: [{
					text: '平仓',
				}, {
					text: '修改价位'
				}, {
					text: '交易'
				}, {
					text: '市场深度'
				}, {
					text: '图表'
				}, {
					text: '批量操作...'
				}],
				cancelText: this.$t("common.cancel"),
				getMyNowOrderData: [],
				getMyNowOrderDataLength: 0
			}
		},
		onLoad() {
			this.getMyNowOrderInit()
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
			},
			getMyNowOrderInit() {
				let data = {
					page: 1
				}
				getMyOrdernow(data).then(res => {
					if (res.code == 1) {
						// console.log(res)
						this.getMyNowOrderData = res.data
						this.getMyNowOrderDataLength = this.getMyNowOrderData.data.length
					}
				})
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

			.text5 {
				font-weight: bold;
				color: red;
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

			.text5 {
				font-weight: bold;
				color: red;
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