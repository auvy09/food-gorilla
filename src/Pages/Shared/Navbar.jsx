import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexProvider/AuthProvider";
import { PiBowlFoodBold } from 'react-icons/pi'
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e));
    }





    const handleNav = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order'>Order</Link></li>


        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost -mt-1 p-2">Log Out</button>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }


    </>
    return (
        <div className="navbar fixed z-10 max-w-screen-xl font-semibold bg-opacity-20  text-white bg-slate-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {handleNav}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">FoodGorilla</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {handleNav}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/dashboard/mycart' ><button className="btn btn-neutral btn-md">
                    <PiBowlFoodBold className="text-xl" />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button></Link>
            </div>
        </div>
    );
};

export default Navbar;