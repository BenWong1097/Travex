import React from 'react';

import { Link } from 'react-router-dom';

import orbLogo from '../travex_logo_orb2.png';

export function Header(props){
  console.log('Login');
  console.log(props);
  const { match } = props;
  console.log(match);
  console.log(match.path);
  if (match.path !== '/'){
    return(
      <header>
        <div className="header flex">
          <div className="flex-grow">
            <Link to="/home">
              <span>Travex</span>
              <img className="logo" src={orbLogo} alt="travex logolet" />
            </Link>
          </div>
          <div>
            <Link to="/">Logout</Link>
          </div>
        </div>
      </header>
    );
  }
  return(
    <div></div>
  );
}