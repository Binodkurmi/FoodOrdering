import React from 'react';
import img1 from "../assets/about.png";

function About() {
    return (
        <div className="container-fluid py-5 my-2">
            <div className="container">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-6"> 
                        <div className="about_col1">
                            <img src={img1} alt="About_img" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6"> 
                        <div className="about_col2">
                            <h3>Overview</h3>
                            <h1>A Little Information For Our Guest</h1>
                            <p className='main_n'>
                                Our main courses feature a range of options to suit different tastes. We have steak, seafood, pasta dishes, vegetarian options, and more. Some popular choices include grilled salmon, filet mignon, chicken parmesan, and vegetable stir-fry.
                            </p>
                            <div className="counter py-6">
                                <div className="row">
                                    <div className="col-md-5 py-3 py-md-0">
                                        <h2>15K+</h2>
                                        <h5>Happy Customers</h5>
                                    </div>
                                    <div className="col-md-4 py-3 py-md-0">
                                        <h2>10K+</h2>
                                        <h5>Award Win</h5>
                                    </div>
                                    <div className="col-md-3 py-3 py-md-0">
                                        <h2>20K+</h2>
                                        <h5>Food Menu</h5>
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

export default About;
