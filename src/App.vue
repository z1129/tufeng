<template>
  <div id="app">
		<find></find>
		
  </div>
</template>


<!--想要用组件，在组件创建完成之后，在需要引入的页面 用import引入    再注册组件components 再把标签名下载template中-->


<script>

import Find from './components/pages/Find/Find'

export default {
	name: 'App',
	components : {
		Find
	}
}
</script>

<style lang="scss">
	
</style>