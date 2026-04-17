import AppLayout from "@/components/Layout/AppLayout.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import type { RouteRecordRaw } from "vue-router";


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'Home Page',
                component: HomePage
            }
        ]
    },
    {
        path: '/aboutus',
        name: 'About',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'About Page',
                component: AboutPage
            }
        ]
    },
    {
        path: '/contactus',
        name: 'Contact',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'Contact Page',
                component: ContactPage
            }
        ]
    },
        {
        path: '/product/:id',
        name: 'Product Detail',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'Product Detail Page',
                component: ProductPage
            }
        ]
    }
]