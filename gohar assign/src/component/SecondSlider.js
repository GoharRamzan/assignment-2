import '../css/Slider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";
import BedImage from '../assets/bed slider.png'
import SofaImage from '../assets/sofa slider.png'
import 'swiper/css'

function Slider() {
    return (
        <>
            <div className="slider-main">

                <Swiper
                    direction='horizontal'
                    className='swiper'
                    speed={3000}
                    modules={[Autoplay,Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                    loop={true}
                    pagination={{
                        clickable: true,
                      }}
                    spaceBetween={50}
                    slidesPerView={1}

                >
                    <SwiperSlide className='swiper-slide'>
                        <div className='slider-inner-div'>
                            <div className='left-side'>
                                <h4>Luxurious Bed</h4>
                                <span>Discover unparalleled comfort with our Luxurious bed. Elegant design, plush comfort</span>
                                <h5>$ 299</h5>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "30%", height: "20%" }}>
                                    <span style={{ height: "35%", width: "20%", borderRadius: "100%", background: "red" }}></span>
                                    <span style={{ height: "35%", width: "20%", borderRadius: "100%", background: "green" }}></span>
                                    <span style={{ height: "35%", width: "20%", borderRadius: "100%", background: "yellow" }}></span>
                                </div>
                                <button style={{ width: "40%", height: "13%", border: "none", borderRadius: "20px", background: "#023318", color: "white" }}>Buy Now <FaArrowRight /></button>
                            </div>
                            <div className='image-div'>
                                <img src={BedImage} style={{height:"100%",width:"100%"}} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>


                    
                    <SwiperSlide className='swiper-slide'>
                    <div className='slider-inner-div'>
                            <div className='left-side'>
                                <h4>Luxurious Sofa</h4>
                                <span>Discover unparalleled comfort with our Luxurious sofa. Elegant design, plush comfort</span>
                                <h5>$ 152</h5>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "30%", height: "20%" }}>
                                    <span style={{ height: "35%", width: "20%", borderRadius: "100%", background: "red" }}></span>
                                    <span style={{ height: "35%", width: "20%", borderRadius: "100%", background: "green" }}></span>
                                    <span style={{ height: "35%", width: "20%", borderRadius: "100%", background: "yellow" }}></span>
                                </div>
                                <button style={{ width: "40%", height: "13%", border: "none", borderRadius: "20px", background: "#023318", color: "white" }}>Buy Now <FaArrowRight /></button>
                            </div>
                            <div className='image-div'>
                                <img style={{height:"100%",width:"100%"}} src={SofaImage} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>



            </div>
        </>
    )
}
export default Slider;