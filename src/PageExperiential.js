import React from 'react';
import { Link } from 'react-router-dom';

import colorLogo from './travex_logo_color2.png';

export function PageExperiential(props){
    return (
        <div className="body flex">
            <div className="col flex flex-c space-top">
                <div className="title-block">
                    <p className="title-att">Experience Rio de Janeiro</p>
                </div>

                <div className="itinerary-list">
                    <div className="flex itinerary-li no-padding">
                        <div>
                            <p className="grey">CONCERT</p>
                            <p>Rodrigo Lampreia</p>
                        </div>
                        <div>
                            <p className="txt-sm">10/26 7PM</p>
                            <p className="green">$30</p>
                        </div>
                    </div>

                    <div className="flex itinerary-li no-padding">
                        <div>
                            <p className="grey">FOOD</p>
                            <p>Vizinho Gastrobar</p>
                        </div>
                        <div>
                            <p className="txt-sm">10/27 ~6PM</p>
                            <p className="green">$$</p>
                        </div>
                    </div>

                    <div className="flex itinerary-li no-padding">
                        <div>
                            <p className="grey">CONCERT</p>
                            <p>Arthus Fochi</p>
                        </div>
                        <div>
                            <p className="txt-sm">10/27 8PM</p>
                            <p className="green">$25</p>
                        </div>
                    </div>

                    <div className="flex itinerary-li no-padding">
                        <div>
                            <p className="grey">FOOD</p>
                            <p className="">Pabu Izakaya</p>
                        </div>
                        <div>
                            <p className="txt-sm">10/28 ~12PM</p>
                            <p className="green">$$</p>
                        </div>
                    </div>
                </div>

                <Link to="/explore" className="m-autoc space-top-2">
                    <div className="pretty-btn">
                        Explore +
                    </div>
                </Link>
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