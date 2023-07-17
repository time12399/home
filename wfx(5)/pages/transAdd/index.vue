<template>
	<view>
		<view class="navigation">
			<view class="display">
				<view class="width_1">
					<u-icon name="arrow-left" color="#2979ff" size="35" @click="goLink1"></u-icon>
				</view>
				<view class="width_2">
					<view class="nav_padding">
						<view class="title" @click="goLink('/pages/transAdd/add')">{{findGoodsData.name}} <u-icon
								name="arrow-down" color="#333" size="20"></u-icon> </view>
						<view class="xi">{{findGoodsData.title}}</view>
					</view>
				</view>
				<view class="width_1">

				</view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>

		<view class="execute_padding">
			<u-collapse>
				<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
					<view class="price_display">
						<view class="price_width price_color_1" @click="BuyClick">Buy Limit</view>
						<u-icon name="checkmark" color="#196ed9" size="28"></u-icon>
					</view>
					<view class="price_display">
						<view class="price_width price_color_2">Buy Limit</view>
					</view>
					<view class="price_display">
						<view class="price_width price_color_1">Buy Limit</view>
					</view>
					<view class="price_display">
						<view class="price_width price_color_2">Buy Limit</view>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>

		<view style="background: #ffffff;">
			<view class="display_list">
				<view class="list_width price_color_1" @click="numOneClick">-{{number.numOne}}</view>
				<view class="list_width price_color_1" @click="numTwoClick">-{{number.numTwo}}</view>
				<view class="list_width">{{number.numThree}}</view>
				<view class="list_width price_color_1" @click="numFourClick">+{{number.numFour}}</view>
				<view class="list_width price_color_1" @click="numFiveClick">+{{number.numFive}}</view>
			</view>

			<view class="list_padd">
				<view class="display_list">
					<view class="list_width_1">{{$t("transAdd.index.StopLoss")}}</view>
					<view class="list_width_1">
						<view style="display:flex">
							<view class="list_num_width" @click="StopLossReduce">
								<u-icon name="minus" color="#2979ff" size="28"></u-icon>
							</view>
							<view class="list_num_width_1">
								<input type="number" v-model="list.loss" :placeholder="placeholder"
									placeholder-class="my-input-placeholder" />
							</view>
							<view class="list_num_width" @click="StopLossAdd">
								<u-icon name="plus" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="list_padd">
				<view class="display_list">
					<view class="list_width_1">{{$t("transAdd.index.makeProfit")}}</view>
					<view class="list_width_1">
						<view style="display:flex">
							<view class="list_num_width">
								<u-icon name="minus" color="#2979ff" size="28"></u-icon>
							</view>
							<view class="list_num_width_1">
								<input type="number" :placeholder="placeholder"
									placeholder-class="my-input-placeholder" />
							</view>
							<view class="list_num_width">
								<u-icon name="plus" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="list_padd">
				<view class="display_list">
					<view class="list_width_1">{{$t("transAdd.index.deviation")}}</view>
					<view class="list_width_1">
						<view style="display:flex">
							<view class="list_num_width">
								<u-icon name="minus" color="#2979ff" size="28"></u-icon>
							</view>
							<view class="list_num_width_1">
								<input type="number" :placeholder="placeholder"
									placeholder-class="my-input-placeholder" />
							</view>
							<view class="list_num_width">
								<u-icon name="plus" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="num_display">
			<view class="num_width" v-if="findGoodsData.now_sell">
				<view class="num_title color_text_1">
					<view class="num_top">{{findGoodsData.now_sell[0]}}</view>
					<text class="num_bag">{{findGoodsData.now_sell[1]}}</text>
					<view class="num_right">{{findGoodsData.now_sell[2]}}</view>
				</view>
			</view>
			<view class="num_width" v-if="findGoodsData.now_buy">
				<view class="num_title color_text_2">
					<view class="num_top">{{findGoodsData.now_buy[0]}}</view>
					<text class="num_bag">{{findGoodsData.now_buy[1]}}</text>
					<view class="num_right">{{findGoodsData.now_buy[2]}}</view>
				</view>
			</view>
		</view>

		<view v-show="type == 0" class="button_display">
			<view class="button_width button_color_1" @click="SellClick(2)">
				<view>Sell</view>
			</view>
			<view class="button_width button_color_2" @click="SellClick(1)">
				<view>Buy</view>
			</view>
		</view>
		<view v-show="type == 1">
			<view class="button_price">
				下单
			</view>
		</view>
	</view>
