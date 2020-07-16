import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from './views/layout/index.vue'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: require('./views/dashboard/index.vue').default,
                meta: { title: 'Dashboard', icon: 'dashboard' }
            },
        ]
    },
    // {
    //     path: '/users',
    //     component: Layout,
    //     redirect: '/users/index',
    //     children: [
    //         {
    //             path: 'index',
    //             name: 'users.index',
    //             component: require('./views/user/index.vue').default,
    //             meta: { title: 'User Index', icon: 'dashboard' }
    //         },
    //     ]
    // },
    // {
    //     path: '/warehouse',
    //     component: Layout,
    //     redirect: '/warehouse/articles/index',
    //     children: [
    //         {
    //             path: 'articles',
    //             name: 'warehouse.articles',
    //             redirect: '/warehouse/articles/index'
    //         },
    //         {
    //             path: 'articles/index',
    //             name: 'warehouse.articles.index',
    //             component: require('./views/warehouse/article/index.vue').default,
    //             meta: { title: 'Warehouse Article Index', icon: 'dashboard' }
    //         },
    //         {
    //             path: 'articles/create',
    //             name: 'warehouse.articles.create',
    //             component: require('./views/warehouse/article/create.vue').default,
    //             meta: { title: 'Warehouse Article Create', icon: 'dashboard' }
    //         },
    //     ]
    // }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router