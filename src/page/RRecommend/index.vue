<template>
    <div class="r-recommend">
        <div class="block-header">
            <div class="block-cell">
                <block-cell 
                v-for="item in jinx" :key="item.id"
                :src="item.src"
                :title="item.num"
                />
            </div>
            <div class="block-right">
                <block-cell margin="" src="/images/dd.png" title="我的组织"/>
            </div>
        </div>
        <div class="nav">
            <Nav/>
        </div>
        <div class="conect">
            <ConeclCell
                v-for="item in jinx1" :key="item.id" :content="item.content" :a="item.a" :b="item.b"
            />
        </div>   
    </div>
</template>

<script>
    import BlockCell from '../../components/block-cell'
    import ConeclCell from '../../components/conect-cell'    
    import Nav from '../../components/nav'    
    export default {
        name: 'RRecommend',
        components: {
            BlockCell, ConeclCell,Nav
        },
        data(){
            return{
                jinx:[
                    {id: '0', num: '英雄联盟', src: '/images/lol.jpg'},
                    {id: "1", num: '穿越火线', src: '/images/cf.jpg'},
                    {id: "2", num: 'QQ飞车', src: '/images/qq飞车.png'},
                    {id: "3", num: '天涯明月刀', src: '/images/ty.jpg'},
                    {id: '4', num: '英雄联盟', src: '/images/lol.jpg'},
                    {id: "5", num: '穿越火线', src: '/images/cf.jpg'},
                    {id: "6", num: 'QQ飞车', src: '/images/qq飞车.png'},
                    {id: "7", num: '天涯明月刀', src: '/images/ty.jpg'},
                ],
                jinx1:[
                    {id:1, content:'连斩两个世界冠军？LPL最新黑马ester太强了！上单动态诉苦', a:'电竞智多星', b: '26评论'},
                    {id:2, content:'10.6版本The Shy三大上分英雄 破败瑟提双百输出！', a:'暴龙电竞官方号', b: '3评论'},
                    {id:3, content: 'F1大奖赛改为线上电竞，中国车手拿到了世界冠军', a:'游研社', b: '3评论'},
                    {id:4, content:'连斩两个世界冠军？LPL最新黑马ester太强了！上单动态诉苦', a:'电竞智多星', b: '26评论'},
                    {id:5, content:'10.6版本The Shy三大上分英雄 破败瑟提双百输出！', a:'暴龙电竞官方号', b: '3评论'},
                    {id:6, content: 'F1大奖赛改为线上电竞，中国车手拿到了世界冠军', a:'游研社', b: '3评论'},
                    {id:7, content:'连斩两个世界冠军？LPL最新黑马ester太强了！上单动态诉苦', a:'电竞智多星', b: '26评论'},
                    {id:8, content:'10.6版本The Shy三大上分英雄 破败瑟提双百输出！', a:'暴龙电竞官方号', b: '3评论'},
                    {id:9, content: 'F1大奖赛改为线上电竞，中国车手拿到了世界冠军', a:'游研社', b: '3评论'},
                ]
            }
        }
    }
</script>
<style scoped>
    .r-recommend{
        display: flex;
        flex-flow: column;
        flex:1;
        overflow: auto;
    }
    .r-recommend .block-header{
        display: flex;
        flex-flow: row;
        height:1.05rem;
        padding: 0.15rem 0;
    }
    .r-recommend .block-header .block-cell{
        width:90%;
        flex: 1;
        overflow: auto;
        display: flex;
        flex-flow: row;
    }
    .r-recommend .block-header .block-right{
        padding: 0 0.1rem;
    }
    .r-recommend .nav{
        padding: 0.1rem 0.2rem;
        border-top: 2px solid #e2e2e2;
        border-bottom: 2px solid #e2e2e2;
    }
    .r-recommend .conect{
        padding: 0 0.2rem;
        margin-bottom: 0.48rem;
    }
</style>