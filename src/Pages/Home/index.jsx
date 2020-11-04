import { Fragment } from 'react';
import './home.scss';
import Carousel from './Components/Carousel';
import Categories from './Components/Categories';

const Home = () => {
    return (
        <Fragment>
            <Carousel />
            <Categories />
            <div style={{ height: 1000 }} />
        </Fragment>
    )
}

export default Home;