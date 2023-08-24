import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Catagory from "./Catagory";
import PopularMenu from "./PopularMenu";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FoodGorilla | Home</title>

            </Helmet>
            <Banner />
            <Catagory />
            <PopularMenu />
            <Review />
        </div>
    );
};

export default Home;