
/*
    Drawer menu list (only visible on mobile & low-end resolution)
*/

import { ReactComponent as Home } from 'Assets/icon/home.svg';
import { ReactComponent as Login } from 'Assets/icon/login.svg';

const Menu = [
    {
        name: 'Home',
        icon: <Home />,
        path: '/'
    },
    {
        name: 'Login',
        icon: <Login />,
        path: '/login'
    },
    {
        name: 'Test',
        icon: <div />,
        path: '/test'
    }
];

export default Menu;