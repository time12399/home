<template>
	<view>
		<u-navbar :is-back="false" title="我的" :background="background"  :title-color="titleColor" :border-bottom="false"></u-navbar>
		<view class=" b-b-1">
			<view class="userList" v-if="!loginShow">
					<view class="user-padding">
							<view class="user-phone">{{userInfo.phone}}</view>
							<view class="user-vip_name">{{userInfo.vip_name}}</view>
							
							<view style="display: flex;">
									<view style="width: 80%;">
										<view class="user-phone" v-show="eye">${{userInfo.balance_total}}</view>
										<view class="user-phone" v-show="!eye">$******</view>
										<view class="user-vip_name">可用资产</view>
									</view>
									<view style="width: 20%;">
										<view class="icon" @click="eyeClick">
											<u-icon name="eye-fill" size="35"></u-icon>
										</view>
									</view>
							</view>
					</view>
			</view>
			<view class="item viewFlex" v-if="loginShow" @click="$utils.handleNavigate('/pages/auth/login')">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					账号
				</view>
				<u-icon color="#ebebeb" name="arrow-right"></u-icon>
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
				<u-icon color="#ebebeb" name="arrow-right"></u-icon>
			</view>

		</view>

		<view class="u-m-t-40 b-b-1">
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex" @click="$utils.handleNavigate(loginShow? '/pages/auth/login' :'/pages/index/wallet')">
					钱包
				</view>
				<u-icon color="#ebebeb" name="arrow-right"></u-icon>
			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex" @click="$utils.handleNavigate(loginShow? '/pages/auth/login' :'/pages/index/deposit')">
					充值
				</view>
				<u-icon color="#ebebeb" name="arrow-right"></u-icon>
			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<!--  @click="$utils.handleNavigate('/pages/setup/withdrawal')" 提现页面 -->
				<view class="content viewFlex" @click="$utils.handleNavigate(loginShow? '/pages/auth/login' :'/pages/index/cashOut')">
					提现
				</view>
				<u-icon color="#ebebeb" name="arrow-right"></u-icon>
			</view>
			<view class="item viewFlex">
				<view class="viewFlex icon">
					<image src="/static/image/setup/aa.jpg" mode="widthFix"></image>
				</view>
				<view class="content viewFlex">
					修改密码
				</view>
				<u-icon color="#ebebeb" name="arrow-right"></u-icon>
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
			return {
				loginShow:false,
				eye:true,
				background:{
					// backgroundColor: '#207aff',
					backgroundImage: '#ffffff',
					
				},
				titleColor:'#000000'
			}
		},
		onLoad() {
			if (!this.$store.state.user.hasLogin) {
				// 没有登陆
				this.loginShow = true
			}else{
				this.userInfo = uni.getStorageSync('userInfo')
				this.background.backgroundImage = 'linear-gradient(90deg,#207aff,#015feb)'
				this.titleColor = '#ffffff'
			}
		},
		methods: {
			eyeClick(){
					this.eye = !this.eye
			}
		}
	}
</script>

<style lang="scss">
	.item {
		padding: 15rpx 20rpx;
		border-top: 1rpx solid #ebebeb;
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
		border-bottom: 1rpx solid #ebebeb;
	}
	
	.userList{
		height: 320rpx;
		background: linear-gradient(90deg,#207aff,#015feb);
		margin-bottom: 40rpx;
		
		.user-padding{
			padding: 40rpx 30rpx 30rpx 30rpx;
			color: #ffffff;
			
			.user-phone{
				font-size: 35rpx;
				padding-bottom: 10rpx;
			}
			.user-vip_name{
				font-size: 23rpx;
				padding-bottom: 30rpx;
			}
			.icon{
				text-align: center;
				margin-top: 20rpx;
			}
		}
	}
</style>