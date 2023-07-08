<template>
	<view>
		<u-navbar :title="title" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
		<view class="cash_padding">
			<view class="cash_padding_bg">
				<view class="cash_bg_padding">
					<view class="cash_display">
						<view class="cash_width" :class="currtype == 0 ?'cash_color_1' : 'cash_color_2'"
							@click="BankCardClick(0)">{{$t("index.cashOut.currency")}}</view>
						<view class="cash_width" :class="currtype == 1 ?'cash_color_1' : 'cash_color_2'"
							style="margin-left: 1%;" @click="BankCardClick(1)">{{$t("index.cashOut.BankCard")}}</view>
					</view>
					<view class="cash_list_display">
						<view class="cash_list_width_1">
							{{$t("index.cashOut.currenc")}}
						</view>
						<view class="cash_list_width_2" @click="pickerShow = true">
							{{selectorName}}
						</view>
						<view class="cash_list_width_3">
							<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
						</view>
					</view>
					<view class="cash_list_display" v-show="currtype == 0">
						<view class="cash_list_width_1">
							{{$t("index.cashOut.address")}}
						</view>
						<view class="cash_list_width_2" @click="addressShow = true">
							{{addressName}}
						</view>
						<view class="cash_list_width_3">
							<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
						</view>
					</view>
					<view class="cash_list_display" v-show="currtype == 1">
						<view class="cash_list_width_1">
							{{$t("index.cashOut.account")}}
						</view>
						<view class="cash_list_width_2">
							<!-- <input type="number" :placeholder="placeholder2" placeholder-style="font-size:28rpx"> -->
							{{placeholder2}}
						</view>

					</view>


					<view class="cash_list_display">
						<view class="cash_list_width_1">
							{{$t("index.cashOut.number")}}
						</view>
						<view class="cash_list_width_2">
							<input type="number" :placeholder="placeholder1" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display">
						<view class="cash_list_width_1">
							{{$t("index.cashOut.notes")}}
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" :placeholder="placeholder" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="display_content">
						<view style="width:50%">
							<view class="content_title_1">{{$t("tabBar.history.commission")}}</view>
							<view class="content_title_1">{{$t("index.cashOut.Received")}}:</view>
							<view class="content_title_1">{{$t("index.cashOut.balance")}}</view>
						</view>
						<view class="content_right" style="width:50%">
							<view class="text3">10</view>
							<view class="text3">11101 USD</view>
							<view class="text3">954545444.91 USD</view>
						</view>
					</view>

					<view class="cash_button_pa">
						<view class="cash_button">{{$t("index.cashOut.currency1")}}</view>
					</view>
				</view>
			</view>

			<!-- 提现记录 -->
			<view class="withdraw_padd">{{$t("index.cashOut.records")}}</view>

			<view class="cash_padding_bg" v-for="(item,index) in myOrder.data" :key="index">
				<view class="cash_bg_padding">
					<view class="list_sort_display">
						<view class="sort_width">
							<view class="sort_num">{{$t("index.cashOut.number")}}</view>
							<view class="sort_price">{{item.amount}}</view>
						</view>
						<view class="sort_width sort_yi_1">
							<view class="sort_num">{{$t("index.cashOut.quantity")}}</view>
							<view class="sort_price">{{item.dzAmount}}</view>
						</view>
						<view class="sort_width sort_yi_2">
							<view class="sort_num">{{$t("index.cashOut.unit")}}</view>
							<view class="sort_price">{{item.unit}}</view>
						</view>
						<view class="sort_width">
							<view class="sort_num">{{$t("tabBar.history.commission")}}</view>
							<view class="sort_price">{{item.sxf}}</view>
						</view>
						<view class="sort_width sort_yi_1">
							<view class="sort_num">{{$t("index.cashOut.state")}}</view>
							<view class="sort_price">{{$t("index.cashOut.Audit")}}</view>
						</view>
						<view class="sort_width sort_yi_2">
							<view class="sort_num">{{$t("index.cashOut.time")}}</view>
							<view class="sort_price">{{item.datetime}}</view>
						</view>
						<view v-show="currtype == 0" class="sort_width" style="width: 100%;">
							<view class="sort_num">{{$t("index.cashOut.Delivery")}}</view>
							<view class="sort_price text-ellipsis">{{item.address}}</view>
						</view>
						<view v-show="currtype == 1" class="sort_width" style="width: 100%;">
							<view class="sort_num">{{$t("index.cashOut.account")}}</view>
							<view class="sort_price text-ellipsis">111111</view>
						</view>
						<view class="sort_width" style="width: 100%;">
							<view class="sort_num">{{$t("index.cashOut.notes")}}</view>
							<view class="sort_price text-ellipsis">sdjkfjsd1</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-picker v-model="pickerShow" mode="selector" :range="selectorObj" range-key="name"
			@confirm="confirm"></u-picker>
		<u-picker v-model="addressShow" mode="selector" :range="addressObj" range-key="name"
			@confirm="addconfirm"></u-picker>
	</view>
