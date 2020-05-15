<template>
    <div class="conect-cell" @click="click">
        <div class="conect-left">
            <p class="top">{{content}}</p>
            <div class="bottom">
                <div class="bottom-left">
                    <span>{{a}}</span>
                    <span>{{b}}</span>
                </div>    
                <span class="i"></span>
            </div>
        </div>
        <img src="./img/default.jpg" alt="" class="conect-right">
    </div>
</template>

<script>
    export default {
        name:'conect-cell',
        methods:{
            click(){
                this.$router.push('/detail')
            }
        },
        props:['content', 'a', 'b']
    }
</script>
<style scoped>
    .conect-cell{
        display: flex;
        justify-content: space-between;
        padding:0.1rem 0;
        border-bottom: 1px solid #e2e2e2;
    }
    .conect-cell .conect-left{
        display: flex;
        flex-flow: column;
    }
    .conect-cell .conect-left .top{
        font-size:0.15rem;
        width:2.25rem;
    }
    .conect-cell .conect-left .bottom{
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    .conect-cell .conect-left .bottom span{
        font-size: 0.1rem;
        color: #8e8e8e;
    }
    .conect-cell .conect-left .bottom .bottom-left span:nth-child(1){
        margin-right:0.15rem;
    }
    .conect-cell .conect-left .bottom .i{
        width:0.15rem;
        height: 0.15rem;
        display: block;
        background-image: url(./img/del.png);
        background-size: 100%;
    }
    .conect-cell .conect-right{
        width:0.88rem;
        height:0.68rem;
    }
</style>