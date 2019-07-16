import React from 'react';
import { Link } from 'react-router-dom';

import colorLogo from './travex_logo_color2.png';

export function PageNewTrip(props){
  return(
    <div className="body flex space-top">
      <div className="col flex flex-c">
        <div className="flex form-box">
          <div className="pane pane-sm">
            <span>Origin</span>
          </div>
          <div className="input-container flex flex-ce">
            <form>
              <label>
                {/* <input type="text" name="origin" placeholder="Airport (e.g. DFW)"/> */}
                <input type="text" name="origin" placeholder="DFW"/>
              </label>
            </form>
          </div>
        </div>
        <div className="flex form-box">
          <div className="pane pane-sm">
            <span>Destination</span>
          </div>
          <div className="input-container flex flex-ce">
            <form>
              <label>
                {/* <input type="text" name="origin" placeholder="Airport (e.g. DFW)"/> */}
                <input type="text" name="origin" placeholder="GIG"/>
              </label>
            </form>
          </div>
        </div>
        <div className="flex form-box">
          <div className="pane pane-sm">
            <span>Arrival</span>
          </div>
          <div className="input-container flex flex-ce">
            <form>
              <label>
                {/* <input type="text" name="origin" placeholder="DD/MM/YY"/> */}
                <input type="text" name="origin" placeholder="26/10/2019"/>
              </label>
            </form>
          </div>
        </div>
        <div className="flex form-box">
          <div className="pane pane-sm">
            <span>Departure</span>
          </div>
          <div className="input-container flex flex-ce">
            <form>
              <label>
                {/* <input type="text" name="origin" placeholder="DD/MM/YY"/> */}
                <input type="text" name="origin" placeholder="28/10/2019"/>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="col flex flex-c space-top">
        <img className="logo" src={ colorLogo } alt="travex logo"/>
        <Link to="/itinerary" className="m-autoc space-top-2">
          <div className="pretty-btn">
            Set Trip
          </div>
        </Link>
      </div>
    </div>
  )
}