</template>

<script>
	import {
		showWithdraw
	} from "@/api/index.js"
	export default {
		data() {
			return {
				title: this.$t("index.cashOut.cashout"),
				pickerShow: false,
				// columns: [
				// 	'USD-TRC20', 'USD-TRC20', 'USD-TRC20'
				// ],
				selectorObj: [],
				selectorName: '',


				addressShow: false,
				addressObj: [],
				addressName: this.$t("index.cashOut.withdrawal"),
				placeholder: this.$t("index.cashOut.notes"),
				placeholder1: this.$t("index.cashOut.pnumber"),
				placeholder2: this.$t("index.cashOut.account"),
				currtype: 0,
				myOrder: []
			}
		},
		onLoad() {
			this.showWithdrawInit()
			// uni.setStorageSync('withdraw_type', '1');
		},
		methods: {
			confirm(e) {
				this.selectorName = this.selectorObj[e].name
				this.pickerShow = false
			},
			addconfirm(e) {
				this.addressName = this.addressObj[e].name
				this.addressShow = false
			},
			BankCardClick(index) {
				// console.log(index)
				// if (index = 0) {
				// 	uni.setStorageSync('withdraw_type', '1');
				// } else {
				// 	uni.setStorageSync('withdraw_type', '2');
				// }
				this.currtype = index

				this.showWithdrawInit()
			},
			showWithdrawInit() {
				if (this.currtype == 0) {
					var currtype = 1
				} else {
					var currtype = 2
				}

				let data = {
					showWithdraw: currtype
				}
				showWithdraw(data).then(res => {

					if (res.code == 1) {
						if (res.data.myList.length > 0) {
							this.selectorName = res.data.myList[0].name
							this.selectorObj = res.data.myList
						}
						if (res.data.withdraw_type.length > 0) {
							this.addressObj = res.data.withdraw_type
						}

						this.myOrder = res.data.myOrder
						console.log(this.myOrder)
					}

				})
			},
		}
	}
</script>

<style lang="less" scoped>
	page {
		background: #f1f1f1;
	}

	.cash_padding {
		padding: 20rpx;

		.cash_padding_bg {
			background: #fff;
			border-radius: 30rpx;

			.cash_bg_padding {
				padding: 30rpx;
				margin-bottom: 30rpx;

				.cash_display {
					display: flex;
					padding-bottom: 30rpx;

					.cash_width {
						width: 49%;
						color: #ffffff;
						text-align: center;
						border-radius: 50rpx;
						padding: 25rpx 0 25rpx 0;
					}

					.cash_color_1 {
						background: #0166fc;
					}

					.cash_color_2 {
						background: #cbcbcb;
					}
				}

				.cash_list_display {
					display: flex;
					padding: 30rpx 20rpx 30rpx 20rpx;
					// background: red;
					border-bottom: 1rpx solid #f1f1f1;

					.cash_list_width_1 {
						width: 30%;
						font-weight: bold;
					}

					.cash_list_width_2 {
						width: 60%;
					}

					.cash_list_width_3 {
						width: 10%;
						text-align: end;
					}
				}

				.display_content {
					display: flex;
					padding: 20rpx;
					border-bottom: 1px solid #e8e8e8;


					.content_title_1 {
						font-size: 28rpx;
						padding-bottom: 10rpx;
						font-weight: bold;
					}


					.content_right {
						text-align: right;

						.text3 {
							// font-weight: bold;
							padding-bottom: 10rpx;
						}
					}
				}

				.cash_button_pa {
					padding: 40rpx 50rpx 20rpx 50rpx;

					.cash_button {
						background: #0166fc;
						color: #fff;
						padding: 20rpx;
						border-radius: 50rpx;
						text-align: center;
					}
				}

				.list_sort_display {
					display: flex;
					flex-wrap: wrap;

					.sort_width {
						width: 33.33%;
						// text-align: center;

						.sort_num {
							color: #cecccd;
							padding-bottom: 15rpx;
						}

						.sort_price {
							font-weight: bold;
							padding-bottom: 20rpx;
							font-size: 28rpx;
						}

						.text-ellipsis {
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}

					.sort_yi_1 {
						text-align: center;
					}

					.sort_yi_2 {
						text-align: right;
					}
				}
			}
		}

		.withdraw_padd {
			padding-bottom: 20rpx;
		}
	}
</style>