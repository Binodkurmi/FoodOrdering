import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import"swiper/css/free-mode";
import"swiper/css/pagination";

import {FreeMode, Pagination} from "swiper/modules";
// import { FreeMode, Pagination } from "swiper";

// import img1 from "../assets/collection1.png";
// import img2 from "../assets/collection2.png";
// import img3 from "../assets/collection3.png";

const Testimonial = () => {
  return (
    <>
        <div className="container-fluid Testimonial py-5">
        <h1 className="main_heading text-center">
          What's our<span> Client Say</span>
        </h1>
        {/* <p className="text-center Main-p">All our Meals in one delicious snap</p> */}
        <div className="container py-md-5 my-lg-5 Testimonial2">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
								<div className="col-md-5">
									<div className="test_col1">
									<img src="https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" className="img-fluid"/>
									</div>
								</div>
								<div className="col-md-7">
									<div className="test_col2">
									<h3>ABC</h3>
									<p>
									Chefs exhibit creativity in recipe development and dish presentation, often experimenting with flavors, textures, and visual aesthetics.
									</p>
									<span className="badge rounded-pill text-bg-secondary">
										Student
									</span>
									</div>
								</div>
							</div>
            </SwiperSlide>
						<SwiperSlide>
              <div className="row">
								<div className="col-md-5">
									<div className="test_col1">
									<img src="https://media.istockphoto.com/id/1438437093/photo/young-adult-woman-in-studio-shots-making-facial-expressions-and-using-fingers-and-hands.jpg?s=612x612&w=0&k=20&c=dLMqlllzmEyWRCTFNcQhsEyi4Xth6e5yJhcAel3PsXg=" className="img-fluid"/>
									</div>
								</div>
								<div className="col-md-7">
									<div className="test_col2">
									<h3>XYZ</h3>
									<p>
									Chefs troubleshoot issues that arise in the kitchen, such as equipment malfunctions, ingredient shortages, or staffing challenges, with quick and effective solutions.
									</p>
									<span className="badge rounded-pill text-bg-secondary">
										Student
									</span>
									</div>
								</div>
							</div>
            </SwiperSlide>
						<SwiperSlide>
              <div className="row">
								<div className="col-md-5">
									<div className="test_col1">
									<img src="https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=612x612&w=0&k=20&c=mtC9fv2OKeoGR4eAxSgm3Laukw7EBYYbHVRrO5D88PY=" className="img-fluid"/>
									</div>
								</div>
								<div className="col-md-7">
									<div className="test_col2">
									<h3>LMN</h3>
									<p>
									Effective communication is vital in the kitchen, where chefs delegate tasks, provide feedback, and coordinate with front-of-house staff to deliver a seamless dining experience.
									</p>
									<span className="badge rounded-pill text-bg-secondary">
										Empolyee
									</span>
									</div>
								</div>
							</div>
            </SwiperSlide>
						<SwiperSlide>
              <div className="row">
								<div className="col-md-5">
									<div className="test_col1">
									<img src="https://media.istockphoto.com/id/1415879078/photo/beautiful-positive-african-american-curly-haired-young-woman-wearing-casual-stylish-clothes.jpg?s=612x612&w=0&k=20&c=g6xv3vKA0ae6OO3Ph-o2aHKGjJA6uVmIUz9vR6YIC_k=" className="img-fluid"/>
									</div>
								</div>
								<div className="col-md-7">
									<div className="test_col2">
									<h3>IJK</h3>
									<p>
									Chefs uphold strict standards of cleanliness, sanitation, and food safety to prevent contamination and ensure the well-being of customers and staff.
									</p>
									<span className="badge rounded-pill text-bg-secondary">
										Manager
									</span>
									</div>
								</div>
							</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
