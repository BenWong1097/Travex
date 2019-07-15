import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Components/Header.js';
import { PageHome } from './PageHome.js';
import { PageNewTrip } from './PageNewTrip.js'
import { PageItinerary } from './PageItinerary';
import { PageExperiential } from './PageExperiential';
import { PageExplore } from './PageExplore';
import { PageExpense } from './PageExpense';
import { PageLogin } from './PageLogin';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/:page" component={ Header } />
        <Route exact path="/" component={ PageLogin } />
        <Route path="/home" component={ PageHome } />
        <Route path="/new-trip" component={ PageNewTrip } />
        <Route path="/itinerary" component={ PageItinerary } />
        <Route path="/experiential" component={ PageExperiential } />
        <Route path="/explore" component={ PageExplore } />
        <Route path="/expense" component={ PageExpense } />
      </BrowserRouter>
    </div>
  );
}

export default App;
