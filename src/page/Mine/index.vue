<template>
    <div class="contentBox">
		<div class="top">
			<img src="./img/touxiang.png" alt="">
		</div>
		<div class="blank"></div>
		<div class="bottom">
			<div class="name">
				<span>风格的风123</span>
				<span class="lv">lv.14</span>
				<span class="move">···</span>
			</div>
			<div class="my">
				<div class="mygame">
					<span> 我的游戏 </span>
					<span> 6</span>
				</div>
				<div class="mytidings">
					<span> 我的动态 </span>
					<span> 0</span>
				</div>
			</div>
			<div class="juese">
				<h2>我的角色</h2>
				<p>管理</p>
			</div>
			<div class="hidden">
				<span>你设置了全部角色隐藏</span>
			</div>
			<div class="no">
				别拉了,到底了~
			</div>
		</div>
	</div>
</template>

<script>
    export default {

    }
</script>
<style scoped="">
	*{
	margin: 0;
	padding: 0;
	}
	html,body{
	height: 100%;
	}
	.contentBox{
	position:absolute;
	width: 100%;
	height:100%;
	}
	.top{
		height: 2rem;
		background-color: skyblue;
	}
	.top img{
		width: 0.8rem;
		height: 0.8rem;
		position: relative;
		top: 1.3rem;
		left: 1.5rem;
		border-radius: 50%;
	}
	.blank{
		height: 0.8rem;
		border-radius: 50%;
		margin-top: -0.36rem;
		background-color: #f7f7f7;
		z-index: 100;
	}
	.bottom{
		height: 3rem;
		margin-top: -0.7rem;
		background-image: linear-gradient(#f7f7f7, #ffffff);
	}
	.name{
		margin-top: 0.25rem;
		text-align: center;
	}.name span{
		margin-top: 0.2rem;
	}
	.name .lv{
		background-color: orange;
		width: 0.4rem;
		height: 0.15rem;
		margin-left: 0.1rem;
		font-size: 0.13rem;
		display: inline-block;
		border-radius: 10px;
	}
	.name .move{
		background-color: #dcdcdc;
		width: 0.3rem;
		height: 0.1rem;
		line-height: 0.1rem;
		margin-left: 0.1rem;
		font-size: 0.13rem;
		display: inline-block;
		border-radius: 10px;
	}
	.my .mygame{
		width: 1.6rem;
		margin-top: 0.15rem;
		margin-left: 0.25rem;
		height: 0.7rem;
		float: left;
		line-height: 0.7rem;
		font-size: 0.19rem;
		text-indent: 0.2rem;
		background-color: #fff;
	}
	.my .mytidings{
		width: 1.6rem;
		margin-top: 0.15rem;
		margin-left: 0.1rem;
		height: 0.7rem;
		float: left;
		line-height: 0.7rem;
		font-size: 0.19rem;
		text-indent: 0.2rem;
		background-color: #fff;
	}
	.juese h2{
		margin-top: 0.25rem;
		font-size: 0.17rem;
		margin-left: 0.25rem;
		display: inline-block;
		font-weight: 800;
	}
	.juese p{
		margin-top: 0.25rem;
		margin-bottom: 0.13rem;
		display: inline-block;
		margin-right: 0.25rem;
		float: right;
		color: #a9a9a9;
	}
	.hidden{
		height: 0.7rem;
		width: 3.3rem;
		line-height: 0.7rem;
		margin-top: 0.2rem;
		margin-left: 0.25rem;
		background-color: #f5f7f6;
		text-align: center;
	}
	.no{
		margin-top: 0.1rem;
		text-align: center;
		color: #a3a3a3;
	}
</style>