import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Book from '../components/Book.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/books/:bookId',
        name: 'Book',
        component: Book
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/users',
        name: 'Register',
        component: Register

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router