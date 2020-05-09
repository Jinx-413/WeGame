<template>
    <div class="footer">
        <router-link to="/recommend" class="home aside" exact-active-class="home_active">
            <div></div><span>推荐</span>
        </router-link>
        <router-link to="/game" class="order aside" exact-active-class="order_active">
            <div></div><span>游戏</span>
        </router-link>
        <router-link to="/news" class="look aside" exact-active-class="look_active">
            <div></div><span>消息</span>
        </router-link>
        <router-link to="/mine" class="me aside" exact-active-class="me_active">
            <div></div><span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    .footer{width:100%;height:0.48rem;display:flex;background:rgba(255,255,255,0.9);justify-content:space-between;padding:0 0.35rem;position: fixed;bottom: 0;border-top:1px solid #ccc}
    .footer .aside{display:flex;flex-flow:column;justify-content:center;align-items:center;user-select: none;}
    .footer .aside span{font-size:0.08rem;color:#000;user-select: none;}
    .footer .home div{width: 0.25rem;height:0.25rem;background:url(../assets/img/recommend_normal.png); background-size:0.25rem;}
    .footer .order div{width: 0.25rem;height:0.25rem;background:url(../assets/img/game_normal.png); background-size:0.25rem;}
    .footer .look div{width: 0.25rem;height:0.25rem;background:url(../assets/img/massage_normal.png); background-size:0.25rem;}
    .footer .me div{width: 0.23rem;height:0.23rem;background:url(../assets/img/mine_normal.png); background-size:0.23rem;}

    .footer .home_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/recommend_active.png); background-size:0.25rem;}
    .footer .home_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .order_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/game_active.png); background-size:0.25rem;}
    .footer .order_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .look_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/massage_active.png); background-size:0.25rem;}
    .footer .look_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .me_active div{width: 0.23rem;height:0.23rem;background:url(../assets/img/mine_active.png); background-size:0.23rem;}
    .footer .me_active span{font-size:0.08rem;color:#f4ea2a;}
</style>