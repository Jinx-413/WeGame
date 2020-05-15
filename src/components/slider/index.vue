<template>
    <div>
        <div class='list'>
            <p class="recommend">推荐</p>
            <p v-for="(item, index) in list" :key="index" class="item">{{item}}</p>
			<div class='more iconfont'>&#xe785;</div>
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
</style>