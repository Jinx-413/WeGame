<template>
    <div class="recommend">
        <div class="header">
            <i class="sweep" @click="sweep"></i>
            <Search border=""/>
            <i class="gift" @click="gift"></i>
        </div>
        <div class="choose">
            <p @click="copmA" :class="avz">关注
                <span></span>
            </p>
            <p @click="copmR" :class="vzActive">推荐
                <span></span>
            </p>
            <p @click="copmL" :class="lvz">直播
                <span></span>
            </p>
            <p @click="copmC" :class="cvz">赛事
                <span></span>
            </p>
        </div>
        <keep-alive>
            <component :is="comp">

            </component>
        </keep-alive>
    </div>
</template>

<script>
    import Search from '../../components/search'
    import RAttention from '../RAttention'    
    import RLive from '../RLive'    
    import RRace from '../RRace'    
    import RRecommend from '../RRecommend'    
    export default {
        name: 'Recommend',
        components: {
            Search, RAttention, RLive, RRace, RRecommend
        },
        data(){
            return{
                comp: 'RRecommend',
                vzActive: 'vz-active',
                avz: 'vz',
                lvz: 'vz',
                cvz: 'vz'
            }
        },
        methods: {
            sweep(){
                alert('扫一扫')
            },
            gift(){
                alert('礼物')
            },
            copmA(){
                this.comp = 'RAttention';
                this.vzActive = 'vz';
                this.avz = 'vz-active';
                this.lvz = 'vz';
                this.cvz = 'vz';
            },
            copmR(){
                this.comp = 'RRecommend';
                this.vzActive = 'vz-active';
                this.avz = 'vz';
                this.lvz = 'vz';
                this.cvz = 'vz';
            },
            copmL(){
                this.comp = 'RLive';
                this.vzActive = 'vz';
                this.lvz = 'vz-active';
                this.avz = 'vz';
                this.cvz = 'vz';
            },
            copmC(){
                this.comp = 'RRace';
                this.vzActive = 'vz';
                this.cvz = 'vz-active';
                this.avz = 'vz';
                this.lvz = 'vz';
            },
        }
    }
</script>
<style scoped>
    .recommend{
        display: flex;
        flex-flow: column;
        height: 100%;
    }
    .recommend .header{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        height:0.43rem;
        align-items: center;
        background-color: #7d9be4;

    }
    .recommend .header .sweep, .recommend .header .gift{
        width:0.3rem;
        height:0.2rem;
        background-size:100% 100%;
        margin: 0 0.2rem;
    }
    .recommend .header .sweep{
        background-image: url(./img/sweep.png);
    }
    .recommend .header .gift{
        background-image: url(./img/gift.png);
    }
    .recommend .choose{
        display: flex;
        flex-flow: row;
        height:0.49rem;
        align-items: center;
        background: #7d9be4;
        padding-left:0.11rem;
    }
    .recommend .choose .vz{
        display: flex;
        flex-flow: column;
        font-size: 0.17rem;
        color: #fff;
        padding: 0.09rem;
        font-weight: bold;
        align-items: center;
    }
    .recommend .choose .vz span{
       width: 80%;
       height:2px;
       background:rgba(0,0,0,0);
    }

    .recommend .choose .vz-active{
        display: flex;
        flex-flow: column;
        font-size: 0.22rem;
        color: #fff;
        padding: 0.09rem;
        font-weight: bold;
        align-items: center;
    }
    .recommend .choose .vz-active span{
       width: 80%;
       height:2px;
       background:orange;
    }
</style>