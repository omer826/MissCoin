
import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import { FlexibleWidthXYPlot, AreaSeries, LineMarkSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis';
import './Chart.css';
const Chart = ({ data, data2 }) => (

    <div className="chart-graf flex-column align-center justify-center">
        <div>
            <h4 className="h4">{data.name}</h4>
            <FlexibleWidthXYPlot height={200} >
                <YAxis />
                <HorizontalGridLines />
                <VerticalGridLines />
                <LineMarkSeries data={data.values} />
            </FlexibleWidthXYPlot>
            <h4 className="h4">{data.description}</h4>
   <hr/>
        <h4 className="h4">{data2.name}</h4>
            <FlexibleWidthXYPlot height={200} >
                <YAxis />
                <HorizontalGridLines />
                <VerticalGridLines />
                <AreaSeries data={data2.values} />
            </FlexibleWidthXYPlot>
            <h4 className="h4">{data2.description}</h4>
        </div>
    </div>
);

export default Chart;