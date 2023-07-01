<template>
	<view>
		<u-navbar :is-back="false" title="行情1">
			<view class="slot-wrap" slot="right" @click="smallType">
						<u-icon name="list" size="30"></u-icon>
			</view>
		</u-navbar>
		<view class="searchInput">
			<u-search placeholder="输入交易品种进行搜索" shape="square" :clearabled="true" :show-action="false"
				v-model="keyword" :disabled="true" @click="goLink('/pages/index/index')"></u-search>
		</view>
		
		<view v-show="listShow" class="list_padd" v-for="item in 10" @click="actionSheetShow = true">
			<view>
				<view class="burden_num">
					<text class="text1">-638</text>
					<text class="text2">-0.58%</text>
				</view>
				<view class="display">
					<view class="title_width">
						<view class="title_name">EURUSD</view>
						<view class="title_zong">
							<text class="title_time">23:58:53</text>
							<view class="title_fenge">
								<image src="../../static/image/index/fenge.png" alt="">
							</view>
							<text class="title_time">72</text>
						</view>
					</view>
					<view class="title_width_1">
						<view class="num_title">
							<view class="num_top">1.08</view>
							<text class="num_bag">89</text>
							<view class="num_right">8</view>
						</view>
						<view class="title_time">L:1.08444</view>
					</view>
					<view class="title_width_1">
						<view class="num_title">
							<view class="num_top">1.08</view>
							<text class="num_bag">89</text>
							<view class="num_right">8</view>
						</view>
						<view class="title_time">L:1.08444</view>
					</view>
				</view>
			</view>
		</view>
		<view v-show="listShow == false" class="smalllist_padd">
				<view class="smalllist_display" style="padding-bottom: 30rpx;">
						<view class="smalllist_width_1">
							<view class="">交易品种</view>
						</view>
						<view class="smalllist_width_2">
							<view class="smalllist_width">
									卖价
							</view>
							<view class="smalllist_width">
									买价
							</view>
							<view class="smalllist_width">
									日%
							</view>
							<view class="smalllist_width">
									最高卖价
							</view>
						</view>
				</view>
				<view class="smalllist_display" v-for="item in 10" style="padding-bottom: 20rpx;">
						<view class="smalllist_width_1">
							<view class="smalllist_width_1_title">EURUSD</view>
						</view>
						<view class="smalllist_width_2 smalllist_nei">
							<view class="smalllist_width smalllist_color_1">
									1.08700
							</view>
							<view class="smalllist_width smalllist_color_2">
									1.08700
							</view>
							<view class="smalllist_width smalllist_color_1">
									-0.38%
							</view>
							<view class="smalllist_width">
									1.94700
							</view>
						</view>
				</view>
		</view>

		<u-popup v-model="homeShow" mode="center" length="80%" border-radius="20">
			<view class="popup_padding">
				<view class="popup_title">欢迎使用Maeta Trader 5！</view>
				<view class="popup_text">MetaQuotes Ltd是一家软件开发公司,不提供任何金融、投资、交易商或交易服务。</view>
				<view class="popup_text">按下接受按键,即表示我同意<text class="text1">EULA条款和条款,隐私政策</text>和免责声明。</view>
				<u-button type="primary" shape="square" class="popup_button" @click="agree">接受</u-button>
				<view class="popup_text" style="padding: 0;">应用程序中提供的信息都不用于投资目的。</view>
			</view>
		</u-popup>

		<u-action-sheet :list="actionList" v-model="actionSheetShow" border-radius="30"
			@click="actionClick"></u-action-sheet>
	</view>
</template>

<script>
	// import * as Api from "@/api/index.js"
	import { getGoods } from "@/api/index.js"

	export default {
		data() {
			return {
				keyword: '',
				homeShow: false,
				actionSheetShow: false,
				actionList: [{
					text: '交易',
				}, {
					text: '图表'
				}, {
					text: '详细情况'
				}, {
					text: '统计'
				}, {
					text: '市场深度'
				}, {
					text: '删除'
				}],
				listShow:true
			}
		},
		onLoad() {
			let that = this
			if (!uni.getStorageSync('home_popup')) {
				this.homeShow = true
				uni.setStorageSync('home_popup', true);
			}
			this.getGoodsInit()
		},
		methods: {
			getGoodsInit(){
				let data = {
					page: 1,
				}
				getGoods(data).then(res=>{
					console.log(res)
				})
			},
			agree() {
				this.homeShow = false
			},
			actionClick(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.actionList[index].text}`)
			},
			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
			smallType(){
					this.listShow = !this.listShow
			}
		}
	}
</script>

<style lang="less" scoped>
	.slot-wrap {
			display: flex;
			align-items: center;
			padding-right:30rpx;
		}
	.searchInput {
		padding: 20rpx;
	}

	.list_padd {
		padding: 0 20rpx 10rpx 20rpx;

		.burden_num {
			font-size: 20rpx;

			.text1 {
				color: #808080;
				padding-right: 20rpx;
			}

			.text2 {
				color: red;
			}
		}

		.display {
			display: flex;

			.title_width {
				width: 40%;

				.title_zong {
					display: flex;
				}

				.title_name {
					font-size: 30rpx;
					font-weight: bold;
					color: #000;
					padding: 5px 0 5px 0;
				}

				.title_time {
					color: #808080;
					font-size: 20rpx;
					margin-right: 10rpx;
				}

				.title_fenge {
					margin-right: 10rpx;
					width: 25rpx;
					height: 25rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.title_width_1 {
				width: 30%;

				.num_title {
					font-weight: bold;
					display: flex;
					margin-top: -3px;
					justify-content: end;
				}

				.num_top {
					margin-top: 18rpx;
				}

				.num_bag {
					font-size: 45rpx;
				}

				.num_right {
					font-size: 25rpx;
				}

				.title_time {
					color: #808080;
					font-size: 20rpx;
					margin-right: 10rpx;
					text-align: right;
				}
			}
		}
	}

	.popup_padding {
		padding: 40rpx;

		.popup_title {
			font-weight: bold;
			font-size: 35rpx;
			padding-bottom: 20rpx;
			text-align: center;
		}

		.popup_text {
			font-size: 28rpx;
			padding-bottom: 30rpx;

			.text1 {
				color: rgb(23, 110, 220);
			}
		}

		.popup_button {
			margin-bottom: 30rpx;
		}
	}

	.smalllist_padd{
		padding: 20rpx;
		
		.smalllist_display{
			display:flex;
			font-size: 28rpx;
			
			
			.smalllist_width_1{
				width: 20%;
				
				.smalllist_width_1_title{
						font-weight: bold;
				}
			}
			.smalllist_width_2{
				width: 80%;
				display: flex;
				text-align: end;
				
					.smalllist_width{
						width: 25%;
					}
					
					.smalllist_color_1{
						color: red;
					}
					
					.smalllist_color_2{
						color: #196ed9;
					}
				
			}
			.smalllist_nei{
				font-size: 20rpx;
			}
		}
	}
</style>