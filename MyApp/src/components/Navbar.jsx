import React from "react";
import { Link } from 'react-router-dom'; 
import logo from "../assets/logo.png";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../utils/firebase";

const Navbar = ({ user }) => {
  const auth = getAuth(app);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        alert("User LogOut Successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg Nav_main container-fluid">
      <div className="container gx-0 text-center">
        <Link to={'/'} className="navbar-brand"> 
          <img src={logo} alt="Logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse py-4 px-3 py-md-0 px-md-0" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center"> 
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/recipes"} className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/facility"} className="nav-link">
                Facility
              </Link>
            </li>             
            {user?.email && 
              <li className="nav-item">
                <Link to={"/orderList"} className="nav-link">
                  Order List
                </Link>
              </li>
            }             
          </ul>
          <div className="d-flex">
            {!user?.email && 
              <>
                <Link to="/SignUp" className="btn1 ms-lg-2">Sign Up</Link>
                <Link to="/login" className="btn1 ms-lg-2">Login</Link>
              </>
            }
            {user?.email && 
              <button onClick={handleLogOut} className="btn1 ms-lg-2">Log Out</button>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
