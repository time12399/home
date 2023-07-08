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
							<input type="text" placeholder="银行名称" v-model="cashData.name" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 2">
						<view class="cash_list_width_1">
							钱包地址
						</view>
						<view class="cash_list_width_2">
							<input type="text" placeholder="钱包地址" v-model="cashData.moneyadd" placeholder-style="font-size:28rpx">
						</view>
					</view>

					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							银行地址
						</view>
						<view class="cash_list_width_2">
							<input type="text" placeholder="银行地址" v-model="cashData.add" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							SWIFT
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" placeholder="SWIFT" v-model="cashData.SWIFT" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							收款人
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" placeholder="收款人" v-model="cashData.people" placeholder-style="font-size:28rpx">
						</view>
					</view>
					<view class="cash_list_display" v-show="id == 1">
						<view class="cash_list_width_1">
							收款账号
						</view>
						<view class="cash_list_width_2" style="width:70%">
							<input type="text" placeholder="收款账号" v-model="cashData.number" placeholder-style="font-size:28rpx">
						</view>
					</view>

					<view class="cash_button_pa">
						<view class="cash_button" @click="increase">添加</view>
					</view>
				</view>
			</view>
			<view style="height: 30rpx;"></view>
			<!-- 列表1 -->
			<u-swipe-action :show="item.show" :options="options" v-for="(item,index1) in cashDataList" :key="item.id" @click="deleClick(index1,item.id)" @open="open(index1)" class="cash_padding_bg" v-show="id == 1">
				<view class="cash_bg_padding">
					<view class="cash_display">
						<view class="cash_dis_text">收款货币：{{item.name}}</view>
						<view class="cash_dis_text1">银行名称：{{item.bank_name}}</view>
					</view>
					<view style="height: 20rpx;"></view>
					<view class="cash_display">
						<view class="cash_dis_text_wid">收款人账户：{{item.bank_number}}</view>
						<view class="cash_dis_text_wid1">收款人：{{item.bank_username}}</view>
					</view>
				</view>
			</u-swipe-action>

			<!-- 列表2 -->
			<u-swipe-action :show="item.show" :options="options" v-for="(item,index1) in cashDataList"  @click="deleClick(index1,item.id)" @open="open(index1)" class="cash_padding_bg" v-show="id == 2">
				<view class="cash_bg_padding">
					<view class="cash_display">
						<view class="cash_dis_text">货币：{{item.name}}</view>
					</view>
					<view style="height: 20rpx;"></view>
					<view class="cash_display">
						<view class="cash_dis_text_wid">提币地址：{{item.address}}</view>
					</view>
				</view>
			</u-swipe-action>
		</view>
		<u-picker v-model="pickerShow" mode="selector" :range="selectorObj" range-key="name"
			@confirm="confirm"></u-picker>
	</view>
</template>

<script>
	import {
		showWithdrawType,
		addWithdrawAddress,
		showWithdrawAddress,
		delWithdrawAddress
	} from "@/api/index.js"
	export default {
		data() {
			return {
				id: 1,
				showWithdraw:1,
				title: '',
				pickerShow: false,
				selectorObj: [],
				selectorName: '',
				options: [{
					text: '删除',
					style: {
						color: '#ffffff',
						backgroundColor: '#eb4d3d'
					}
				}],
				cashData:{
					name:'',
					add:'',
					SWIFT:'',
					people:'',
					number:'',
					moneyadd:''
				},
				cashDataList:[]
			}
		},
		onLoad(e) {
			this.id = e.id
			// console.log(e.id)
			if (e.id == 1) {
				this.title = '绑定银行卡'
				this.showWithdraw = 2
			} else {
				this.title = '绑定数字货币地址'
				this.showWithdraw = 1
			}
			this.showWithdrawTypeInit()
			this.showWithdrawAddressInit()
		},
		methods: {
			confirm(e) {
				this.selectorName = this.selectorObj[e].name
				this.pickerShow = false
			},
			showWithdrawTypeInit(){
				let data = {
					showWithdraw:this.showWithdraw
				}
				showWithdrawType(data).then(res => {
					if (res.code == 1) {
						if(res.data){
							this.selectorObj = res.data
							this.selectorName = res.data[0].name
						}
					}
				})
			},
			increase(){
					let data = {}
					if(this.id == 1){
						data = {
							type:this.showWithdraw,
							money_type:this.selectorName,   //货币
							bank_name:this.cashData.name,  //银行名称
							bank_address:this.cashData.add,//银行地址
							bank_username:this.cashData.people, //收款人
							bank_number:this.cashData.number, //收款账号
						}
					}else{
						data = {
							type:this.showWithdraw,
							money_type:this.selectorName,
							money_address:this.cashData.moneyadd
						}
						
					}
					addWithdrawAddress(data).then(res => {
						if (res.code == 1) {
							uni.showToast({
								title: res.info,
								icon:'none',
							});
							
							this.showWithdrawAddressInit()
						}else{
							uni.showToast({
								title: res.info,
								icon:'none',
							});
						}
					})
			},
			showWithdrawAddressInit(){
				let data = {
					showWithdraw:this.showWithdraw
				}
				showWithdrawAddress(data).then(res => {
					if (res.code == 1) {
						var data = res.data
						for (let i = 0; i < data.length; i++) {
							data[i].show = false
						}
						this.cashDataList = data
					}
				})
			},
			deleClick(index, id) {
				this.delWithdrawAddressInit(index, id)
			},
			delWithdrawAddressInit(index, id){
				let data = {
					address_id:id
				}
				delWithdrawAddress(data).then(res => {
					if (res.code == 1) {
						this.cashDataList.splice(index, 1);
						this.resettingShow()
					}
					uni.showToast({
						title: res.info,
						icon:'none',
					});
				})
			},
			resettingShow() {
				var data = this.cashDataList
				for (let i = 0; i < data.length; i++) {
					data[i].show = false
				}
				this.cashDataList = data
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.cashDataList[index].show = true;
				this.cashDataList.map((val, idx) => {
					if (index != idx) this.cashDataList[idx].show = false;
				})
			}
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
			margin-bottom:10rpx;


			.cash_bg_padding {
				padding: 30rpx;
				background: #fff;
				// border-bottom: 1rpx solid red;


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