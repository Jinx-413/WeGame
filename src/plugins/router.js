import Vue from 'vue'
import VueRouter from 'vue-router'//引入vue-router

Vue.use(VueRouter);

let routes = [
    {path: '/recommend', component: () => import('../page/Recommend')},
    {path: '/game', component: () => import('../page/Game'),
    children:[
        { path: 'GameMobile', component: ()=>import('../page/GameMobile') },
        { path: 'GamePC', component: ()=>import('../page/GamePC')},
        { path: '/', component: ()=>import('../page/GameRecommend')},
        { path: 'GameRecommend', component: ()=>import('../page/GameRecommend')}
        ]
    },
    {path: '/news', component: () => import('../page/News')},
    {path: '/mine', component: () => import('../page/Mine')},
    {path: '/detail', component: () => import('../page/Detail')},
    {path:'/', redirect: '/recommend'},
    {path:'*', component: () => import('../page/NoPage')}
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass:"active"
})

export default router;