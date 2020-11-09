import { useRef, useState } from 'react'
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
        image: Anemos,
        dealPrice: 'Rp 775.000',
        strikeThroughPrice: 'Rp 925.000',
        stockRest: 7,
        stockTotal: 10,
        discountValue: 18
    },
    {
        name: 'Flame Lord Type-F Blazing Figure',
        image: FlameLord,
        dealPrice: 'Rp 1.575.000',
        strikeThroughPrice: 'Rp 1.925.000',
        stockRest: 11,
        stockTotal: 20,
        discountValue: 9
    },
    {
        name: 'Crimson Avenger Type-Q Blood Boil',
        image: CrimsonAvenger,
        dealPrice: 'Rp 275.000',
        strikeThroughPrice: 'Rp 475.000',
        stockRest: 2,
        stockTotal: 15,
        discountValue: 45
    }
]

const TrippledCount = [...DiscountItemRaw, ...DiscountItemRaw, ...DiscountItemRaw]

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

    const [activeSlide, setActiveSlide] = useState(0)

    const isDesktop = useMediaQuery({ minWidth: 992 })
    const discountSlider = useRef()

    const CarouselSettingsDesktop = {
        lazyLoad: true,
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => setActiveSlide(current)
    }

    const CarouselSettingsMobile = Object.assign({}, CarouselSettingsDesktop, { slidesToShow: 2, slidesToScroll: 2 })
    const slideLength = TrippledCount.length
    
    const showNextArrow = isDesktop ? (
            Boolean((slideLength - CarouselSettingsDesktop.slidesToShow) - activeSlide)
        ) : (
            Boolean((slideLength - CarouselSettingsMobile.slidesToShow) - activeSlide)
        )
    const showPrevArrow = isDesktop ? (
            Boolean(0 + activeSlide)
        ) : (
            Boolean(0 + activeSlide)
        )
    return (
        <div className='discount-container'>
            <div className='discount-header'>
                <span>DISKON SERU</span>
            </div>
            <div className="discount-content">
                <div className="discount-info-wrapper">
                    <div className="discount-event-countdown">
                        <h3>Best Deal</h3>
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
                        <div className="discount-manual-slider">
                            {
                                showPrevArrow ? (
                                    <Chevron onClick={() => discountSlider.current.slick.slickPrev()} />
                                ) : (
                                    <div />
                                )
                            }
                            {
                                showNextArrow &&
                                <Chevron onClick={() => discountSlider.current.slick.slickNext()} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount;