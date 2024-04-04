import React, { useState } from 'react';
import "../css/booknow.css"; // Import the CSS file
import logo from "../assets/logo.png"; // Import the logo image file
import { useForm } from "react-hook-form"
const BookProduct = () => {
	const {
    register,
    handleSubmit,
    formState: { errors },
		reset
  } = useForm()

	const onSubmit = (data) =>{ 
		const orderData = data;
		postOrder(orderData);
	}
	async function postOrder(orderData) {
		try {
			const response = await fetch('http://localhost:4000/productorder', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(orderData)
			});
	
			const res = await response.json();
			console.log("res order", res)
			if (res.success) {
				alert("Order placed successfully")
				reset();
			} else {
				console.error("Failed to place order:", res.message);
			}
		} catch (error) {
			console.error("Error posting order:", error);
		}
	}

    return (
        <div className="form_container">
            <img src={logo} alt="Logo" className="logo" /> {/* Include the logo */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <input type="text" className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
                </div>
                <div className="form_group">
                    <input type="text" className="form-control" placeholder="Phone Number" {...register("phone", { required: true })} />
                </div>
                <div className="form_group">
                    <input type="text" className="form-control" placeholder="Product Name" {...register("productName", { required: true })} />
                </div>
                <div className="form_group">
                    <input
                        type="text"
												{...register("address", { required: true })}
                        className="form-control"
                        placeholder="Address"
                        required // Make address field mandatory
                    />
                </div>
                <div className="form_group">
                    <input
                        type="number"
												{...register("quantity", { required: true })}
                        className="form-control"
                        placeholder="Quantity"
                        required // Make quantity field mandatory
                    />
                </div>
                <div className="form_group">
                    <textarea className="form-control" {...register("comments", { required: true })} placeholder="Additional Comments"></textarea>
                </div>
                <div className="btn_box">
                    <button type="submit">
                        Order Now
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookProduct;
