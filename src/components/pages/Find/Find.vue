<template>
	<div class="find page">
		<div class="top">发现</div>
		
		<!--  引入findlist列表   -->
		<find-list></find-list>
	</div>
</template>

<script>
	
	import FindList from './FindList'
	import axios from 'axios'
	
	export default{
		name : 'Find',
		
		components : {
			FindList
		}
	}
</script>

<style lang="scss" scoped>
	.top {
	    height: 0.56rem;
	    line-height: 0.56rem;
	    font-size: 0.2rem;
	    text-align: center;
	    color: #fff;
	    background-color: #282828;
	    position: fixed;
	    left: 0;
	    top: 0;
	    width: 100%;
	    z-index: 2;
	}
</style>