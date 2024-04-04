import foodie from "../assets/foodie-home.png";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="container-fluid hero_main">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="hero_col1">
                <h1>Food that speaks to your soul.</h1>
                <p className="py-3">"Food embodies culture, creativity, and comfort, uniting flavors and textures to nourish both body and soul, fostering connections, celebrating diversity, and creating lasting memories."</p>
                <div className="hero_btns">
                  <Link to="/Recipes" className="btn1 fs-5 btn0 mx-2 mx-md-0">Get Started</Link>
                  <Link to ="/BookNow" className="btn1 mx-lg-4 fs-5 btn00">Ordernow</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="hero_col2">
                <img src={foodie} alt="imgerror" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
