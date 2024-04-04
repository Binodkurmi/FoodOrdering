import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/recipe1.png";
import img2 from "../assets/recipe2.png";
import img3 from "../assets/recipe3.png";
import food2 from "../assets/images/food2.png";
import food1 from "../assets/images/food1.png";
import food3 from "../assets/images/food3.png";
import food4 from "../assets/images/food4.png";
import food5 from "../assets/images/food5.png";
import food11 from "../assets/images/food11.png";

function Recipes() {
    return (
        <div className="container-fluid Recipes py-5 my-2">
            <div className="container">
                <div className="row pb-4 pb-md-0 align-items-center">
                    <div className="col-lg-10 col-6">
                        <h1 className="main_heading">
                            <span>Veg</span> Recipes
                        </h1>
                    </div>
                </div>
                <div className="row gx-0 ml-lg-5 align-items-end">
                    <div className="col-lg-4">
                        <img src={img1} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 400</h4>
                            <h5>Matar Kachori Peas Pastry</h5>
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
                    <div className="col-lg-4">
                        <img src={img2} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 350</h4>
                            <h5>Stuffed Portobello Mushrooms</h5>
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
                    <div className="col-lg-4">
                        <img src={food2} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 65</h4>
                            <h5>tablespoons vegetable oil</h5>
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
                    <div className="col-lg-4">
                        <img src={food11} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 400</h4>
                            <h5>cloves garlic, minced</h5>
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
                    <div className="col-lg-4">
                        <img src={food1} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 200</h4>
                            <h5>cup broccoli florets</h5>
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
                    <div className="col-lg-4">
                        <img src={food3} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 100</h4>
                            <h5>cloves garlic, minced</h5>
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
                    <div className="col-lg-4">
                        <img src={food4} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 150</h4>
                            <h5>Salt and pepper to taste</h5>
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
                    <div className="col-lg-4">
                        <img src={food5} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 350</h4>
                            <h5>Chopped parsley for garnish (optional)</h5>
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
                    <div className="col-lg-4">
                        <img src={img3} alt="imgerror" className="img-fluid" />
                        <div className="Recipes_col1">
                            <h4>Rs. 200</h4>
                            <h5>Creamy Garlic Pasta</h5>
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
