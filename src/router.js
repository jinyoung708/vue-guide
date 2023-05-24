import Vue from 'vue';
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    }
];

const router = new VueRouter({
    mode: 'history',  // URL '#'해시값 지우기 위해 설정
    routes   //  routes : routes 에서 routes : 생략
})

export default router;