import { Fragment, useRef } from "react";
import { Carousel, Button } from "antd";
import './carousel.scss';
import { ReactComponent as MarketList } from 'Assets/Illustrations/market_list.svg';
import { ReactComponent as EasyShopping } from 'Assets/Illustrations/easy_shopping.svg';
import { ReactComponent as VariantProduct } from 'Assets/Illustrations/variant_product.svg';
import { ReactComponent as Chevron } from 'Assets/Icons/chevron.svg';

const CarouselRaw = [
    {
        name: 'MARKET LIST',
        description: 'Disini kamu dapat melihat banyak toko yang menjual bermacam-macam produk yang mungkin sesuai dengan kriteria kamu.',
        illustration: <MarketList />,
        buttonText: 'CARI TOKO'
    },
    {
        name: 'VARIANT PRODUCT',
        description: 'Dengan pilihan produk yang beragam kamu memilih produk yang sesuai dengan spesifikasi kamu.',
        illustration: <VariantProduct />,
        buttonText: 'LIHAT PRODUK'
    },
    {
        name: 'EASY SHOPPING',
        description: 'Nikmati kemudahan dalam berbelanja dengan metode pembayaran cash on delivery (COD).',
        illustration: <EasyShopping />,
        buttonText: 'BELANJA SEKARANG'
    }
]

function CarouselItem({ name, description, illustration, buttonText }) {
    return (
        <div className='carousel-item'>
            <div className='carousel-item-info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <Button type='primary'>{buttonText}</Button>
            </div>
            {illustration}
        </div>
    )
}

function CarouselSlide() {
    const slider = useRef();

    return (
        <Fragment>
            <div className='carousel-fluid-background'>
                <div className='carousel-container'>
                    <Carousel ref={ref => {slider.current = ref}} autoplay dots={false}>
                        {
                            CarouselRaw.map((item, index) => (
                                <CarouselItem key={index} {...item} />
                            ))
                        }
                    </Carousel>
                    <div className='carousel-manual-slide'>
                        <Chevron onClick={() => slider.current.slick.slickPrev()} />
                        <Chevron onClick={() => slider.current.slick.slickNext()} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CarouselSlide;


// {
//     [1, 2, 3, 4, 5].map((x, i) => {
//         <div className='carousel-item'>
//             <h3>Hi {i + 1}</h3>
//         </div>
//     })
// }
