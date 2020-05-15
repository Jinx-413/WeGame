<template>
    <div class="detail">
        <div class="header">
            <div @click="back">&lt;</div>
            <div>详情</div>
            <div>...</div>
        </div>
        <div class="top">
            <div class="top-left">
                <dl>
                    <dt>
                        <img src="./images/logo.png" alt="">
                    </dt>
                    <dd>
                        <h1>WeGame官方团队</h1>
                        <div class="dd-right">
                            <p>04-30</p>
                            <span>来自捣蛋大作战</span>
                        </div>
 
                    </dd>
                </dl>
            </div>
            <div class="top-right">已关注</div>
        </div>
        <div class="content">
            为执行《轻型汽车污染物排放限值及测量方法（中国第六阶段）》（GB 18352.6-2016）要求，落实近期稳定和扩大汽车消费政策。近日，工信部、生态环境部等四部门联合发布关于调整轻型汽车国六排放标准实施有关要求的公告。
        </div>
    </div>
    

</template>

<script>
    export default {
        name: 'Detail',
        methods:{
            back(){
                this.$router.back(-1);
            }
        }
    }
</script>
<style scoped>
    .detail{display: flex; flex-flow:column}
    .detail .header{display: flex; justify-content: space-between;align-items: center;height:0.6rem; padding:0 0.2rem;border-bottom:1px solid #ccc}
    .detail .top{display: flex;justify-content: space-between;align-items: center;height:1rem}
    .top{padding:0 0.2rem;}
    .top .top-left dl{display: flex;justify-content: space-between;align-items: center;}
    .top .top-left img{width:0.57rem;height:0.57rem;}
    .top .top-left h1{font-size: 0.13rem; color:#000;margin-bottom:0.1rem}
    .top .top-left .dd-right{display: flex;}
    .top .top-left .dd-right p{font-size: 0.12rem; color:#ccc;margin-right:0.2rem;}
    .top .top-left .dd-right span{font-size: 0.12rem; color:#ccc;}
    .top-right{font-size: 0.12rem; color: #ccc; border:1px solid #000; padding: 2px}
    .content{padding:0.2rem; text-indent: 0.4rem;line-height:0.3rem; font-size:0.15rem;}
</style>