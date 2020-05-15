<template>
    <dl class="block" :style="margin">
        <img :src="src" alt="">
        <dd>{{title}}</dd>
    </dl>
</template>

<script>
    export default {
        name: 'block-cell',
        props: {
            margin: {
                type: String,
                default: 'margin-left:0.19rem'
            },
            src: {
                type: String,
            },
            title: {
                type: String
            }
        }
    }
</script>
<style scoped>
    .block{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
    }
    .block img{
        width:0.6rem;
        height:0.6rem;
        border-radius: 10px;
    }
    .block dd{
        font-size: 0.1rem;
        color: #616161;
    }
</style>