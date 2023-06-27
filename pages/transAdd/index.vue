<template>
	<view>
		<view class="navigation">
			<view class="display">
				<view class="width_1">
					<u-icon name="arrow-left" color="#2979ff" size="35"></u-icon>
				</view>
				<view class="width_2">
					<view class="nav_padding">
						<view class="title">EURUSD <u-icon name="arrow-down" color="#333" size="20"></u-icon> </view>
						<view class="xi">Euro vs US Dollar</view>
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
					<view class="collapse-padding">
						<view class="collapse-item">
							123
						</view>
					</view>
					<view class="collapse-padding">
						<view class="collapse-item">
							123
						</view>
					</view>
					<view class="collapse-padding">
						<view class="collapse-item">
							123
						</view>
					</view>
					<view class="collapse-padding">
						<view class="collapse-item">
							123
						</view>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					head: "立即执行",
					open: true,
					disabled: true
				}],
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
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

		.collapse-padding {
			padding: 20rpx;
		}
	}
</style>