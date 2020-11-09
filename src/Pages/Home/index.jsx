import { Fragment } from 'react';
import './home.scss';
import Carousel from './Components/Carousel';
import Categories from './Components/Categories';
import Discount from './Components/Discount';
import Popular from './Components/Popular'

const Home = () => {
    return (
        <Fragment>
            <Carousel />
            <Categories />
            <Discount />
            <Popular />
            <div style={{ height: 1000 }} />
        </Fragment>
    )
}

export default Home;