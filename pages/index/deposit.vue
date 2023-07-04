<template>
	<view>
			<u-navbar :title="title" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
			<view class="cash_padding">
				<view class="cash_padding_bg">
					<view class="cash_bg_padding">
						<view class="cash_display">
							<view class="cash_width" :class="currtype == 0 ?'cash_color_1' : 'cash_color_2'" @click="BankCardClick(0)">{{$t("index.cashOut.currency")}}</view>
							<view class="cash_width" :class="currtype == 1 ?'cash_color_1' : 'cash_color_2'" style="margin-left: 1%;" @click="BankCardClick(1)">{{$t("index.cashOut.BankCard")}}</view>
						</view>
						<view v-show="currtype == 0">
							<view class="network">
								选择网络
							</view>
							<view class="input">
								<u-input v-model="getDictDataValue" type="text" :disabled="true" placeholder="请输入网络"  @click="getDictDataClick"/>
							</view>
							<view class="QRcode">
								<image src="https://2740327403.6ccnzg.site/apxjasjdja/api.Qrcode/getDictImg?type=1" mode=""></image>
							</view>
							<view class="add">
								钱包地址
							</view>
							<view class="add">
								222222
							</view>
							<view class="code">
								<image src="/static/image/ic_copy.png" mode=""></image>
							</view>
						</view>
						<view v-show="currtype == 1">
								<view class="cash_list_display">
									<view class="cash_list_width_1">
										{{$t("index.deposit.receipt")}}
									</view>
									<view class="cash_list_width_2" @click="pickerShow = true">
										{{selectorName}}
									</view>
									<view class="cash_list_width_3">
										<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
									</view>
								</view>
								
								<view class="display_content">
									<view style="width:50%">
										<view class="content_title_1">{{$t("index.deposit.Name")}}</view>
										<view class="content_title_1">银行地址</view>
										<view class="content_title_1">SWIFT</view>
										<view class="content_title_1">收款人</view>
										<view class="content_title_1">收款人账户</view>
										<view class="content_title_1">备注</view>
									</view>
									<view class="content_right" style="width:50%">
										<view class="text3">中国银行</view>
										<view class="text3">北京朝阳</view>
										<view class="text3">123456</view>
										<view class="text3">123456</view>
										<view class="text3">945989987112312</view>
										<view class="text3">测试</view>
									</view>
								</view>
						</view>
						
					</view>
				</view>
				
				
				
				<view class="cash_padding_bg">
					<view class="cash_bg_padding">
						<view class="network">
							充币数量
						</view>
						<view class="input">
							<u-input v-model="value" type="text" placeholder="请输入充币数量"/>
						</view>
						<view class="Upload">
							<image src="/static/logo.png" mode=""></image>
						</view>
						<view class="add" style="margin-bottom: 30rpx;">
							上传凭证
						</view>
						<view style="width: 80%;margin: 0 auto;">
							<u-button type="primary" shape="circle">提交</u-button>
						</view>
						
					</view>
				</view>
			
			
			</view>
			
			<u-picker v-model="pickerShow" mode="selector" :range="selectorObj" range-key="cateName"
				@confirm="confirm"></u-picker>
				
			<u-picker v-model="selectNetworkShow" mode="selector" :range="selectNetwork" range-key="name"
					@confirm="confirm1"></u-picker>
	</view>
</template>

<script>
	import { getDictData } from "@/api/index.js"
	
	export default {
		data() {
			return {
					title: this.$t("tabBar.history.deposit"),
					currtype:0,
					value: '',
					selectorName: 'USD-TRC20',
					pickerShow: false,
					selectorObj: [{
							cateName: 'USD-TRC20',
							id: 1
						},
						{
							cateName: 'USD-TRC21',
							id: 2
						},
						{
							cateName: 'USD-TRC22',
							id: 3
						}
					],
					selectNetworkShow:false,
					selectNetwork:[],
					getDictDataValue:""
			}
		},
		onLoad() {
			this.getDictDataInit()
		},
		methods: {
			BankCardClick(index){
				// console.log(index)
				this.currtype = index
			},
			confirm(e) {
				this.selectorName = this.selectorObj[e].cateName
				this.pickerShow = false
			},
			getDictDataInit(){
				let data = {
					type: "recharge_pay"
				}
				getDictData(data).then(res=>{
					if(res.code == 1){
						this.selectNetwork = res.data
					}
				})
			},
			getDictDataClick(){
					this.selectNetworkShow = true
			},
			confirm1(e){
				this.getDictDataValue = this.selectNetwork[e].name
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
				
				.network{
					padding:20rpx 0 20rpx 0;
					font-size: 30rpx;
				}
				
				.input{
					padding: 0 30rpx 0 30rpx;
					background: #f8f8f8;
					border-radius: 30rpx;
				}
				
				.QRcode{
					margin: 30rpx auto;
					width:200rpx;
					height:200rpx;
					
					image{
						width:100%;
						height: 100%;
					}
				}
				.code{
					margin: 0 auto;
					margin-top: 30rpx;
					width:50rpx;
					height:50rpx;
					
					image{
						width:100%;
						height: 100%;
					}
				}
				
				.Upload{
					margin: 30rpx auto;
					width: 150rpx;
					height: 150rpx;
					
					image{
						width:100%;
						height: 100%;
					}
				}
				
				.add{
					text-align: center;
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
			}
		}
	}
</style>
