<template>
	<div class="content">
		<div class="search">
			<h1>
				游戏		
				<img src="../GameMobile/img/search.png" alt="">
		</h1>
		</div>
		<div class="main">
			<router-link to="/game/gameRecommend" exact-active-class="gameRecommend_active">
				<div class="gameRecommend">推荐</div>
			</router-link>
			<router-link to="/game/gameMobile" exact-active-class="gameMobile_active">
				<div class="gameMobile">手机游戏</div>
			</router-link>
			<router-link to="/game/gamePC" exact-active-class="gamePC_active">
				<div class="gamePC">PC游戏</div>
			</router-link>
			<router-view class="view"></router-view>
		</div>
	</div>
	
</template>

<script>
    export default {

    }
</script>
<style scoped>
	.content{
		display: flex;
		height:auto;
		width: 100%;
		position: absolute;
		padding: 0.22rem 0.2rem 0 0.2rem;
		overflow: hidden;
		background-image: linear-gradient(#b1b4bd, #ffffff);
	}
	.search{
		position: fixed;
		width: 100%;
		flex: 1;
		padding-right: 0.13rem;
		margin-bottom: 0.30rem;
		z-index: 1000;
	}
	.search h1{
		font-weight: 800;
		font-style: italic;
		font-size: 0.35rem;
		display: block;
		
	}
	.search img{
		width: 0.35rem;
		height: 0.35rem;
		float: right;
		position: absolute;
		top: 0.1rem;
		right: 0.3rem;
	}
	.gameRecommend{
		font-size: 0.14rem;
		color: #6b6a6a;
		display: inline-block;
		margin-right: 0.2rem;
	}
	.gameMobile{
		font-size: 0.14rem;
		color: #6b6a6a;
		display: inline-block;
		margin-right: 0.2rem;
	}
	.gamePC{
		font-size: 0.14rem;
		color: #6b6a6a;
		display: inline-block;
		margin-right: 0.2rem;
	}
	.main{
		height: auto;
		width: 100%;
		margin-top: 0.6rem;
		display: block;
	}
	.main .gameMobile_active div{
		font-size: 0.15rem;
		padding-bottom: 3px;
		margin-top: -3px;
		border-bottom: 3px solid #fdc03a;
		color: #000000;
	}
	.main .gamePC_active div{
		font-size: 0.15rem;
		padding-bottom: 3px;
		margin-top: -3px;
		border-bottom: 3px solid #fdc03a;
		color: #000000;
	}
	.main .gameRecommend_active div{
		font-size: 0.15rem;
		padding-bottom: 3px;
		margin-top: -3px;
		color: #000000;
		border-bottom: 3px solid #fdc03a;
	}
	.main .view{
		flex: 1;
		width: 100%;
		margin-top: 0.1rem;
	}
</style>