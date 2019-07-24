import React from 'react';
import { Link } from 'react-router-dom'

import colorLogo from './travex_logo_color2.png';

export function PageHome(props){
  return(
    <div className="body flex">
      <div className="col flex flex-c space-top">
        <img className="logo" src={colorLogo} alt="travex logo"/>
        <div className="desc">
          <p>Diego Marquez</p>
          <hr/>
          <p>Apple</p>
          <p>Consultant</p>
          <p>Employee: 13942</p>
        </div>
      </div>
      <div className="col flex flex-c">
        <p className="title">Trip</p>
        <Link to="/new-trip">
          <div className="pane pane-h">
            <span>New Trip</span>
          </div>
        </Link>
        <div className="pane pane-h">
          <span>Trip History</span>
        </div>
        <div className="pane pane-h">
          <span>Agent Booking</span>
        </div>
      </div>
      <div className="col flex flex-c">
        <p className="title">Expense</p>
        <div className="pane pane-h">
          <span>Create Report</span>
        </div>
        <div className="pane pane-h">
          <span>Report List</span>
        </div>
        <div className="pane pane-h">
          <span>Funds Dashboard</span>
        </div>
      </div>
    </div>
  );
}
