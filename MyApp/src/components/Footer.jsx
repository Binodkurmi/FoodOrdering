import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import the arrow icons
 // Import your custom CSS for styling

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className='container-fluid Footer py-5'>
        <div className='container'>
          <div className="row gx-0 align-items-center">
            <div className="col-md-3">
              <img src={Logo} alt=""/>
            </div>
            {/* <div className="col-md-3 text-end">
              <a href="https://www.facebook.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://www.instagram.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" style={{ width: '30px', height: '30px', margin: '0 10px' }} />
              </a>
            </div>			 */}
          </div>
          <div className="Footer_row">					
           <div className="col text-center">
					 <h6 className="address text-items-center text-white">
					 <br/>
					Address: XYZcoloney -4566, India<br/>
					Email: Foodies@gmail.com</h6><br/>
            <p className="footer-color text-center">@ 2024 FoodOrdering | All rights reserved.
						</p>
           </div>
          </div>
        </div>
      </div>
      {showScroll && (
        <div className="scroll-arrow" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
      {!showScroll && (
        <div className="scroll-arrow" onClick={scrollToTop}>
          <FaArrowDown />
        </div>
      )}
    </>
  );
}

export default Footer;
