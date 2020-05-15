<template>
    <div class="attention-cell" @click="$router.push('/detail')">
        <div class="top">
            <dl>
                <dt>
                    <img src="./img/defalut.jpg" alt="">
                </dt>
                <dd>
                    <p>英雄联盟</p>
                    <div>
                        <span>三小时前</span>
                        <span>来自英雄联盟</span>
                    </div>
                </dd>
            </dl>
            <div class="more">...</div>
        </div>
        <div class="p">峡谷英雄vol.13 少年 你见过1打5的adc吗</div>
        <div class="center">
            <img src="./img/default1.jpg" alt="">
        </div>
        <div class="bottom">
            <div>
                <p class="a"></p>
                <span>10</span>
            </div>
            <div>
                <p class="b"></p>
                <span>2</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'attention-cell'
    }
</script>
<style scoped>
    .attention-cell{
        display: flex;
        flex-flow: column;
        margin-top:0.09rem;
        background: #fff;
    }
    .attention-cell .top{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    .attention-cell .top dl{
        padding: 0.1rem 0.1rem 0;
        display: flex;
    }
    .attention-cell .top dl dt img{
        width:0.37rem;
        height:0.37rem;
        border-radius: 50%;
        margin-right:0.1rem
    }
    .attention-cell .top dl dd{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .attention-cell .top dl dd p{
        font-size: 0.13rem;
        color:#000;
    }
    .attention-cell .top dl dd span{
        font-size: 0.12rem;
        color:#949494;
        margin-right:0.2rem;
    }
    .attention-cell .top .more{
        width:0.37rem;
        height:0.37rem;
        font-size: 0.2rem;
        line-height: 0.37rem;
    }
    .attention-cell .p{
        font-size: 0.15rem;
        font-size: #000;
        padding: 0.1rem;
    }
    .attention-cell .center img{
        padding: 0 0.1rem;
        width:100%;
        height:1.45rem;
    }
    .attention-cell .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:0.36rem;
        padding:0 0.75rem;
        border-top: 1px solid #ccc;
        margin-top:0.29rem;
    }
    .attention-cell .bottom div{
        display: flex;
        align-items: center;
    }
    .attention-cell .bottom div .a{
        width:0.18rem;
        height:0.18rem;
        background-image: url(./img/awesome.png);
        background-size: 100%;
    }
    .attention-cell .bottom div .b{
        width:0.18rem;
        height:0.18rem;
        background-image: url(./img/comment.png);
        background-size: 100%;
    }
    .attention-cell .bottom div span{
        font-size: 0.08rem;
        color:#a4a4a4;
        padding-left:0.1rem;
    }
</style>