<template>
	<view>
			<u-navbar title="Indexes" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
			<view class="title_list" v-for="(item,index) in 10" :key="index" @click="goLink('./details')">
					<view class="title_list_padding" >
							<view class="list_display">
								<view class="width_1">
										<u-icon name="plus-circle-fill" color="#64c566" size="45" top="10"></u-icon>
								</view>
								<view class="width_2">
									<view>HSI50</view>
									<view class="list_display_text">HSI 50 Index</view>
								</view>
								<view class="width2">
										<u-icon name="arrow-right" color="#d3d3d3" size="30" top="10"></u-icon>
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
				goLink(url) {
					uni.navigateTo({
						url: url
					})
				},
		}
	}
</script>

<style lang="less" scoped>
	.title_list{
		padding: 0 20rpx 0 20rpx;
		background: #ffffff;
		
		.title_list_padding{
			padding: 20rpx 0 20rpx 0;
			// border-bottom: 1rpx solid #e8e8e8;
			
			.list_display{
				display: flex;
				font-weight: bold;
				.width_1{
					width: 10%;
				}
				.width_2{
					width: 80%;
				}
				
				.width1{
					width: 90%;
				}
				.width2{
					width: 10%;
					text-align: end;
				}
				.list_display_text{
					font-size: 15rpx;
					font-weight: 500!important;
				}
			}
		}
	}
</style>
