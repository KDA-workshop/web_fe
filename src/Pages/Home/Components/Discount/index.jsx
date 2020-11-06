import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import moment from 'moment'
import './discount.scss';
import { Carousel } from 'antd';
import Anemos from 'Assets/Images/anemos.png';
import FlameLord from 'Assets/Images/flame_lord.png';
import CrimsonAvenger from 'Assets/Images/crimson_avenger.png';
import { ReactComponent as Chevron } from 'Assets/Icons/chevron-no-bg.svg';

const DiscountItemRaw = [
    {
        name: 'Anemos Type-R Alterasia Nature Bloom',
        image: 'https://www.gadgetreview.com/wp-content/uploads/2020/05/Asus-Zephyrus-S-GX701-Review.jpg',
        dealPrice: 'Rp 775.000',
        strikeThroughPrice: 'Rp 925.000',
        stockRest: 7,
        stockTotal: 10,
        discountValue: 18
    },
    {
        name: 'Flame Lord Type-F Blazing Figure',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOPgjp9tuHX-Y2Rek5OXJk4VIHA8BHckrJbg&usqp=CAU',
        dealPrice: 'Rp 1.575.000',
        strikeThroughPrice: 'Rp 1.925.000',
        stockRest: 11,
        stockTotal: 20,
        discountValue: 9
    },
    {
        name: 'Crimson Avenger Type-Q Blood Boil',
        image: 'https://live.mrf.io/statics/i/ps/fscl01.fonpit.de/userfiles/7640001/image/best-high-end-smartphones/AndroidPIT-Best-High-End-Smartphones-Hero-1-w810h462.jpg',
        dealPrice: 'Rp 275.000',
        strikeThroughPrice: 'Rp 475.000',
        stockRest: 2,
        stockTotal: 15,
        discountValue: 45
    }
]

const TrippledCount = [...DiscountItemRaw, ...DiscountItemRaw, ...DiscountItemRaw]

const CarouselSettingsDesktop = {
    lazyLoad: true,
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5
}

const CarouselSettingsMobile = Object.assign({}, CarouselSettingsDesktop, { slidesToShow: 2 })

const progressFormula = (rest, total) => {
    const value = Number((rest / total).toFixed(2))
    return 100 - (value * 100)
}

const DiscountItem = ({ name, image, dealPrice, strikeThroughPrice, stockRest, stockTotal, discountValue }) => {
    return (
        <div className="discount-item">
            <img src={image} alt='discount-item' />
            <div className="discount-item-info">
                <span className='product-name'>{name}</span>
                <span className="strike-through">{strikeThroughPrice}</span>
                <div className="deal-price">
                    <span>{dealPrice}</span>
                    <div className="discount-badge">-{discountValue}%</div>
                </div>
                <div className="stock-wrapper">
                    <div className="stock-bar">
                        <div className="stock-rest">
                            <span>TERSISA</span>
                            <div className="badge-rest">{stockRest}/{stockTotal}</div>
                        </div>
                        <div className="stock-total-bar">
                            <div style={{ width: `${progressFormula(stockRest, stockTotal)}%` }} className="stock-rest-bar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Discount = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const discountSlider = useRef()
    return (
        <div className='discount-container'>
            <div className='discount-header'>
                <span>DISKON SERU</span>
            </div>
            <div className="discount-content">
                <div className="discount-event-countdown">
                    <span>Berakhir Dalam</span>
                    <div className="countdown-widget">
                        00:12:44
                    </div>
                </div>
                <div className="discount-item-wrapper">
                    {
                        isDesktop ? (
                            <Carousel ref={ref => discountSlider.current = ref} {...CarouselSettingsDesktop}>
                                {
                                    TrippledCount.map((item, index) => (
                                        <DiscountItem key={index} {...item} />
                                    ))
                                }
                            </Carousel>
                        ) : (
                            <Carousel ref={ref => discountSlider.current = ref} {...CarouselSettingsMobile}>
                                {
                                    TrippledCount.map((item, index) => (
                                        <DiscountItem key={index} {...item} />
                                    ))
                                }
                            </Carousel>
                        )
                    }
                </div>
                <div className="discount-manual-slider">
                    <Chevron onClick={() => discountSlider.current.slick.slickPrev()} />
                    <Chevron onClick={() => discountSlider.current.slick.slickNext()} />
                </div>
            </div>
        </div>
    )
}

export default Discount;