import React, { useState } from 'react';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../utils/firebase';

const LoginPage = () => {
	const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
	const navigate = useNavigate();


  const handleLogin = () => {
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
    if (email.trim() && password.trim()) {
			signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				if(user?.uid){
					alert("User Login successfully!");
					navigate("/")
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage)
			});
    }
  };

	

  const handleFacebookLogin = () => {
    // Handle Facebook login
    console.log('Logging in with Facebook');
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Logging in with Google');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Welcome to login page</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}
        <div className="button-container">
          <button className='button-container' onClick={handleLogin}>Login</button>
        </div>
        
        <div className="newAccount-container">
          <Link to="/ForgotPassword">Forgot Password?</Link>
				<div className='signup1'>
				<Link to="/signup">Sign Up</Link>
      </div>
			</div>
			</div>
    </div>
  );
};

export default LoginPage;
