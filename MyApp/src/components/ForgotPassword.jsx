import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../utils/firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSent(true);
        setError(null);
      })
      .catch((error) => {
        setEmailSent(false);
        setError(error.message);
      });
  };

  return (
    <div className="forgot-password-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Forgot Password</h2>
              {emailSent ? (
                <div className="alert alert-success" role="alert">
                  Password reset email sent. Check your email inbox for further instructions.
                </div>
              ) : (
                <>
                  <form onSubmit={handleResetPassword}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
																						
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
										<button className="btn btn-primary btn-block" type="submit" style={{ backgroundColor: '#F54748', border: 'none' }}>Reset Password</button>

                  </form>
                  <div className="text-center mt-3">
                      <Link to="/login" style={{ textDecoration: 'none' }}>Back to Login</Link>
                     </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
