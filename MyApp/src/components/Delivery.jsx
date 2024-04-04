import img1 from "../assets/delivery1.png";
import img2 from "../assets/delivery2.png";
import img3 from "../assets/delivery3.png";

function Delivery() {
  return (
    <>
      <div className="container-fluid text-center">
        <h1 className="main_heading">
          Why <span>Foodie's</span>
        </h1>
        <div className="container py-4">
          <div className="row gx-0">
            <div className="col-lg-4" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="delivery_col1">
                <img src={img1} alt="" />
                <h3>Easy To Order</h3>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-out">
              <div className="delivery_col1">
                <img src={img2} alt="" />
                <h3>Fastest Delivery</h3>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
              <div className="delivery_col1">
                <img src={img3} alt="" />
                <h3>Best Quality</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
