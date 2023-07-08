<template>
	<view>
		<u-navbar :title="title" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
		<view class="cash_padding">
			<view class="cash_padding_bg">
				<view class="cash_bg_padding">
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
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							银行名称
						</view>
						<view class="cash_list_width_2">
							<input type="number" placeholder="银行名称" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 2">
						<view class="cash_list_width_1">
							钱包地址
						</view>
						<view class="cash_list_width_2">
							<input type="number" placeholder="钱包地址" placeholder-style="font-size:28rpx">
						</view>
					</view>

					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							银行地址
						</view>
						<view class="cash_list_width_2">
							<input type="number" placeholder="银行地址" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							SWIFT
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" placeholder="SWIFT" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							收款人
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" placeholder="收款人" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							收款账号
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" placeholder="收款账号" placeholder-style="font-size:28rpx">
						</view>
					</view>

					<view class="cash_button_pa">
						<view class="cash_button">添加</view>
					</view>
				</view>
			</view>

			<!-- 列表1 -->
			<u-swipe-action :options="options" class="cash_padding_bg" v-show="id == 1">
				<view class="cash_bg_padding">
					<view class="cash_display">
						<view class="cash_dis_text">收款货币：USD</view>
						<view class="cash_dis_text1">银行名称：123132132</view>
					</view>
					<view style="height: 20rpx;"></view>
					<view class="cash_display">
						<view class="cash_dis_text_wid">收款人账户：257851512126</view>
						<view class="cash_dis_text_wid1">收款人：4567</view>
					</view>
				</view>
			</u-swipe-action>

			<!-- 列表2 -->
			<u-swipe-action :options="options" class="cash_padding_bg" v-show="id == 2">
				<view class="cash_bg_padding">
					<view class="cash_display">
						<view class="cash_dis_text">货币：USD--TRC20</view>
					</view>
					<view style="height: 20rpx;"></view>
					<view class="cash_display">
						<view class="cash_dis_text_wid">提币地址：257851512126</view>
					</view>
				</view>
			</u-swipe-action>
		</view>
		<u-picker v-model="pickerShow" mode="selector" :range="selectorObj" range-key="name"
			@confirm="confirm"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1,
				title: '',
				pickerShow: false,
				selectorObj: [{
					name: 'USD'
				}, {
					name: 'USD'
				}],
				selectorName: 'USD',
				options: [{
					text: '删除',
					style: {
						color: '#ffffff',
						backgroundColor: '#eb4d3d'
					}
				}]
			}
		},
		onLoad(e) {
			this.id = e.id
			// console.log(e.id)
			if (e.id == 1) {
				this.title = '绑定银行卡'
			} else {
				this.title = '绑定数字货币地址'
			}

		},
		methods: {
			confirm(e) {
				this.selectorName = this.selectorObj[e].name
				this.pickerShow = false
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
		// border-radius: 30rpx;

		.cash_padding_bg {
			background: #fff;


			.cash_bg_padding {
				padding: 30rpx 30rpx 0 30rpx;
				margin-bottom: 30rpx;


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

				.cash_display {
					display: flex;
					font-size: 20rpx;

					.cash_dis_text {
						width: 50%;
					}

					.cash_dis_text1 {
						width: 50%;
						text-align: end;
					}

					.cash_dis_text_wid {
						width: 70%;
					}

					.cash_dis_text_wid1 {
						width: 30%;
						text-align: end;
					}
				}
			}
		}

		.withdraw_padd {
			padding-bottom: 20rpx;
		}
	}
</style>