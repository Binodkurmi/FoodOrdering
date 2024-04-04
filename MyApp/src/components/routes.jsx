import { Routes, createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import Delivery from "./delivery";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import NonVegPage from "./NonVegPage";
import VegPage from "./VegPage";
import AllTeam from "./AllTeam";  
import BookNow from "./BookProduct";
import OrderList from "./OrderList";
import ForgotPassword from "./ForgotPassword";

const router = createBrowserRouter([
	{
		path:"",
		element:<App/>,
		children:[
			{
				path:"/",
				element:<Home/>,
			}, 
			{
				path:"/home",
				element:<Home/>,
			},
			{
				path:"/recipes",
				element:<Recipes/>,
			},
			{
				path:"/about",
				element:<About/>,
			},
			{
				path:"/facility",
				element:<Delivery/>,
			}
		]
	},
	{
		path:"/AllTeam",
		element:<AllTeam/>
	},
	{
		path:"/login",
		element:<LoginPage/>,
	},
	{
		path:"/signup",
		element:<SignUp/>,
	},
	{
		path:"/VegPage",
		element:<VegPage/>,
	},
	{
		path:"/NonVegPage",
		element:<NonVegPage/>,
	},
	{
		path:"/BookNow",
		element:<BookNow/>,
	},
	{
		path:"/orderList",
		element:<OrderList/>,
	},
	{
		path:"/ForgotPassword",
		element:<ForgotPassword/>,
	}
]);

export default router;
