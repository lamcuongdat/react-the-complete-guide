import './Chart.css'
import ChartBar from '../ChartBar/ChartBar';

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value}
                                                     key={dataPoint.label}
                                                     maxValue={totalMaximum}
                                                     label={dataPoint.label}/>)}
    </div>
}

export default Chart;