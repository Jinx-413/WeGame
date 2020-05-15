<template>
	<div class="container">
		<div class="top">
			<div class="nav">
				<p>消息</p>
				<p class="current">好友</p>
			</div>
		<p class="add">+</p>
		</div>
		<div class="search">
		<img src="./img/search.png" alt="">
		<input type="text" placeholder="搜索当前好友">
		</div>
		<div class="friends">
			<div class="list">
				<span class="tangle-right iconfont">&#xe614;</span>
				<span class="text">weGame好友</span>
			</div>
			<div class="list">
				<span class="tangle-bottom iconfont" style="margin-right: 13px;">&#xe627;</span>
				<span class="text">英雄联盟好友</span>
			</div>
			<div class="friendContainer" v-for="(item,index) in user" :key="index">
				<Friends :nikename="item.nikename" :state="item.state" :words="item.words"></Friends>
			</div>
		</div>
	</div>
</template>

<script>
	import Friends from '../../components/frinends/index.vue'
    export default {
		components:{
			Friends
		},
		data(){
			return {
				user: [
					{nikename: 'A', state: "离线", words:'thisis'},
					{nikename: 'w', state: "离线", words:'thisis'},
					{nikename: 'd', state: "离线", words:'thisis'},
					{nikename: 'b', state: "离线", words:'thisis'},
					{nikename: 'v', state: "离线", words:'thisis'},
					{nikename: 'v', state: "离线", words:'thisis'},
					{nikename: 's', state: "离线", words:'thisis'},
					{nikename: 'u', state: "离线", words:'thisis'},
					{nikename: 'b', state: "离线", words:'thisis'},
					{nikename: 'm', state: "离线", words:'thisis'},
					{nikename: 'a', state: "离线", words:'thisis'},
				]
			}
		}
    }
</script>
<style scoped="">
	.container{display: flex;justify-content: center;flex-direction: column;align-items: center;}
	.top{
		width: 350px;
		height: 46px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #999;
	}
	.top .nav{
		width: 280px;
		display: flex;
		justify-content: center;
		align-items: center;
		}
	.top p{
		font-weight: 900;
	}
	.top .current{margin-left: 22px;border-bottom: 2px solid orange;}
	.top .add{width: 22px;height: 22px;border: 2px solid #000;border-radius: 50%;display: flex;align-items: center;justify-content: center;font-size: 20px;}
	.search{width:300px;height: 20px;display: flex;justify-content: center;margin-top: 10px;background: rgb(235,235,235);align-items: center;border-radius: 16px;margin-bottom: 10px;}
	.search img{display: inline-block;width: 15px;height: 15px;}
	.search input{background: rgb(235,235,235);}
	.friends{display: flex;justify-content: center;flex-direction: column;align-items: center;}
	.list{width: 300px;height: 30px;display: flex;align-items: center;font-weight: 900;font-size: 14px;}
	.list .tangle-right{font-size: 20px;margin-right: 10px;}
	.friendContainer{
		display: flex;flex-direction: column;justify-content: center;
	}
</style>