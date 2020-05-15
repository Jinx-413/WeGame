<template>
	<div class="container">
		<div class="imgCotainer">
			<img src="./avatar.jpg" alt="">
		</div>
		
		<div class="info">
			<p class="nikename">{{nikename}}</p>
			<div class="statebox">
				<span class="state">{{state}}</span>
				<span class="line">|</span>
				<span class="words">{{words}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Friends",
		data(){
			return{}
		},
		methods:{},
		props:{
			nikename:{
				type:String,
				default:'昵称'
			},
			state:{
				type:String,
				default:'离线'
			},
			words:{
				type:String,
				default:'this is words'
			}
		}
	}
</script>

<style scoped="">
	.container{width: 325px;height: 80px;display: flex;justify-content: space-between;align-items: center;}
	.imgCotainer{width: 40px;height: 40px;border-radius: 50%;margin-left:-250px;margin-bottom: -40px;}
	.imgCotainer img{width: 100%;}
	.info{display: flex;flex-direction: column;font-size: 12px;margin-left: -70px;}
	.nikename{font-size: 14px;color: #000;margin-bottom: 10px;}
	.line{margin: 0 8px;}
</style>
