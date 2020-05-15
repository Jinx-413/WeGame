<template>
	<div>
		<dl v-for="(item, index) in 9" :key="index">
			<dt>
				2020LCK春季赛
			</dt>
			<dd>
				<img src="/images/live.png" alt="">
				<p>【重播】 13:40 HLE vs KT 2020LCK春季赛</p>
			</dd>
		</dl>
	</div>
</template>

<script>
	export default {
		name: 'RRace'
	}
</script>
<style scoped>
	div{display: flex;flex-flow: column;flex: 1;overflow: auto;margin-bottom: 0.48rem;}
	dt{text-align: center; font-size: 0.1rem; color: #ccc;padding: 0.2rem;}
	img{width:100%;height:1.9rem }
	p{font-size: 0.13rem;text-align: center;background: #16202a; padding: 0.13rem 0; color: #fff;}
</style>