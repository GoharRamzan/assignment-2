import '../css/Slider.css'
import img from '../assets/bed image.webp'
import img2 from '../assets/lamp image.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";

import 'swiper/css'

function Slider() {
    return (
        <>
            <div className="slider-main">

                <Swiper
                    className='swiper'
                    autoplay={true}
                    loop={true}
                    pagination={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='swiper-slide'>
                        <div className='slider-inner-div'>
                            <div className='left-side'>
                                <h4>Luxurious Bed</h4>
                                <span>Discover unparalleled comfort with our Luxurious bed. Elegant design, plush comfort</span>
                                <h5>$ 299</h5>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "30%", height: "20%" }}>
                                    <span style={{ height: "25%", width: "20%", borderRadius: "100%", background: "red" }}></span>
                                    <span style={{ height: "25%", width: "20%", borderRadius: "100%", background: "green" }}></span>
                                    <span style={{ height: "25%", width: "20%", borderRadius: "100%", background: "yellow" }}></span>
                                </div>
                                <button style={{width:"40%",height:"13%",border:"none",borderRadius:"20px",background:"#023318",color:"white"}}>Buy Now <FaArrowRight/></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>


                </Swiper>



            </div>
        </>
    )
}
export default Slider;