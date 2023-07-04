<template>
	<view>
		<u-navbar :is-back="false" :title="navTitle">
			<view class="slot-wrap" slot="right" @click="smallType">
				<u-icon name="list" size="30"></u-icon>
			</view>
		</u-navbar>
		<view class="searchInput">
			<u-search :placeholder="searchPlaceholder" shape="square" :clearabled="true" :show-action="false"
				v-model="keyword" :disabled="true" @click="goLink('/pages/index/index')"></u-search>
		</view>
		<u-swipe-action :show="item.show" :options="options" v-show="listShow" class="list_padd"
			v-for="(item,index) in getGoodsList" :key="index" @content-click="actionSheetShowClick(index)"
			@open="open(index)" @click="deleClick(index,item.id)">

			<view>
				<view class="burden_num">
					<text class="text1">{{item.left_v}}</text>
					<text :class="item.k_status == 1 ? 'text3' : 'text2'">{{item.k_percent}}%</text>
				</view>
				<view class="display">
					<view class="title_width">
						<view class="title_name">{{item.name}}</view>
						<view class="title_zong">
							<!-- {{item.date}} -->
							<text class="title_time">{{item.time_v}}</text>
							<view class="title_fenge">
								<image src="../../static/image/index/fenge.png" alt="">
							</view>
							<text class="title_time">{{item.time_r_v}}</text>
						</view>
					</view>
					<view class="title_width_1">
						<view class="num_title">
							<view class="num_top" v-show="item.now_sell_status == 0">{{item.now_sell_arr[0]}}</view>
							<view class="num_top color1" v-show="item.now_sell_status == 1">{{item.now_sell_arr[0]}}</view>
							<view class="num_top color2" v-show="item.now_sell_status == 2">{{item.now_sell_arr[0]}}</view>
							<text class="num_bag">{{item.now_sell_arr[1]}}</text>
							<view class="num_right">{{item.now_sell_arr[2]}}</view>
						</view>
						<view class="title_time">L:{{item.k_top}}</view>
					</view>
					<view class="title_width_1">
						<view class="num_title">
							<view class="num_top" v-show="item.now_buy_status == 0">{{item.now_buy_arr[0]}}</view>
							<view class="num_top color1" v-show="item.now_buy_status == 1">{{item.now_buy_arr[0]}}</view>
							<view class="num_top color2" v-show="item.now_buy_status == 2">{{item.now_buy_arr[0]}}</view>
							<text class="num_bag">{{item.now_buy_arr[1]}}</text>
							<view class="num_right">{{item.now_buy_arr[2]}}</view>
						</view>
						<view class="title_time">L:{{item.k_low}}</view>
					</view>
				</view>
			</view>
		</u-swipe-action>
		<view v-show="listShow == false" class="smalllist_padd">
			<view class="smalllist_display" style="padding-bottom: 30rpx;">
				<view class="smalllist_width_1">
					<view class="">{{$t("tabBar.index.list.transaction")}}</view>
				</view>
				<view class="smalllist_width_2">
					<view class="smalllist_width">
						{{$t("tabBar.index.list.sellingPrice")}}
					</view>
					<view class="smalllist_width">
						{{$t("tabBar.index.list.purchasingPrice")}}
					</view>
					<view class="smalllist_width">
						{{$t("tabBar.index.list.sun")}}%
					</view>
					<view class="smalllist_width">
						{{$t("tabBar.index.list.MaxPrice")}}
					</view>
				</view>
			</view>
			<view class="smalllist_display" v-for="(item,index) in getGoodsList" :key="index"
				style="padding-bottom: 20rpx;">
				<view class="smalllist_width_1">
					<view class="smalllist_width_1_title">{{item.name}}</view>
				</view>
				<view class="smalllist_width_2 smalllist_nei">
					<view class="smalllist_width smalllist_color_1">
						{{item.now_sell}}
					</view>
					<view class="smalllist_width smalllist_color_2">
						{{item.now_buy}}
					</view>
					<view class="smalllist_width smalllist_color_1">
						{{item.k_percent}}%
					</view>
					<view class="smalllist_width">
						{{item.k_top}}
					</view>
				</view>
			</view>
		</view>

		<u-popup v-model="homeShow" mode="center" length="80%" border-radius="20">
			<view class="popup_padding">
				<view class="popup_title">{{$t("tabBar.index.title")}}Maeta Trader 5！</view>
				<view class="popup_text">MetaQuotes Ltd{{$t("tabBar.index.details")}}</view>
				<view class="popup_text">{{$t("tabBar.index.acceptKey")}}<text
						class="text1">{{$t("tabBar.index.policy")}}</text></view>
				<u-button type="primary" shape="square" class="popup_button"
					@click="agree">{{$t("tabBar.index.accept")}}</u-button>
				<view class="popup_text" style="padding: 0;">{{$t("tabBar.index.provide")}}</view>
			</view>
		</u-popup>

		<u-action-sheet :list="actionList" :cancelText="cancelText" v-model="actionSheetShow" border-radius="30"
			@click="actionClick"></u-action-sheet>
	</view>
