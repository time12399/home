<template>
	<view class="container">
		<view class="nav"></view>
		<view class="head">
			<text class="back" @click="$utils.comeback()">
				{{$t("common.cancel")}}
			</text>
			<text class="title">{{$t("common.authorizaion")}}</text>
		</view>
		<u-gap height="200"></u-gap>
		<view class="content">
			<view class="form">
				<u-form :model="form" ref="uForm" >
					<u-form-item label-width="70"label="登录" prop="phone" >
						<u-input 
							:clearable="false"
						input-align="right" ref="phone" v-model="form.phone" placeholder="输入登录名" maxlength="11" />
					</u-form-item>
					<u-form-item label-width="70" label="密码" prop="password" :border-bottom="false">
						<u-input :clearable="false" 
							:type="showPassword?'password':'text'"
							:password-icon="false"
							input-align="right" ref="password" v-model="form.password" placeholder="输入密码"/>
						<u-icon v-if="form.password.length > 0"
							@click="showPassword = !showPassword"
							size="35" class="icon" :name="showPassword?'eye-off':'eye-fill'"></u-icon>
					</u-form-item>
				</u-form>
			</view>
			<view class="desc">
				现在在此授权与交易者聊天
			</view>
			<u-button class="submit-btn" @click="submit" type="success">注冊</u-button>
			
			<u-button class="submit-btn register" @click="$utils.handleNavigate('/pages/auth/register')">登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					phone: "",
					password: "",
				},
				showPassword: false
			}
		},
		methods: {
			submit() {
				let that = this,
					form = this.form
				
				if(!form.phone){
					this.$refs.phone.focus = true
					return
				}
				if(!form.password){
					this.$refs.password.focus = true
					return
				}
				this.$store.dispatch("user/register", form)
			},
		},
	}
</script>

<style lang="scss">
	page{
		// background-color: #000000;
		background-image:url("../../static/bg_login.png");
		background-size: 100% 100%;
		width: 100%;
		min-height: 100%;
		background-repeat: no-repeat;
		color: #ffffff;
	}
	.u-form-item{
		padding: 2px;
		position: relative;
		.icon{
			position: absolute;
		}
	}
	.nav{
		height: var(–status-bar-height);
	}
	.head{
		height: 100rpx;
		line-height: 100rpx;
		position: relative;
		text-align: center;
		.back{
			position: absolute;
			left: 40rpx;
		}
		.title{
			font-size: 30rpx;
			font-weight: bold;
		}
	}
	.content{
		width: 80%;
		margin: 0 auto;
		.form{
			background-color: #fff;
			border-radius: 2px;
			padding: 10rpx 20rpx;
		}
		.desc{
			margin-top: 20rpx;
			text-align: center;
		}
		.submit-btn{
			background-color: #e8b754;
			margin-top: 80rpx;
			color: #000000;
			border-radius: 10rpx;
		}
		.register{
			margin-top: 20rpx;
			background-color: #ffffff;
		}
	}
</style>