<template>
	<div class="contentBox">
		<div class="header">
			<div>火爆新品</div>
			<div>本周热门</div>
			<div>最新上架</div>
			<div>折扣促销</div>
		</div>
		<div class="main">
			<ul>
				<li class="list_1">
					<img src="./img/list_1.png" alt="">
					<div class="text">
						<p>彩虹坠入</p>
						<p>2020-03-20_上线 | 推荐率90%</p>
						<img src="./img/dazhe.png" alt="">
					</div>
				</li>
				<li class="list_1">
					<img src="./img/list_2.png" alt="">
					<div class="text">
						<p>龙之谷</p>
						<p>2019-10-24上线</p>
						<img src="./img/free.png" alt="">
					</div>
				</li><li class="list_1">
					<img src="./img/list_3.png" alt="">
					<div class="text">
						<p>梦三国</p>
						<p>2020-01-09上线 | 推荐率70%</p>
						<img src="./img/free.png" alt="">
					</div>
				</li><li class="list_1">
					<img src="./img/list_4.png" alt="">
					<div class="text">
						<p>月圆之夜</p>
						<p>2019-07-26上线</p>
						<img src="./img/free.png" alt="">
					</div>
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
		margin-right: 0.12rem;
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
		height: 0.75rem;
		width: 1.4rem;
		margin-top: 0.05rem;
		margin-left: 0.02rem;
		float: left;
	}
	
	.main ul .list_1 .text p{
		font-size: 0.12rem;
		color: #a5a7a6;
		text-indent: 0.1rem;
	}
	.main ul .list_1 .text img{
		width: 0.47rem;
		height: 0.3rem;
		margin-left: 0.1rem;
	}
	.main ul .list_1:nth-child(1) .text img{
		width: 1.15rem;
		height: 0.3rem;
	}
	
	.main ul .list_1 .text p:nth-child(1){
		padding-top: 0.05rem;
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
