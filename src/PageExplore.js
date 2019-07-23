import React from 'react';
import { Link } from 'react-router-dom';

import colorLogo from './travex_logo_color2.png';

import { ComponentFilterListContainer } from './Components/ComponentFilterListContainer.js';

export function PageExplore(props){
  return (
    <div className="body flex">
      <div className="col flex flex-c space-top">
        <div className="title-block">
          <p className="title-att">Nearby Experiences</p>
        </div>

        <ComponentFilterListContainer
          filterList={["Cart", "Concert", "Food", "Tour", "Theatre", "Etc"]} active={1}
          list={[
            {title: 'CONCERT', subtitle: 'Rodrigo Lampreia', time: '10/26 7PM', price: 30, filter:1},
            {title: 'CONCERT', subtitle: 'Melim', time: '10/26 9PM', price: 20, filter:1},
            {title: 'CONCERT', subtitle: 'Ludmilla', time: '10/27 8PM', price: 15, filter:1},
            {title: 'CONCERT', subtitle: 'Arthus Fochi', time: '10/27 7PM', price: 25, filter:1},
            {title: 'FOOD', subtitle: 'Pabu Izakaya', price: '$', filter:2},
            {title: 'FOOD', subtitle: 'Vizinho Gastrobar', price: '$', filter:2},
            {title: 'FOOD', subtitle: 'Chez Claude', price: '$', filter:2},
            {title: 'FOOD', subtitle: 'Bibi Sucos', price: '', filter:2},
            {title: 'TOUR', subtitle: 'Big Bus Tours', price: 20, filter:3},
            {title: 'TOUR', subtitle: 'Night Club Tour', price: 35, filter:3},
            {title: 'TOUR', subtitle: 'Seven Magic M...', price: 20, filter:3},
            {title: 'TOUR', subtitle: 'Scoot City Tours', price: 70, filter:3},
            {title: 'THEATRE', subtitle: 'Teatro Riachuelo', price: '$', filter:4},
            {title: 'THEATRE', subtitle: 'SESC Copacabana', price: '$', filter:4},
            {title: 'THEATRE', subtitle: 'Sala Cecilia Meireles', price: '$', filter:4},
            {title: 'THEATRE', subtitle: 'Maison de France Theater', price: '$$', filter:4},
            {title: 'FOOTBALL', subtitle: 'Corinthians X Flamengo', price: 25, filter:5},
            {title: 'PARTY', subtitle: 'Simp City', time: '10/26 10PM', price: 10, filter:5},
            {title: 'SHOW', subtitle: 'Murray the Mag...', time: '10/26 7PM', price: 30, filter:5},
            {title: 'FESTIVAL', subtitle: 'Food & Wine Fe...', time: '10/27 2PM', price: 25, filter:5},
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