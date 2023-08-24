import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    const location = useLocation();
    const handleNoNavNoFoot = location.pathname.includes('login') || location.pathname.includes('signin');
    return (
        <div>
            {handleNoNavNoFoot || <Navbar></Navbar>}
            <Outlet></Outlet>
            {handleNoNavNoFoot || <Footer />}
        </div>
    );
};

export default Main;