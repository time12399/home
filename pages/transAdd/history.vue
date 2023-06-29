<template>
	<view>
			<u-navbar title="历史" back-icon-color="#196ed9"></u-navbar>
			<view style="height: 20rpx;"></view>
			<view class="breed_padding">
					<view style="display: flex;">
						<view class="title">交易品种 :</view>
						<view class="title1">全部交易品种</view>
					</view>
			</view>
			<view style="height: 50rpx;"></view>
			<view class="title_list" v-for="(item,index) in actionList" :key="index" @click="actionListClick(index)">
					<view class="title_list_padding">
							<view class="list_display">
								<view class="width1">{{item.text}}</view>
								<view class="width2" v-show="index == listShow">
										<u-icon name="checkmark" color="#2979ff" size="30"></u-icon>
								</view>
							</view>
					</view>
			</view>
			<view style="height: 50rpx;"></view>
			<view v-show="listShow == 6">
					<view class="breed_padding">
							<view style="display: flex;">
								<view class="title">开始日期 :</view>
								<view class="title3">
										<view class="time" @click="timeShow = true">
											 {{timeList.startDate}}
										</view>
								</view>
							</view>
					</view>
					<view class="breed_padding">
							<view style="display: flex;">
								<view class="title">截止日期 :</view>
								<view class="title3">
										<view class="time" @click="timeShow = true">
											 {{timeList.endDate}}
										</view>
								</view>
							</view>
					</view>
			</view>
			<u-calendar v-model="timeShow" :mode="mode" @change="timeClick"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					actionList: [{
						text: '今天',
					}, {
						text: '上一周'
					}, {
						text: '上个月'
					}, {
						text: '最近3个月'
					}, {
						text: '最近6个月'
					}, {
						text: '去年'
					}, {
						text: '自定义'
					}],
					listShow:0,
					timeShow:false,
					mode: 'range',
					timeList:{
						startDate: '2023-06-21',
						endDate:'2023-06-28'
					}
			}
		},
		onLoad() {
			// console.log(this.timeList)
		},
		methods: {
				actionListClick(index){
						// console.log(index)
						this.listShow = index
				},
				timeClick(e){
					// console.log(e)
					this.timeList = e
				}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: rgb(240, 240, 240);
	}
	.breed_padding{
		padding: 20rpx;
		background: #ffffff;
		border-top: 1rpx solid #e8e8e8;
		border-bottom: 1rpx solid #e8e8e8;
		
		.title{
			width:50%;
			font-weight: bold;
		}
		.title1{
			width:50%;
			text-align: right;
			color: #808080;
		}
		.title3{
			width:50%;
			.time{
				padding: 10rpx 30rpx 10rpx 30rpx;
				display: initial;
				background: #e8e8e8;
				border-radius: 15rpx;
				margin-left: 28%;
			}
		}
	}
	.title_list{
		padding: 0 20rpx 0 20rpx;
		background: #ffffff;
		
		.title_list_padding{
			padding: 20rpx 0 20rpx 0;
			border-bottom: 1rpx solid #e8e8e8;
			
			.list_display{
				display: flex;
				font-weight: bold;
				.width1{
					width: 90%;
					
				}
				.width2{
					width: 10%;
					text-align: end;
				}
			}
		}
	}
</style>
