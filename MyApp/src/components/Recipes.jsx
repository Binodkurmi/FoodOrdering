import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router

import img1 from "../assets/recipe1.png";
import img2 from "../assets/recipe2.png";
import img3 from "../assets/recipe3.png";

const recipeData = [
	{
		name: "Matar Kachori Peas Pastry",
		image: img1,
		price: 400,
		rating: 5,
		id: 1
	},
	{
		name: "Stuffed Portobello Mushrooms",
		image: img2,
		price: 350,
		rating: 4,
		id: 2
	},
	{
		name: "Creamy Garlic Pasta",
		image: img3,
		price: 200,
		rating: 5,
		id: 3
	}
];

function Recipes({user}) {
	const navigate = useNavigate();
	const email = user?.email;
	const handelOrderNow = () => {
		if(!email){
			navigate("/login");
		} else {
			navigate("/BookNow")
		}
	}

    return (
			<div className="container-fluid Recipes py-5 my-2">
      <div className="container">
        <div className="row pb-4 pb-md-0 align-items-center">
          <div className="col-lg-10 col-6">
            <h1 className="main_heading">
              <span>Trending</span> Recipes
            </h1>
          </div>
          <div className="col-lg-2 col-6 text-lg-center">
            <div className="link-container items-center text-center">
              <Link to="/NonVegPage" className="me-3">NonVeg</Link>
              <Link to="/VegPage"> Veg</Link>
            </div>
          </div>
        </div>
        <div className="row gx-0 ml-lg-5 align-items-end">
          {recipeData.map((recipe, index) => (
            <div key={index} className="col-lg-4">
              <img src={recipe.image} alt={`recipe-${index}`} className="img-fluid" />
              <div className="Recipes_col1">
                <h4>{`Rs. ${recipe.price}`}</h4>
                <h5>{recipe.name}</h5>
                <div className="recipe_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <div className="stars">
                        {Array.from({ length: recipe.rating }).map((_, index) => (
                          <i key={index} className="fa-regular fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <div className="col-7">
                      <button className="btn1" onClick={handelOrderNow}>Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default Recipes;
