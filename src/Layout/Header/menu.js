
/*
    Drawer menu list (only visible on mobile & low-end resolution)
*/

import { ReactComponent as Home } from 'Assets/Icons/For_Drawer/house.svg';
import { ReactComponent as Login } from 'Assets/Icons/For_Drawer/login.svg';
import { ReactComponent as Register } from 'Assets/Icons/For_Drawer/register.svg';
import { ReactComponent as Help } from 'Assets/Icons/For_Drawer/help.svg';

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
        name: 'Register',
        icon: <Register />,
        path: '/register'
    },
    {
        name: 'Bantuan',
        icon: <Help />,
        path: '/help'
    }
];

export default Menu;