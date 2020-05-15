<template>
    <div class="more" @click="$emit('click')">
        发现更多感兴趣的人
    </div>
</template>

<script>
    export default {
        name:'more'
    }
</script>
<style scoped>
.more{
    height: 0.54rem;
    font-size: 0.16rem;
    line-height: 0.54rem;
    background-image: url(./img/go.png);
    background-repeat: no-repeat;
    background-size:0.75rem 0.32rem;
    background-position: right;
    margin: 0 0.2rem;
}
</style>