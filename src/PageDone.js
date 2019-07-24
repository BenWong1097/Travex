import React from 'react';
import { Link } from 'react-router-dom';

export function PageDone(){
  return (
    <div>
      <div className="bigboye">
        You're Set!
        <div className="loginboye">
          <Link to="/home">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}