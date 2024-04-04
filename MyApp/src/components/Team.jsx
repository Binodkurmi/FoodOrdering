import img1 from "../assets/cheif1.png";
import img2 from "../assets/cheif2.png";
import img3 from "../assets/cheif3.png";
import img4 from "../assets/cheif4.png"
import { Link } from 'react-router-dom';

const Team = () => {
	return <>
       <div className="container fluid Team py-5 my-lg-3">
			 <div className="container">
				<div className="row gx-0">
				<div className="col-lg-10">
           <h1 className="main_heading">
              Meet Our<span> Chefs</span>
            </h1>
        </div>
				<div className="col-lg-2 text-end">
            <Link to="/AllTeam" className="btn1 fs-5">See All
						<i className="fa-solid fa-arrow-right ps-2"></i> 
							</Link>
                </div>
				<div className="col-lg-3" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in">
					<div className="team_col1 text-center">
						<img src={img1} alt=""/>
						<h4>ABC</h4>
					</div>
				</div>
				<div className="col-lg-3" data-aos="fade-down" data-aos-duration="1400" data-aos-easing="ease-in">
					<div className="team_col1 text-center">
					<img src={img2} alt=""/>
						<h4>XYZ</h4>
					</div>
				</div>
				<div className="col-lg-3" data-aos="fade-down" data-aos-duration="1700" data-aos-easing="ease-in">
					<div className="team_col1 text-center">
					<img src={img3} alt=""/>
						<h4>LMN</h4>
					</div>
				</div>
				<div className="col-lg-3" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in">
					<div className="team_col1 text-center">
					<img src={img4} alt=""/>
						<h4>XYZ</h4>
					</div>
				</div>
       </div>
			 </div>
			 </div>
			 
	</>
}

export default Team
