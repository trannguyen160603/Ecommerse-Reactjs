import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/Shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {   path: '/product/:id',
        component: lazy(() => import('@pages/DetailProduct'))
    },
    {
        path:'/cart',
        component: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/about-us',
        component: lazy(() => import ('@pages/AboutUs/AboutUs'))
    }
];

export default routers;