</template>

<script>
	// import * as Api from "@/api/index.js"
	import {
		getGoods,
		delGoods
	} from "@/api/index.js"

	export default {
		data() {
			return {
				navTitle: this.$t("tabBar.index.text"),
				searchPlaceholder: this.$t("tabBar.index.search"),
				keyword: '',
				homeShow: false,
				actionSheetShow: false,
				actionList: [{
					text: this.$t("tabBar.index.popup.transaction"),
				}, {
					text: this.$t("tabBar.chart.text")
				}, {
					text: this.$t("tabBar.index.popup.details")
				}, {
					text: this.$t("tabBar.index.popup.statistics")
				}, {
					text: this.$t("tabBar.index.popup.depth")
				}, {
					text: this.$t("tabBar.index.popup.delete")
				}],
				cancelText: this.$t("common.cancel"),
				listShow: true,
				getGoodsList: [],
				deleteId: "",
				options: [
					// {
					// 	text: '收藏',
					// 	style: {
					// 		backgroundColor: '#007aff'
					// 	}
					// },
					{
						text: '删除',
						style: {
							marginLeft: '5px',
							color: '#333333',
							backgroundColor: '#f2f2f2'
						}
					}
				]
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
			getGoodsInit() {
				// let data = {
				// 	page: 1,
				// }
				// getGoods(data).then(res=>{
				// 	console.log(res)
				// })
				getGoods().then(res => {
					if (res.code == 1) {
						var data = res.data.data

						for (let i = 0; i < data.length; i++) {
							// data[i].date = data[i].date.split(" ")[1]
							data[i].show = false
						}
						console.log(111, data)
						this.getGoodsList = data

					}
				})
			},
			agree() {
				this.homeShow = false
			},
			actionSheetShowClick(id) {
				this.actionSheetShow = true
				this.deleteId = id
			},
			actionClick(index) {
				var index = index + 1
				// console.log(`点击了第${index + 1}项，内容为：${this.actionList[index].text}`)
				if (index == 6) {
					this.delGoodsInit(this.getGoodsList[this.deleteId].id)
				}
			},
			delGoodsInit(id) {
				let data = {
					pid: id
				}
				delGoods(data).then(res => {
					if (res.code == 1) {
						this.getGoodsList.splice(this.deleteId, 1);
						// this.getGoodsList = res.data
					}
				})
			},
			deleClick(index, id) {
				this.delGoodsInit(id)
			},
			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
			smallType() {
				this.listShow = !this.listShow
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.getGoodsList[index].show = true;
				this.getGoodsList.map((val, idx) => {
					if (index != idx) this.getGoodsList[idx].show = false;
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.slot-wrap {
		display: flex;
		align-items: center;
		padding-right: 30rpx;
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

			.text3 {
				color: rgb(23, 110, 220);
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
					
					
					.color1{
						color: #196ed9!important;
					}
					.color2{
						color: red!important;
					}
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

	.smalllist_padd {
		padding: 20rpx;

		.smalllist_display {
			display: flex;
			font-size: 28rpx;


			.smalllist_width_1 {
				width: 20%;

				.smalllist_width_1_title {
					font-weight: bold;
				}
			}

			.smalllist_width_2 {
				width: 80%;
				display: flex;
				text-align: center;

				.smalllist_width {
					width: 25%;
				}

				.smalllist_color_1 {
					color: red;
				}

				.smalllist_color_2 {
					color: #196ed9;
				}

			}

			.smalllist_nei {
				font-size: 20rpx;
			}
		}
	}
</style>