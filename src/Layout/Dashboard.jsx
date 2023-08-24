
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartArrowDown, FaWallet, FaCalendar, FaHome, FaList, FaClipboardList, FaUtensils, FaUserAlt, FaBook } from 'react-icons/fa';
import useCarts from '../hooks/useCarts';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    const [cart] = useCarts();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/*  content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full gap-3 bg-base-300 text-base-content">

                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaUtensils />Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers' ><FaUserAlt></FaUserAlt> Manage user</NavLink></li>

                        </> : <>
                            <li><NavLink><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink><FaCalendar />Reservations</NavLink></li>
                            <li><NavLink><FaWallet></FaWallet>Payment</NavLink></li>
                            <li><NavLink to='/dashboard/mycart' ><FaCartArrowDown></FaCartArrowDown>My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>

                        </>
                    }


                    <div className='divider'></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><FaList />Menu</NavLink></li>
                    <li><NavLink to='/order'><FaClipboardList></FaClipboardList>Order</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;