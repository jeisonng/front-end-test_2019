import React, { Component } from 'react';
import FlightCard from '../Componets/flightCard';
import axios from 'axios';
import moment from 'moment';

export default class Home extends Component {

    state = {
        upcommig: [],
        past: []
    }

    checkUpcommig(date) {
        return moment().valueOf() <= moment(date.inboundDate).valueOf()
    }

    checkPast(date) {
        return moment().valueOf() > moment(date.inboundDate).valueOf()
    }

    componentDidMount = async () => {
        try {
            const { data } = await axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
            this.setState({ upcommig: data.filter(this.checkUpcommig), past: data.filter(this.checkPast) })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { upcommig, past } = this.state
        return (
            <div style={{
                marginBottom: '100px',
                marginTop: 55
            }}>
                <div className="text-formater">
                    <span className="text">UPCOMING</span>
                </div>
                {
                    upcommig.filter(this.checkUpcommig).map(item => {
                        return <FlightCard flight={item} />
                    })
                }
                {upcommig.length <= 0 && <div className="text-formater">
                    <span className="text-not-data">SEM DADOS</span>
                </div>}
                <div className="text-formater">
                    <span className="text">PAST</span>
                </div>
                {
                    past.filter(this.checkPast).map(item => {
                        return <FlightCard flight={item} />
                    })
                }
                {past.length <= 0 && <div className="text-formater">
                    <span className="text-not-data">SEM DADOS</span>
                </div>}
            </div>
        )
    }
}