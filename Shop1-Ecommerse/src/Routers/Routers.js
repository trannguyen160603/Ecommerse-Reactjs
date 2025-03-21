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

    }
];

export default routers;
