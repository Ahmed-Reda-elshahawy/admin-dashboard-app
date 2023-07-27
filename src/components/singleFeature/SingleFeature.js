import React from 'react';
import './singleFeature.scss';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const SingleFeature = (props) => {

    return (
        <div className='single-feature'>
            <div className='info'>
                <div className='details'>
                    <div className='top-info'>
                        <img src={props.singleData.img} alt='' />
                        <h2>{props.singleData.title}</h2>
                        <button className='btn'>Update</button>
                    </div>
                    <div className='bottom-info'>
                        {Object.entries(props.singleData.info).map(itemInfo => (
                            <div className='detailed-info' key={itemInfo[0]}>
                                <span>{itemInfo[0]}:</span>
                                <span>{itemInfo[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='chart'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props.singleData.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey={props.singleData.chart.dataKeys[0].name} stroke={props.singleData.chart.dataKeys[0].color} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey={props.singleData.chart.dataKeys[1].name} stroke={props.singleData.chart.dataKeys[1].color} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='Activities'>
                <h2>Latest Activities</h2>
                <ul className='latest-activities'>
                    {
                        props.singleData.activities.map(activity => (
                            <li className='activity' key={activity.time}>
                                <p>{activity.text}</p>
                                <span>{activity.time}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SingleFeature;