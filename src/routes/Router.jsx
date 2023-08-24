import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/login/Login";
import SignIn from "../Pages/login/SignIn";
import Cart from "../Pages/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems";
import AddItem from "../Pages/Dashboard/AddItem";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/cart',
                element: <PrivetRoute><Cart /></PrivetRoute>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart />
            },
            {
                path: 'allusers',
                element: <AllUsers />
            },
            {
                path: 'manageitem',
                element: <ManageItems />
            },
            {
                path: 'additem',
                element: <AddItem />
            },
        ]
    }
]);