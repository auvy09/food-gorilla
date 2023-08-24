import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../PopularMenu';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>FoodGorilla | Menu</title>

            </Helmet>

            <Cover img={menuImg}
                title='Our Menu' />

            <div className="text-center mt-10 mb-10"> <h3 className='text-4xl uppercase'>Todays offer</h3></div>
            <MenuCategory item={offered} />



            {/* dessert */}
            <div className="text-center mt-10 mb-10"> <h3 className='text-4xl uppercase'>Desserts</h3></div>
            <MenuCategory item={dessert} />

            {/* pizza */}
            <div className="text-center mt-10 mb-10"> <h3 className='text-4xl uppercase'>pizza</h3></div>
            <MenuCategory item={pizza} />

            {/* soup */}
            <div className="text-center mt-10 mb-10"> <h3 className='text-4xl uppercase'>soup</h3></div>
            <MenuCategory item={soup} />

            {/* salad */}
            <div className="text-center mt-10 mb-10"> <h3 className='text-4xl uppercase'>salad</h3></div>
            <MenuCategory item={salad} />

        </div>
    );
};

export default Menu;