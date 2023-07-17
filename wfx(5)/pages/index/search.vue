<template>
	<view>
			<u-navbar :title="actionListNmae" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
			<view class="title_list" v-for="(item,index) in actionList">
					<view class="title_list_padding" >
							<view class="list_display">
								<view class="width_1" @click="addData(item.id)">
										<u-icon name="plus-circle-fill" color="#64c566" size="45" top="10"></u-icon>
								</view>
								<view class="width_2"  @click="goLink('./details')">
									<view>{{item.name}}</view>
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
	import {
		addGoods
	} from "@/api/index.js"
	export default {
		data() {
			return {
				actionListNmae:"",
				actionList: [],
			}
		},
		onLoad(options) {
			// 获取传递的对象参数，使用decodeURIComponent解码，并转为对象
			if ('params' in options) {
				var obj = JSON.parse(decodeURIComponent(options.params));
				this.actionListNmae = obj.class_name
				this.actionList = obj[obj.class_name]
			}
		},
		methods: {
				goLink(url) {
					uni.navigateTo({
						url: url
					})
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
