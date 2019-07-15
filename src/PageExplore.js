import React from 'react';
import { Link } from 'react-router-dom';

import colorLogo from './travex_logo_color.svg';

import { ComponentFilterListContainer } from './Components/ComponentFilterListContainer.js';

export function PageExplore(props){
  return (
    <div className="body flex">
      <div className="col flex flex-c space-top">
        <div className="title-block">
          <p className="title-att">Nearby Experiences</p>
        </div>

        <ComponentFilterListContainer
          filterList={["Cart", "Concert", "Food", "Tour", "Etc"]} active={1}
          list={[
            {title: 'CONCERT', subtitle: 'Khalid', time: '10/26 7PM', price: 80, filter:1},
            {title: 'CONCERT', subtitle: 'Santana', time: '10/26 9PM', price: 60, filter:1},
            {title: 'CONCERT', subtitle: 'Ozzy Osbourne', time: '10/27 8PM', price: 70, filter:1},
            {title: 'CONCERT', subtitle: 'HONNE', time: '10/27 7PM', price: 70, filter:1},
            {title: 'FOOD', subtitle: 'Other mama', price: '$', filter:2},
            {title: 'FOOD', subtitle: 'Aburiya Raku', price: '$$', filter:2},
            {title: 'FOOD', subtitle: 'Carson Kitchen', price: '$', filter:2},
            {title: 'FOOD', subtitle: 'The Egg & I', price: '', filter:2},
            {title: 'TOUR', subtitle: 'Big Bus Tours', price: 45, filter:3},
            {title: 'TOUR', subtitle: 'Night Club Tour', price: 79, filter:3},
            {title: 'TOUR', subtitle: 'Seven Magic M...', price: 35, filter:3},
            {title: 'TOUR', subtitle: 'Scoot City Tours', price: 250, filter:3},
            {title: 'FESTIVAL', subtitle: 'Life is Beaut...', time: '10/27 2PM', price: 50, filter:4},
            {title: 'PARTY', subtitle: 'Simp City', time: '10/26 10PM', price: 10, filter:4},
            {title: 'SHOW', subtitle: 'Murray the Mag...', time: '10/26 7PM', price: 30, filter:4},
            {title: 'FESTIVAL', subtitle: 'Food & Wine Fe...', time: '10/27 2PM', price: 50, filter:4},
          ]}/>
      </div>

      <div className="col flex flex-c space-top">
        <img className="logo" src={ colorLogo } alt="travex logo"/>
        <Link to="/expense" className="m-autoc space-top-2">
          <div className="pretty-btn">
            Set Trip
          </div>
        </Link>
      </div>
    </div>
  );
}