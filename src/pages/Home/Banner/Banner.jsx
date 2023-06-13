import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useClasses from "../../../hooks/useClasses";
import './Banner.css'

const Banner = () => {
    const [classData] = useClasses();
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    classData.map(photo => <SwiperSlide key={photo._id}><img src={photo.classImage} alt="" /></SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Banner;