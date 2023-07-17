<template>
	<view>
		<u-navbar title="切换语言" back-icon-color="#196ed9"></u-navbar>
		<u-cell-group title="自动选择" :title-style="{fontSize: '28rpx'}">
			<u-cell-item title="系统语言" :arrow="false" @click="languageClick">
				<u-icon slot="right-icon" v-if="!curr" name="checkmark"></u-icon>
			</u-cell-item>
		</u-cell-group>

		<view class="u-m-t-40">
			<u-cell-group title="自动选择" :title-style="{fontSize: '28rpx'}">
				<u-cell-item v-for="(item, index) in language" @click="languageClick(index)" :title="item"
					:arrow="false">
					<u-icon v-if="index == curr" slot="right-icon" name="checkmark"></u-icon>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		computed: {},
		data() {
			return {
				index: null,
				language: {
					"en": "English",
					"zh-Hans": "简体中文",
					"zh-Hant": "繁體中文"
				},
				curr: ""
			}
		},
		onShow() {
			this.curr = uni.getStorageSync('currLanguage')
		},
		methods: {
			languageClick(index) {
				let language = index
				this.curr = index

				if (!index) {
					language = uni.getStorageSync("localeLan")
				}
				uni.setStorageSync('currLanguage', index)
				uni.setLocale(language)
				this.$i18n.locale = language;

				this.$utils.handleReLaunch("/pages/tabBar/index")
			}
		}
	}
</script>

<style lang="scss">
	/deep/ .u-cell {
		padding: 20rpx !important;
	}
</style>