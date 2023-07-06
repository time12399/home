<template>
	<view>
		<view :style="{ height: statusBarHeight + 'px' }"></view>
		<view class="searchInput">
			<u-search :placeholder="searchPlaceholder" v-model="keyword" @change="changeSearch" shape="square"
				:show-action="true" :action-text="cancellation" @custom="custom" @clear="clear"></u-search>
		</view>
		<!-- './search' -->
		<view v-show="showType == 1" class="title_list" v-for="(item,index) in actionList" :key="index"
			@click="searchListgoLink(item)">
			<view class="title_list_padding">
				<view class="list_display">
					<view class="width1">
						<view>{{item.class_name}}</view>
						<view class="list_display_text">{{item.class_name}}</view>
					</view>
					<view class="width2">
						<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view v-show="showType == 2" class="search_index_padding" v-for="item in filteredData" :key="item.class_name">
			<view class="search_index_title">
				{{item.class_name}}
			</view>
			<view class="title_list" v-for="(item1,index1) in item" :key="item1.id">
				<view class="title_list_padding">
					<view class="list_display">
						<view class="width_1" @click="addData(item1.id)">
							<u-icon name="plus-circle-fill" color="#64c566" size="45" top="10"></u-icon>
						</view>
						<view class="width_2" @click="goLink('./details')">
							<view>{{item1.name}}</view>
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
	import {
		searchGoods,
		addGoods
	} from "@/api/index.js"


	export default {
		data() {
			return {
				searchPlaceholder: this.$t("tabBar.index.search"),
				cancellation: this.$t("common.cancel"),
				statusBarHeight: uni.getStorageSync('statusBarHeight'),
				actionList: [],
				keyword: '',
				showType: 1,
				filteredData: []
			}
		},
		onLoad() {
			this.searchGoodsInit()
		},
		methods: {
			searchGoodsInit() {
				searchGoods().then(res => {
					if (res.code == 1) {
						// console.log(res)
						this.actionList = res.data
						uni.setStorageSync('actionList', res.data);
						// this.getGoodsList = res.data
					}
				})
			},
			custom() {
				uni.navigateBack({
					delta: 1
				});
			},
			goLink(url) {
				uni.navigateTo({
					url: url
				})
			},
			actionListClick(index) {
				console.log(index)
			},
			changeSearch(e) {
				this.filteredData = []
				this.keyword = e
				if (this.keyword) {
					this.showType = 2
					var data = uni.getStorageSync('actionList');
					
					var newList = []
					for(let i = 0; i < data.length; i ++) {
							newList = data[i][data[i].class_name].filter(item => {
								if(item.name.toLowerCase().includes(this.keyword.toLowerCase())){
									return item.name.toLowerCase().includes(this.keyword.toLowerCase());
								}
							});
							if(newList.length){
								newList.class_name = data[i].class_name	
							}
							this.filteredData.push(newList)	
					}
					// console.log(111,this.filteredData)
				} else {
					this.showType = 1
				}
				// console.log(this.keyword)
			},
			clear(){
				this.filteredData = []
				// console.log(222,this.filteredData)
			},
			searchListgoLink(item) {
				const url = './search';
				const params = encodeURIComponent(JSON.stringify(item));
				uni.navigateTo({
					url: `${url}?params=${params}`
				});
			},
			addData(id){
				let data = {
					pid:id
				}
				addGoods(data).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: '添加商品成功',
							icon:'none',
						});
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.searchInput {
		padding: 20rpx;
	}

	.title_list {
		padding: 0 20rpx 0 20rpx;
		background: #ffffff;

		.title_list_padding {
			padding: 20rpx 0 20rpx 0;
			// border-bottom: 1rpx solid #e8e8e8;

			.list_display {
				display: flex;
				font-weight: bold;

				.width_1 {
					width: 10%;
				}

				.width_2 {
					width: 80%;
				}

				.width1 {
					width: 90%;
				}

				.width2 {
					width: 10%;
					text-align: end;
				}

				.list_display_text {
					font-size: 15rpx;
					font-weight: 500 !important;
				}
			}
		}
	}

	.search_index_padding {
		padding: 20rpx;

		.search_index_title {
			font-weight: bold;
			color: #8a8a8a;
		}
	}
</style>