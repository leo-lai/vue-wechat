<template>
	<div class="l-app">
		<div class="l-app-header" slot="header">
  		<x-header :left-options="headerLeftOpts" title="微信">
  			<a slot="right" onclick="location.reload()">刷新</a>
  		</x-header>
  	</div>
  	<div class="l-app-tabbar" slot="bottom">
  		<tabbar>
	      <tabbar-item badge="2" link="/chat" :selected="$route.path === '/chat'">
	        <img slot="icon" src="~assets/icon.png">
	        <span slot="label">微信</span>
	      </tabbar-item>
	      <tabbar-item link="/contacts" :selected="$route.path === '/contacts'">
	        <img slot="icon" src="~assets/icon.png">
	        <span slot="label">通讯录</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="/find" :selected="$route.path === '/find'">
	        <img slot="icon" src="~assets/icon.png">
	        <span slot="label">发现</span>
	      </tabbar-item>
	      <tabbar-item link="/me" :selected="$route.path === '/me'">
	        <img slot="icon" src="~assets/icon.png">
	        <span slot="label">我</span>
	      </tabbar-item>
	    </tabbar>
  	</div>
  	<div class="l-app-body">
  		<router-view></router-view>	
  	</div>
	</div>
</template>

<script>
import {Tabbar, TabbarItem, XHeader, ViewBox} from 'vux'

export default {
	components: {
		Tabbar, TabbarItem, XHeader, ViewBox
	},
	created() {
		
	},
	mounted() {
		
	},
	data() {
		return {

		}
	},
	computed: {
		headerLeftOpts() {
			return {
				showBack: true,
				backText: '返回',
				preventGoBack: false
			}
		}
	}
}

</script>

<style lang="less">
@import '~vux/src/styles/index.less';
@import '~src/styles/global.less';



</style>
