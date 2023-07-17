<template>
	<div class="chart" style="overflow: hidden;">
		<div class="tools">
			<ul class="times">
				<li v-for="item in timeList" :key="item.value" :class="timeValue === item.value ? 'is_li':''"
					@click="choiceTime(item)">
					{{item.label}}
				</li>
			</ul>
		</div>
		<div ref="k-line-chart" id="k-line-chart" class="kling cb">
		</div>
	</div>
</template>

<script module="klinecharts" lang="renderjs">
	import {
		init
	} from 'klinecharts'
	import generatedKLineDataList from '@/utils/generatedKLineDataList.js' // 数据处理
	import klinConfig from '@/utils/klinConfig.js' // 样式处理
	import {
		goodtimeclass
	} from "@/api/index.js"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				timeList: [{
						value: 1,
						label: '1M'
					},
					{
						value: 5,
						label: '5M'
					},
					{
						value: 10,
						label: '10M'
					},
					{
						value: 30,
						label: '30M'
					},
					{
						value: 60,
						label: '1H'
					},
					{
						value: 360,
						label: '6H'
					},
					{
						value: 720,
						label: '12H'
					},
					{
						value: 1440,
						label: '1D'
					},
					{
						value: 7200,
						label: '5D'
					},
				], //时间列表
				timeValue: 1, //时间选择
			}
		},
		onReady() {
			this.$ws.init()
		},
		mounted() {
			const chart = init('k-line-chart')
			chart.setStyleOptions(klinConfig)
			chart.overrideTechnicalIndicator({
				name: 'MA',
				calcParams: [5, 10, 30]
			})
			chart.createTechnicalIndicator('MA', false, {
				id: 'candle_pane'
			})
			// chart.createTechnicalIndicator('VOL', false, { height: 120, dragEnabled: false })
			// chart.createTechnicalIndicator('MACD', false, { height: 120, dragEnabled: false })
			chart.applyNewData(generatedKLineDataList())
		},
		methods: {
			choiceTime(timeInfo) {
				this.timeValue = timeInfo.value;
				this.klinecharts.clearData();
				this.initData(this.dealInfo.hash, this.timeValue);
			},

			getTimeClass() {
				goodtimeclass({}).then(res => {
					if (res.code == 1) {
						// this.M = res.data.length > 0 ? res.data[0].name : 'M1'
						// this.Mindex = res.data.length > 0 ? res.data[0].id : 1
						this.MList = res.data
					}
				})
			}
		}
	}
</script>

<style>
	ol,
	ul {
		list-style: none;
	}

	.chart {
		height: 100%;
		/* width: 100%; */
		margin: 20px auto;
		padding: 10px;
		overflow: hidden;
	}

	.tools {
		height: 25px;
		width: 100%;
		margin: 10px 0 0 0;
	}

	.times li,
	.types li {
		float: left;
		font-size: 12px;
		padding: 2px 5px;
		color: #7d7f93;
		text-decoration: none;
	}

	.times li:hover,
	.types li:hover {
		cursor: pointer;
		color: #608FFF;
	}

	.is_li {
		color: #608FFF;
	}

	.times {
		float: left;
		margin: 2px 0 0 10px;
	}

	.types {
		float: right;
		margin: 2px 10px 0 0;
	}

	.kling {
		height: 700px;
		width: 100%;
	}
</style>
