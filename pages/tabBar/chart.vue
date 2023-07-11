<template>
	<view class="candle">
		<!-- 这里需要一个自定义navbar -->
		<view class="nav-bar">

		</view>
		<!-- end -->



		<view class="icons">
			<view class="l" @click="showFun(1)">{{M}}</view>
			<view class="MS" v-if="isM">
				<text @click="hideFun(1, 'M1')">M1</text>
				<text @click="hideFun(1, 'M5')">M5</text>
				<text @click="hideFun(1, 'M15')">M15</text>
				<text @click="hideFun(1, 'M30')">M30</text>
				<text @click="hideFun(1, 'H1')">H1</text>
				<text @click="hideFun(1, 'M4')">M4</text>
				<text @click="hideFun(1, 'D1')">D1</text>
				<text @click="hideFun(1, 'W1')">W1</text>
				<text @click="hideFun(1, 'MN')">MN</text>
			</view>
			<view class="m">
				<text></text>
				<u-icon name="plus" size="30"></u-icon>
				<text></text>
			</view>
			<view class="r">
				<u-icon size="40" name="https://cdn.uviewui.com/uview/example/button.png"></u-icon>
			</view>
		</view>
		<view class="m-charts">
			<qiun-data-charts 
				ref="tubiao" 
				type="candle"
				:opts="opts" 
				:chartData="chartData"
				
				:animation="false"
				:disableScroll="true"
				:ontouch="true"
				:onzoom="true" />
				
				<!-- <view @click="linkFun">
					大洼看到你快乐看来你看
				</view> -->
		</view>

	</view>
</template>

