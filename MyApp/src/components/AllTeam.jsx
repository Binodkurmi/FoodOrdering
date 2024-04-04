import React from 'react';
import '../css/allteam.css';

import cheif1 from "../assets/images/cheif1.png";
import cheif4 from "../assets/images/cheif4.png";
import cheif5 from "../assets/images/cheif5.png";
import cheif6 from "../assets/images/cheif6.png";
import cheif7 from "../assets/images/cheif7.png";

const AllTeam = () => {
    return (
        <div className="container-team" >
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ marginBottom: '20px' }}>
                <div className="row gx-0">
                    <div className="col-lg-10">
                        <h1 className="main_heading">
                            Meet Our<span> Chefs</span>
                        </h1>
												<p>A chef, the orchestrator of culinary masterpieces, wields a unique blend of creativity, precision, and passion in the kitchen. With expert knowledge of ingredients, techniques, and flavors, they transform the ordinary into the extraordinary, tantalizing taste buds and igniting gastronomic delight.</p>
                    </div>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
										<img src={cheif1} className="d-block" style={{ width: '100%', height: '90%' }} alt="Chief 3" />
                        <div className="carousel-caption d-none d-md-block">                           
                        </div><center>
												<h5>XYZ</h5>
                            <p>This includes inspecting pre-prepared items</p></center>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
										<img src={cheif4} className="d-block" style={{ width: '100%', height: '90%' }} alt="Chief 3" />
                        <div className="carousel-caption d-none d-md-block">
                        </div><center>
												<h5>ABC</h5>
                            <p>The chief cook supervises the behaviour of other kitchen staff</p></center>
                    </div>
                    <div className="carousel-item">
										<div style={{ width: '100%', height: '500px' }}>
                         <img src={cheif5} className="d-block" style={{ width: '100%', height: '90%' }} alt="Chief 3" />
                           <center> <h5>KLM</h5>
                            <p>The chief cook also reviews the quality of other tasks they delegate</p></center>
                        </div>
                    </div>
                    <div className="carousel-item">
										<img src={cheif6} className="d-block" style={{ width: '100%', height: '90%' }} alt="Chief 3" />
                        <div className="carousel-caption d-none d-md-block">                            
                        </div>
												<center>
												<h5>XYZ</h5>
                            <p>The chief cook supervises the behaviour of other kitchen staff</p>
												</center>
                    </div>
                    <div className="carousel-item">
										<div style={{ width: '100%', height: '500px' }}>
                         <img src={cheif7} className="d-block" style={{ width: '100%', height: '90%' }} alt="Chief 3" />
                           <center> <h5>IJKMN</h5>
                            <p>This includes inspecting pre-prepared items </p></center>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', zIndex: '100' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', zIndex: '100' }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
						
        </div>
				
    );
}

export default AllTeam;
