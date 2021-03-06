import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Book from '../components/Book.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Add from '../components/AddMemo.vue';
import Read from '../components/ReadMemo.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {requiresAuth: true}
    },
    {
        path: '/books/:bookId',
        name: 'Book',
        component: Book
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/register',
        name: 'Register',
        component: Register

    },
    {
        path: '/add',
        name: 'Add',
        component: Add,
        meta: {requiresAuth: true}
    },
    {
        path: '/memos/:memoId',
        name: 'Read',
        component: Read,
        meta: {requiresAuth: true}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if(localStorage.getItem('accessToken') == null) {
            alert('Signin please')
            next('/login');
        }
    }

    next();
});

export default router