<script>
	import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js';
	var uChartsInstance = {};
	import bus from '@/utils/bus.js';
	export default {
		data() {
			return {
				cWidth: 750,
				cHeight: 500,
				left: 0,
				top: 0,
				M: 'M1',
				isM: false,
				chartData: {
					categories: [],
					series: [
						{
							name: '当前买入',
							data: []
						},
					],
				},
				opts: {
					animation: false,
					update: true,
					rotate: false,
					rotateLock: false,
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					height: 500,
					width: 750,
					padding: [15, 15, 0, 15],
					dataLabel: false,
					enableScroll: true,
					enableMarkLine: true,
					categories: [],
					series: [],
					legend: {
						show: false,
						position: "bottom",
						float: "center",
						padding: 5,
						margin: 5,
						backgroundColor: "rgba(0,0,0,0)",
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						fontSize: 13,
						fontColor: "#666666",
						lineHeight: 11,
						hiddenColor: "#CECECE",
						itemGap: 10
					},
					xAxis: {
						labelCount: 4,
						itemCount: 40,
						disableGrid: true,
						gridColor: "#CCCCCC",
						gridType: "solid",
						dashLength: 4,
						scrollShow: true,
						scrollAlign: "right",
						scrollColor: "#A6A6A6",
						scrollBackgroundColor: "#EFEBEF",
						
						min: 0,
						max: 10000,
					},
					yAxis: {
						disabled: false,
						disableGrid: false,
						splitNumber: 15,
						gridType: "dash",
						dashLength: 8,
						gridColor: "#CCCCCC",
						padding: 10,
						showTitle: false,
						data: [{
							type: "value",
							position: "right",
							disabled: false,
							axisLine: true,
							axisLineColor: "#CCCCCC",
							calibration: false,
							fontColor: "#666666",
							fontSize: 13,
							textAlign: "right",
							title: "",
							titleFontSize: 13,
							titleOffsetY: 0,
							titleOffsetX: 0,
							titleFontColor: "#666666",
							min: null,
							max: null,
							tofix: null,
							unit: "",
							format: ""
						}]
					},
					extra: {
						candle: {
							color: {
								upLine: "#f04864",
								upFill: "#f04864",
								downLine: "#2fc25b",
								downFill: "#2fc25b"
							},
							average: {
								show: false,
								name: [
									"MA5",
									"MA10",
									"MA30"
								],
								day: [
									5,
									10,
									20
								],
								color: [
									"#1890ff",
									"#2fc25b",
									"#facc14"
								]
							}
						},
						markLine: {
							type: "dash",
							dashLength: 5,
							data: [{
									value: 2150,
									lineColor: "#1cbbb4",
									showLabel: true,
									labelAlign: "right",
									labelOffsetX: 0,
									labelOffsetY: 0,
									labelPadding: 6,
									labelText: "",
									labelFontSize: 13,
									labelFontColor: "#fff",
									labelBgColor: "#1cbbb4",
									labelBgOpacity: 0.8,
									fontSize: 10
								},
								{
									value: 2100,
									lineColor: "#1cbbb4",
									showLabel: false,
									labelAlign: "right",
									labelOffsetX: 0,
									labelOffsetY: 0,
									labelPadding: 6,
									labelText: "",
									labelFontSize: 13,
									labelFontColor: "#fff",
									labelBgColor: "#1cbbb4",
									labelBgOpacity: 0.8,
									fontSize: 10
								}
							]
						},
						tooltip: {
							showBox: true,
							showArrow: false,
							showCategory: false,
							borderWidth: 0,
							borderRadius: 0,
							borderColor: "#000000",
							borderOpacity: 0.7,
							bgColor: "#000000",
							bgOpacity: 0.7,
							gridType: "dash",
							dashLength: 4,
							gridColor: "#333",
							boxPadding: 3,
							fontSize: 13,
							lineHeight: 20,
							fontColor: "#FFFFFF",
							legendShow: true,
							legendShape: "auto",
							splitLine: true,
							horizentalLine: true,
							xAxisLabel: true,
							yAxisLabel: true,
							labelBgColor: "#333",
							labelBgOpacity: 0.7,
							labelFontColor: "#fff"
						}
					}
				},
				list1: [],
				list2: []
			};
		},
		onReady() {
			
		},
		methods: {
			linkFun() {
				uni.navigateTo({
					url: '/pages/tabBar/k-chart'
				})
			},
			showFun(t) {
				if (t === 1) {
					this.isM = true
				}
			},
			hideFun(t, s) {
				if (t === 1) {
					this.M = s
					this.isM = false
				}
			},
			getServerData(obj) {
				let categories = []
				let series = []
				let arr1 = []
				let arr2 = []
				for (let key in obj){
					// arr1.push([...obj[key].now_buy_arr, ...obj[key].now_sell_arr])
					// this.chartData.series[0].data.push([...obj[key].now_buy_arr, ...obj[key].now_sell_arr])
					// this.list1.push(obj[key].now_buy)
					// this.list2.push(obj[key].now_sell)
					arr1.push(obj[key].now_buy)
					arr2.push(obj[key].now_sell)
					this.chartData.categories.push(obj[key].name)
				}
				
				
				this.chartData.series[0].data.push(arr1)
				this.chartData.series[0].data.push(arr2)
				// this.chartData.categories = categories
				console.log(this.chartData)
				// series.push({
				// 	name: '当前买入',
				// 	data: [this.list1, this.list2]
				// })
				
				
				
				// let res = {
				// 	categories: categories,
				// 	series: series
				// };
				// console.log(res.series)
				
				// this.chartData.categories = categories
				// this.chartData.series[0].data.push(arr1)
				// this.chartData = res
				// this.$refs.tubiao.updataUChart()
				
				
				// this.$refs.tubiao.updateData({
				// 	    categories: categories,
				// 	    series: series,
				// 	    animation: false
				// })
				
				// uChartsInstance['myCanvas'].updateData({
				//     categories: categories,
				//     series: series,
				//     animation: false
				// });
				
				
				this.chartData = JSON.parse(JSON.stringify(this.chartData));
				
				
				// setTimeout(() => {
				// 	let res = {
				// 		categories: [],
				// 		series: [{
				// 			name: "大锤",
				// 			data: []
				// 		}]
				// 	};

				// 	arr.map((item, i) => {
				// 		// 随便模拟点数据
				// 		res.categories.push(`${i} Jun 23:${i}`)
				// 		res.series[0].data.push(item)
				// 	})

				// 	this.chartData = JSON.parse(JSON.stringify(res));
				// }, 500);
			},
		},
		mounted() {
			
		},
		created() {
			
			bus.$on('on-charts-data', (data) => {
				this.getServerData(data)
			})
		}
	};
</script>

<style scoped lang="scss">
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */

	.candle {
		width: 100%;
		height: 100vh;


		.nav-bar {
			// height: 44px;
		}

		.icons {
			height: 44px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			position: relative;

			.MS {
				position: absolute;
				top: 0;
				left: 30rpx;
				height: 100%;
				right: 30rpx;
				background-color: #fff;
				z-index: 9;
				display: flex;
				align-items: center;
				justify-content: space-between;

				>text {
					flex: 1;
					font-size: 32rpx;
					color: #666;
					text-align: center;
				}
			}




			.l {
				font-weight: bold;
				font-size: 32rpx;
				color: #666;
			}

			.m {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 200rpx;
			}

			.r {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		}

		.m-charts {
			height: calc(100% - 88px);
			position: relative;

			.zuobiao {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				background-color: #0f0;
				width: 80px;
				height: 80px;
			}
		}
	}
</style>