import React from 'react';
import { Link } from 'react-router-dom';

import { Circle } from './Components/Circle.js';

import googleIcon from './google-icon.png';

export function PageLogin(props){
  return(
    <div>
      <div className="bigboye">
        Travex
        <div className="loginboye loginboye-extra">
          <Link to="/home">
            <img src={googleIcon} alt="google login"/>
            Login
          </Link>
        </div>
      </div>
      <Circle x="5%" y="25%" r="20vh" color="#8AF669"/>
      <Circle x="30%" y="26%" r="10vh" color="#E69E13"/>
      <Circle x="22%" y="45%" r="17vh" color="#DD1E49"/>
      <Circle x="6%" y="65%" r="25vh" color="#7BD3D5"/>
      <Circle x="35%" y="80%" r="7vh" color="#8AF669"/>

      <Circle x="80%" y="15%" r="18vh" color="#FBB6EC"/>
      <Circle x="65%" y="45%" r="15vh" color="#F1F881"/>
      <Circle x="90%" y="45%" r="7vh" color="#E69E13"/>
      <Circle x="83%" y="80%" r="16vh" color="#DD1E49"/>

    </div>
  );
}