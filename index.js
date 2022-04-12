import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../components/index'),
            name: '/index'
        },
        {
            path: '/login',
            component: () => import('../components/Login'),
            name: 'login'
        },
        {
            path: '/details',
            component: () => import('../components/Details'),
            name: '/details'
        },
        {
            path: '/head',
            component: () => import('../components/structure/head'),
            name: '/head'
        },
        {
            path: '/register',
            component: () => import('../components/register'),
            name: '/register'
        },
        {
            path: '/user',
            component: () => import('../components/User'),
            name: '/user'
        },
        {
            path: '/userinfo',
            component: () => import('../components/UserInfo'),
            name: '/userinfo'
        },
        {
            path: '/404',
            component: () => import('../components/structure/404'),
            name: '/404'
        }


    ]
})
// 路由导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/') return next()
//     const tokenStr = sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next();
// })

export default router