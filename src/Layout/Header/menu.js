
/*
    Drawer menu list (only visible on mobile & low-end resolution)
*/

import { ReactComponent as Home } from 'Assets/Icons/home.svg';
import { ReactComponent as Login } from 'Assets/Icons/login.svg';

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