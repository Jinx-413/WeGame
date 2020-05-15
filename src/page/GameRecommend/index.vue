<template>
	<div class="game_rec">
		<div class="img">
			<img src="./img/banner.png" alt="">
		</div>
		<div class="title">
			<h2>手游预约</h2>
			<span>查看全部</span>
			<div class="list">
				<div class="list_1">
					<img src="./img/list_1.png" alt="">
					<div class="text">
						<p>荒野乱斗</p>
						<p>superce/io/3v3</p>
						<p>3.7万人已预约</p>
					</div>
					<img src="./img/yuyue.png" class="yuyue" alt="">
				</div>
				<div class="list_2">
					<img src="./img/list_2.png" alt="">
					<div class="text">
						<p>荒野乱斗</p>
						<p>superce/io/3v3</p>
						<p>3.7万人已预约</p>
					</div>
					<img src="./img/yuyue.png" class="yuyue" alt="">
				</div>
			</div>
		</div>
		<div class="Sale">
			<h2>端游特惠</h2>
			<span>查看全部</span>
			<div class="list">
				<img src="./img/PC.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	.game_rec{
		width: 100%;
	}
	.game_rec .img{
		width: 3.4rem;
		height: 1.5rem;
		border: 1px solid;
		border-radius: 3px;
	}
	.game_rec .img img{
		width: 100%;
		height: 100%;
	}
	.title h2{
		margin-top: 0.12rem;
		font-size: 0.17rem;
		display: inline-block;
		font-weight: 800;
	}
	.title span{
		margin-top: 0.12rem;
		float: right;
		color: #a9a9a9;
	}
	.list .list_1{
		width: 3.4rem;
		height: 0.6rem;
		margin-top: 0.15rem;
		margin-bottom: 0.05rem;
		background: #ffffff;
	}
	.list .list_1 .text p{
		margin-top: 3px;
		font-size: 0.12rem;
	}
	.list .list_1 img{
		height: 100%;
		float: left;
	}
	.list .list_1 .yuyue{
		position: relative;
		top: -0.35rem;
		left: 2rem;
		width: 0.62rem;
		height: 0.25rem;
	}
	.list .list_2{
		width: 3.4rem;
		height: 0.6rem;
		position: absolute;
		background: #ffffff;
	}
	.list .list_2 .text{
		display: block;
		float: left;
	}
	.list .list_2 .text p{
		margin-top: 3px;
		font-size: 0.12rem;
	}
	.list .list_2 .yuyue{
		position: relative;
		top: 0.15rem;
		left: 1.12rem;
		width: 0.62rem;
		height: 0.25rem;
	}
	.list .list_2 img{
		height: 100%;
		display: block;
		float: left;
	}
	.Sale{
		width: 3.4rem;
		height: 1.25rem;
		margin-top: 0.7rem;
	}
	.Sale h2{
		margin-top: 0.12rem;
		font-size: 0.17rem;
		display: inline-block;
		font-weight: 800;
	}
	.Sale span{
		margin-top: 0.12rem;
		margin-bottom: 0.13rem;
		float: right;
		color: #a9a9a9;
	}
	.Sale img{
		width: 100%;
		height: 100%;
	}
</style>
