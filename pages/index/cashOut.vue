<template>
	<view>
			<u-navbar title="出金" back-icon-color="#196ed9" :title-bold="true" title-color="#333"></u-navbar>
			<view class="cash_padding">
					<view class="cash_padding_bg">
							<view class="cash_bg_padding">
									<view class="cash_display">
											<view class="cash_width cash_color_1">数字货币</view>
											<view class="cash_width cash_color_2" style="margin-left: 1%;">银行卡</view>
									</view>
									<view class="cash_list_display">
											<view class="cash_list_width_1">
												货币
											</view>
											<view class="cash_list_width_2">
												USD_TRC20
											</view>
											<view class="cash_list_width_3">
												<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
											</view>
									</view>
									<view class="cash_list_display">
											<view class="cash_list_width_1">
												提币地址
											</view>
											<view class="cash_list_width_2">
												请选择提币地址
											</view>
											<view class="cash_list_width_3">
												<u-icon name="arrow-right" color="#d3d3d3" size="30"></u-icon>
											</view>
									</view>
									<view class="cash_list_display">
											<view class="cash_list_width_1">
												数量
											</view>
											<view class="cash_list_width_2">
												<input type="number" placeholder="请输入数量" placeholder-style="font-size:28rpx">
											</view>
									</view>
									<view class="cash_list_display">
											<view class="cash_list_width_1">
												备注
											</view>
											<view class="cash_list_width_2" style="width:70%">
												<input type="text" placeholder="备注" placeholder-style="font-size:28rpx">
											</view>
									</view>
									<view class="display_content">
										<view style="width:50%">
											<view class="content_title_1">手续费</view>
											<view class="content_title_1">预计到账数量:</view>
											<view class="content_title_1">余额</view>
										</view>
										<view class="content_right" style="width:50%">
											<view class="text3">10</view>
											<view class="text3">11101 USD</view>
											<view class="text3">954545444.91 USD</view>
										</view>
									</view>
									
									<view class="cash_button_pa">
											<view class="cash_button">提币</view>
									</view>
							</view>
					</view>
					
					<!-- 提现记录 -->
					<view class="withdraw_padd">提现记录</view>
					
					<view class="cash_padding_bg">
						<view class="cash_bg_padding">
							<view class="list_sort_display">
									<view class="sort_width">
										<view class="sort_num">数量</view>
										<view class="sort_price">900000.00</view>
									</view>
									<view class="sort_width sort_yi_1">
										<view class="sort_num">到账数量</view>
										<view class="sort_price">89000.00</view>
									</view>
									<view class="sort_width sort_yi_2">
										<view class="sort_num">单位</view>
										<view class="sort_price">USD</view>
									</view>
									<view class="sort_width">
										<view class="sort_num">手续费</view>
										<view class="sort_price">10.00</view>
									</view>
									<view class="sort_width sort_yi_1">
										<view class="sort_num">状态</view>
										<view class="sort_price">待审核</view>
									</view>
									<view class="sort_width sort_yi_2">
										<view class="sort_num">时间</view>
										<view class="sort_price">2023.06.15 11:10:16</view>
									</view>
									<view class="sort_width" style="width: 100%;">
										<view class="sort_num">提货地址</view>
										<view class="sort_price text-ellipsis">111111</view>
									</view>
									<view class="sort_width" style="width: 100%;">
										<view class="sort_num">备注</view>
										<view class="sort_price text-ellipsis">sdjkfjsd1</view>
									</view>
							</view>
						</view>
					</view>
					<view class="cash_padding_bg">
						<view class="cash_bg_padding">
							<view class="list_sort_display">
									<view class="sort_width">
										<view class="sort_num">数量</view>
										<view class="sort_price">900000.00</view>
									</view>
									<view class="sort_width sort_yi_1">
										<view class="sort_num">到账数量</view>
										<view class="sort_price">89000.00</view>
									</view>
									<view class="sort_width sort_yi_2">
										<view class="sort_num">单位</view>
										<view class="sort_price">USD</view>
									</view>
									<view class="sort_width">
										<view class="sort_num">手续费</view>
										<view class="sort_price">10.00</view>
									</view>
									<view class="sort_width sort_yi_1">
										<view class="sort_num">状态</view>
										<view class="sort_price">待审核</view>
									</view>
									<view class="sort_width sort_yi_2">
										<view class="sort_num">时间</view>
										<view class="sort_price">2023.06.15 11:10:16</view>
									</view>
									<view class="sort_width" style="width: 100%;">
										<view class="sort_num">提货地址</view>
										<view class="sort_price text-ellipsis">111111</view>
									</view>
									<view class="sort_width" style="width: 100%;">
										<view class="sort_num">备注</view>
										<view class="sort_price text-ellipsis">sdjkfjsd1</view>
									</view>
							</view>
						</view>
					</view>
					<view class="cash_padding_bg">
						<view class="cash_bg_padding">
							<view class="list_sort_display">
									<view class="sort_width">
										<view class="sort_num">数量</view>
										<view class="sort_price">900000.00</view>
									</view>
									<view class="sort_width sort_yi_1">
										<view class="sort_num">到账数量</view>
										<view class="sort_price">89000.00</view>
									</view>
									<view class="sort_width sort_yi_2">
										<view class="sort_num">单位</view>
										<view class="sort_price">USD</view>
									</view>
									<view class="sort_width">
										<view class="sort_num">手续费</view>
										<view class="sort_price">10.00</view>
									</view>
									<view class="sort_width sort_yi_1">
										<view class="sort_num">状态</view>
										<view class="sort_price">待审核</view>
									</view>
									<view class="sort_width sort_yi_2">
										<view class="sort_num">时间</view>
										<view class="sort_price">2023.06.15 11:10:16</view>
									</view>
									<view class="sort_width" style="width: 100%;">
										<view class="sort_num">提货地址</view>
										<view class="sort_price text-ellipsis">111111</view>
									</view>
									<view class="sort_width" style="width: 100%;">
										<view class="sort_num">备注</view>
										<view class="sort_price text-ellipsis">sdjkfjsd1</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	page{
		background: #f1f1f1;
	}
	.cash_padding{
		padding: 20rpx;
		
		.cash_padding_bg{
			background: #fff;
			border-radius: 30rpx;
			
			.cash_bg_padding{
				padding:30rpx; 
				margin-bottom: 30rpx;
				
				.cash_display{
					display: flex;
					padding-bottom: 30rpx;
					
					.cash_width{
						width: 49%;
						color: #ffffff;
						text-align: center;
						border-radius: 50rpx;
						padding: 25rpx 0 25rpx 0;
					}
					
					.cash_color_1{
							background: #0166fc;
					}
					.cash_color_2{
						background: #cbcbcb;
					}
				}
			
				.cash_list_display{
					display: flex;
					padding: 30rpx 20rpx 30rpx 20rpx;
					// background: red;
					border-bottom: 1rpx solid #f1f1f1;
					
					.cash_list_width_1{
						width: 30%;
						font-weight: bold;
					}
					.cash_list_width_2{
						width: 60%;
					}
					.cash_list_width_3{
						width: 10%;
						text-align: end;
					}
				}
			
				.display_content {
					display: flex;
					padding: 20rpx;
					border-bottom: 1px solid #e8e8e8;
		
				
					.content_title_1 {
						font-size: 28rpx;
						padding-bottom: 10rpx;
						font-weight: bold;
					}
			
				
					.content_right {
						text-align: right;
				
						.text3 {
							// font-weight: bold;
							padding-bottom: 10rpx;
						}
					}
				}
			
				.cash_button_pa{
					padding: 40rpx 50rpx 20rpx 50rpx;
					
					.cash_button{
						background: #0166fc;
						color: #fff;
						padding: 20rpx;
						border-radius: 50rpx;
						text-align: center;
					}
				}
				
				.list_sort_display{
					display: flex;
					flex-wrap: wrap;
					
					.sort_width{
						width: 33.33%;
						// text-align: center;
						
						.sort_num{
							color: #cecccd;
							padding-bottom: 15rpx;
						}
						
						.sort_price{
							font-weight: bold;
							padding-bottom: 20rpx;
							font-size: 28rpx;
						}
						.text-ellipsis{
							 overflow:hidden;
							  white-space: nowrap;
							  text-overflow: ellipsis;
						}
					}
					.sort_yi_1{
						text-align: center;
					}
					.sort_yi_2{
						text-align: right;
					}
				}
			}
		}
	
		.withdraw_padd{
			padding-bottom: 20rpx;
		}
	}
</style>
