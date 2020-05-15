<template>
    <div class="r-attention">
        <more @click="go"/>
        <div class="cell">
            <attention-cell
                v-for="item in jinx" :key="item.id"
            />
        </div>
    </div>
</template>

<script>
    import More from '../../components/more'
    import AttentionCell from '../../components/attention-cell'     
    export default {
        name: 'RAttention',
        components: {
            More,AttentionCell
        },
        data(){
            return{
                jinx:[
                    {id: '0', num: '你好'},
                    {id: "1", num: '我是'},
                    {id: "2", num: '你的'},
                    {id: "3", num: '爸爸'},
                    {id: "4", num: '爸爸'},
                    {id: "5", num: '爸爸'},
                    {id: "6", num: '爸爸'},
                    {id: "7", num: '爸爸'},
                ]
            }
        },
        methods:{
            go(){
                alert('go')
            }
        }
    }
</script>
<style scoped>
    .r-attention{
        display: flex;
        flex-flow: column;
        flex:1;
        overflow: auto;
    }
    .r-attention .cell{
        background: #f5f7f6;
        margin-bottom:0.48rem;
    }
</style>