<template>
	<view>
			<u-navbar title="" back-icon-color="#196ed9"></u-navbar>
			<view style="height: 50rpx;"></view>
			<view class="title_list" v-for="(item,index) in 10" :key="index">
					<view class="title_list_padding">
							<view class="list_display">
								<view class="width1">AUDUSD</view>
								<view class="width2" v-show="index == 0">
										<u-icon name="checkmark" color="#2979ff" size="30"></u-icon>
								</view>
							</view>
					</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: rgb(240, 240, 240);
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
