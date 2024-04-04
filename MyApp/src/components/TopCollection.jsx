import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/collection1.png";
import img2 from "../assets/collection2.png";
import img3 from "../assets/foofie1.png";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const TopCollections = () => {
  return (
    <>
      <div className="container-fluid TopCollections py-5">
        <h1 className="main_heading text-center">
          Top<span> Collections</span>
        </h1>
        <p className="text-center main_p"> All our meals in one delicious snap</p>
        <div className="container py-md-5 collections1"></div>
        {/* *********** */}
        <div className="container py-md-5 collections2">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true} // Fixed typo here
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwipper"
          >
            <div className="container">
              <SwiperSlide>
                <img src={img1} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="TopCollections" className="img-fluid" />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopCollections;
