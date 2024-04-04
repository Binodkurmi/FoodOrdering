import React, { useState } from 'react';
import '../css/CSS/SignUp.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { app } from '../utils/firebase';

const Sign = ({setLogin}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
		const auth = getAuth(app);
		// axios.post('mongodb+srv://bkurmi504:binod008@cluster0.zuwobll.mongodb.net/foodOrdering',{name,email,password})
		// .then(result => console.log(result))
		// .catch(err=>console.log(err))

    // Basic validation
    if (!username.trim()) {
      setUsernameError('Please enter your username.');
    } else {
      setUsernameError('');
    }

    if (!email.trim()) {
      setEmailError('Please enter your email.');
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password.');
    } else {
      setPasswordError('');
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Please confirm your password.');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
    if (username.trim() && email.trim() && password.trim() && confirmPassword.trim() && password === confirmPassword) {
			console.log(email, password)
			createUserWithEmailAndPassword(auth, email, password)
  			.then((userCredential) => {
					const user = userCredential.user;
					if(user?.uid){
						alert("User SignUp successfully!");
						setLogin(true);
					}
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorMessage);
				});
    }
  };

  return (
    <div className="signUp-container1">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Welcome to SignUp page</h2>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <div className="label-input">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {usernameError && <div className="invalid-feedback">{usernameError}</div>}
                </div>
                <div className="form-group">
                  <div className="label-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={`form-control ${emailError ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="form-group">
                  <div className="label-input">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className="form-group">
                  <div className="label-input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                </div>
                <div className="form-group">
                  <button className="button-container1" type="submit">Sign Up</button>
                </div>
              </form>
              {/* <div className="icon-container mt-3 text-center">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-button">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="icon-button">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </div> */}
              <p className='Loginbtn text-center mt-3'>Already have an account?<Link to={"/login"}> Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
