import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";


const MenuCategory = ({ item, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg}
                title={title} />}
            <div className="grid md:grid-cols-2 gap-5 mb-20">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to='/order'> <button className="btn btn-outline border-1 border-b-4 mb-4 mt-4" >Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;