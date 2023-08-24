import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }
        , [])
    return (
        <section className='my-20'>
            <div className="text-center mb-5"> <h3 className='text-4xl'>Reviews</h3></div>
            <div className=" mb-4">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(rev => <SwiperSlide
                            key={rev._id}
                        >
                            <div className='my-20 mx-24 flex flex-col items-center'>
                                <Rating style={{ maxWidth: 180 }}
                                    value={rev.rating}
                                    readOnly />
                                <p className='text-slate-300 py-7'>{rev.details}</p>
                                <h3 className="text-2xl">{rev.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Review;