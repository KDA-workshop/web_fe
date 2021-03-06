import React, { useState, useEffect } from 'react';
import './style.scss';
import { Drawer } from 'antd';
import { Menu, AdditionalMenu } from './menu';
import { ReactComponent as BurgerMenu } from 'Assets/Icons/menu_header.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();
    const [showDrawer, setShowDrawer] = useState(false);

    const _toggleDrawer = () => setShowDrawer(prevShowDrawer => !prevShowDrawer);

    useEffect(() => {
        setShowDrawer(false);
    }, [history.location.pathname])

    return (
        <div className='main-header'>
            <div className='content-area'>
                <div className='left-navigation'>
                    <Link to='/'>
                        <span>App Name</span>
                    </Link>
                </div>
                <div className='right-navigation'>
                    <button type='button'>
                        Search
                    </button>
                    <Link>
                        <span>Bantuan</span>
                    </Link>
                    <Link>
                        <span>Register</span>
                    </Link>
                    <Link to='/login'>
                        <span>Login</span>
                    </Link>
                </div>
            </div>
            <Drawer
                title='Drawer Title'
                placement='left'
                closable={false}
                onClose={_toggleDrawer}
                visible={showDrawer}
            >
                {
                    Menu.map((menu, index) => (
                        <Link key={index} to={menu.path}>
                            <div className='menu-list'>
                                {menu.icon}
                                {menu.name}
                            </div>
                        </Link>
                    ))
                }
                <div className='drawer-submenu'>
                    <div style={{ height: '1rem' }} />
                    {
                        AdditionalMenu.map((menu, index) => (
                            <Link key={index} to={menu.path}>
                                <div className='menu-list'>
                                    {menu.icon}
                                    {menu.name}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </Drawer>
            <BurgerMenu onClick={_toggleDrawer} />
        </div>
    )
}

export default Header;