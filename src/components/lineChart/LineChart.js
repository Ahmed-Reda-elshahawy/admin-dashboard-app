import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import './lineChart.scss';
import { Link } from 'react-router-dom';



const Linechart = (props) => {

    return (
        <div className='lineChart'>
            <div className='public-info'>
                <div className='title-info'>
                    <img src={props.chartData.icon} alt='icon' />
                    <h3>{props.chartData.title}</h3>
                </div>
                <span>{props.chartData.number}</span>
                <Link to='/' className='view-link' style={{ color: props.chartData.color }}>View All</Link>
            </div>
            <div className='chart-info'>
                <div className='chart'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={props.chartData.chartData}>
                            <Line type="monotone" dataKey={props.chartData.dataKey} stroke={props.chartData.color} strokeWidth={2} dot={false} />
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: -5, y: 65 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='percentage'>
                    <span style={{ color: (props.chartData.percentage < 0 ? "tomato" : "limegreen") }}>
                        {props.chartData.percentage}%
                    </span>
                    <span>this month</span>
                </div>
            </div>
        </div>
    );
};

export default Linechart;