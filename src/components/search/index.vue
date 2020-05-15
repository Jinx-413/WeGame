<template>
    <div class='search' :style="border">
        <i class="i" v-if="i"></i>
        <input type="text" :value="value" class="ipt_search">
    </div>
</template>

<script>
    export default {
        name: 'search',
        props: {
            value: {
                type: String,
                default: '手游礼包',
            },
            i:{
                //是否显示搜索图标 默认显示
                type: Boolean,
                default: true
            },
            border: {
                type: String,
                default: 'border: 1px solid #ccc'
            }
        }
    }
</script>
<style scoped>
    .search{
        width:100%;
        height:0.3rem;
        border-radius: 0.15rem;
        overflow: hidden;
        position: relative;
    }
    .search .i{
        position: absolute;
        width:0.2rem;
        height:0.2rem;
        background-image: url(./img/search.png);
        background-size: 100% 100%;
        left: 0.1rem;
        top: 0.05rem;
    }
    .search .ipt_search{
        width:100%;
        height:100%; 
        text-indent: 0.35rem;     
        color:#939393;
        font-size: 0.13rem;
    }
</style>