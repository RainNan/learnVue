import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import DemoView from "@/views/DemoView.vue";
import Error404View from "@/views/Error404View.vue";

Vue.use(VueRouter)

// 配置路由表
const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path:'/demo',
        component:DemoView
    },
    {
        path:'/404',
        component : Error404View
    },
    {
        path: '*',
        redirect: '/404'
    }
]

// 创建路由实例
const router = new VueRouter({
    routes
})

// 将定义好的 router 实例导出
export default router


