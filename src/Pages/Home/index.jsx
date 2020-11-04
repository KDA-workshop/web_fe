import { Fragment } from 'react';
import { Input } from 'antd';
import './home.scss';
import Carousel from './Components/Carousel';

const Home = () => {
    return (
        <Fragment>
            <Carousel />
            <div style={{ height: 1000 }} />
        </Fragment>
    )
}

export default Home;