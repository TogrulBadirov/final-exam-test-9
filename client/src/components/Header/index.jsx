import "./index.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  return (
    <section id="header">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
            alt=""
          />
          <h2>Get your <span>Education</span> today!</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
            alt=""
          />
          <h2>Get your <span>Education</span> today!</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Header;
