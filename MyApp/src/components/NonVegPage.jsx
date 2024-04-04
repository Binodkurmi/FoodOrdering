import React from "react";
import { Link } from 'react-router-dom';
import food12 from "../assets/images/food12.png";
import food13 from "../assets/images/food13.png";
import food14 from "../assets/images/food14.png";
import food15 from "../assets/images/food15.png";
import food16 from "../assets/images/food16.png";
import food17 from "../assets/images/food17.png";
import food18 from "../assets/images/food18.png";
import food8 from "../assets/images/food8.png";
import food9 from "../assets/images/food9.png";
import food10 from "../assets/images/food10.png";

function Recipes() {
  return (
    <div className="container-fluid Recipes py-5 my-2">
      <div className="container">
        <div className="row pb-4 pb-md-0 align-items-center">
          <div className="col-lg-10 col-6">
            <h1 className="main_heading">
              <span>Non-Veg </span> Recipes
            </h1>
          </div>
        </div>
        <div className="row gx-0 ml-lg-5 align-items-end">
          {/* Recipe 1 */}
          <div className="col-lg-4">
            <img src={food12} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 400</h4>
              <h5>Chicken Tikka Masala</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 2 */}
          <div className="col-lg-4">
            <img src={food13} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 350</h4>
              <h5>Butter Chicken</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 3 */}
          <div className="col-lg-4">
            <img src={food14} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 300</h4>
              <h5>Chicken Biryani</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 4 */}
          <div className="col-lg-4">
            <img src={food15} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 200</h4>
              <h5>Chicken Curry</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 5 */}
          <div className="col-lg-4">
            <img src={food16} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 250</h4>
              <h5>Chicken Fried Rice</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 6 */}
          <div className="col-lg-4">
            <img src={food17} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 150</h4>
              <h5>Chicken Noodles</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 7 */}
          <div className="col-lg-4">
            <img src={food18} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 300</h4>
              <h5>Chicken Shawarma</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recipe 8 */}
          <div className="col-lg-4">
            <img src={food8} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 350</h4>
              <h5>Chicken Lasagna</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recipe 9 */}
          <div className="col-lg-4">
            <img src={food10} alt="imgerror" className="img-fluid" />
            <div className="Recipes_col1">
              <h4>Rs. 400</h4>
              <h5>Chicken Parmesan</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <Link to="/BookNow" className="btn1">Order now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
