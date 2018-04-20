<template>
	<div class="find-list">
		
		<div class="pad"></div>
		
		<div class="findbox" v-for="item in list" :key="item.id">
		    <a href="http://m.xunshelife.com/article/detail?id=138">
			    <p class="f-cover"><img width = 100% :src="item.imgurl" alt=""></p>
			    <div class="word">
			    	<p class="con con1">{{item.title}}</p>
			    </div>
			</a>
		</div>
		
	</div>
</template>

<script>

	export default {
		name : 'FindList',
		data(){
			return{
				list:[]
			}
		},
		methods : {
			getFilms () {
				//  解构赋值
				let { page ,count} = this
				this.$http( '/static/json/find.json').then(res => {
					this.list=res.data;
					
				})
			}
		},
		created(){
			this.getFilms ()
		}
	}
</script>

<style lang="scss" scoped>
	.pad{
		width: 100%;
		height:0.065rem;
		background: #fff;
	}
	.findbox {
	    width: 100%;
	    position: relative;
		.f-cover {
		    margin: 10px;
		    img {
			    display: block;
			    width: 100%;
			    border-radius: 20px;
			}
		}
		.f-cover:before {
			content: "";
			position: absolute;
			width: 94vw;
			height: 100%;
			top: 0;
			background-color: black;
			opacity: 0.4;
			border-radius:20px;
		}
		.word {
		    position: absolute;
		    width: 100%;
		    height: 0.6rem;
		    left: 0;
		    top: 76%;
		    text-align: center;
		    
		    .con {
		        display: inline-block;
		        text-align: center;
		        color: #fff;
		        font-size: 0.13rem;
		        line-height: 0.19rem;
		        margin-top: -2.5rem;
		        padding: 1rem 0;
		        border: 1px solid #fff;
		        width: 2.898rem;
		        height: 0.8rem;
		        
		    }
		    .con1 {
			    font-size: 0.18rem;
			    width: 70%;
			    border: none;
			    font-weight: bold;
			    line-height: 0.3rem;
			    height: 0.34rem;
			    overflow: hidden;
			}
			
		}
	}
	
	
	/*发现*/
/*.top{height: 4rem;line-height: 4rem;font-size: 1.4rem;text-align: center;color: #fff;background-color: #282828;position: fixed;left: 0;top: 0;width: 100%;z-index: 2}
.findbox{width: 100%;position: relative;}
.findbox img {display: block;width: 100%;border-radius:20px;}
.findbox .f-cover{margin:10px}
.findbox .f-cover:before {content: "";position: absolute;width: 94vw;height: 100%;top: 0;background-color: black;opacity: 0.4;border-radius:20px;}
.findbox .word{position: absolute;width: 100%;height:6rem;left: 0;top:50%;text-align: center;}
.findbox .word .con{display: inline-block;text-align: center;color: #fff;font-size: 1.2rem;line-height: 1.8rem;margin-top: -3rem;padding:1rem 0;border:1px solid #fff;width: 80%;}
.findbox .word .con1{font-size:1.4rem;width:70%;border:none;font-weight:bold;line-height:2.2rem;height:3.4rem;overflow:hidden;}
.findbox .word .con span{display: block;font-size: 1.2rem;}
.findbox .word .con2{border-top: none;font-size: 2.4rem;line-height: 2.6rem;margin-top: -3.4rem;position: relative;padding: 1.6rem 0 1rem}
.findbox .word .con2 i{position: absolute;width: 10rem;display: block;left: 50%;margin-left: -5rem;top:-1.4rem;}
.findbox .word .con2:before{position: absolute;content: "";width: 5rem;height: 1px;background-color: #fff;left: 0;top:0;}
.findbox .word .con2:after{position: absolute;content: "";width: 5rem;height: 1px;background-color: #fff;right: 0;top:0;}
.findbox .word .con3{position: relative;padding: 1.6rem 0 1rem;margin-top: -3.4rem}
.findbox .word .con3 i{display: block;font-style: normal;position: absolute;width: 6rem;text-align: center;height: 2.2rem;line-height: 2.2rem;left: 50%;margin-left: -3rem;top:-1.1rem;background-color: #fff;color: #010101}
.findbox .word .con4{font-size: 1.8rem;line-height: 2.2rem;margin-top: -3.6rem}
.findbox .det{position: absolute;height: 1.2rem;left: 0;bottom: 0.8rem;}
.findbox .det p{float: left;padding-left: 2.8rem;font-size: 1rem;color: #fff;position: relative;}
.findbox .det p i{position: absolute;left: .8rem;bottom:-0.1rem;background-repeat:no-repeat;background-size: 100% 100%;}
.findbox .det .like i{width: 1.2rem;height: 1.1rem; background-image: url(../Content/images/icon/like.png);left:1.4rem;bottom: 0}
.findbox .det .on i{background-image: url(../Content/images/icon/like2.png);}
.findbox .det .comment i{width: 1.1rem;height: 1.1rem; background-image: url(../Content/images/icon/comment.png);left:1.5rem;}
.findbox .det .comment a{color: #fff;}
.findbox .det .eye i{width: 1.5rem;height: 1rem; background-image: url(../Content/images/icon/eye.png);bottom: .1rem;left: 1.1rem}*/

	
	
	
</style>