import React, { Component } from 'react';
import { TiCogOutline } from "react-icons/ti";
import { colors } from '../Commom/index';
import * as routes from '../routes';

export default class Header extends Component {

    path(){
        if(window.location.pathname === routes.FLINGH) return "Book Flights"
        if(window.location.pathname === routes.HOME) return "My Bookings"
        if(window.location.pathname === routes.STATUS) return "Flight Status"
        if(window.location.pathname === routes.TRAVEL) return "My Maps"
    }
    render() {
        return (
            <div className="col-12 text-center pt-2 header-style">
                <span className="pt-3 font-header">
                    {this.path()}
                </span>
                <div className="float-right ">
                    <TiCogOutline color={colors.white} />
                </div>
            </div>
        )
    }
}