import React from 'react';
import { Link } from 'react-router-dom';

export function PageDone(){
  return (
    <div>
      <div className="bigboye">
        <span className="fade-in-bot">You're Set!</span>
        <div className="loginboye">
          <Link to="/home">
            Continue
          </Link>
        </div>
      </div>
      <svg version="1.1"
        baseProfile="full"
        width="100vw" height="89vh"
        xmlns="http://www.w3.org/2000/svg">

        <rect class="svg-air1 hinv" y="0vh" width="100%" height="100%" />
        <rect class="svg-air2 hinv" y="42vh" width="100%" height="100%" />
        <rect class="svg-air3 hinv" y="70vh" width="100%" height="100%" />
        <rect class="svg-water hinv bob" y="80vh" width="100%" height="100%" />

        <circle class="svg-sand" cx="0" cy="170vh" r="100vh"/>

        <circle class="svg-star flicker1" cx="5vw" cy="5vh" r=".5vh"/>
        <circle class="svg-star" cx="10vw" cy="30vh" r=".5vh"/>
        <circle class="svg-star flicker3" cx="24vw" cy="15vh" r="1vh"/>
        <circle class="svg-star flicker3" cx="30vw" cy="45vh" r=".25vh"/>
        <circle class="svg-star flicker1" cx="90vw" cy="25vh" r=".5vh"/>
        <circle class="svg-star" cx="50vw" cy="15vh" r=".5vh"/>
        <circle class="svg-star flicker3" cx="59vw" cy="20vh" r="1vh"/>
        <circle class="svg-star flicker1" cx="69vw" cy="50vh" r=".5vh"/>
        <circle class="svg-star flicker2" cx="80vw" cy="13vh" r="1vh"/>
        <circle class="svg-star flicker3" cx="85vw" cy="33vh" r=".5vh"/>
      </svg>
    </div>
  );
}