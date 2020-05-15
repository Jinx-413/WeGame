<template>
    <div>
        <div class='list'>
            <p class="recommend">推荐</p>
            <p v-for="(item, index) in list" :key="index" class="item">{{item}}</p>
			<div class='more iconfont'>&#xe785;</div>
        </div>
        <div class='fk'>
			<h2 class="zxk">在线看</h2>
			<img class='dm' src="./img/121.jpg" alt="">
			<p class='dmer'>呆妹儿</p>
			<p class='zaixin1'>看在线状态></p>
		</div>
		<div class='dingyue'>
			<h2 class='wddy'>我的订阅</h2>

			<img class='dm' src="./img/121.jpg" alt="">
			<img class='dm' src="./img/121.jpg" alt="">
			<img class='dm' src="./img/121.jpg" alt="">
			<ul>
				<li>呆妹儿</li>
				<li>呆妹儿</li>
				<li>呆妹儿</li>
			</ul>
			
			<p class='zaixin1'>看在线状态></p>

		</div>
		<div class='zbtj'>
			<h1 class='h1zb'>直播推荐</h1>
			<img class='banner' src="./img/timg.jpg" alt="">
		</div>
    </div>
</template>

<script>
    export default {
        name: 'slider',
        props: {
            list:{
                type: Array
            }
        }
    }
</script>
<style scoped>
	.recommend{font-size: 14px;color: #fff;}
    .list{display: flex;background: rgb(57,57,59);font-size: 16px;height: 36px;align-items: center;}
	.item{margin: 0 10px;font-size: 14px;color: #999;}
	.more{position: relative;right: 0;color: #fff;font-size: 20px;}
	
	
	.fk{position: relative;float: left; width: 25%; height: 25%;  border-right: 1px black solid;}
	.zxk{margin-top: 10px;margin-left: 10px;}
	.dm{width: 70px;margin-left: 10px;margin-top:20px;margin-right: 10px;}
	.dmer{font-size: 10px; text-align: center;}
	.zaixin1{font-size: 8px; text-align: center; margin-top: 5px;}
	
	.dingyue{position: relative; width: 75%; height: 30%;  float: left;}
	
	.wddy{margin-top: 10px;margin-left: 10px;}
	ul li{
	
	display: inline;
	list-style-type: none;
	padding: 5px 5px;
	font-size: 10px;
	margin-left: 30px;}
	.zbtj{position: relative;width: 100%; margin-top: 10%;}
	.h1zb{font-size: 20px;}
	.banner{width: 100%;}
</style>