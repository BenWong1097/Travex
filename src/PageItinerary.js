import React from 'react';
import { Link } from 'react-router-dom';

export function PageItinerary(props){
  return(
    <div className="body flex">
      {/* Itinerary Column */}
      <div className="col flex flex-c space-top">
        <div className="title-block">
          <p className="title-att">Here's your trip:</p>
          <Link to='/experiential' className="pretty-btn green-bg">
            <div>
              Set Trip
            </div>
          </Link>
        </div>
        
        <div className="itinerary-list">
          <div className="flex itinerary-li">
            <div>
              <p className="grey">FLIGHT</p>
              <p>DFW → LAS</p>
            </div>
            <div>
              <p className="txt-sm">10/26 11AM</p>
              <p className="green">$120</p>
            </div>
          </div>

          <div className="flex itinerary-li">
            <div>
              <p className="grey">RIDE</p>
              <p>LAS → Best...</p>
            </div>
            <div>
              <p className="txt-sm">&nbsp;</p>
              <p className="green">$30</p>
            </div>
          </div>

          <div className="flex itinerary-li">
            <div>
              <p className="grey">STAY</p>
              <p>Best Weste...</p>
            </div>
            <div>
              <p className="txt-sm">10/26 - 10/28</p>
              <p className="green">$170</p>
            </div>
          </div>

          <div className="flex itinerary-li">
            <div>
              <p className="grey">RIDE</p>
              <p>Best... → LAS</p>
            </div>
            <div>
              <p className="txt-sm">&nbsp;</p>
              <p className="green">$30</p>
            </div>
          </div>

          <div className="flex itinerary-li">
            <div>
              <p className="grey">FLIGHT</p>
              <p>LAS → DFW</p>
            </div>
            <div>
              <p className="txt-sm">10/28 9AM</p>
              <p className="green">$--</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lodging Options */}
      <div className="col flex flex-c space-top">
        <div className="title-block">
          <p className="title-att">Lodging Options:</p>
        </div>

        <div className="options-list">
          <div className="options-li">
            Best Western McCarran Inn
            <span className="options-li-b green-bg white">$$</span>
          </div>

          <div className="options-li">
            Holiday Inn Express Las Vegas - South
            <span className="options-li-b green-bg white">$$</span>
          </div>

          <div className="options-li">
            South Point Hotel
            <span className="options-li-b yellow-bg white">$$$</span>
          </div>

          <div className="options-li">
            Golden Nugget Las Vegas Hotel
            <span className="options-li-b yellow-bg white">$$$</span>
          </div>

          <div className="options-li">
            Mandalay Bay Resort and Casino
            <span className="options-li-b yellow-bg white">$$$</span>
          </div>
        </div>
      </div>
    </div>
  );
}