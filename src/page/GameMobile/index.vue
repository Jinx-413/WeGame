<template>
	<div class="contentBox">
		<div class="header">
			<div>火爆新品</div>
			<div>新游预约</div>
			<div>最多关注</div>
		</div>
		<div class="main">
			<ul>
				<li class="list_1">
					<img src="./img/list_1.png" alt="">
					<div class="text">
						<p>雪鹰领主</p>
						<p>社交/短视频/自创技能</p>
						<p>2.07GB | 1.7万人已下载</p>
					</div>
					<img src="./img/download.png" class="download" alt="">
				</li>
				<li class="list_1">
					<img src="./img/list_2.png" alt="">
					<div class="text">
						<p>我的起源</p>
						<p>沙盒/MMORPG/开放世界</p>
						<p>2.03GB | 1.1万人已下载</p>
					</div>
					<img src="./img/download.png" class="download" alt="">
				</li><li class="list_1">
					<img src="./img/list_3.png" alt="">
					<div class="text">
						<p>猎人</p>
						<p>动作/冒险/二次元</p>
						<p>1.84GB | 5236人已下载</p>
					</div>
					<img src="./img/download.png" class="download" alt="">
				</li><li class="list_1">
					<img src="./img/list_4.png" alt="">
					<div class="text">
						<p>海盗法则</p>
						<p>策略/海战/竞技</p>
						<p>198.39MB | 1829万人已下载</p>
					</div>
					<img src="./img/download.png" class="download" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	.contentBox{}
	.header div{
		width: 0.7rem;
		height: 0.2rem;
		font-size: 0.12rem;
		color: #000000;
		border: 1px solid #000000;
		border-radius: 2px;
		float: left;
		text-align: center;
		margin-right: 0.15rem;
	}
	.main ul{
		width: 5.2rem;
		height: auto;
		padding-top: 0.3rem;
		
	}
	.main ul li{
		width: 3.4rem;
		height: 0.9rem;
		margin-right: 0.2rem;
		background: #ffffff;
		border-bottom: 1px solid #c5c7c6;
	}
	.main ul .list_1{
		
	}
	.main ul .list_1 img{
		height: 0.8rem;
		width: 0.8rem;
		float: left;
	}
	
	.main ul .list_1 .text p{
		margin-top: 5px;
		font-size: 0.12rem;
		color: #a5a7a6;
	}
	.main ul .list_1 .text p:nth-child(1){
		margin-top: 5px;
		font-size: 0.15rem;
		color: #000000;
	}
	.main ul .list_1 .download{
		position: relative;
		top: -0.35rem;
		left: 1.7rem;
		width: 0.62rem;
		height: 0.25rem;
	}
</style>
