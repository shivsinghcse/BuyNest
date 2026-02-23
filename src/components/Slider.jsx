
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, Keyboard, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import './styles.css'

const Slider = () => {
    const banners = ['/banners/Banner1.jpg', '/banners/Banner2.jpg', '/banners/Banner3.jpg', '/banners/Banner4.jpg']
    return (
        <>
            <Swiper
                keyboard={{
                    enabled: true,
                }}
                pagination={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                }}
                slidesPerView={1}
                loop={true}
                navigation={true}
                scrollbar={{
                    hide: false,
                }}
                modules={[Scrollbar, Navigation, Autoplay, Keyboard, Pagination]}
                className="mySwiper my-6"
            >

        {
            banners.map((banner, index) => {
                return(
                    <SwiperSlide key={index}>
                        <img src={banner} alt={banner} />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
        </>
    )
}

export default Slider