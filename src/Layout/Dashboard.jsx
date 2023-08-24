import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartArrowDown, FaWallet, FaCalendar, FaHome, FaList, FaClipboardList, FaUserAlt } from 'react-icons/fa';
import useCarts from '../hooks/useCarts';

const Dashboard = () => {
    const [cart] = useCarts();
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => {
                setUserData(data);
                console.log('Fetched user data:', data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    useEffect(() => {
        if (userData.length > 0) {
            const adminExists = userData.some(user => user.role ? user.role === "admin" : 'false');
            setIsAdmin(adminExists);
        }
    }, [userData]);
    // useEffect(() => {
    //     if (userData.length > 0) {
    //         const adminExists = userData.some(user => user.role === "admin" || !user.role);
    //         setIsAdmin(adminExists);

    //     }
    // }, [userData]);


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/*  content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-gold">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full gap-3 bg-base-300 text-base-content">

                    {isAdmin ?
                        <>
                            <li><NavLink to='/'><FaHome />Home</NavLink></li>

                            <li><NavLink to='/dashboard/additem'><FaWallet />Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitem'><FaWallet />Manage Items</NavLink></li>

                            <li><NavLink to='/dashboard/allusers'><FaUserAlt />Manage user</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaCartArrowDown />My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to='/'><FaHome />User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaCalendar />Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><FaWallet />Payment</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaCartArrowDown />My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
                        </>
                    }
                    <div className='divider'></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'><FaList />Menu</NavLink></li>
                    <li><NavLink to='/order'><FaClipboardList />Order</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
