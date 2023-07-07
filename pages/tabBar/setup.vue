<template>
	<view>
		<u-navbar :is-back="false" title="我的" :border-bottom="false"></u-navbar>
		<view class="u-m-t-20 b-b-1">
			<view>

			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					账号
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex" @click="$utils.handleNavigate('/pages/setup/language')">
					<view class="">
						<view>
							语言
						</view>
						<view class="desc">
							简体中文
						</view>
					</view>
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view>

		</view>

		<view class="u-m-t-40 b-b-1">
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					充值
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<!--  @click="$utils.handleNavigate('/pages/setup/withdrawal')" 提现页面 -->
				<view class="content viewFlex" @click="$utils.handleNavigate('/pages/index/cashOut')">
					提现
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					修改密码
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view>
			<!-- <view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					<view class="">
						<view>
							你是谁
						</view>
						<view class="desc">
							邮箱注册
						</view>
					</view>
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view> -->
			<!-- <view class="item viewFlex" @click="$utils.handleNavigate('/pages/setup/language')">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					{{$t("tabBar.chart.text")}}
					切换文字
				</view>
				<u-icon color="#555555" name="arrow-right"></u-icon>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.item {
		padding: 15rpx 20rpx;
		border-top: 1rpx solid black;
		height: 100rpx;

		.icon {
			display: flex;
			align-self: center;

			image {
				width: 60rpx;
			}
		}

		.content {
			margin-left: 20rpx;
			flex: 1;
			align-items: center;
			font-size: 32rpx;

			.desc {
				font-size: 26rpx;
			}
		}
	}

	.b-b-1 {
		border-bottom: 1rpx solid black;
	}
</style>