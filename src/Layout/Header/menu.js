
/*
    Drawer menu list (only visible on mobile & low-end resolution)
*/

import { ReactComponent as Home } from 'Assets/Icons/For_Drawer/house.svg';
import { ReactComponent as Login } from 'Assets/Icons/For_Drawer/login.svg';
import { ReactComponent as Register } from 'Assets/Icons/For_Drawer/register.svg';
import { ReactComponent as Help } from 'Assets/Icons/For_Drawer/help.svg';
import { ReactComponent as TermsCondition } from 'Assets/Icons/For_Drawer/terms-and-conditions.svg';
import { ReactComponent as PrivacyPolicy } from 'Assets/Icons/For_Drawer/privacy-policy.svg';

export const Menu = [
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

export const AdditionalMenu = [
    {
        name: 'Kebijakan Privasi',
        icon: <PrivacyPolicy />,
        path: '/privacy-policy'
    },
    {
        name: 'Aturan Penggunaan',
        icon: <TermsCondition />,
        path: '/terms-condition'
    }
];