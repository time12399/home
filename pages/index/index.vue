<template>
	<view>
			<view :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="searchInput">
					<u-search placeholder="输入交易品种进行搜索" v-model="keyword" @change="changeSearch" shape="square" :show-action="true" action-text="取消" @custom="custom"></u-search>
			</view>
			<view v-show="showType == 1" class="title_list" v-for="(item,index) in actionList" :key="index" @click="actionListClick(index)">
					<view class="title_list_padding">
							<view class="list_display">
								<view class="width1">
									<view>{{item.text}}</view>
									<view class="list_display_text">{{item.text}}</view>
								</view>
								<view class="width2">
										<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
								</view>
							</view>
					</view>
			</view>
			<view v-show="showType == 2" class="search_index_padding" v-for="item in 2">
					<view class="search_index_title">
							Indexes
					</view>
					<view class="title_list" v-for="(item,index) in 2" :key="index" @click="goLink('./details')">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
					statusBarHeight:uni.getStorageSync('statusBarHeight'),
					actionList: [{
						text: 'Forex',
					}, {
						text: 'Metals'
					}, {
						text: 'Indexes'
					}],
					keyword:'',
					showType:1,
			}
		},
		methods: {
				custom(){
					uni.navigateBack({
						delta: 1
					});
				},
				goLink(url) {
					uni.navigateTo({
						url: url
					})
				},
				actionListClick(index){
						console.log(index)
				},
				changeSearch(e){
					this.keyword = e
					if(this.keyword){
							this.showType = 2
					}else{
							this.showType = 1
					}
					// console.log(this.keyword)
				}
		}
	}
</script>

<style lang="less" scoped>
	.searchInput {
			padding: 20rpx;
	}
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

	.search_index_padding{
		padding: 20rpx;
		
		.search_index_title{
			font-weight: bold;
			color: #8a8a8a;
		}
	}
</style>
