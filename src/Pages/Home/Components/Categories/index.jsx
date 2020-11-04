import './categories.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Bottle } from 'Assets/Icons/For_Category/bottle.svg';
import { ReactComponent as Burger } from 'Assets/Icons/For_Category/burger.svg';
import { ReactComponent as Cake } from 'Assets/Icons/For_Category/cake.svg';
import { ReactComponent as Vegetables } from 'Assets/Icons/For_Category/vegetables.svg';
import { ReactComponent as Softdrink } from 'Assets/Icons/For_Category/softdrink.svg';
import { ReactComponent as Snack } from 'Assets/Icons/For_Category/snack.svg';
import { ReactComponent as Fruits } from 'Assets/Icons/For_Category/fruits.svg';
import { ReactComponent as More } from 'Assets/Icons/For_Category/more.svg';

const CategoriesRaw = [
    {
        name: 'Minuman',
        icon: <Bottle />
    },
    {
        name: 'Fast Food',
        icon: <Burger />
    },
    {
        name: 'Pesta',
        icon: <Cake />
    },
    {
        name: 'Bahan Pokok',
        icon: <Vegetables />
    },
    {
        name: 'Soft Drink',
        icon: <Softdrink />
    },
    {
        name: 'Snack',
        icon: <Snack />
    },
    {
        name: 'Buah-buahan',
        icon: <Fruits />
    }
];

const CategoriesItem = ({name, icon}) => {
    return(
        <div className='categories-item'>
            {icon}
            {name}
        </div>
    )
}

const Categories = () => {
    return(
        <div className='categories-container'>
            <div className='categories-header'>
                <span>KATEGORI</span>
                <Link>LIHAT SEMUA</Link>
            </div>
            <div className='categories-content'>
                {
                    CategoriesRaw.map((item, index) => (
                        <CategoriesItem key={index} {...item} />
                    ))
                }
                <div className='categories-item last-item'>
                    <More />
                    Lihat semua
                </div>
            </div>
        </div>
    )
}

export default Categories;