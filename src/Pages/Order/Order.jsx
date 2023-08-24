import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';

import OrderTab from './OrderTab';
import { Helmet } from 'react-helmet-async';
const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");

    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>FoodGorilla | Order</title>

            </Helmet>
            <Cover img={orderImg}
                title='Order Now!!!' />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel><OrderTab items={soup} /></TabPanel>
                <TabPanel><OrderTab items={pizza} /></TabPanel>
                <TabPanel><OrderTab items={dessert} /></TabPanel>
                <TabPanel><OrderTab items={drinks} /></TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;