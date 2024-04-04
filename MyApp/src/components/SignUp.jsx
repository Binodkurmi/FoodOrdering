import React, { useState } from 'react';
import '../css/CSS/SignUp.css'; 
import { useNavigate } from 'react-router-dom';
import Sign from './Sign';

const SignUp = () => {
  const [login, setLogin] = useState(false);
	const navigate = useNavigate();
  if(login){
		navigate("/");
	}

  return (
    <div className="signUp-container1">
      <Sign setLogin={setLogin}/>
    </div>
  );
};

export default SignUp;
