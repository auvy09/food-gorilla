import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';


const Catagory = () => {
    return (<div className="flex ">
        <h1 className="text-6xl font-semibold mt-5 mr-3">Category</h1>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide><img src={slide1} alt="" /> <h2 className=" text-4xl uppercase text-center -mt-14 text-white ">Salad</h2> </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /> <h2 className=" text-4xl uppercase text-center -mt-14 text-white ">Pizza</h2> </SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /> <h2 className=" text-4xl uppercase text-center -mt-14 text-white ">Soup</h2> </SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /> <h2 className=" text-4xl uppercase text-center -mt-14 text-white ">Desserts</h2> </SwiperSlide>
            <SwiperSlide><img src={slide5} alt="" /> <h2 className=" text-4xl uppercase text-center -mt-14 text-white ">Salad</h2> </SwiperSlide>

        </Swiper></div>
    );

};

export default Catagory;