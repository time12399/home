<template>
	<view class="candle">
		<!-- 这里需要一个自定义navbar 1 -->
		<view class="nav-bar">

		</view>
		<!-- end -->


		<view class="icons">
			<view class="l" @click="showFun(1)">{{M}}</view>
			<view class="MS" v-if="isM">
				<text @click="hideFun(item.id, item.name)" v-for="item in MList">{{item.name}}</text>
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
			<!--      <qiun-data-charts type="candle" :opts="opts" :chartData="chartData" :disableScroll="true" :ontouch="true"
                        :onzoom="true" @getIndex="getIndexFun" @getTouchMove="getTouchMoveFun" @getTouchEnd="getTouchEndFun" /> -->
			<echarts ref="echarts" :option="chartOpts" canvasId="echarts"></echarts>
		</view>

	</view>
</template>

<script>
	import Echarts from '@/components/echarts-uniapp/echarts-uniapp.vue'
	import {
		mapState
	} from 'vuex'
	import {
		goodtimeclass
	} from "@/api/index.js"
	export default {
		components: {
			Echarts
		},
		data() {
			return {
				left: 0,
				top: 0,
				M: 'M1',
				Mindex: 1,
				MList: [],
				isM: false,
				opts: {
					rotate: false,
					rotateLock: false,
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 15, 0, 15],
					dataLabel: false,
					enableScroll: true,
					enableMarkLine: true,
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
						scrollBackgroundColor: "#EFEBEF"
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
							showBox: false,
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
				}
			};
		},
		computed: {
			...mapState('chart', ['categories', 'series', '']),
			chartOpts() {
				return {
					tooltip: {
						trigger: 'none',
						axisPointer: {
							animation: false,
							type: 'cross'
						}
					},
					dataZoom: [
						{
							width: '15',
							type: 'slider',
							show: true, //flase直接隐藏图形
							xAxisIndex: [0],
							left: 33, //滚动条靠左侧的百分比
							bottom: 40,
							height: 20,//组件高度  
							start: 50,//滚动条的起始位置
							showDataShadow: false,//是否显示数据阴影
							showDetail: false,//是否显示想洗数值信息
							end: 100 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
						},
						{
							type: 'inside',
							show: true,
							xAxisIndex: [0],
							start: 50,//滚动条的起始位置
							end: 0.25 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
						}
					],
					yAxis: {
						position: 'right',
						scale: true,
						splitArea: {
							show: true
						},
						axisLine: { lineStyle: { color: '#8392A5' } },
						splitLine: { show: false }
					},
					legend: {
						data: this.series.map(item => item.name)
					},
					xAxis: {
						type: 'category',
						data: this.categories
					},
					series: [{
						type: 'candlestick',
						markPoint:{
							silent: true
						},
						data: this.series.length ? this.series[0].data : []
					}]
				}
			}
		},
		onReady() {
			this.$ws.init()
		},
		onShow() {},
		onLoad() { 
			this.getTimeClass()
		},
		methods: {
			getTouchMoveFun(e) {

			},
			getTouchEndFun(e) {

			},
			getIndexFun(e) {

			},
			showFun(t) {
				if (t === 1) {
					this.isM = true
				}
			},
			hideFun(t, s) {
				this.M = s
				this.Mindex = t
				this.isM = false
			},
			getTimeClass(){
				goodtimeclass({}).then(res => {
					if (res.code == 1) {
						this.M = res.data.length > 0 ? res.data[0].name : 'M1'
						this.Mindex = res.data.length > 0 ? res.data[0].id : 1
						this.MList = res.data
					}
				})
			}
		},
		created() {

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
