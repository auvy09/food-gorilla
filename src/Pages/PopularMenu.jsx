import { useEffect, useState } from "react";
import MenuItem from "./Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                setMenu(popularMenu)
            })
    }, [])
    return (
        <section>
            <div className="text-center mb-5"> <h3 className='text-4xl'>Popular Items</h3></div>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;