</template>

<script>
	import {
		findGoodsId,
		addTrade
	} from "@/api/index.js"
	import md5 from '@/utils/md5.js'
	export default {
		data() {
			return {
				itemList: [{
					head: this.$t("transAdd.index.execute"),
					open: true,
					disabled: true
				}],
				type: 0,
				placeholder: this.$t("transAdd.index.notset"),
				findGoodsData: [],
				pid: '',
				myamount_: 0.01,
				number: {
					numOne: 0.5,
					numTwo: 0.1,
					numThree: 0.01,
					numFour: 0.1,
					numFive: 0.5,
				},
				numTree: 0.1,
				list:{
					loss:''
				}
			}
		},
		onLoad(e) {
			this.pid = e.pid
			let data = {
				pid: e.pid
			}
			findGoodsId(data).then(res => {
				if (res.code == 1) {
					console.log(res)
					this.findGoodsData = res.data
				}
			})
		},
		methods: {

			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
			goLink1(url) {
				uni.navigateBack({
					delta: 1
				});
			},
			BuyClick() {
				this.type = 1
			},
			SellClick(status) {
				if (status == 2) {
					var price = this.findGoodsData.now_sell[0] + this.findGoodsData.now_sell[1] + this.findGoodsData
						.now_sell[2]
				} else {
					var price = this.findGoodsData.now_buy[0] + this.findGoodsData.now_buy[1] + this.findGoodsData.now_buy[
						2]
				}
				let data = {
					status: status, //卖出2  买入1
					pid: this.pid,
					time: Math.round(new Date() / 1000),
					type: 1, //立即执行 1
					price: price,
					myamount_: this.myamount_,
				}
				uni.setStorageSync('p_token', md5.hex_md5(this.findGoodsData.now_sell[0] + this.findGoodsData.now_sell[1] +
					this.findGoodsData.now_sell[2] + 'GMXskC3s2m'))
				addTrade(data).then(res => {
					if (res.code == 1) {
						console.log(res)
					} else {
						// console.log(11,res)
						uni.showToast({
							title: res.info,
							icon: 'none',
						})
					}
				})
			},

			//+0.1
			numFourClick() {
				var number = this.number.numThree + this.number.numFour
				if (number > 500) {
					this.number.numThree = 500.00
				} else {
					if (number < 500) {
						this.number.numThree = parseFloat(number.toFixed(2))
					}
				}
				// this.number.numThree = parseFloat(number.toFixed(2))
				if (this.number.numThree > 1) {
					this.numberClick1()
				}
				if (this.number.numThree > 10) {
					this.numberClick2()
				}
				if (this.number.numThree > 50) {
					this.numberClick3()
				}
				if (this.number.numThree > 100) {
					this.numberClick4()
				}
				if (this.number.numThree > 500) {
					this.numberClick5()
				}
			},
			//+0.5
			numFiveClick() {
				var number = this.number.numThree + this.number.numFive
				if (number > 500) {
					this.number.numThree = 500.00
				} else {
					if (number < 500) {
						this.number.numThree = parseFloat(number.toFixed(2))
					}
				}

				if (this.number.numThree > 1) {
					this.numberClick1()
				}
				if (this.number.numThree > 10) {
					this.numberClick2()
				}
				if (this.number.numThree > 50) {
					this.numberClick3()
				}
				if (this.number.numThree > 100) {
					this.numberClick4()
				}
				if (this.number.numThree > 500) {
					this.numberClick5()
				}
			},

			//-0.1
			numTwoClick() {
				if (this.number.numThree > 0.1) {
					var number = this.number.numThree - this.number.numTwo
					if (number <= 0.01) {
						this.number.numThree = 0.01
						this.numberClick()
					} else {
						this.number.numThree = parseFloat(number.toFixed(2))
					}
				}
			},
			//-0.5
			numOneClick() {
				if (this.number.numThree > 0.5) {
					var number = this.number.numThree - this.number.numOne
					if (number <= 0.01) {
						this.number.numThree = 0.01
						this.numberClick()
					} else {
						this.number.numThree = parseFloat(number.toFixed(2))
					}
				}
			},
			//集体变换 原始
			numberClick() {
				let number = {
					numOne: 0.5,
					numTwo: 0.1,
					numThree: this.number.numThree,
					numFour: 0.1,
					numFive: 0.5,
				}
				this.number = number
			},
			//集体变换 > 1
			numberClick1() {
				let number = {
					numOne: 5,
					numTwo: 1,
					numThree: this.number.numThree,
					numFour: 1,
					numFive: 5,
				}
				this.number = number
			},
			//集体变换 > 10
			numberClick2() {
				let number = {
					numOne: 10,
					numTwo: 1,
					numThree: this.number.numThree,
					numFour: 1,
					numFive: 10,
				}
				this.number = number
			},
			//集体变换 > 50
			numberClick3() {
				let number = {
					numOne: 25,
					numTwo: 10,
					numThree: this.number.numThree,
					numFour: 10,
					numFive: 25,
				}
				this.number = number
			},
			//集体变换 > 100
			numberClick4() {
				let number = {
					numOne: 100,
					numTwo: 50,
					numThree: this.number.numThree,
					numFour: 50,
					numFive: 100,
				}
				this.number = number
			},
			//集体变换 > 500
			numberClick5() {
				let number = {
					numOne: 500,
					numTwo: 100,
					numThree: this.number.numThree,
					numFour: 100,
					numFive: 500,
				}
				this.number = number
			},
			// 止损 -
			StopLossReduce(){
				if(this.list.loss){
					
				}else{
					this.list.loss = this.findGoodsData.now_sell_str
				}
			},
			// 止损 +
			StopLossAdd(){
				// console.log()
				if(this.list.loss){
					var num = this.list.loss.split(".")
					// console.log(num[0].length) //前
					// console.log(num[1].length) //后
					console.log(num)
					var zar = Number('0.'.padEnd(num[1].length+1, '0') + 1) //后
					this.list.loss = Number(this.list.loss) + zar
					this.list.loss = this.list.loss + ''
				}else{
					// this.list.loss = this.findGoodsData.now_sell_str
					this.list.loss = '5.232996'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: rgb(240, 240, 240);
	}

	.navigation {
		height: 100rpx;
		background: #fff;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99999;
		border-bottom: 1px solid #e8e8e8;

	}

	.display {
		display: flex;

		.width_1 {
			width: 15%;
			line-height: 100rpx;
			padding-left: 20rpx;
		}

		.width_2 {
			width: 70%;

			.nav_padding {
				padding: 16rpx 0 0 0;
				text-align: center;

				.title {
					font-weight: bold;
					font-size: 30rpx;
				}

				.xi {
					color: #808080;
					font-size: 20rpx;
				}
			}
		}
	}

	.execute_padding {
		padding: 20rpx;
		border-bottom: 1px solid #e8e8e8;
		background: #ffffff;

		.price_display {
			display: flex;
			padding: 20rpx 0 20rpx 0;

			.price_width {
				width: 95%;
				font-size: 30rpx;
			}

			.price_color_1 {
				color: #196ed9;
			}

			.price_color_2 {
				color: red;
			}
		}
	}


	.display_list {
		display: flex;

		.list_width {
			width: 20%;
			text-align: center;
			padding: 20rpx 0 20rpx 0;
			font-weight: bold;
			font-size: 26rpx;
		}

		.price_color_1 {
			color: #196ed9;
		}
	}

	.list_padd {
		padding: 20rpx;

		.display_list {
			display: flex;

			.list_width_1 {
				width: 50%;

				.list_num_width {
					width: 20%;
					text-align: center;
				}

				.list_num_width_1 {
					width: 60%;
					text-align: center;

					.my-input-placeholder {
						color: rgb(198, 198, 198);
						font-size: 25rpx;
					}
				}
			}
		}
	}

	.num_display {
		display: flex;

		.num_width {
			width: 50%;
			text-align: center;

			.num_title {
				display: flex;
				font-weight: bold;
				justify-content: center;
				padding: 20rpx 0 20rpx 0;

				.num_top {
					font-size: 35rpx;
					margin-top: 20rpx;
				}

				.num_bag {
					font-size: 55rpx;
				}

				.num_right {
					font-size: 30rpx;
				}
			}


			.color_text_1 {
				color: red;
			}

			.color_text_2 {
				color: #2979ff;
			}
		}
	}

	.button_display {
		display: flex;

		.button_width {
			width: 50%;
			padding: 20rpx;
			color: #fff;
			text-align: center;
			font-size: 28rpx;
		}

		.button_color_1 {
			background: red;
		}

		.button_color_2 {
			background: #196ed9;
		}
	}

	.button_price {
		background: rgb(190, 190, 190);
		text-align: center;
		text-align: center;
		font-size: 28rpx;
		padding: 20rpx;
		color: #fff;
	}
</style>