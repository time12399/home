<template>
	<view>
		<view class="navigation">
			<view class="display">
				<view class="width_1">
					<view class="img_list" @click="sortClick">
						<image src="../../static/image/history/list.png" mode=""></image>
					</view>
				</view>
				<view class="width_2">
					<view class="nav_padding">
						<u-subsection :list="listArray" :current="0" mode="button"
							@change="sectionChange"></u-subsection>
					</view>
				</view>
				<view class="width_1">
					<view class="img_list" @click="goLink('/pages/transAdd/history')">
						<image src="../../static/image/history/history.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>
		<view class="display_content">
			<view style="width:50%">
				<view class="content_title">Balance</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text1">100 000.00</view>
				<view class="text2">2023.06.23 06:23:08</view>
			</view>
		</view>
		<view class="display_content" v-show="current == 0 || current == 2">
			<view style="width:50%">
				<view class="content_title_1">入金</view>
				<view class="content_title_1">利润</view>
				<view class="content_title_1">库存费</view>
				<view class="content_title_1">手续费</view>
				<view class="content_title_1">结余</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text3">100 000.00</view>
				<view class="text3">0.00</view>
				<view class="text3">0.00</view>
				<view class="text3">0.00</view>
				<view class="text3">100 000.00</view>
			</view>
		</view>

		<view class="display_content" v-show="current == 1">
			<view style="width:50%">
				<view class="content_title_1">成交</view>
				<view class="content_title_1">取消</view>
				<view class="content_title_1">总数</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text3">6</view>
				<view class="text3">0</view>
				<view class="text3">6</view>
			</view>
		</view>

		<view class="display_content" v-for="item in 15" @click="goLink('../index/cashOut')">
			<view style="width:50%">
				<view class="content_title_2">
					<text class="content_title">USDCAD,</text>
					<text class="text1">buy 0.10</text>
				</view>
				<view class="content_title_2">
					<text class="text4" v-show="current == 0">1.31564 → 1.31569</text>
					<text class="text4" v-show="current == 1">0.10/0.10 at 1.31564</text>
					<text class="text4" v-show="current == 2">0.10 at 1.31564</text>
				</view>
			</view>
			<view class="content_right" style="width:50%">
				<view class="text2" style="font-weight: bold;">2023.06.26 16:09:57</view>
				<view class="text1" style="margin-top: 5rpx;">0.38</view>
			</view>
		</view>


		<!-- 左上角弹窗 -->
		<view v-show="sortShow">
			<view class="sort_view">
				<view class="sort_padding">
					<view class="sort_text">全部交易品种</view>
					<view class="sort_text">USDCAD</view>
					<view class="sort_text">USDSEK</view>
					<view class="sort_text">AUDUSD</view>
				</view>
			</view>
		</view>
		<u-mask :show="sortShow" @click="sortShow = false" :custom-style="{background: 'rgba(0, 0, 0, 0.1)'}"></u-mask>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArray: [{
						name: '价位'
					},
					{
						name: '订单'
					},
					{
						name: '成交'
					}
				],
				current: 0,
				sortShow: false
			}
		},
		onLoad() {

		},
		methods: {
			sectionChange(index) {
				this.current = index
			},
			sortClick() {
				this.sortShow = true
			},
			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.navigation {
		height: 100rpx;
		background: #fff;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99999;
	}

	.display {
		display: flex;

		.width_1 {
			width: 15%;
			line-height: 140rpx;

			.img_list {
				width: 50rpx;
				height: 50rpx;
				margin: 0 auto;


				image {
					width: 100%;
					height: 100%;

				}
			}
		}

		.width_2 {
			width: 70%;

			.nav_padding {
				padding: 16rpx 30rpx 0 30rpx;
			}
		}
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

	.sort_view {
		position: fixed;
		top: 6%;
		left: 6%;
		width: 40%;
		background: #fff;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
		border-radius: 10rpx;
		z-index: 99999;

		.sort_padding {


			.sort_text {
				font-size: 28rpx;
				text-align: center;
				color: #000;
				padding: 20rpx;
				border-bottom: 1px solid #e8e8e8;
			}
		}
	}
</style>