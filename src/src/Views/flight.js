import React, { Component } from 'react';
const icon = require('../Assets/guilty.svg')


export default class Flight extends Component {


    render() {
        return (
            <div>
                <div className="div-image">
                    <img alt="icon" src={icon} />
                </div>
                <div className="text-formater text-center">
                    <span className="text-not-data">EM CONTRUÇÃO</span>
                </div>
            </div>
        )
    }
}