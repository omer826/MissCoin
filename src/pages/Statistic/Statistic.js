import React, { Component } from 'react';
import BitcoinService from '../../services/BitcoinService.js'

import './Statistic.css';
import Chart from '../../components/Chart/Chart';


class Statistic extends Component {
    state = {
        chartData: {},
        charData2: {}
    };
    componentDidMount() {
        BitcoinService.getStatisticsData('https://api.blockchain.info/charts/market-price?timespan=5days&format=json&cors=true')
            .then(dataToChart => {
                this.setState({ chartData: dataToChart});
            })
            BitcoinService.getStatisticsData('https://api.blockchain.info/charts/avg-block-size?format=json&cors=true')
            .then(dataToChart2 => {
                this.setState({ charData2:dataToChart2 });
            })
            
    }
    dataChartFixed = () => {
        return this.state.chartData.map(item => {
            return {x:+item.x.toFixed(2),
            y:+item.y.toFixed(2)}
        })
    }
    render() {
        return (
            <div className="statistic-page">
                <Chart  data={this.state.chartData} data2={this.state.charData2} />
            </div>
        );
    }
}

export default Statistic;
