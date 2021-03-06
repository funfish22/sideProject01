import React from 'react';

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: React.lazy(() => import(/*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/default/Home')),
        exact: true,
    },
    {
        name: '行事曆',
        path: '/Calendar',
        component: React.lazy(() =>
            import(/*webpackChunkName:"Calendar"*/ /*webpackMode:"lazy"*/ '@page/default/Calendar')
        ),
    },
    {
        name: 'Villagers',
        path: '/Villagers',
        component: React.lazy(() =>
            import(/*webpackChunkName:"Villagers"*/ /*webpackMode:"lazy"*/ '@page/default/Villagers')
        ),
    },
    {
        name: 'Page Not Found',
        path: '*',
        component: React.lazy(() =>
            import(/*webpackChunkName:"404"*/ /*webpackMode:"lazy"*/ '@page/default/PageNotFound')
        ),
    },
];
