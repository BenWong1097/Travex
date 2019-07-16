import React from 'react';
import { Link } from 'react-router-dom';

import colorLogo from './travex_logo_color2.png';

import { ComponentFilterListContainer } from './Components/ComponentFilterListContainer.js';

export function PageExpense(){
  return (
    <div className="body flex">
    <div className="col flex flex-c space-top">
        <div className="title-block">
          <p className="title-att">Expense Manager</p>
        </div>

        <ComponentFilterListContainer
          filterList={["Company ($700)", "Company (10%, limit $50)",
          "Self"]} active={1}
          title="Pay Personal via:"/>

        <div className="expense-list">
          <div className="flex expense-li no-padding no-border">
            <div className="clmn-5"></div>
            <div className="clmn-5"></div>
            <div className="clmn-5 primary">Company</div>
            <div className="clmn-5"></div>
            <div className="clmn-5 primary">Personal</div>
          </div>
          <div className="flex expense-li no-padding expense-personal">
            <div className="clmn-5">
              <p className="green">$30</p>  
            </div>
            <div className="clmn-5"><p>Rodrigo Lampreia</p></div>
            <div className="clmn-5"><p>10/26</p></div>
            <div className="clmn-5"><p>7PM</p></div>
            <div className="clmn-5"><p>x1</p></div>
          </div>

          <div className="flex expense-li no-padding expense-personal">
            <div className="clmn-5">
              <p className="green">$25</p>  
            </div>
            <div className="clmn-5"><p>Arthus Fochi</p></div>
            <div className="clmn-5"><p>10/27</p></div>
            <div className="clmn-5"><p>7PM</p></div>
            <div className="clmn-5"><p>x1</p></div>
          </div>

          <div className="flex expense-li no-padding expense-company">
            <div className="clmn-5">
              <p className="green">$120</p>  
            </div>
            <div className="clmn-5"><p>FLIGHT</p></div>
            <div className="clmn-5"><p></p></div>
            <div className="clmn-5"><p></p></div>
            <div className="clmn-5"><p></p></div>
          </div>

          <div className="flex expense-li no-padding expense-company">
            <div className="clmn-5">
              <p className="green">$170</p>  
            </div>
            <div className="clmn-5"><p>STAY</p></div>
            <div className="clmn-5"><p></p></div>
            <div className="clmn-5"><p></p></div>
            <div className="clmn-5" ><p></p></div>
          </div>
        </div>
      </div>

      <div className="col flex flex-c space-top">
        <img className="logo" src={ colorLogo } alt="travex logo"/>
        <Link to="/home" className="m-autoc space-top-2">
          <div className="pretty-btn">
            Set Trip
          </div>
        </Link>
      </div>
    </div>
  );
}