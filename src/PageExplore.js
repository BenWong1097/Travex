import React from 'react';
import { Link } from 'react-router-dom';

import colorLogo from './travex_logo_color.svg';

export function PageExplore(props){
  return (
    <div className="body flex">
      <div className="col flex flex-c space-top">
        <div className="title-block">
          <p className="title-att">Nearby Experiences</p>
        </div>

        <div className="filter-list">
          <div>
            <span>Cart</span>
          </div>
          <div>
            <span className="filter-active">Concert</span>
          </div>
          <div>
            <span>Food</span>
          </div>
          <div>
            <span>Tour</span>
          </div>
          <div>
            <span>Etc</span>
          </div>
        </div>

        <div className="itinerary-list space-top-sm">
          <div className="flex itinerary-li no-padding">
            <div>
              <p className="grey">CONCERT</p>
              <p>Khalid</p>
            </div>
            <div>
              <p className="txt-sm">10/26 7PM</p>
              <p className="green">$80</p>
            </div>
          </div>

          <div className="flex itinerary-li no-padding">
            <div>
              <p className="grey">CONCERT</p>
              <p>Santana</p>
            </div>
            <div>
              <p className="txt-sm">10/26 9PM</p>
              <p className="green">$60</p>
            </div>
          </div>

          <div className="flex itinerary-li no-padding">
            <div>
              <p className="grey">CONCERT</p>
              <p>Ozzy Osbourne</p>
            </div>
            <div>
              <p className="txt-sm">10/27 8PM</p>
              <p className="green">$70</p>
            </div>
          </div>

          <div className="flex itinerary-li no-padding">
            <div>
              <p className="grey">CONCERT</p>
              <p className="">HONNE</p>
            </div>
            <div>
              <p className="txt-sm">10/27 7PM</p>
              <p className="green">$70</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col flex flex-c space-top">
        <img className="logo" src={ colorLogo } alt="travex logo"/>
        <Link to="/expense" className="m-auto space-top-2">
          <div className="pretty-btn">
            Set Trip
          </div>
        </Link>
      </div>
    </div>
  );
}