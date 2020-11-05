import './discount.scss';
import Anemos from 'Assets/Images/anemos.png';
import FlameLord from 'Assets/Images/flame_lord.png';
import CrimsonAvenger from 'Assets/Images/crimson_avenger.png';

const Discount = () => {
    return (
        <div className='discount-container'>
            <div className='discount-header'>
                <span>DISKON SERU</span>
            </div>
            <div className="discount-content">
                <div className="discount-event-countdown">
                    <h3>Berakhir Dalam</h3>
                </div>
                <div className="discount-item-wrapper">
                    <div className="discount-item">
                        <img src={Anemos} alt='discount-item' />
                        <div className="discount-item-info">
                            <span className='product-name'>Anemos Type-R Alterasia</span>
                            <span className="strike-through">Rp 775.000</span>
                            <div className="deal-price">
                                <span>Rp. 575.000</span>
                                <div className="discount-badge">-18%</div>
                            </div>
                            <div className="stock-wrapper">
                                <div className="stock-bar">
                                    <div className="stock-rest">
                                        <span>TERSISA</span>
                                        <div className="badge-rest">7/10</div>
                                    </div>
                                    <div className="stock-total-bar">
                                        <div className="stock-rest-bar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount;