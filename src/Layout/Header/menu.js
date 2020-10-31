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
    }
];

export default Menu;