import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import item1 from '../assets/bethemestore2-slider-pic1.webp'
import item2 from '../assets/bethemestore2-slider-pic2.png'

const Items = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="item-box1">
                        <div className="item-text1">
                            <div className="ojb">
                                <p>OJBDECLUTTER</p>
                            </div>
                            <div className="ojb-txt">
                                <h1>Declutter|Buy|Resale</h1>
                            </div>
                            <div className="ojb-faq">
                                <p>Want to buy anything?</p>
                                <p>Want to declutter/sell anything?</p>
                            </div>
                            <button>Buy Items Now</button>
                        </div>
                        <div className="item-img1">
                            <img src={item1} alt="" className="item-image"/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="ojb-slide2">
                        <div className="ojbtxt2">
                            <p>Declutter/Sell Anything</p>
                        </div>
                        <div className="ojb-head">
                            <h1>ojb</h1>
                            <img src={item2} alt="" className="ojb-image"/>
                            <p>declutter</p>
                        </div>
                        <div className="ojb-sell">
                            <button>Declutter/Sell Anything Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="ojb-slide3">
                        <div className="ojbslide">
                            <div className="ojbtxt3">
                                <h1>ojbdeclutter</h1>
                            </div>
                            <div className="ojb-new">
                                <h1>a new decluttering experience </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
export default Items
