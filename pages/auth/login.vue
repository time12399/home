<template>
	<view class="loginWrap ">
		<view class="imgWrap">
			<image  class="logo" style="width: 100upx;height: 100upx;" src="../../static/logo.png" mode=""></image>
		</view>
		
		<u-form v-if="loginWay == 1" class="loginForm">
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入登录账号"  v-model="form.mobile" type="number" clearable />
			</view>
			<view class="uni-form-item uni-column">
				<u-input v-model="form.password" type="password" placeholder="请输入密码" :password-icon="true" />
				<!-- <text class="forgetText">忘记密码</text> -->
			</view>
			<u-button form-type="submit" class="loginbtn" type="default" @click="formSubmit">登录</u-button>
		</u-form>
		
		<u-form class="loginForm" v-if="loginWay == 2" :model="form">
			<view class="uni-form-item uni-column">
				<u-input maxlength="11" placeholder="请输入手机号码" type="number" v-model="form.mobile" />
			</view>
			<view class="uni-form-item uni-column">
				<u-input maxlength="4" placeholder="请输入验证码" type="number" v-model="form.code" />
				<view class="wrap">
					<u-toast ref="uToast"></u-toast>
					<u-verification-code 
					:seconds="seconds" 
					ref="uCode" 
					@change="codeChange"
					></u-verification-code>
					<u-button type="success" size="mini" @click="getCode">{{tips}}</u-button>
				</view>
			</view>
			<u-button class="loginbtn" @click="formSubmit" type="default">登录</u-button>
		</u-form>
		
		<view class="action center">
			<text @click="changeLoginWay" style="color: #71B6F7;">{{loginWay == 2?'账号密码登录':'短信验证登录'}}</text>
		</view>
	</view>
</template>
 
<script>
	import {sendCode as sendCodeApi} from '../../api/user';
	export default{
		data(){
			return{
				form:{
					mobile: "13803470847",
					code: "1234",
					password: null
				},
				loginWay: 2,
				seconds: 5,
				tips:''
			}
		},
		methods:{
			formSubmit(){
				let loginWay = this.loginWay
					, form = this.form
					, that = this
				if(!this.$u.test.mobile(form.mobile)){
					this.$u.toast('请输入正确手机号');
					return
				}
				if(loginWay == 2){
					if(form.code.length != 4){
						this.$u.toast('请输入正确验证码');
						return
					}
				}else{
					if(this.$utils.isEmpty(form.password)){
						this.$u.toast('请输入密码');
						return
					}
				}
				
				form.loginWay = loginWay
				this.$store.dispatch("user/login", form)
			},
			changeLoginWay(){
				this.loginWay = this.loginWay == 1?2:1;
			},
			codeChange(text) {
				this.tips = text;
				// this.$throw()
			},
			getCode(){
				if(this.$refs.uCode.canGetCode) {
					uni.showLoading({
						title: '正在获取验证码'
					})
					sendCodeApi({
						mobile: this.form.mobile,
						event: "mobilelogin"
					}).then(res=>{
						
						this.$refs.uCode.start();
					})
				}
			},
		}
	}
</script>
 
<style lang="less">
		
	.loginWrap{
		.imgWrap{
			text-align: center;
			padding: 50upx;
		}
		.loginForm{
			.uni-form-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1upx solid #DCDCDC;
				padding: 10upx 30upx;
				margin: 20upx;
				u-input{
					flex: 1;
				}
				.forgetText{
					color: #C8C7CC;
				}
				
			}
				
			.wrap{
				height: auto;
			}
			.loginbtn{margin: 20upx; margin-top: 60upx;background: #2CA800;color: #fff;}
		}
		.action{
			padding: 10upx 30upx;
		}
	}
</style>