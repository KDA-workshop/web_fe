import Loadable from 'react-loadable';

const Routes = [
    {
        path: '/',
        exact: true,
        meta: {
            title: 'Home'
        },
        component: Loadable({
            loader: () => import('Pages/Home'),
            loading: () => null
        })
    },
    {
        path: '/login',
        exact: true,
        meta: {
            title: 'Login'
        },
        component: Loadable({
            loader: () => import('Pages/Login'),
            loading: () => null
        })
    }
];

export default Routes;